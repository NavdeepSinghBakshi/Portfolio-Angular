import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  toasterSetting:any;
  constructor(private notification: ToastrService) {
    this.toasterSetting={
      timeOut: 5000,
      progressBar :true,
      preventDuplicates:true
    }
   }

   success(message:string,title:string){
    this.notification.success(message,title,this.toasterSetting);
  }

  error(message:string,title:string){
    this.notification.error(message,title,this.toasterSetting);
  }
  
  warning(message:string,title:string){
    this.notification.warning(message,title,this.toasterSetting);
  }

  info(message:string,title:string){
    this.notification.info(message,title,this.toasterSetting);
  }
}