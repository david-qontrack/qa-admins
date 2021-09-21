import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddQaAdminApisComponent } from './components/add-qa-admin-apis/add-qa-admin-apis.component';
import { QaAdminApisComponent } from './components/qa-admin-apis/qa-admin-apis.component';
import { QaAdminApisDetailsComponent } from './components/qa-admin-apis-details/qa-admin-apis-details.component';
import { QaAdminApisDirective } from './components/qa-admin-apis.directive';
import { QaAdminApisListComponent } from './components/qa-admin-apis-list/qa-admin-apis-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddQaAdminApisComponent,
    QaAdminApisComponent,
    QaAdminApisDetailsComponent,
    QaAdminApisDirective,
    QaAdminApisListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
