import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  OddNumbers = [ 1,3,5];
  EvenNumbers = [ 2,4];
  constructor()
  {
    var i;
    for ( i = 0; i <= 20; i++){
      if(i % 2 == 0){
      this.EvenNumbers.push(i)
      }
      else {
        this.OddNumbers.push(i)
      }
    }
  }
  onlyOdd = false;
  color:string;
  colors = ['pink','orange','yellow','red'];
  errormessage = '';
  keyupvalues = '';
  OnKey(event:KeyboardEvent)
  {
    this.keyupvalues += (<HTMLInputElement>event.target).value + '|' ;
  }

  OnAddList(listname:string)
  {
    if (listname) {
      this.colors.push(listname);
      this.errormessage = 'listname successfully added';
    }
  }
  OnRemoveList(listname:string)
  {
    if(listname.match(this.colors[0]))
    {
      this.colors.pop();
  
    }
    else{
    this.errormessage = 'Entered color name doesnot exists in the list to remove it';
    }

  }
 
}
