import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
 import { ProductsComponent } from './products/products.component';
 import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';

import { RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { AssignService } from './assign.service';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import { MatDialogModule, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogOverviewComponent } from "./dialog-overview/dialog-overview.component";
import { DialogeOverviewDialogComponent } from './dialoge-overview-dialog/dialoge-overview-dialog.component';
import { MatButtonModule,MatFormFieldModule,MatInputModule,MatRippleModule, MatSnackBarModule, MatSnackBarContainer, MatSnackBar} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule, MatRadioButton} from '@angular/material';
 

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
     ProductsComponent,
     AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    DialogOverviewComponent,
    DialogeOverviewDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
     RouterModule.forRoot([
       {path:'products',component:ProductsComponent, canActivate:[AuthGuardService]},
       {path:'login', component:LoginComponent},  
 
      {path:'admin/orders', component:AdminOrdersComponent},
      {path:'admin/products', component:AdminProductsComponent},

      {path:'admin/products/new', component:ProductFormComponent},

      {path:'admin/products/:id', component:ProductFormComponent},

      {path:'dialoge/overview', component:DialogOverviewComponent},
 
      
    ]),
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule, 
    MatRippleModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatRadioModule,
 

  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatRadioButton
  ],
  providers: [
        ,
    AuthGuardService,
    AssignService,
    ProductService ,
    AuthService,
    MatSnackBar,{
      provide: MAT_DIALOG_DATA,
      useValue: {}
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [MatSnackBarContainer]
})
export class AppModule { }
