import { Component } from '@angular/core';
import { NavController, MenuController, Platform, App } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { MainContentPage } from '../main-content/main-content';
import { EchoPage } from '../echo/echo';
import { ImpressumPage } from '../impressum/impressum';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [InAppBrowser]
})
export class HomePage {

  rootPage: any;
  category: any;

  constructor(public appCtrl: App, public platform: Platform, public navCtrl: NavController, public menuCtrl: MenuController, public inAppBrowser: InAppBrowser) {

  }

  ionViewDidLoad() {
    // Init Screen size
    this.rootPage = MainContentPage;
  }

  setCategory(category) {
    switch (category) {
      case 'home':
        this.rootPage = MainContentPage;
        break;
      case 'impressum':
        this.navCtrl.push(ImpressumPage);
        break;
      case "echo":
        this.rootPage = EchoPage;
        break;
      case 'serviceMenu':
        console.log("serviceMenu");
        this.menuCtrl.enable(true, 'serviceMenu');
        this.rootPage = EchoPage;
        this.menuCtrl.enable(false, 'mainmenu');
        break;
      case 'mainmenu':
        this.menuCtrl.enable(false, 'serviceMenu');
        this.menuCtrl.enable(true, 'mainmenu');
        this.rootPage = MainContentPage;
        break;
    }
    this.menuCtrl.close();
  }

  goToUrl(url: string){
    console.log(url);
    this.inAppBrowser.create(url);
  }

}
