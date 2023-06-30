import { Pet } from './../pet/pet';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.scss']
})
export class PetsListComponent {
  petsList: Pet[] = [];
}
