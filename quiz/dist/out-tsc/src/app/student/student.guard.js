import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let StudentGuard = class StudentGuard {
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
            if (localStorage.getItem('student') == "yes") {
                if (localStorage.getItem('admin') == "no") {
                    if (localStorage.getItem('teacher') == "no") {
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
StudentGuard = __decorate([
    Injectable({
        providedIn: 'root'
    })
], StudentGuard);
export { StudentGuard };
//# sourceMappingURL=student.guard.js.map