import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoCardComponent } from './video-card/video-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [VideoCardComponent],
  imports: [CommonModule, RouterModule],
  exports: [VideoCardComponent]
})
export class SharedModule {}
