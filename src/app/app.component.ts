import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  options = [{
    title: "option",
    rank: 0,
  }, {
    title: "option",
    rank: 0
  }]
  constructor() {

  }
  ngOnInit(): void { }
  addOption() {
    this.options.push({
      title: "option",
      rank: 0
    })
  }
  deleteOption(i) {
    this.options.splice(i, 1);
  }
  check(column_index, event) {
    Array.from(document.getElementsByClassName(column_index)).map(x=>x['checked']=false);
    event.target.checked=true;
  }
}
