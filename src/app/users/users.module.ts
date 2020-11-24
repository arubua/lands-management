import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LrDashboardComponent } from './land-registrar/dashboard/lr-dashboard.component';
import { LrMenuComponent } from './land-registrar/menu/menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LandOwnerRegistrationComponent } from "./land-registrar/actions/land-owner-reg.component";
import { NewLandRecordComponent } from "./land-registrar/actions/new-land-record.component";
import { InitiateTransferComponent } from './land-registrar/actions/initiate-transfer.component';
import { ModifyLandRecordComponent } from './land-registrar/actions/modify-land-record.component';
import { ApproveLandTransferComponent } from './land-registrar/actions/approve-land-transfer.component';
import { RevenueDashboardComponent } from './revenue-authority/dashboard/revenue_dashboard.component';
import { RevenueMenuComponent } from './revenue-authority/menu/menu.component';
import { ApprovalsComponent } from './revenue-authority/actions/approvals.component';
import { PendingComponent } from './revenue-authority/actions/pending.component';
import { AdminDashboardComponent } from './admin/dashboard/admin-dashboard.component';
import { AdminMenuComponent } from './admin/menu/menu.component';
import { LandOwnerMenuComponent } from './land-owner/menu/menu.component';
import { LandOwnerDashboardComponent } from './land-owner/dashboard/dashboard.component';
import { CheckinComponent } from '../auth/checkin/checkin.component';
import { Globals } from "../../globals";

//import services here
import {
  AuthService,
  AlertsService,
} from '../services';

//import guards here
import {
  AuthGuard,
  RevenueAuthGuard,
  LandRegistryAuthGuard,
  LandOwnerAuthGuard,
  AdminAuthGuard
} from '../guards';
import { DeclinesComponent } from './revenue-authority/actions/declines.component';
import { CreateNewComponent } from './admin/actions/create-new.component';
import { SearchUserComponent } from './admin/actions/search-user.component';
import { ApprovedComponent } from './land-owner/actions/approved.component';
import { DeclinedComponent } from './land-owner/actions/declined.component';
import { PendingOwnerComponent } from './land-owner/actions/pending.component';


@NgModule({
  declarations: [ 
    LrDashboardComponent,
    LrMenuComponent,
    LandOwnerRegistrationComponent,
    NewLandRecordComponent,
    InitiateTransferComponent,
    LandOwnerDashboardComponent,
    ModifyLandRecordComponent,
    ApproveLandTransferComponent,
    RevenueDashboardComponent,
    RevenueMenuComponent,
    LandOwnerMenuComponent,
    AdminMenuComponent,
    PendingComponent,
    ApprovalsComponent,
    AdminDashboardComponent,
    CheckinComponent,
    DeclinesComponent,
    CreateNewComponent,
    SearchUserComponent,
    ApprovedComponent,
    DeclinedComponent,
    PendingOwnerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: "checkin",
        canActivate: [AuthGuard],
        component: CheckinComponent
      },
      { 
        path: "lands",
        canActivate: [LandRegistryAuthGuard],
        component: LrMenuComponent,
        children:[
          {path:"", component:LrDashboardComponent},
          {path:"dashboard", component:LrDashboardComponent},
          {path:"registration", component:LandOwnerRegistrationComponent},
          {path:"new_record", component:NewLandRecordComponent},
          {path:"initiate_transfer", component:InitiateTransferComponent},
          {path:"modify", component:ModifyLandRecordComponent},
          {path:"approve", component:ApproveLandTransferComponent}
        ] 
      },
      { 
        path: "revenue",
        canActivate: [RevenueAuthGuard],
        component: RevenueMenuComponent,
        children:[
          {path:"", component:RevenueDashboardComponent},
          {path:"dashboard", component:RevenueDashboardComponent},
          {path:"pending", component:PendingComponent},
          {path:"approvals", component:ApprovalsComponent},
          {path:"declines", component:DeclinesComponent},
        ] 
      },
      { 
        path: "admin",
        canActivate: [AdminAuthGuard],
        component: AdminMenuComponent,
        children:[
          {path:"", component:AdminDashboardComponent},
          {path:"dashboard", component:AdminDashboardComponent},
          {path:"create-new", component:CreateNewComponent},
          {path:"search-user", component:SearchUserComponent}
        ] 
      },
      { 
        path: "land-owner",
        canActivate: [LandOwnerAuthGuard],
        component: LandOwnerMenuComponent,
        children:[
          {path:"", component:LandOwnerDashboardComponent},
          {path:"dashboard", component:LandOwnerDashboardComponent},
          {path:"pending", component:PendingOwnerComponent},
          {path:"approved", component:ApprovedComponent},
          {path:"declined", component:DeclinedComponent}
        ] 
      }
    ]),
    FontAwesomeModule
  ],
  providers: [
    Globals,
    LandRegistryAuthGuard,
    RevenueAuthGuard,
    LandOwnerAuthGuard,
    AdminAuthGuard
  ]
})
export class UsersModule { }
