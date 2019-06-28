import { Component, ElementRef, Renderer2, ViewChild, QueryList, ContentChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // options = [{
  //   title: "option",
  //   rank: 0,
  //   scale: [0, 1]
  // }, {
  //   title: "option",
  //   rank: 0,
  //   scale: [0, 1]
  // }]
  options = [{
    title: "option",
    rank: 0,
    scale: [{ "selected": false, "index": 0 }, { "selected": false, "index": 1 }]
  }, {
    title: "option",
    rank: 0,
    scale: [{ "selected": false, "index": 0 }, { "selected": false, "index": 1 }]
  }]
  constructor(private renderer: Renderer2, private el: ElementRef) {
  }

  ngOnInit(): void { }
  addOption() {
    let scale = this.options[0].scale.map(object => ({ ...object }));
    this.options.push({
      title: "option",
      rank: 0,
      scale: scale
    });
    this.options.map(x => x.scale.push({ "selected": false, "index": this.options.length - 1 }));

    // console.log("scale", this.options)
  }
  deleteOption(row_index) {
    this.options.map(x => x.scale.pop());
    this.options.splice(row_index, 1);
  }
  check(row_index, option, column_index) {
    //   Array.from(document.getElementsByClassName(column_index)).map(x=>x['checked']=false); 
    //   event.target.checked=true;
    this.options.map(x => x.scale[column_index].selected = false);
    option.selected = true;
    this.options.map((x) => {
      if (x.rank == column_index + 1) {
        x.rank = 0;
      }
    })
    this.options[row_index].rank = column_index + 1;
    console.log(this.options)
  }
}
