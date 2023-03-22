import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent  implements OnInit {

  registerForm : FormGroup = new FormGroup({
    fullname: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    password: new FormControl(''),
    confirm_password: new FormControl(''),
  });
  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit() {}

  register()
  {
    console.log(this.registerForm.value)

    if(this.registerForm.value.confirm_password === this.registerForm.value.password && this.registerForm.value.firstname != '')
    {
      let userDetails = {

        fullname: this.registerForm.value.fullname,
        email: this.registerForm.value.email,
        phone: this.registerForm.value.phone,
        usertype: 'Passenger',
        password: this.registerForm.value.password,
        profile_pic: '',
        status: 'available',
        address: 'Tshedza'
      }
  
      console.log(userDetails);
  
      this.userService.AddUser(userDetails).subscribe((next:any) => {
          console.log('Add successfully!');
          this.router.navigate(['/tab/home'])

          sessionStorage.setItem('token', JSON.stringify(userDetails)); 

        }, (err) => {
      });
    }
    else{
      console.log("Your creaditial does not correspond")
    }

  }

}
