import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { AssetsComponent } from './components/assets/assets.component';
import { AddAssetComponent } from './components/add-asset/add-asset.component';
import { EditAssetComponent } from './components/edit-asset/edit-asset.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';

//Angular Route
const appRoutes: Routes = [
  { path: "", component: AssetsComponent },
  { path: 'edit/:id', component: EditAssetComponent },
  { path: 'about', component: AboutComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    ButtonComponent,
    AssetsComponent,
    AddAssetComponent,
    EditAssetComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
