import { __decorate } from "tslib";
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
let IndexheaderComponent = class IndexheaderComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
        // this.check();
    }
    check() {
        this.authService.check().subscribe(data => {
            console.log(data);
        }, (error) => {
            if (error instanceof HttpErrorResponse) {
                this.authService.logoutUser();
                this.router.navigate(['/']);
            }
            console.log(error);
        });
    }
};
IndexheaderComponent = __decorate([
    Component({
        selector: 'app-indexheader',
        templateUrl: './indexheader.component.html',
        styleUrls: ['./indexheader.component.css']
    })
], IndexheaderComponent);
export { IndexheaderComponent };
//# sourceMappingURL=indexheader.component.js.map