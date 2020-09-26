import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AppService {

    addTask: EventEmitter<any> = new EventEmitter();

    constructor() {
    }
    emitData(data) {
        this.addTask.emit(data);

    }
    getTaskAddEvent() {
        return this.addTask;
    }
}
