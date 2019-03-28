// this import should be first in order to load some required settings (like globals and reflect-metadata)
// import { platformNativeScriptDynamic } from "nativescript-angular/platform";

// import { AppModule } from "./app/app.module";
// import { APP_ROOT_VIEW } from "nativescript-angular/platform-providers";
// import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
// import { Label } from "tns-core-modules/ui/label";
import { run as applicationRun } from "tns-core-modules/application/application";


applicationRun( { moduleName: "app-root" });
