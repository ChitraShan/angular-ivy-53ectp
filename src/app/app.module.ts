import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { ApprouterModule } from './approuter/approuter.module';

@NgModule({
  imports: [BrowserModule, FormsModule, ApprouterModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContentComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
