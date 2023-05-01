import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';
let WebsocketService = class WebsocketService {
    constructor() {
        this.url = "http://localhost:3000";
        this.socket = io(this.url);
    }
    listen(eventName) {
        return new Observable((subscriber) => {
            this.socket.on(eventName, (data) => {
                subscriber.next(data);
            });
        });
    }
    emit(eventName, data) {
        this.socket.emit(eventName, data);
    }
};
WebsocketService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], WebsocketService);
export { WebsocketService };
//# sourceMappingURL=websocket.service.js.map