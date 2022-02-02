import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material.module';
import { NgImageSliderModule } from 'ng-image-slider';

import { ContainerComponent } from '../container/container.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MainComponent } from '../main/main.component';
import { AboutComponent } from '../about/about.component';
import { MediaComponent } from '../media/media.component';
import { ContactComponent } from '../contact/contact.component';
import { EventsComponent } from '../events/events.component';
import { CodeComponent } from '../code/code.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    AboutComponent,
    MediaComponent,
    ContactComponent,
    EventsComponent,
    FooterComponent,
    CodeComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgImageSliderModule
  ]
})
export class ContainerModule { }
