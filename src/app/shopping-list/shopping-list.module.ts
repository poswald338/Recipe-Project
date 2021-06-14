import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FilterPipe } from "../filter.pipe";
import { LoggingService } from "../logging.service";
import { SharedModule } from "../shared/shared.module";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent,
    FilterPipe
  ],
  imports: [
    RouterModule.forChild([
      {path: '', component: ShoppingListComponent}
    ]),
    SharedModule,
    FormsModule
  ],
  // providers: [LoggingService]
})
export class ShoppingListModule {}
