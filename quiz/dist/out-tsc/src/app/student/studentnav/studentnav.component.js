import { __decorate } from "tslib";
import { Component } from '@angular/core';
let StudentnavComponent = class StudentnavComponent {
    constructor(router, authService, studentService) {
        this.router = router;
        this.authService = authService;
        this.studentService = studentService;
    }
    ngOnInit() {
    }
    logoutuser() {
        this.authService.logoutUser();
        this.router.navigate(['/']);
    }
};
StudentnavComponent = __decorate([
    Component({
        selector: 'app-studentnav',
        templateUrl: './studentnav.component.html',
        styleUrls: ['./studentnav.component.css']
    })
], StudentnavComponent);
export { StudentnavComponent };
//# sourceMappingURL=studentnav.component.js.map