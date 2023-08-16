import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleOneComponent } from './module-one/module-one.component';
import { HomeComponent } from './home/home.component';
import { ModuleTwoComponent } from './module-two/module-two.component';
import { ModuleThreeComponent } from './module-three/module-three.component';

type PathMatch = 'full' | 'prefix' | undefined;

const routes: Routes = [
  { path: '', pathMatch: 'full' as PathMatch, component: HomeComponent },
  { path: 'one', component: ModuleOneComponent },
  { path: 'two', component: ModuleTwoComponent },
  { path: 'three', component: ModuleThreeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
