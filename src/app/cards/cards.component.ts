import { Component, OnInit } from '@angular/core';
import { HandChecker } from '../hand-checker';

@Component({
  moduleId: module.id,
  selector: 'app-cards',
  templateUrl: 'cards.component.html',
  styleUrls: ['cards.component.css']
})
export class CardsComponent implements OnInit {
  constructor(handChecker: HandChecker) {}
  ngOnInit() {}
  selectedCards = {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null
  }
   cards = [
    { name: "Ace Of Spades",
      value: 14,
      suit: 'spade',
      r: true
    },    
    { name: "Two of Hearts",
      value: 2,
      suit: 'heart'
    },    
    { name: "Five of hearts",
      value: 5,
      suit: 'hearts'
    },    
    { name: "three of clubs",
      value: 3,
      suit: 'club'
      
    }
  ]

  // select box changed method
  selectBoxChanged(){
    console.log(this.selectedCards);

  }
}
