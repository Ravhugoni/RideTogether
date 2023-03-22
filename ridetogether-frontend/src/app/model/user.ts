export class User {
    id: number | undefined;
    constructor(
      public userID?: number,
      public email?: string,
      public password?: string,
      public fullname?: string,
      public phone?: string,
      public created_at?: any,
      public usertype?: string,
      public profile_pic?: string,
      public status?: string,
      public address?: string

    ) {}
  }