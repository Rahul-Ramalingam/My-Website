import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailsComponentComponent } from './components/blog-component/blog-details-component/blog-details-component.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ShowcasePageComponent } from './pages/showcase-page/showcase-page.component';

const routes: Routes = [
  { path:'', component:HomePageComponent },
  { path:'aboutme', component:AboutPageComponent },
  { path:'showcase', component:ShowcasePageComponent },
  { path:'blog', 
    children:[
      {path:'', component:BlogPageComponent},
      {path: 'blogDetailedView/:id/:title', component: BlogDetailsComponentComponent}
    ] 
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
