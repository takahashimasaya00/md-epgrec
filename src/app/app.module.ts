import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

// My Components
import { AppComponent } from './app.component';
import { EpgrecComponent } from './epgrec/epgrec.component';
import { EpgChannelComponent } from './epg-channel/epg-channel.component';

// My Pipe
import { CategoryColorPipe } from './category/category-color.pipe';

// My Services
import { CategoryService } from './category/category.service';
import { ChannelService } from './channel/channel.service';
import { DeviceService } from './device/device.service';
import { ProgramService } from './program/program.service';
import { WindowRefService } from './window-ref/window-ref.service';

@NgModule({
  declarations: [
    AppComponent,
    EpgrecComponent,
    EpgChannelComponent,
    CategoryColorPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [
    CategoryService,
    ChannelService,
    DeviceService,
    ProgramService,
    WindowRefService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
