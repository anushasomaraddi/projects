import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CreatequizComponent = class CreatequizComponent {
    constructor(teacherService, router) {
        this.teacherService = teacherService;
        this.router = router;
        this.msg = [];
    }
    ngOnInit() {
    }
    createQuiz(f) {
        this.teacherService.createQuiz(JSON.stringify(f.value))
            .subscribe(data => {
            if (data['msg']) {
                this.msg = data['msg'];
                this.avail = true;
                return;
            }
            this.router.navigate(['/teacher/uploadquiz']);
        }, error => {
            this.router.navigate(['/error']);
        });
    }
};
CreatequizComponent = __decorate([
    Component({
        selector: 'app-createquiz',
        templateUrl: './createquiz.component.html',
        styleUrls: ['./createquiz.component.css']
    })
], CreatequizComponent);
export { CreatequizComponent };
//# sourceMappingURL=createquiz.component.js.map