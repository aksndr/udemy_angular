import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningsComponent } from './warnings/warnings.component';
import { WarningErrorComponent } from './warning/error/warning.error.component';
import { WarningSuccessComponent } from './warning/success/warning.success.component';

@NgModule({
  declarations: [
    AppComponent, ServerComponent, ServersComponent, WarningsComponent, WarningErrorComponent, WarningSuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
