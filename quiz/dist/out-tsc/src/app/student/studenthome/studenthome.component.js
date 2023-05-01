import { __decorate } from "tslib";
import { Component } from '@angular/core';
let StudenthomeComponent = class StudenthomeComponent {
    constructor(studentService, router, webSocketService) {
        this.studentService = studentService;
        this.router = router;
        this.webSocketService = webSocketService;
        this.loading = true;
        this.empty = true;
    }
    ngOnInit() {
        this.loading = true;
        this.empty = true;
        this.webSocketService.listen('quizcrud').subscribe((data) => {
            this.getdata();
        });
        this.getdata();
    }
    getdata() {
        this.studentService.getAllQuiz()
            .subscribe(data => {
            if (data['quiz']) {
                this.loading = false;
                this.allquiz = data['quiz'];
                // console.log(this.allquiz.length);
                if (!this.allquiz.length) {
                    this.empty = true;
                }
                else {
                    this.empty = false;
                }
            }
        }, error => {
            this.router.navigate(['/error']);
        });
    }
    playquiz(item) {
        this.studentService.setQuizId(item._id);
        this.router.navigate(['/student/playquiz']);
    }
};
StudenthomeComponent = __decorate([
    Component({
        selector: 'app-studenthome',
        templateUrl: './studenthome.component.html',
        styleUrls: ['./studenthome.component.css']
    })
], StudenthomeComponent);
export { StudenthomeComponent };
//# sourceMappingURL=studenthome.component.js.map