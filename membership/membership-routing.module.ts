import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'mshp-dashboard',
        loadChildren: () => import('./mshp-dashboard/mshp-dashboard.module').then(module => module.MshpDashboardModule)
      },
      
      {
        path: 'mshp-user',
        loadChildren: () => import('./mshp-user/mshp-user.module').then(module => module.MshpUserModule)
      },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembershipRoutingModule { }
