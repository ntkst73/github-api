import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoReposComponent } from './components/info-repos/info-repos.component';
import { ReposComponent } from './components/repos/repos.component';


const routes: Routes = [
  { path: 'repos', component: ReposComponent},
  { path: 'info', component: InfoReposComponent},
  { path: 'info/:id', component: InfoReposComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
