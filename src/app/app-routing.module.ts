import { NgModule } from '@angular/core';

import { CreateUserComponent } from './create-user/create-user.component';
import { UserComponent } from './user/user.component';
import { LoggerPoliciaComponent } from './logger-policia/logger-policia.component';
import { InformacionComponent } from './informacion/informacion.component';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/userComponent', pathMatch: 'full' },
    { path: 'appComponent', component: AppComponent},
    { path: 'userComponent', component: UserComponent},
    { path: 'createUserComponent', component: CreateUserComponent},
    { path: 'Logging', component: LoggerPoliciaComponent},
    { path: 'infomacion', component: InformacionComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
