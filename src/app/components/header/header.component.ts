import { Component, OnInit, ViewChild, Renderer, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @ViewChild('myHome', {read: ElementRef}) myHome;
  constructor(public navCtrl: NavController, public renderer: Renderer) { }

  changeHomeStyle() {
    console.log('CLICKED BUTTON')
    this.renderer.setElementStyle(this.myHome.nativeElement, 'border: 1px solid white');
  }
  ngOnInit() {}

}
