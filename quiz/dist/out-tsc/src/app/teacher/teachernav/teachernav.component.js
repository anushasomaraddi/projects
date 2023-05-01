import { __decorate } from "tslib";
import { Component } from '@angular/core';
let TeachernavComponent = class TeachernavComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
    }
    logoutuser() {
        this.authService.logoutUser();
        this.router.navigate(['/']);
    }
};
TeachernavComponent = __decorate([
    Component({
        selector: 'app-teachernav',
        templateUrl: './teachernav.component.html',
        styleUrls: ['./teachernav.component.css']
    })
], TeachernavComponent);
export { TeachernavComponent };
//# sourceMappingURL=teachernav.component.js.map