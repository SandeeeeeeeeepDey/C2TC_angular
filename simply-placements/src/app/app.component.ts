import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simply-placements';
  private _load = '';
  public get load() {
    return this._load;
  }
  public set load(value) {
    this._load = value;
  }
  public page(value:string){
    this.load=value
  }
}
