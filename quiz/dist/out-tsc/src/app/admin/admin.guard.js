import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AdminGuard = class AdminGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    doSomthing() {
        localStorage.removeItem('token');
        localStorage.removeItem('userid');
        localStorage.removeItem('admin');
        localStorage.removeItem('student');
        localStorage.removeItem('teacher');
        this.router.navigate(['/']);
    }
    canActivate() {
        if (this.authService.loggedIn()) {
            if (localStorage.getItem('admin') == "yes") {
                if (localStorage.getItem('teacher') == "no") {
                    if (localStorage.getItem('student') == "no") {
                        return true;
                    }
                    else {
                        this.doSomthing();
                        return false;
                    }
                }
                else {
                    this.doSomthing();
                    return false;
                }
            }
            else {
                this.doSomthing();
                return false;
            }
        }
        else {
            this.doSomthing();
            return false;
        }
    }
};
AdminGuard = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AdminGuard);
export { AdminGuard };
//# sourceMappingURL=admin.guard.js.map