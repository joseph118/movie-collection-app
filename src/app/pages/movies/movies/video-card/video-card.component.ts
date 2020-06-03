import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from '@angular/core';
import { Movie } from '../../../../types/movie.type';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoCardComponent implements OnInit {
  @HostBinding('class.movie') movieClass = true;
  @Input() movie: Movie;
  constructor() {}

  ngOnInit(): void {}
}
