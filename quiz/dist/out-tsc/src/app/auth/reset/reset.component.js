import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ResetComponent = class ResetComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.msg = [];
    }
    ngOnInit() {
    }
    onSubmitForgot(f) {
        // console.log("f submit");
        this.authService.reset(JSON.stringify(f.value))
            .subscribe(data => {
            // console.log(data);
            if (data['msg']) {
                this.msg = data['msg'];
                this.avail = true;
                return;
            }
            else {
                this.router.navigate(['/reset-password']);
            }
        }, error => {
            this.router.navigate(['/error']);
        });
    }
};
ResetComponent = __decorate([
    Component({
        selector: 'app-reset',
        templateUrl: './reset.component.html',
        styleUrls: ['./reset.component.css']
    })
], ResetComponent);
export { ResetComponent };
//# sourceMappingURL=reset.component.js.map