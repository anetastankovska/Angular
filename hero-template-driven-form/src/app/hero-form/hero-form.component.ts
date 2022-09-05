import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  constructor() { }

  powers = ['Teleportation', 'Superhuman strength', 'Array of weapons', 'Espionage & Infiltration', 'Transformation'];

  model = new Hero(1, "Iron Man", this.powers[2]);

  submitted = false;

  onSubmit(){
    this.submitted = true;
  }
}
