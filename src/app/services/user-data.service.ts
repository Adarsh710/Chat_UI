import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UserDataService {

  private online_users = [
    {
    user_name: "Mya Jean",
    user_image: "https://randomuser.me/api/portraits/thumb/women/30.jpg",
    is_online: true
  },
    {
    user_name: "Ritthy Porter",
    user_image: "https://randomuser.me/api/portraits/thumb/men/41.jpg",
    is_online: true
  },
    {
    user_name: "Samantha",
    user_image: "https://randomuser.me/api/portraits/thumb/women/87.jpg",
    is_online: true
  },
    {
    user_name: "Suzanne Tucker",
    user_image: "https://randomuser.me/api/portraits/thumb/women/78.jpg",
    is_online: true
  },
    {
    user_name: "Diane Hanson",
    user_image: "https://randomuser.me/api/portraits/thumb/women/26.jpg",
    is_online: true
  },
    {
    user_name: "Andrine Hanson",
    user_image: "https://randomuser.me/api/portraits/thumb/women/91.jpg",
    is_online: true
  },
]

  private recent_chats = [
    {
      user_name: "Diane Hanson",
      last_message: "Hello",
      last_seen: "15:43",
      user_image: "https://randomuser.me/api/portraits/thumb/women/26.jpg",
      unseen_message_count: 3,
      is_online: true,
      sent_by_me: false,
      is_typing: true,
    },
    {
      user_name: "Emily Tremblay",
      last_message: "Wait i am comming, just wait 5 mins",
      last_seen: "12:07",
      user_image: "https://randomuser.me/api/portraits/thumb/women/77.jpg",
      unseen_message_count: 1,
      is_online: false,
      sent_by_me: false,
      is_typing: false,
    },
    {
      user_name: "Ramiro Pires",
      last_message: "Hello",
      last_seen: "00:16",
      user_image: "https://randomuser.me/api/portraits/thumb/men/78.jpg",
      unseen_message_count: 0,
      is_online: false,
      sent_by_me: true,
      is_typing: false,
    },
    {
      user_name: "Ross Williams",
      last_message: "I will be there in 15 mins",
      last_seen: "1 day ago",
      user_image: "https://randomuser.me/api/portraits/thumb/men/5.jpg",
      unseen_message_count: 0,
      is_online: false,
      sent_by_me: true,
      is_typing: false,
    },
    {
      user_name: "Jeppe",
      last_message: "Hello",
      last_seen: "1 day ago",
      user_image: "https://randomuser.me/api/portraits/thumb/men/88.jpg",
      unseen_message_count: 1,
      is_online: false,
      sent_by_me: false,
      is_typing: false,
    },
    {
      user_name: "Charlotte Gray",
      last_message: "ok",
      last_seen: "2 day ago",
      user_image: "https://randomuser.me/api/portraits/women/59.jpg",
      unseen_message_count: 0,
      is_online: false,
      sent_by_me: true,
      is_typing: false,
    },
    {
      user_name: "Marlene Murphy",
      last_message: "Yup, thats write",
      last_seen: "2 day ago",
      user_image: "https://randomuser.me/api/portraits/thumb/women/58.jpg",
      unseen_message_count: 0,
      is_online: false,
      sent_by_me: true,
      is_typing: false,
    },
  ];

  constructor() {}

  async get_online_users(): Promise<any> {
    return this.online_users;
  }

  async get_recent_chats(): Promise<any> {
    return this.recent_chats;
  }
}
