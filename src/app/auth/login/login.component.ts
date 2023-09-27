import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginForm=this.formBuilder.group({
  email:['miloome2811@gmail.com',[Validators.required,Validators.email]],
  password:['',Validators.required],
})
  constructor(private formBuilder:FormBuilder,private router:Router){}

  ngOnInit():void{
    
  }
  get email(){
    return this.loginForm.controls.email;
  }
  get password(){
    return this.loginForm.controls.password;
  }
  showPassword = false;
  eyeIconOpen = 'fa-eye';
  eyeIconClosed = 'fa-eye-slash';

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  onSubmit() {
    if(this.loginForm.valid){
      console.log("llamar al servicio de login");
      this.router.navigateByUrl('/inicio');
      this.loginForm.reset();
    }
    else{
      this.loginForm.markAllAsTouched();
      alert("Error al ingresar los datos....");
    }
  }
}
