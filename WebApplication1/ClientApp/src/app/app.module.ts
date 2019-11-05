import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { MainpromoComponent } from './mainpromo/mainpromo.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { PageheaderComponent } from './pageheader/pageheader.component';
import { FooterComponent } from './footer/footer.component';
import { SocialiconsComponent } from './socialicons/socialicons.component';
import { BlogsService } from './blogs.service';
import { RecentpostComponent } from './recentpost/recentpost.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { BlogcategoriesComponent } from './blogcategories/blogcategories.component';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { BlogupdateComponent } from './blogupdate/blogupdate.component';
import { ContactComponent } from './contact/contact.component';
import { FormsuccessfulComponent } from './formsuccessful/formsuccessful.component';
import { MessagesComponent } from './messages/messages.component';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { SecondaryComponent } from './secondary/secondary.component';
import { SimplesearchComponent } from './simplesearch/simplesearch.component';
import { SimplesubscribeComponent } from './simplesubscribe/simplesubscribe.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { SubscribeconfirmationComponent } from './subscribeconfirmation/subscribeconfirmation.component';
import { CategoryupdateComponent } from './categoryupdate/categoryupdate.component';
import { CategoriesService } from './category.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    MainpromoComponent,
    MainmenuComponent,
    PageheaderComponent,
    FooterComponent,
    SocialiconsComponent,
    RecentpostComponent,
    AdmindashboardComponent,
    BlogcategoriesComponent,
    BlogpostComponent,
    BlogupdateComponent,
    CategoryupdateComponent,
    ContactComponent,
    FormsuccessfulComponent,
    MessagesComponent,
    SearchresultComponent,
    SecondaryComponent,
    SimplesearchComponent,
    SimplesubscribeComponent,
    SubscribeComponent,
    SubscribeconfirmationComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'secondary', component: SecondaryComponent },
      { path: 'contactus', component: ContactComponent },
      { path: 'blogpost/:id', component: BlogpostComponent },
      { path: 'searchresult/:text', component: SearchresultComponent },
      { path: 'subscribeconfirmation/:email', component: SubscribeconfirmationComponent },
      { path: 'formsuccessful', component: FormsuccessfulComponent },
      { path: 'blogadmin', component: AdmindashboardComponent },
      { path: 'blogupdate/:id', component: BlogupdateComponent },
      { path: 'categoryupdate/:id', component: CategoryupdateComponent }
    ])
  ],
  providers: [
    BlogsService,
    CategoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
