import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  slideOpts = {
    speed: 400,
    freeMode: true,
    freeModeMinimumVelocity: 0.1,
    spaceBetween: 0,
    slidesPerView: 4.6,
  };

  online_users;
  recent_chats;

  constructor(private userDataService: UserDataService) {}

  ngOnInit() {
    this.getDashboardData();
  }

  async getDashboardData() {
    this.online_users = await this.userDataService.get_online_users();
    this.recent_chats = await this.userDataService.get_recent_chats();
    console.log(this.recent_chats);
    
  }

}
