import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { MovieState, reducer as movieReducer } from './movie.reducer';

export interface ApplicationState {
  movies: MovieState;
}

export const reducers: ActionReducerMap<ApplicationState> = {
  movies: movieReducer
};

export const metaReducers: MetaReducer<ApplicationState>[] = !environment.production ? [] : [];
