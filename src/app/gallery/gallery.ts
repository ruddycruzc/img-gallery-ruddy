import { Component } from '@angular/core';
import { Image } from '../interfaces/image-interface';
import { ImageItem } from '../image-item/image-item';

@Component({
  selector: 'app-gallery',
  imports: [ImageItem],  //Como Angular moderno usa standalone components debemos importar el hijo manualmente
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
 images: Image[] = [
  {
    image: 'https://i.pravatar.cc/300?img=1',
    fullName: 'Emma Wilson',
    alt: 'Emma Wilson avatar',
  },
  {
    image: 'https://i.pravatar.cc/300?img=2',
    fullName: 'Liam Carter',
    alt: 'Liam Carter avatar',
  },
  {
    image: 'https://i.pravatar.cc/300?img=3',
    fullName: 'Sophia Miller',
    alt: 'Sophia Miller avatar',
  },
  {
    image: 'https://i.pravatar.cc/300?img=4',
    fullName: 'Noah Bennett',
    alt: 'Noah Bennett avatar',
  },
  {
    image: 'https://i.pravatar.cc/300?img=5',
    fullName: 'Olivia Davis',
    alt: 'Olivia Davis avatar',
  },
  {
    image: 'https://i.pravatar.cc/300?img=6',
    fullName: 'Ethan Moore',
    alt: 'Ethan Moore avatar',
  },
  {
    image: 'https://i.pravatar.cc/300?img=7',
    fullName: 'Ava Thompson',
    alt: 'Ava Thompson avatar',
  },
  {
    image: 'https://i.pravatar.cc/300?img=8',
    fullName: 'Lucas Anderson',
    alt: 'Lucas Anderson avatar',
  },
  {
    image: 'https://i.pravatar.cc/300?img=9',
    fullName: 'Mia Johnson',
    alt: 'Mia Johnson avatar',
  },
];
}
