import { Component } from '@angular/core';

@Component({
  selector: 'app-our-blog',
  templateUrl: './our-blog.component.html',
  styleUrls: ['./our-blog.component.scss']
})
export class OurBlogComponent {
  customOptions = {
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    }
  };

  blogs = [
    {
      image: 'assets/blog1.jpg',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: 'September 7, 2023'
    },
    {
      image: 'assets/blog2.jpg',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: 'August 15, 2023'
    },
    {
      image: 'assets/blog3.jpg',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: 'May 10, 2023'
    }
  ];
}
