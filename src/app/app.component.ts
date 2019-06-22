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
  deleteOption(row_index) {
    // const deletedRank=this.options[row_index].rank;
    this.options.splice(row_index, 1);
    // for(let i=0;i<this.options.length;i++){
    //   if(this.options[i].rank>deletedRank){
    //     console.log(this.options[i].rank,deletedRank)
    //     this.options[i].rank=this.options[i].rank-1;
    //   }
    // }    
   
  }
  check(row_index,column_index, event) {
    Array.from(document.getElementsByClassName(column_index)).map(x=>x['checked']=false);
    event.target.checked=true;
    this.options.map((x)=>{if(x.rank==column_index+1){
      x.rank=0;
    }})
    this.options[row_index].rank=column_index+1;
    console.log("rank",this.options)
  }
}
