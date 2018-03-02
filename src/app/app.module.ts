import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { Ng2PageScrollModule } from 'ng2-page-scroll'

import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ServiceComponent } from './service/service.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { CheffComponent } from './cheff/cheff.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { LoggedInComponent } from './logged-in/logged-in.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CategoriesComponent } from './categories/categories.component';
import { ItemsComponent } from './items/items.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { CreateOrderComponent } from './create-order/create-order.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'loggedIn', component: LoggedInComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'order-detail/:id', component: OrderDetailsComponent },
  { path: 'create-order', component: CreateOrderComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    ServiceComponent,
    SignupComponent,
    LoginComponent,
    CheffComponent,
    MenuComponent,
    MainComponent,
    LoggedInComponent,
    ItemDetailComponent,
    SidebarComponent,
    CategoriesComponent,
    ItemsComponent,
    OrdersComponent,
    OrderDetailsComponent,
    CreateOrderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    Ng2PageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
