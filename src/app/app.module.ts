import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

// My Components
import { AppComponent } from './app.component';
import { EpgrecComponent } from './epgrec.component';
import { EpgChannelComponent } from './epg-channel.component';

// My Services
import { DeviceService } from './device/device.service';
import { WindowRefService } from './window-ref/window-ref.service';
import { ProgramService } from './program/program.service';

@NgModule({
  declarations: [
    AppComponent,
    EpgrecComponent,
    EpgChannelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [
    DeviceService,
    WindowRefService,
    ProgramService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
