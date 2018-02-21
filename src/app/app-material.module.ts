import { NgModule } from '@angular/core';

import {
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatInputModule
} from '@angular/material';

@NgModule({
    exports: [
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatInputModule
    ]
})
export class AppMaterialModule {}
