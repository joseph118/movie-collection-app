import { GenreType } from './genre.model';

export interface Movie {
  id: number;
  key: string;
  name: string;
  description: string;
  genres: GenreType[];
  rate: string;
  length: string;
  img: string;
}

export type Movies = Movie[];
