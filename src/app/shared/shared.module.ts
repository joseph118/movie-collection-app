import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoCardComponent } from './video-card/video-card.component';

@NgModule({
  declarations: [VideoCardComponent],
  imports: [CommonModule],
  exports: [VideoCardComponent]
})
export class SharedModule {}
