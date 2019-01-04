import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//ReactAngular import
import { reactAngularModule } from 'react-angular';

import { OwlModule } from 'ngx-owl-carousel';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';

import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService } from './_services';

import { LoginComponent } from './login';
import { RegisterComponent } from './register';





//Slider Require Animation  
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";  
  
//Main Slider Component  
import { IgxSliderModule,  IgxInputGroupModule, } from "igniteui-angular";  
  
//Use ngModel in App  
import { FormsModule,  ReactiveFormsModule} from '@angular/forms';  


import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ImagelibraryComponent } from './imagelibrary/imagelibrary.component';
import { CreateprofileComponent } from './createprofile/createprofile.component';
import { ContactComponent } from './contact/contact.component';
import { MembershipComponent } from './membership/membership.component';
import { MembershipinnerComponent } from './membership/membershipinner/membershipinner.component';
import { FooterComponent } from './footer/footer.component';
import { CheckoutComponent } from './membership/checkout/checkout.component';
import { SignupComponent } from './home/signup/signup.component';
import { InventoryComponent } from './inventory/inventory.component';
import { MeetdartakeyComponent } from './meetdartakey/meetdartakey.component';
import { ArtistsComponent } from './artists/artists.component';
import { CollectorsComponent } from './collectors/collectors.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ArtdealersComponent } from './artdealers/artdealers.component';
@NgModule({
  declarations: [
    AppComponent,
	HeaderComponent,
    HomeComponent,
	AboutComponent,
	ProductComponent,
	ImagelibraryComponent,
	CreateprofileComponent,
	ContactComponent,
	CheckoutComponent,
	FooterComponent,
	MembershipComponent,
	SignupComponent,
	MembershipinnerComponent,
	 
        AlertComponent,
		ArtistsComponent,
       
        LoginComponent,
        RegisterComponent,
		InventoryComponent,
		MeetdartakeyComponent,
		CollectorsComponent,
		GalleryComponent,
		ArtdealersComponent
	
  ],
  imports: [
    BrowserModule,
    OwlModule,
    AppRoutingModule,
	HttpClientModule,
	
	 
    HttpModule,
	  
    BrowserAnimationsModule,  
    IgxSliderModule,  
    IgxInputGroupModule,  
    FormsModule,  
    ReactiveFormsModule 
  ],
  providers: [  AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }




