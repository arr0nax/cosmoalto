import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MusicComponent } from './music/music.component';

const appRoutes: Routes = [
  {
    path: '',
    component: SplashComponent
  }, {
    path: 'contact',
    component: ContactComponent
  }, {
    path: 'about',
    component: AboutComponent
  }, {
    path: 'music',
    component: MusicComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
