import { Component } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio'
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complaint-type',
  standalone: true,
  imports: [MatRadioModule,RouterOutlet],
  templateUrl: './complaint-type.component.html',
  styleUrl: './complaint-type.component.css'
})
export class ComplaintTypeComponent {
  constructor(private router: Router) { }

  isOptionSelected:Boolean=false;
  onContinue1() {
      this.router.navigate(['responseComponent']);
  }

  onSelectionChange(event: any) {
    this.isOptionSelected = event.value ? true : false;
  }
}
