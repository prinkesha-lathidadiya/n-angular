import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SocialUser } from 'ng-social-login-module';
import { AuthService, GoogleLoginProvider } from 'ng-social-login-module';
import { ServiceService } from './service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss'],
  providers: [ToastrService]
})
export class AuthLoginComponent implements OnInit {

  loginForm!: FormGroup
  user!: SocialUser;
  loggedIn!: boolean;
  // --
  submitted: boolean = false
  loading: boolean = false
  returnUrl!: string
  constructor(private authService: AuthService, private router: Router, private ref: ChangeDetectorRef, private formbuilder: FormBuilder, private http: HttpClient, private accountservice: ServiceService, private toastrService: ToastrService, private activeroute: ActivatedRoute) {
    this.loginForm = this.formbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
    if (this.accountservice.isLoggedIn()) {
      this.router.navigate(['/user-crud']);
    }
  }

  ngOnInit() {
    this.authService.authState.subscribe((user: any) => {
      this.user = user;
      this.loggedIn = (user != null)
      // this.ref.detectChanges()
    })

    
/********return url========== */
    this.returnUrl =
    this.activeroute.snapshot.queryParams['returnUrl'] || '/user-crud';
  }


  signInWithGoogle() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (user) => {
        console.log("socialuser", user)
        if (user != null) {
          /********************************** */
          this.router.navigateByUrl("/auth-login")
        }
      }
    )
  }
  logIn() {
    this.submitted = true
    if (this.loginForm.invalid) {
      return
    }

    this.loading = true
    this.accountservice.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(
      (res: any) => {
        if (res.isSuccess) {
          localStorage.setItem('userInfo', JSON.stringify({
            token: res.responseData.token
          }))
          this.toastrService.success(res.message)
          this.router.navigate([this.returnUrl]);
        } else {
          this.loading = false;
          this.submitted = false
          this.toastrService.error(res.message)
          alert("username or password is incoorect...")
        }
      },
      (error: any) => {
        this.loading = false;
        alert("username or password is incoorect...")
      })
  }

}
