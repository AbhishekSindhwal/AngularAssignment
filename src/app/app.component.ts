import { Component } from '@angular/core';
import { RouterOutlet , RouterLink, RouterLinkActive} from '@angular/router';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserSearchComponent } from './MyComponents/user-search/user-search.component';
import { ComplaintTypeComponent } from './MyComponents/complaint-type/complaint-type.component';
import { ResponseComponent } from './MyComponents/response/response.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    UserSearchComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assigment';
}
