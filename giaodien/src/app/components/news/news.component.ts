import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  cards = Array.from({ length: 9 }, (_, index) => ({
    id: index + 1,
    title: `Card title ${index + 1}`,
    text: 'This is a longer card with supporting text below as a natural lead-in to additional content.',
    img: 'public/anh1.png'
  }));
  newsItems = [
    {
      id: 1,
      title: 'News title 1',
      description: 'This is a short description of the news item 1.',
      img: 'public/anh1.png'
    },
    {
      id: 2,
      title: 'News title 2',
      description: 'This is a short description of the news item 2.',
      img: 'public/anh1.png'
    },
    {
      id: 3,
      title: 'News title 3',
      description: 'This is a short description of the news item 3.',
      img: 'public/anh1.png'
    },
    {
      id: 4,
      title: 'News title 4',
      description: 'This is a short description of the news item 4.',
      img: 'public/anh1.png'
    }
  ];
}
