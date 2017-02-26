import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Depend Package
import { MaterialModule } from '@angular/material';
import { ScrollSpyModule } from 'ng2-scrollspy';

// My Components
import { AppComponent } from './app.component';
import { EpgrecComponent } from './epgrec/epgrec.component';
import { EpgChannelComponent } from './epg-channel/epg-channel.component';
import { ProgramComponent } from './program/program.component';
import { TimelineComponent } from './timeline/timeline.component';

// My Pipe
import { CategoryAvatarPipe } from './category/category-avatar.pipe';
import { CategoryColorPipe } from './category/category-color.pipe';
import { DatexPipe } from './datex/datex.pipe';

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
    ProgramComponent,
    TimelineComponent,
    CategoryAvatarPipe,
    CategoryColorPipe,
    DatexPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    ScrollSpyModule.forRoot()
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
