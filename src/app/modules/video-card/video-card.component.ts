import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoCardComponent implements OnInit {
  @HostBinding('class.movie') movieClass = true;
  @Input() movie: Movie;
  @Input() routePath: string;

  constructor() {}

  ngOnInit(): void {}
}
