import { Injectable } from '@angular/core';
import {io} from "socket.io-client";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SocketServiceService {
  private socket:any;

  constructor() {
    this.socket = io('http://localhost:4200');
  }

  public sendMessage(message: string): void {
    this.socket.emit('new-message', message);
  }

  public getMessages(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on('new-message', (data: any) => {
        observer.next(data);
      });
    });
  }
}
