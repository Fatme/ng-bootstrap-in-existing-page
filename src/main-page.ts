import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app/app.module";
import { APP_ROOT_VIEW } from "nativescript-angular/platform-providers";

export function uiLoaded(args) {
	console.log("---->> grid loaded!");
	setTimeout(() => {
		const appPromise = platformNativeScriptDynamic({ bootInExistingPage: true}, [{
			provide: APP_ROOT_VIEW,
			useValue: args.object
		}]
		).bootstrapModule(AppModule);

		appPromise.then(result => {
			console.log(" =========== AFTER NG!!! ========== ");
			console.log(result);
		});
	}, 1000);
}
