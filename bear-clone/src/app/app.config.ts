import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";

import { effects } from "@effects/index";
import { provideEffects } from "@ngrx/effects";
import { provideStore } from "@ngrx/store";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { metaReducers, reducers } from "@reducers/index";
import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(reducers, { metaReducers }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects(effects),
  ],
};
