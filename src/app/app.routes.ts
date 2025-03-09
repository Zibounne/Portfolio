import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})

export class AppRoutingModule { }
