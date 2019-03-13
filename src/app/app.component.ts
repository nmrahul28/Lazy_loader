import { Component, OnInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lazyloader';
  loader: Boolean=false;
  public data1=Array(100);
  public data2=Array(100);
  @HostListener('window:scroll')
  scroll_func(){
    if((window.innerHeight+window.scrollY) >= document.body.offsetHeight){
      this.loader=true;
      this.data1.push(this.data2);
      setTimeout(()=>
        this.loader=false,1000);
    }
  }
  ngOnInit(){}
}
