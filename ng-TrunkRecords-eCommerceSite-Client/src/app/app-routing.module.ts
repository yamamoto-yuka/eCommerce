import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './admin/login/login.component';
import { ManageProductComponent } from './admin/manage-product/manage-product.component';
import { SignupComponent } from './admin/signup/signup.component';
import { UpdateComponent } from './admin/update/update.component';
import { ApparelComponent } from './apparel/apparel.component';
import { AppareldetailsComponent } from './appareldetails/appareldetails.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'apparel', component: ApparelComponent },
  { path: 'apparel/:id', component: AppareldetailsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: ManageProductComponent },
  { path: 'update/:id', component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
