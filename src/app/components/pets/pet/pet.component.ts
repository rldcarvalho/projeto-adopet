import { Component, Input } from '@angular/core';
import { Pet } from './pet';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent {
  @Input() pet: Pet = {
      name : '',
      age : '',
      alt : '',
      img : '',
      size : '',
      feature : '',
      address : ''
  }
  
  @Input() petsList: Pet[] = []; 

}
