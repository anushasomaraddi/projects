import { __decorate } from "tslib";
import { Component } from '@angular/core';
let TeacherComponent = class TeacherComponent {
    constructor(adminService, router) {
        this.adminService = adminService;
        this.router = router;
        this.msg = [];
        this.loading = true;
        this.empty = true;
    }
    ngOnInit() {
        this.loading = true;
        this.empty = true;
        this.getdata();
    }
    getdata() {
        this.adminService.seeteacher()
            .subscribe(data => {
            if (data['user']) {
                this.loading = false;
                this.users = data['user'];
                if (!this.users.length) {
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
    block(user) {
        var userid = user._id;
        this.adminService.blockuser(userid).subscribe(data => {
            this.getdata();
            // this.router.navigate(['/admin/adminhome']);
        }, (error) => {
            this.router.navigate(['/error']);
        });
    }
    unblock(user) {
        var userid = user._id;
        this.adminService.unblockuser(userid).subscribe(data => {
            this.getdata();
            // this.router.navigate(['/admin/adminhome']);
        }, (error) => {
            this.router.navigate(['/error']);
        });
    }
};
TeacherComponent = __decorate([
    Component({
        selector: 'app-teacher',
        templateUrl: './teacher.component.html',
        styleUrls: ['./teacher.component.css']
    })
], TeacherComponent);
export { TeacherComponent };
//# sourceMappingURL=teacher.component.js.map