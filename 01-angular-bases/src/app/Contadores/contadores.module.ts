import { NgModule } from "@angular/core";
import { ContadorComponent } from './Contador/contador.component';

@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ]
})
export class ContadoresModule {

}