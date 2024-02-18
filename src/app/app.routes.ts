import { Routes } from '@angular/router';
import { ComplaintTypeComponent } from './MyComponents/complaint-type/complaint-type.component';
import { ResponseComponent } from './MyComponents/response/response.component';

export const routes: Routes = [
    // {path:'', component:UserSearchComponent},
    {path:'complaintComponent', component:ComplaintTypeComponent},
    {path:'responseComponent', component:ResponseComponent}

];