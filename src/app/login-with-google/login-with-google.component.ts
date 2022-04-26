import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider, SocialUser } from 'ng-social-login-module';

@Component({
  selector: 'app-login-with-google',
  templateUrl: './login-with-google.component.html',
  styleUrls: ['./login-with-google.component.scss']
})
export class LoginWithGoogleComponent implements OnInit {
  public user!: SocialUser;
  loggedIn: boolean = false;
  public authorized: boolean = false;
  constructor(private socialAuthService: AuthService,private router:Router) { }
  ngOnInit(): void {
  }

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider = '';
    if (socialPlatform == "facebook") {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + " sign in data : ", userData);
        // Now sign-in with userData        
        if (userData != null) {
          this.authorized = true;
          this.user = userData;
          // this.router.navigate(['/user-crud'])
        }
      }
    );
 
  }
  
//  signOut() {
//     this.socialAuthService.signOut();
//     this.authorized = false;
//   }
  signOut() {
    this.socialAuthService.signOut()
    if (this.loggedIn) {
      this.router.navigateByUrl("/auth-login")
    }
  }
}
