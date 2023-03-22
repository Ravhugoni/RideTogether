import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UsersService } from 'src/app/service/users.service';
// import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

 
  loginForm : FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  constructor(private router: Router, private userServive: UsersService, private toastController: ToastController) { }

  ngOnInit() {}

  async presentToast(msg:any, clr:any)
  {
    const toast = await this.toastController.create({
      message:msg,
      duration: 2000,
      position: 'top',
      color:clr,
      buttons: [
        {
          icon:'home'
          
        }
      ]

    });

    await toast.present();
  }

  login()
  {
    let logingDetails = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }

    if(logingDetails.email != '' && logingDetails.password != '')
    {

      this.userServive.UserLogin(logingDetails).subscribe((res:any) => {

        let msg = 'Successfully login!';
        let clr = 'success';

        this.presentToast(msg, clr);
        
        sessionStorage.setItem('loggedEmail', this.loginForm.value.email);

        this.userServive.getUsers().subscribe((res:any) => {
          let result = res;
          let user = result.filter((res:any) => res.email === this.loginForm.value.email);
          sessionStorage.setItem('user', user[0].userID);
       });
       this.router.navigate(['/tab/home']);

      }, (err:any) => {
        let msg = 'Email or Password is invalid!';
        let clr = 'danger';
        
        this.presentToast(msg, clr);
    });

            
    }
    else{
      let msg = 'Email or Password is invalid!';
      let clr = 'danger';
      
      this.presentToast(msg, clr);
    }
  }

}
