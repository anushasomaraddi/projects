import { __decorate } from "tslib";
import { Component } from '@angular/core';
let UploadquizComponent = class UploadquizComponent {
    constructor(teacherService, router) {
        this.teacherService = teacherService;
        this.router = router;
        this.msg = [];
        this.loading = true;
    }
    ngOnInit() {
        this.loading = true;
        this.empty = false;
        this.getdata();
    }
    getdata() {
        this.teacherService.getuploadquiz()
            .subscribe(data => {
            if (data['quiz']) {
                this.loading = false;
                this.quiz = data['quiz'];
                if (!this.quiz.length) {
                    this.empty = true;
                }
                else {
                    this.empty = false;
                }
            }
            // console.log(data);
            // this.router.navigate(['/teacher/teacherhome']);
        }, error => {
            this.router.navigate(['/error']);
        });
    }
    add(quiz) {
        this.teacherService.setQuizId(quiz._id);
        this.router.navigate(['/teacher/addquestion']);
    }
    upload(quiz) {
        // console.log("upload");
        // console.log(quiz);
        // console.log(quiz._id);
        this.teacherService.uploadquiz(quiz._id)
            .subscribe(data => {
            // this.quiz = data['quiz']
            // console.log(data);
            if (data['msg']) {
                this.msg = data['msg'];
                this.avail = true;
                return;
            }
            if (data['message']) {
                this.router.navigate(['/teacher/teacherhome']);
            }
            else {
                this.msg = "something went wrong!!";
                this.avail = true;
                return;
            }
        }, error => {
            this.router.navigate(['/error']);
        });
    }
    delete(quiz) {
        this.teacherService.deletequiz(quiz._id)
            .subscribe(data => {
            // console.log(data);
            this.router.navigate(['/teacher/teacherhome']);
        }, error => {
            this.router.navigate(['/error']);
        });
    }
    viewQuestion(q) {
        this.teacherService.setQuizId(q._id);
        this.teacherService.setDelete(q.upload);
        this.router.navigate(['/teacher/seequestion']);
    }
};
UploadquizComponent = __decorate([
    Component({
        selector: 'app-uploadquiz',
        templateUrl: './uploadquiz.component.html',
        styleUrls: ['./uploadquiz.component.css']
    })
], UploadquizComponent);
export { UploadquizComponent };
//# sourceMappingURL=uploadquiz.component.js.map