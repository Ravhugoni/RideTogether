import { User } from './user';

export class Message {
  _id?: string;
  conversationId?: string;
  senderId?: number;
  sender?: User;
  senderFullName?: string;
  receiverId?: number;
  receivers?: Array<{
    receiverId: number,
    isRead: boolean,
  }>;
  message?: string;
  userIsSender?: boolean;
  isRead?: boolean;
  status?: 'pending' | 'sent' | 'seen';
  purchaseId?: number;
  createdAt?: Date;
}