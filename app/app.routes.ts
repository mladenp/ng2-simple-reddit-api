import { Routes, RouterModule } from '@angular/router';

import { ImagesComponent } from './images/images.component';
import { SingleImageComponent } from './single-image/singleImage.component';

const routes: Routes = [
  {path: '', component: ImagesComponent},
  {path: 'single/:id', component: SingleImageComponent}
];

export const routing = RouterModule.forRoot(routes);
