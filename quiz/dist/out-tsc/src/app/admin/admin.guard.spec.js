import { TestBed } from '@angular/core/testing';
import { AdminGuard } from './admin.guard';
describe('AdminGuard', () => {
    let guard;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        guard = TestBed.inject(AdminGuard);
    });
    it('should be created', () => {
        expect(guard).toBeTruthy();
    });
});
//# sourceMappingURL=admin.guard.spec.js.map