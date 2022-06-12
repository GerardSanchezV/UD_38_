import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformacionComponent } from './informacion/informacion.component';
import { HomeComponent } from './home/home.component';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [{
  path: 'lista',
  component:ListaComponent
},
{
  path: 'info',
  component:InformacionComponent
},
{
  path: 'home',
  component:HomeComponent
}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
