import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import * as $ from 'jquery';
let MsgboxComponent = class MsgboxComponent {
    constructor() { }
    ngOnInit() {
        $(document).ready(function () {
            $('.box').fadeOut(4000);
        });
    }
};
__decorate([
    Input()
], MsgboxComponent.prototype, "message", void 0);
__decorate([
    Input()
], MsgboxComponent.prototype, "styl", void 0);
MsgboxComponent = __decorate([
    Component({
        selector: 'app-msgbox',
        templateUrl: './msgbox.component.html',
        styleUrls: ['./msgbox.component.css']
    })
], MsgboxComponent);
export { MsgboxComponent };
//# sourceMappingURL=msgbox.component.js.map