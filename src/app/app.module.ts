import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { SocialAuthService } from 'angularx-social-login';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider
 
} from 'ng-social-login-module';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginWithGoogleComponent } from './login-with-google/login-with-google.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ViewCrudComponent } from './view-crud/view-crud.component';
import { UserCrudComponent } from './user-crud/user-crud.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("1016994148249-cvijokf575kprvsj6899n1ms5a213uu4.apps.googleusercontent.com")
        },
      ],true
  );
  return config;
}
@NgModule({
  declarations: [
    AppComponent,
    LoginWithGoogleComponent,
    ViewCrudComponent,
    UserCrudComponent,
    AuthLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SocialLoginModule,
    TableModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    FormsModule,
    RadioButtonModule,
  ReactiveFormsModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
    ToastrModule.forRoot()
  ],
  providers: [
    {
        provide: AuthServiceConfig,
        useFactory: getAuthServiceConfigs
      }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
