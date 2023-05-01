import { TestBed } from '@angular/core/testing';
import { TeacherService } from './teacher.service';
describe('TeacherService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(TeacherService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=teacher.service.spec.js.map