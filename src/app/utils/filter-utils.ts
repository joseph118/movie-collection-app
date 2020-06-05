import { ActivatedRoute } from '@angular/router';
import { Genres } from '../models/genre.model';

export class FilterUtils {
  public static getFilterQueryParams(
    activatedRoute: ActivatedRoute,
    genreList: Genres
  ): { text: string; genres: Genres } {
    const text = activatedRoute.snapshot.queryParams?.text;
    const genres = activatedRoute.snapshot.queryParams?.genres
      ?.split(',')
      .filter(urlGenre => genreList.find(genre => urlGenre === genre)); // Clean unknown filters
    return { text, genres };
  }
}
