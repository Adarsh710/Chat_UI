import { Component, OnInit, ViewChild } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('chatSearch') search : any;

  slideOpts = {
    speed: 400,
    freeMode: true,
    freeModeMinimumVelocity: 0.1,
    spaceBetween: 0,
    slidesPerView: 4.6,
  };

  online_users;
  recent_chats;
  filtered_chats;

  constructor(private userDataService: UserDataService) {}

  ngOnInit() {
    this.getDashboardData();
  }

  async getDashboardData() {
    this.online_users = await this.userDataService.get_online_users();
    this.recent_chats = await this.userDataService.get_recent_chats();
    this.filtered_chats = this.recent_chats;
    console.log(this.recent_chats);
    
  }

  showSearchBox() {
    const search_box = document.getElementById('searchbox-container')
    search_box.classList.toggle('is-active')
    if(search_box.classList.contains('is-active')) {
      setTimeout(() => {
        this.search.setFocus();
      }, 500);
    }
  }

  hideSearchbox(e) {
    const search_box = document.getElementById('searchbox-container')
    setTimeout(() => {
      if(search_box.classList.contains('is-active')) {
        search_box.classList.remove('is-active')
      }
    }, 50);
  }

  searchInChats(e) {
    console.log(e.target.value);
    this.filtered_chats = this.recent_chats.filter(chat_object => {
      return chat_object.user_name.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0
    })
  }

}
