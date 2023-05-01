import { __decorate } from "tslib";
import { Component } from '@angular/core';
let SeequestionComponent = class SeequestionComponent {
    // authSubscription: Subscription;
    constructor(teacherService, router, route) {
        this.teacherService = teacherService;
        this.router = router;
        this.route = route;
        this.empty = true;
    }
    ngOnInit() {
        this.load = true;
        this.empty = true;
        if (this.teacherService.getQuizId() == undefined) {
            this.router.navigate(['/teacher/teacherhome']);
        }
        else {
            if (this.teacherService.getDelete() == undefined) {
                this.router.navigate(['/teacher/teacherhome']);
            }
            else {
                this.del = this.teacherService.getDelete();
                this.quizid = this.teacherService.getQuizId();
                // console.log(this.del);
                this.getAllQuestions(this.quizid);
            }
        }
        // this.authSubscription = this.route.queryParams.subscribe(
        //   (params: Params) => {
        //     console.log("heyy");
        //     console.log(params);
        //   });
    }
    delete(one) {
        this.teacherService.deleteQuestion(one._id)
            .subscribe(data => {
            // console.log(data);
            this.getAllQuestions(this.quizid);
        }, error => {
            this.router.navigate(['/error']);
        });
    }
    getAllQuestions(quizid) {
        // console.log("hahaha");
        // console.log(quizid);
        this.teacherService.getAllQuestion(quizid)
            .subscribe(data => {
            if (data['msg']) {
                this.allQuestions = data['msg'];
                this.load = false;
                if (!this.allQuestions.length) {
                    this.empty = true;
                }
                else {
                    this.empty = false;
                }
            }
            // this.one =  this.allQuestions[0]
            // console.log(this.allQuestions);
        }, error => {
            this.router.navigate(['/error']);
        });
    }
};
SeequestionComponent = __decorate([
    Component({
        selector: 'app-seequestion',
        templateUrl: './seequestion.component.html',
        styleUrls: ['./seequestion.component.css']
    })
], SeequestionComponent);
export { SeequestionComponent };
//# sourceMappingURL=seequestion.component.js.map