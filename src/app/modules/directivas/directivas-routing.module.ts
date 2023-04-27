import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@modules/home/pages/home/home.component';
import { NgClassComponent } from './pages/ng-class/ng-class.component';
import { NgForComponent } from './pages/ng-for/ng-for.component';
import { NgIFComponent } from './pages/ng-if/ng-if.component';
import { NgStyleComponent } from './pages/ng-style/ng-style.component';
import { NgSwitchComponent } from './pages/ng-switch/ng-switch.component';
import { BindingComponent } from './pages/binding/binding.component';
import { NgModelComponent } from './pages/ng-model/ng-model.component';


const routes: Routes = [
  {path : 'home', component : HomeComponent, title : 'Home'},
  {path : 'ngIf', component : NgIFComponent, title : 'ngIf' },
  {path : 'ngFor', component : NgForComponent, title : 'ngFor' },
  {path : 'ngSwitch', component : NgSwitchComponent, title : 'ngSwitch' },
  {path : 'ngStyle', component : NgStyleComponent, title : 'ngStyle' },
  {path : 'ngClass', component : NgClassComponent, title : 'ngClass' },
  {path : 'ngModel', component : NgModelComponent, title : 'ngModel'},
  {path : 'binding', component : BindingComponent, title : 'binding'}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DirectivasRoutingModule { }
