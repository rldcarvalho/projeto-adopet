import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Pet } from "./pet/pet";

@Injectable({
    providedIn: 'root'
  })

export class PetsService {
    private readonly API = 'http://localhost:3000/pets'

    constructor(private http: HttpClient) { }

    getPetList(): Observable<Pet[]> {
        return this.http.get<Pet[]>(this.API);
    }
}