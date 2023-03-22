import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';
import { Message } from '../model/message';

@Injectable({
  providedIn: 'root',
})
export class ConversationMessagesService {
  constructor(private http: HttpClient) {}

  getConversationMessages(roomID:any): Observable<any> {
    return this.http.post(environment.REST_API + '/messages/getMessegeByRoom', roomID).pipe();
  }

  sendMessage(message:any): Observable<any> {
    console.log(message)
    let API_URL = environment.REST_API + '/messages/addMessage';
    return this.http.post(API_URL, message).pipe();
  }

  updateMessageStatusToRead(messageId: string, receiverId: string) {
    return this.http.put<any>(
      `${environment.REST_API}/api/v1/messages/updateMessageStatusToRead/${messageId}/${receiverId}`,
      {}
    );
  }
}
