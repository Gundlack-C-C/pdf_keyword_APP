import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextInputViewComponent } from './views/text-input-view/text-input-view.component';
import { WikiComponent } from './wiki/wiki.component';

const routes: Routes = [
  { path: 'wiki', component: WikiComponent },
  { path: 'text-input', redirectTo: '/text-input/manual', pathMatch: 'full' },
  { path: 'text-input/:type', component: TextInputViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
