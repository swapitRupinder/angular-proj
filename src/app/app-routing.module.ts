import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//ReactAngular import
import { reactAngularModule } from 'react-angular';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { CreateprofileComponent } from './createprofile/createprofile.component';
import { ImagelibraryComponent } from './imagelibrary/imagelibrary.component';
import { MembershipComponent } from './membership/membership.component';
import { MembershipinnerComponent } from './membership/membershipinner/membershipinner.component';
import { SignupComponent } from './home/signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import { InventoryComponent } from './inventory/inventory.component';
import { MeetdartakeyComponent } from './meetdartakey/meetdartakey.component';
import { ArtistsComponent } from './artists/artists.component';
import { CollectorsComponent } from './collectors/collectors.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ArtdealersComponent } from './artdealers/artdealers.component';
import { CheckoutComponent } from './membership/checkout/checkout.component';

import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
const routes: Routes = [

   {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
	{
		path:'product',
		component:ProductComponent
	},
	{
		path:'meetdartakey',
		component:MeetdartakeyComponent
	},
	
	{
		path:'imagelibrary',
		component:ImagelibraryComponent
	},
	{
		path:'inventory',
		component:InventoryComponent
	},
	{
		path:'contact',
		component:ContactComponent
	},
	{
		path:'artists',
		component:ArtistsComponent
	},
	{
		path:'collectors',
		component:CollectorsComponent
	},
	{
		path:'artdealers',
		component:ArtdealersComponent
	},
	{
		path:'gallery',
		component:GalleryComponent
	},
	
	{
		path:'createprofile',
		component:CreateprofileComponent
	},
	{
		path:'home/signup',
		component:SignupComponent
	},
	{
		path:'membership',
		component:MembershipComponent
	},
	{
		path:'membership/checkout',
		component:CheckoutComponent
	},
	{
		path:'membership/checkout',
		component:CheckoutComponent
	},
	{
		path:'membership/membershipinner',
		component:MembershipinnerComponent
	},
	 { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
	
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
