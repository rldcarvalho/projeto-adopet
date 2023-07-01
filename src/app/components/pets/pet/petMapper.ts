import { Pet } from './pet';

export class PetMapper {
  static mapFromJson(json: any): Pet {
    return {
      id: json.id,
      name: json.petNome,
      age: json.petIdade,
      alt: json.alt,
      img: json.img,
      size: json.petPorte,
      feature: json.petCaracteristica,
      address: json.petEndereco
    };
  }
}