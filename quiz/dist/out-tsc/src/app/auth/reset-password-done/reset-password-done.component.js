import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ResetPasswordDoneComponent = class ResetPasswordDoneComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.msg = [];
    }
    ngOnInit() {
    }
    onSubmitResetpasswordDone(f) {
        if (!f.valid) {
            this.msg = "Invalid form data!!";
            this.avail = true;
            return;
        }
        if (f.controls.p1.value != f.controls.p2.value) {
            this.msg = "Password doesn't match";
            this.avail = true;
            return;
        }
        this.authService.resetpassworddone(JSON.stringify(f.value))
            .subscribe(data => {
            // console.log(data);
            if (data['msg']) {
                this.msg = data['msg'];
                this.avail = true;
                return;
            }
            this.router.navigate(['/']);
        }, error => { this.router.navigate(['/error']); });
        // this.msg = "hellp";
        // this.avail = true;
    }
};
ResetPasswordDoneComponent = __decorate([
    Component({
        selector: 'app-reset-password-done',
        templateUrl: './reset-password-done.component.html',
        styleUrls: ['./reset-password-done.component.css']
    })
], ResetPasswordDoneComponent);
export { ResetPasswordDoneComponent };
//# sourceMappingURL=reset-password-done.component.js.map