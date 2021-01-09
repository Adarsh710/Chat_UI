import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavigationEnd, Router } from "@angular/router";
import { GoogleTagManagerService } from "angular-google-tag-manager";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private gtmService: GoogleTagManagerService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.router.events.forEach(item => {
        if (item instanceof NavigationEnd) {
            const gtmTag = {
                event: 'page',
                pageName: item.url
            };

            this.gtmService.pushTag(gtmTag);
        }
    });
    });
  }
}
