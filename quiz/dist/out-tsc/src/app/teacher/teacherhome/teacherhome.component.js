import { __decorate } from "tslib";
import { Component } from '@angular/core';
let TeacherhomeComponent = class TeacherhomeComponent {
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
        this.teacherService.gethomequiz()
            .subscribe(data => {
            if (data['quiz']) {
                this.quiz = data['quiz'];
                this.loading = false;
                // console.log(this.quiz.length);
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
    viewQuestion(q) {
        this.teacherService.setQuizId(q._id);
        this.teacherService.setDelete(q.upload);
        this.router.navigate(['/teacher/seequestion']);
    }
    delete(quiz) {
        this.teacherService.deletequiz(quiz._id)
            .subscribe(data => {
            // console.log(data);
            this.getdata();
            // this.router.navigate(['/teacher/teacherhome']);
        }, error => {
            this.router.navigate(['/error']);
        });
    }
};
TeacherhomeComponent = __decorate([
    Component({
        selector: 'app-teacherhome',
        templateUrl: './teacherhome.component.html',
        styleUrls: ['./teacherhome.component.css']
    })
], TeacherhomeComponent);
export { TeacherhomeComponent };
//# sourceMappingURL=teacherhome.component.js.map