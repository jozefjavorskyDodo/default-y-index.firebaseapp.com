

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
import { Observable } from "rxjs";
import { from } from "rxjs";
import { of } from "rxjs";
import { pipe } from "rxjs";


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err_0) => {
    console.clear();
    console.error(err_0);
  });
