import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  imageSize = {
    width: '400px',
    height: '400px'
  }

  imageObject: any[] = [
    {
      image: 'assets/images/soloists.jpg',
      thumbImage: 'assets/images/soloists.jpg',
      order: 1,
      url: 'https://beneisenberger.bandcamp.com/album/soloists'
    },
    {
      image: 'assets/images/screaming-plastic.jpg',
      thumbImage: 'assets/images/screaming-plastic.jpg',
      order: 2,
      url: 'https://screamingplastic.bandcamp.com/album/screaming-plastic-2'
    },
    {
      image: 'assets/images/three-islands.jpg',
      thumbImage: 'assets/images/three-islands.jpg',
      order: 3,
      url: 'https://beneisenberger.bandcamp.com/album/three-islands'
    },
    {
      image: 'assets/images/fifi-nono.jpg',
      thumbImage: 'assets/images/fifi-nono.jpg',
      order: 4,
      url: 'https://beneisenberger.bandcamp.com/albums/soloists'
    },
    {
      image: 'assets/images/nowhere.jpg',
      thumbImage: 'assets/images/nowhere.jpg',
      order: 5,
      url: 'https://hussies.bandcamp.com/album/nowhere'
    },
    {
      image: 'assets/images/songs-for-the-anxious.jpg',
      thumbImage: 'assets/images/songs-for-the-anxious.jpg',
      order: 6,
      url: 'https://beneisenberger.bandcamp.com/albums/soloists'
    },
    {
      image: 'assets/images/live-improvisations-2.jpg',
      thumbImage: 'assets/images/live-improvisations-2.jpg',
      order: 7,
      url: 'https://beneisenberger.bandcamp.com/albums/soloists'
    },
    {
      image: 'assets/images/live-improvisations.jpg',
      thumbImage: 'assets/images/live-improvisations.jpg',
      order: 8,
      url: 'https://beneisenberger.bandcamp.com/albums/soloists'
    },
    {
      image: 'assets/images/going.jpeg',
      thumbImage: 'assets/images/going.jpeg',
      order: 9,
      url: 'https://beneisenberger.bandcamp.com/albums/soloists'
    }
  ];

  onImageClick(i: number) {
    window.location.href = this.imageObject[i].url;
  }
}
