import { Component, EventEmitter, Output } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  constructor() { }

  powers = ['Teleportation', 'Superhuman strength', 'Array of weapons', 'Espionage & Infiltration', 'Transformation'];

  @Output() formSubmitted = new EventEmitter<{name :string, power: string, alterEgo: string}>();
 
  newHeroName :string = '';
  newPower :string = '';
  newAlterEgo :string = '';

  model = new Hero(1, "Iron Man", this.powers[2]);

  submitted = false;

  onSubmit(){
    this.submitted = true;
  }

  disabled = false;

  onCreateHero(){
    this.formSubmitted.emit({
      name: this.newHeroName,
      power: this.newPower,
      alterEgo: this.newAlterEgo
    })
  }
}
