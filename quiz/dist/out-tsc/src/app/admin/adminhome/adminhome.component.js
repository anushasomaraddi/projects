import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AdminhomeComponent = class AdminhomeComponent {
    constructor(adminService, router) {
        this.adminService = adminService;
        this.router = router;
        this.loading = true;
        this.empty = true;
    }
    ngOnInit() {
        this.loading = true;
        this.empty = true;
        this.getdata();
    }
    getdata() {
        this.adminService.getAllQuiz()
            .subscribe(data => {
            if (data['quiz']) {
                this.loading = false;
                this.allquiz = data['quiz'];
                if (!this.allquiz.length) {
                    this.empty = true;
                }
                else {
                    this.empty = false;
                }
            }
        }, error => {
            // console.error(error);
            this.router.navigate(['/error']);
        });
    }
    viewQuestion(q) {
        this.adminService.setQuizId(q._id);
        this.adminService.setDelete(q.upload);
        this.router.navigate(['/admin/seequestion']);
    }
    delete(quiz) {
        this.adminService.deletequiz(quiz._id)
            .subscribe(data => {
            // console.log(data);
            this.getdata();
            // this.router.navigate(['/teacher/teacherhome']);
        }, error => {
            this.router.navigate(['/error']);
        });
    }
};
AdminhomeComponent = __decorate([
    Component({
        selector: 'app-adminhome',
        templateUrl: './adminhome.component.html',
        styleUrls: ['./adminhome.component.css']
    })
], AdminhomeComponent);
export { AdminhomeComponent };
//# sourceMappingURL=adminhome.component.js.map