import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AdminnavComponent = class AdminnavComponent {
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
AdminnavComponent = __decorate([
    Component({
        selector: 'app-adminnav',
        templateUrl: './adminnav.component.html',
        styleUrls: ['./adminnav.component.css']
    })
], AdminnavComponent);
export { AdminnavComponent };
//# sourceMappingURL=adminnav.component.js.map