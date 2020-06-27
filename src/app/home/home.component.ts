import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public show = false;
  public buttonName: any = 'Ver detalhes';

  public show1 = false;
  public buttonName1: any = 'Ver detalhes';

  public show2 = false;
  public buttonName2: any = 'Ver detalhes';

  ngOnInit() {  }

  toggle() {

    // CHANGE THE NAME OF THE BUTTON.
    if (this.show === true) {
      this.show = false;
      this.buttonName = 'Ver detalhes';
    }
    else {
      this.show = true;
      this.buttonName = 'Ocutar Detalhes';
    }
  }
  toggle1() {

    // CHANGE THE NAME OF THE BUTTON.
    if (this.show1 === true) {
      this.show1 = false;
      this.buttonName1 = 'Ver detalhes';
    }
    else {
      this.show1 = true;
      this.buttonName1 = 'Ocutar Detalhes';
    }
  }
  toggle2() {

    // CHANGE THE NAME OF THE BUTTON.
    if (this.show2 === true) {
      this.show2 = false;
      this.buttonName2 = 'Ver detalhes';
    }
    else {
      this.show2 = true;
      this.buttonName2 = 'Ocutar Detalhes';
    }
  }

}
export class NgbdDropdownBasic {
}


