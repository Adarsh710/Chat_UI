import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOpts = {
    speed: 400,
    freeMode: true,
    freeModeMinimumVelocity: 0.1,
    spaceBetween: 0,
    slidesPerView: 4.6,
  };

  online_users = [
    {
      user_image: 'https://randomuser.me/api/portraits/thumb/men/75.jpg'
    },
    {
      user_image: 'https://randomuser.me/api/portraits/thumb/women/26.jpg'
    },
    {
      user_image: 'https://randomuser.me/api/portraits/thumb/women/72.jpg'
    },
    {
      user_image: 'https://randomuser.me/api/portraits/thumb/men/46.jpg'
    },
    {
      user_image: 'https://randomuser.me/api/portraits/thumb/women/82.jpg'
    },
    {
      user_image: 'https://randomuser.me/api/portraits/thumb/men/88.jpg'
    },
  ]

  recent_chats = [
    {
      user_name: 'Diane Hanson',
      last_message: 'Hello',
      last_seen: '12:34 pm',
      user_image: 'https://randomuser.me/api/portraits/thumb/women/26.jpg',
      unseen_message_count: 7,
      is_online: true,
      sent_by_me: false,
      is_typing: true
    },
    {
      user_name: 'Emily Tremblay',
      last_message: 'Wait i am comming, just wait 5 mins',
      last_seen: '06:40 am',
      user_image: 'https://randomuser.me/api/portraits/thumb/women/77.jpg',
      unseen_message_count: 0,
      is_online: false,
      sent_by_me: false,
      is_typing: false
    },
    {
      user_name: 'Ramiro Pires',
      last_message: 'Hello',
      last_seen: '03:30 pm',
      user_image: 'https://randomuser.me/api/portraits/thumb/men/78.jpg',
      unseen_message_count: 0,
      is_online: false,
      sent_by_me: true,
      is_typing: false
    },
    {
      user_name: "Ross Williams",
      last_message: 'I will be there in 15 mins',
      last_seen: '15 min ago',
      user_image: "https://randomuser.me/api/portraits/thumb/men/5.jpg",
      unseen_message_count: 0,
      is_online: false,
      sent_by_me: true,
      is_typing: false
    },
    {
      user_name: 'Jeppe',
      last_message: 'Hello',
      last_seen: '2 days ago',
      user_image: 'https://randomuser.me/api/portraits/thumb/men/88.jpg',
      unseen_message_count: 0,
      is_online: true,
      sent_by_me: false,
      is_typing: false
    },
  ]
  constructor() {}

}
