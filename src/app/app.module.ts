import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistListComponent } from './features/artist/artist-list/artist-list.component';
import { ArtistDetailComponent } from './features/artist/artist-detail/artist-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistListComponent,
    ArtistDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
