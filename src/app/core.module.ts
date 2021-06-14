import { NgModule } from "@angular/core";
import { ShoppingService } from "./shopping-list/shopping.service";
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoggingService } from "./logging.service";

@NgModule({
  providers: [
    ShoppingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ]
})
export class CoreModule {}
