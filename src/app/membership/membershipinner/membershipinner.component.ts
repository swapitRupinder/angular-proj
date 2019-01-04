import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membershipinner',
  templateUrl: './membershipinner.component.html',
  styleUrls: ['./membershipinner.component.scss']
})
export class MembershipinnerComponent implements OnInit {

  membershipCarousel = [{ heading: 'Galleries',content:'Record your entire body of work including a code which will stay with your artwork for its lifespan	and beyond.Dartakey also doubles as a stock inventory ans sales', img: 'assets/images/gallery.png'},
  { heading: 'Slide 2',content:'Record and manage stock with eases', img: 'assets/images/2.png'},
  { heading: 'Slide 3',content:'Record and manage stock with ', img: 'assets/images/3.png'}];
  
membershipCarouselOptions={items: 1, loop:true,dots: true, nav: true};

  
  constructor() { }

  ngOnInit() {
  }

}
