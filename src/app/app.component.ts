import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rank_no: number = 5;
  rankArray: any;
  noOfOptions: number = 2;
  x: any;
  options = [{
    title: "option",
    rank: 0,
  }, {
    title: "option",
    rank: 0
  }]
  constructor() {

  }
  ngOnInit(): void {
    this.rankArray = Array(this.rank_no).fill().map((x, i) => i);
    console.log(this.rankArray)
  }
  addOption() {
    this.options.push({
      title: "option",
      rank: 0
    })

    console.log(this.options);
  }
  deleteOption(i) {
    this.options.splice(i, 1);
  }
  check(rank, event) {
    console.log(event)
    Array.from(document.getElementsByClassName(rank)).map(x=>x['checked']=false);
    event.target.checked=true;
  }
}
