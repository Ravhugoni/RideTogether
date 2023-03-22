import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Message } from '../../model/message';
import { User } from '../../model/user';
import { ConversationMessagesService } from '../../service/conversation-messages.service';
// import { SocketProvider } from '../service/socket-provider';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-chats',
  templateUrl: 'chats.page.html',
  styleUrls: ['chats.page.scss']
})
export class ChatsPage {
  // export class ChatsPage implements OnInit, OnDestroy {
  @ViewChild('content', { static: true }) private content: any;
  @ViewChild('chatInput', { static: true }) messageInput?: ElementRef;

  messages?: Message[];
  public conversationId!: string;
  receiverFullName?: string = "string";
  editorMsg!: string;
  receiverId!: number;
  sub!: any;
  paramsUser!: any;

  senderData!: any;
  receiverData?: User;
  senderID: number = Number(sessionStorage.getItem('user'));

  constructor(
    private conversationMessagesService: ConversationMessagesService,
    private activatedRoute: ActivatedRoute,
  //   private socket: SocketProvider,
  //   public loadingController: LoadingController
    private usersService: UsersService
  ) {
  //   this.listenToSocketUpdateMessageStatusEvent();
  //   this.listenToSocketUpdateListMessagesEvent();
    }

  async ngOnInit() {

    this.sub = this.activatedRoute.params.subscribe(params => {
      return this.paramsUser = params['id'];
    });

    this.receiverId = await this.paramsUser;


    this.recieverInfo();
    this.getConversationMessages();

  //   const loading = await this.loadingController.create({
  //     spinner: 'bubbles',
  //     cssClass: 'custom-loader-class',
  //     showBackdrop: false,
  //   });
  //   await loading.present();
  //   this.socket.connect();
  //   await this.loadingController.dismiss();
  //   this.socket.on('connect', () => {
  //     this.getConversationMessages();
  //     this.socket.emit('conversationRoomNumber', this.conversationId);
  //   });

  
  }

  // listenToSocketUpdateListMessagesEvent() {
  //   this.socket.on('new-message', () => {
  //     this.getConversationMessages();
  //     this.scrollToBottom();
  //   });
  // }

  // listenToSocketUpdateMessageStatusEvent() {
  //   this.socket.on('seen', (messageId) => {
  //     const message = this.messages.find((msg) => msg._id === messageId);
  //     if (message) {
  //       message.status = 'seen';
  //     }
  //   });
  // }

  recieverInfo()
  {
    this.usersService.getUsers().subscribe((res:any) => {
      let users = res;
      let result = users.filter((res:any) => Number(res.userID) === Number(this.receiverId));
      this.receiverData = result[0]
      this.receiverFullName = this.receiverData?.fullname
    });
    
  }

  getConversationMessages() {
    const user = localStorage.getItem('user');
    const queryParams = this.activatedRoute.snapshot.queryParams;
    // const receiver: User = JSON.parse(queryParams.receiver);
 
    this.receiverFullName = this.receiverData?.fullname

    if(this.receiverId > this.senderID)
    {
      this.conversationId = String(this.senderID)+ '#' + String(this.receiverId)
    }
    else{
      this.conversationId = String(this.receiverId)+ '#' + String(this.senderID)
    }
    
    const room = 
    { 
      roomID : this.conversationId
    }
    this.conversationMessagesService.getConversationMessages(room).subscribe((res) => {
      this.messages = res;
      // console.log(res)
    });
  }

  // filterMessageAndUpdateStatus(message: Message, user: any): Message {
  //   message.senderFullName =
  //     message.sender.firstName + ' ' + message.sender.lastName;
  //   if (message.sender._id === user.id) {
  //     message.userIsSender = true;
  //   }
  //   message.receivers.forEach((receiver) => {
  //     if (!receiver.isRead && !message.userIsSender) {
  //       this.conversationMessagesService
  //         .updateMessageStatusToRead(message._id, receiver.receiverId)
  //         .subscribe(() => {
  //           this.socket.emit('update-message-status', message._id);
  //         });
  //     }
  //     if (message.userIsSender) {
  //       if (receiver.isRead) {
  //         message.status = 'seen';
  //       } else {
  //         message.status = 'sent';
  //       }
  //     }
  //   });
  //   return message;
  // }

  sendMessage() {
    if (!this.editorMsg.trim()) {
      return;
    }
    const message: Message = {
      message: this.editorMsg,
      conversationId: this.conversationId,
      senderId: this.senderID,
      receiverId: this.receiverId,
      userIsSender: true,
      createdAt: new Date(),
    };

    this.editorMsg = '';
    this.onFocus();
    this.pushNewMessage(message);

    console.log(message)
    this.conversationMessagesService.sendMessage(message).subscribe(
      (res:any) => {
        this.messages?.forEach((element) => {
          if (element.message === message.message && element.userIsSender) {
            element.status = 'sent';
          }
        });
        // this.socket.emit('update-messages-list');
      }
      // err => this.purchaseMessageProvider.storeRequest(message),
    );
  }

  pushNewMessage(message: Message) {
    message.status = 'sent';
    this.messages?.push(message);
    this.scrollToBottom();
  }

  onFocus() {
    if (this.messageInput && this.messageInput.nativeElement) {
      this.messageInput.nativeElement.focus();
    }
  }

  scrollToBottom() {
    setTimeout(() => {
      if (this.content.scrollToBottom) {
        this.content.scrollToBottom();
      }
    }, 200);
  }

  // ngOnDestroy() {
  //   this.socket.disconnect();
  //   this.socket.removeAllListeners();
  // }
}
