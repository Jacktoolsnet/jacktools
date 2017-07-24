import { Component } from '@angular/core';
import { NavController, MenuController, Platform } from 'ionic-angular';

import { MainContentPage } from '../main-content/main-content';
import { ImpressumPage } from '../impressum/impressum';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  rootPage: any;
  category: any;

  constructor(public platform: Platform, public navCtrl: NavController, public menuCtrl: MenuController) {

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
      case 'submenu':
        console.log("submenu");
        this.menuCtrl.enable(true, 'submenu');
        this.menuCtrl.enable(false, 'mainmenu');
        break;
      case 'mainmenu':
        this.menuCtrl.enable(false, 'submenu');
        this.menuCtrl.enable(true, 'mainmenu');
        break;
    }
    this.menuCtrl.close();
  }

}
