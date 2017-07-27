import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { EchoServiceProvider } from '../../providers/echo-service/echo-service'

/**
* Generated class for the EchoPage page.
*
* See http://ionicframework.com/docs/components/#navigation for more info
* on Ionic pages and navigation.
*/
@Component({
  selector: 'page-echo',
  templateUrl: 'echo.html',
  providers: [InAppBrowser, EchoServiceProvider]
})
export class EchoPage {

  echoValue: string = "Hallo";
  echoResult: string = "";
  requestType: string = "get";

  public loader: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public inAppBrowser: InAppBrowser, public toastCtrl: ToastController, public loadingCtrl: LoadingController, public echoServiceProvider: EchoServiceProvider) {
  }

  okResult: string = '{"status":"ok", "echo":"Hallo", "requesttype":"GET", "format":"urlencoded"}';
  errorResult: string = '{"status":"error", "echo":"null", "requesttype":"null", "format":"null"}';

  ionViewDidLoad() {
    console.log('ionViewDidLoad EchoPage');
  }

  sendEcho() {
    console.log('sendEcho ->' + this.echoValue)
    this.loader = this.loadingCtrl.create({
      content: "Sende Anfrage..."
    });
    this.loader.present();
    switch (this.requestType){
      case 'get':
        this.echoServiceProvider.getEchoGet(this.echoValue)
        .then(resp => this.showEchoResult(resp))
        .catch(error => this.showErrorToast(error));
        break;
      case 'postJSON':
        this.echoServiceProvider.getEchoPostJSON(this.echoValue)
        .then(resp => this.showEchoResult(resp))
        .catch(error => this.showErrorToast(error));
        break;
      case 'postFORM':
        this.echoServiceProvider.getEchoPostFORM(this.echoValue)
        .then(resp => this.showEchoResult(resp))
        .catch(error => this.showErrorToast(error));
        break;
    }
  }

  showEchoResult(result: string) {
    console.log('showEchoToast ->' + result);
    this.loader.dismiss();
    this.echoResult = result;
  }

  showErrorToast(error: any) {
    console.log('showErrorToast ->' + error);
    this.loader.dismiss();
    let toast = this.toastCtrl.create({
      message: "Ups! Da ist etwas schief gelaufen. Das hätte nicht passieren dürfen! " + error,
      duration: 3000
    });
    toast.present();
    this.echoResult = error;
  }

  goToUrl(url: string){
    console.log(url);
    this.inAppBrowser.create(url);
  }

}
