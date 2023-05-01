import { TestBed } from '@angular/core/testing';
import { WebsocketService } from './websocket.service';
describe('WebsocketService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(WebsocketService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=websocket.service.spec.js.map