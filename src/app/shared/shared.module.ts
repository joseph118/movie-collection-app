import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoCardComponent } from './video-card/video-card.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [VideoCardComponent, LoaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [VideoCardComponent, LoaderComponent]
})
export class SharedModule {}
