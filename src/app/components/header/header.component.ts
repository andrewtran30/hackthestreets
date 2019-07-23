import { Component, OnInit, ViewChild, Renderer, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @ViewChild('myToolbar', {read: ElementRef}) myToolbar;
  constructor(public navCtrl: NavController, public renderer: Renderer) { }

  changeStyle() {
    this.renderer.setElementStyle(this.myToolbar.nativeElement, 'opacity: 0');
  }
  ngOnInit() {}

}
