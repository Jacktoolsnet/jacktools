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
  showHeader: boolean = true;

  constructor(public platform: Platform, public navCtrl: NavController, public menuCtrl: MenuController) {

  }

  ionViewDidLoad() {
    // Init Screen size
    this.checkScreenSize();
    this.rootPage = MainContentPage;
  }

  splitPaneChange() {
    console.log("ionChange");
    if (this.showHeader == true ){
      this.showHeader = false;
    } else {
      this.showHeader = true;
    }
    this.rootPage = MainContentPage;
  }

  checkScreenSize(){
    if (this.platform.width() <= 800){
      this.showHeader = true;
    } else {
      this.showHeader = false;
    }
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
