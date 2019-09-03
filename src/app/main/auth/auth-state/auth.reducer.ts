import { EntityState } from '@ngrx/entity';
import { Users } from '../auth.model';
import * as fromRoot from '../../../state/appState';

export interface UsersState extends EntityState<Users> {
    selectedProductId: number | null;
    loading: boolean;
    loaded: boolean;
    error: string;
}
export interface AppState extends fromRoot.AppState {
    products: UsersState;
}