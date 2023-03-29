import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  sub!:any;
  uid!:any;
  users!:any;
  fullname: any;
  email: any;
  phone: any;
  cloudinaryUrl: string = 'https://api.cloudinary.com/v1_1/dbgjhr9ir/image/upload';
  idFile: any;
  agricFile: any;
  idfile_link:any
  agrifile_link:any
  isUpdating: boolean = false;
  userData:any;

    constructor(private router: Router,private route: ActivatedRoute, private authservice: UsersService,
    private http: HttpClient, private fb: FormBuilder) { }
  
    EditUserForm:FormGroup = new FormGroup({
      fullname:new FormControl(''),
      email:new FormControl(''),
      phone:new FormControl(''),
      address:new FormControl(''),
      status:new FormControl('')
    })
  
    myForm() {
      this.EditUserForm = this.fb.group({
        fullname: ['', [ Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
        address: ['', [ Validators.required]],
      });
    }
  
    ngOnInit(): void {
  
      if('loggedEmail' in sessionStorage)
      {
        this.authservice.getUsers().subscribe((res:any) => {
          let result = res;
          
          this.users = result.filter((res:any) => String(res.email) === String(sessionStorage.getItem('loggedEmail')))
          console.log(this.users);

          if(this.users!= undefined)
          {
            this.EditUserForm = this.fb.group({
              fullname: [this.users[0].fullname, [ Validators.required, Validators.minLength(2)]],
              email: [this.users[0].email, [Validators.required, Validators.email]],
              phone: [this.users[0].phone, [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
              address: [this.users[0].address, [ Validators.required]],
              identity: ['', [ Validators.required]],
              agric: ['', [ Validators.required]],
              status: [this.users[0].status, [ Validators.required]]
            });



            // this.EditUserForm.setValue({
             
            //   fullname: this.users[0].fullname,
            //   email: this.users[0].email,
            //   phone: this.users[0].phone,
            //   address: this.users[0].address,
            //   identity: this.users[0].id_document,
            //   // agric: this.users[0].agric_document,
            //   status: this.users[0].status,
            // })
          }
      })
      }
      else
      {
        this.router.navigate(['/auth/login']);
      }

      this.myForm();
  
    }

}
