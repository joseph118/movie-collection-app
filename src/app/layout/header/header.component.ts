import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../../reducers';
import { filterByText } from '../../actions/filters.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  constructor(private store: Store<ApplicationState>) {}

  ngOnInit(): void {}

  onSearch(data: KeyboardEvent): void {
    const value = (data.target as HTMLInputElement).value;
    this.store.dispatch(filterByText({ payload: value }));
  }
}
