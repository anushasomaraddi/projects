import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { NotfoundErrorComponent } from './notfound-error.component';
describe('NotfoundErrorComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [NotfoundErrorComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(NotfoundErrorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=notfound-error.component.spec.js.map