import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'owl-carousel-with-angular6';

  //This is to generate random placeholder images
  mySlideImages = ['sample.png','sample.png','sample.png','sample.png'].map((i)=> `assets/images/${i}`); 
 
  myCarouselImages = [{ text: 'ID FOR ART', img: 'assets/images/1.png'},
  { text: 'BENEFITS', img: 'assets/images/2.png'},
  { text: 'MEET DARTAKEY', img: 'assets/images/3.png'},
  { text: 'RECORDING ARTWORK ', img: 'assets/images/4.png'},
  { text: 'MEMBERSHIPS', img: 'assets/images/5.png'},
  { text: 'ID FOR ART', img: 'assets/images/3.png'}];
  
  profileCarousel=['sample.png','sample.png','sample.png','sample.png'].map((i)=>`assets/images/${i}`);
  
  mySlideOptions={items: 3, dots: true, nav: true,loop:true};
  myCarouselOptions={items: 5, loop:true,dots: true, nav: true};
  profileCarouselOptions={items: 3, loop:true,dots: true, nav: true}
  constructor() { }

  ngOnInit() {
  }

}
