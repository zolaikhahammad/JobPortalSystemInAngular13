import { Injectable, TemplateRef, ViewChild } from '@angular/core';
import { ToastrService,ToastContainerDirective } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class ToastService {
  @ViewChild(ToastContainerDirective, { static: true })
  toastContainer!: ToastContainerDirective;
  constructor(private toastr: ToastrService){
    this.toastr.overlayContainer = this.toastContainer;
  }
   
  showSuccess(message:any, title:any){
    this.toastr.success(message, title)
}
 
showError(message:any, title:any){
    this.toastr.error(message, title)
}
 
showInfo(message:any, title:any){
    this.toastr.info(message, title)
}
 
showWarning(message:any, title:any){
    this.toastr.warning(message, title)
}
}
