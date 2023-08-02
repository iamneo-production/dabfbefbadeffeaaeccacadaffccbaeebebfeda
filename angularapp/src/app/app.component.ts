import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angularapp';
  alert: boolean = false;
  name: string = '';
  calories: string = '';
  qty: string = '';
  tot: number = 0;
  total: string = '';
  enteredSearch: string = '';
  searchText: string = '';
  cards: formData[] = []; 
  today: todayData[] = [];

  constructor() {}

  ngOnInit(): void {}
  data(f: NgForm) {
    console.log(f.value);
    this.cards.push(f.value);

    console.warn(this.cards.values);

    f.reset();
    this.alert = false;
  }
  onKey(value: string) {
    this.qty = value;
    console.log(this.qty);
  }
  onKey1(value: string) {
    this.enteredSearch = value;
    this.searchText = this.enteredSearch;
    //console.log(this.enteredSearch + ' ' + this.searchText);
  }
  addFoodCard(name: string, calories: string) {
    this.name = name;
    this.calories = calories;
    const tod: JSON = <JSON>(<unknown>{
      name: name,
      calories: calories,
      qty: this.qty,
    });
    console.log(tod);
    const tod1 = JSON.stringify(tod);
    //console.log(tod1);
    let jsonObject = JSON.parse(tod1);
    console.log(jsonObject);
    this.today.push(jsonObject);
    console.warn(this.today.values);
    //console.log(name + ' ' + calories + ' ' + this.qty);
    var sum = Number(calories) * Number(this.qty);
    this.tot += sum;
    this.total = this.tot.toString();
  }
  click1() {
    this.alert = true;
  }
}

interface formData {
  name: string;
  calories: string;
  image: URL;
}
interface todayData {
  name: string;
  calories: string;
  qty: string;
}
