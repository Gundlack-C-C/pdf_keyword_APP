import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TextAnalyseViewComponent } from './views/text-analyse-view/text-analyse-view.component';
import { TextInputViewComponent } from './views/text-input-view/text-input-view.component';
import { WikiComponent } from './wiki/wiki.component';

const routes: Routes = [
  { path: '/', component: AppComponent },
  { path: 'wiki', component: WikiComponent },
  { path: 'text-input', redirectTo: '/text-input/manual', pathMatch: 'full' },
  { path: 'text-input/:type', component: TextInputViewComponent },
  { path: 'text-analyse', redirectTo: '/text-analyse/manual/sklearn_count', pathMatch: 'full' },
  { path: 'text-analyse/:type/:type-algo', component: TextAnalyseViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
