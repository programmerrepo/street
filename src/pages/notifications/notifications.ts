import {Component} from "@angular/core";
import {ViewController} from "ionic-angular";



@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html'
})

export class NotificationsPage {
  
 // 
 //titalName = '' ;
 //bodyName = '' ;
 //
 //titalName2 = '' ;
 //bodyName2 = '' ;

 
  constructor(public viewCtrl: ViewController) {
    

  }
  
  
//notificationFunction(){
//  
//this.oneSignal.startInit('f23713a0-5c6e-4ec6-9c9b-bb2e765c50c1', '1061722245728');
//
//this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
//
//this.oneSignal.handleNotificationReceived().subscribe((data) => {
// // do something when notification is received
// 
// this.titalName = data.payload.title ;
// this.bodyName = data.payload.body ;
//});
//
//this.oneSignal.handleNotificationOpened().subscribe((res) => {
//  // do something when a notification is opened
//  
//  this.titalName2 = res.notification.payload.title ;
// this.bodyName2 = res.notification.payload.body ;
// 
//});
//
//this.oneSignal.endInit();
//  
//  
//}



  close() {
    this.viewCtrl.dismiss();
  }
  
  
}
