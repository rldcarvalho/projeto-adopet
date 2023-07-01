import { PetMapper } from '../pet/petMapper';
import { PetsService } from '../pets.service';
import { Pet } from './../pet/pet';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.scss']
})
export class PetsListComponent {
  petsList: Pet[] = [];

  constructor(private service: PetsService){}

  ngOnInit(): void {
    this.service.getPetList().subscribe((petsList) => {
      this.petsList = petsList.map((json) => PetMapper.mapFromJson(json));
      console.log(this.petsList)
    })
  }
}


