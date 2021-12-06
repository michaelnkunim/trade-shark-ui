import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class RouteService {
  routeList:any = [];
  routeTitle:any;
  routeDirection:any = 1;
  currentUrl:any;

  public previousUrl:any;

 constructor(public router:Router,private navCtrl:NavController) {

  }

  goToPrevious(){
   this.routeDirection = -1;
   this.navCtrl.back();
   setTimeout(() => {
     this.routeList.pop();
   }, 600);

   if(this.routeList.length == 2){
    // this.routeList.pop();
   }

  }

  setPreviousUrl(previousUrl: string) : void {
   this.previousUrl.next(previousUrl);
  }

  goTo(url):void{
    this.router.navigateByUrl(url);
  }

}