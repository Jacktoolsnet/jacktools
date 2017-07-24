import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { ShowImagePage } from '../show-image/show-image';

/**
 * Generated class for the MainContentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-main-content',
  templateUrl: 'main-content.html',
  providers: [InAppBrowser]
})
export class MainContentPage {

  constructor(public appCtrl: App, public navCtrl: NavController, public navParams: NavParams, public inAppBrowser: InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainContentPage');
  }

  goToUrl(url: string){
    console.log(url);
    this.inAppBrowser.create(url);
  }

  showImage(){
    console.log("showImage");
    this.appCtrl.getRootNav().push(ShowImagePage);
  }

}
