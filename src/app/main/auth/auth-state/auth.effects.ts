import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';



export class ProductEffect {
    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router
    ) { }
    @Effect()
    Login$: Observable<Action> = this.actions$.pipe()


}