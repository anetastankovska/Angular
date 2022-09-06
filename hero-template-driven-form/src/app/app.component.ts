import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hero-template-driven-form';

  @Input() heroes :Hero[] = [];

  onHeroCreated(heroData: {name: string, power: string, alterEgo: string}) {
    this.heroes.push({
      id: this.heroes.length + 1,
      name: heroData.name,
      power: heroData.power,
      alterEgo: heroData.alterEgo 
    })
  }

  // heroes : Hero[] = [{id: 1, name: "Aneta", power: 'Strength', alterEgo: "Ane"}]
}
