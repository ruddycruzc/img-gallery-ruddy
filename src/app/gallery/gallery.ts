import { Component, signal } from '@angular/core';
import { Image } from '../interfaces/image-interface';
import { ImageItem } from '../image-item/image-item';

@Component({
  selector: 'app-gallery',
  imports: [ImageItem],  //Como Angular moderno usa standalone components debemos importar el hijo manualmente
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
 images= signal< Image[]>([
  
  {
    id:"emma-wilson",
    image: 'https://i.pravatar.cc/300?img=1',
    fullName: 'Emma Wilson',
    alt: 'Emma Wilson avatar',
  },
  {
    id:"liam-carter",
    image: 'https://i.pravatar.cc/300?img=2',
    fullName: 'Liam Carter',
    alt: 'Liam Carter avatar',
  },
  {
    id:"sophia-miller",
    image: 'https://i.pravatar.cc/300?img=3',
    fullName: 'Sophia Miller',
    alt: 'Sophia Miller avatar',
  },
  {
    id:"noah-bennet",
    image: 'https://i.pravatar.cc/300?img=4',
    fullName: 'Noah Bennett',
    alt: 'Noah Bennett avatar',
  },
  {
    id:"olivia-davis",
    image: 'https://i.pravatar.cc/300?img=5',
    fullName: 'Olivia Davis',
    alt: 'Olivia Davis avatar',
  },
  {
    id:"ethan-moore",
    image: 'https://i.pravatar.cc/300?img=6',
    fullName: 'Ethan Moore',
    alt: 'Ethan Moore avatar',
  },
  {
    id:"ava-thompson",
    image: 'https://i.pravatar.cc/300?img=7',
    fullName: 'Ava Thompson',
    alt: 'Ava Thompson avatar',
  },
  {
    id:"lucas-anderson",
    image: 'https://i.pravatar.cc/300?img=8',
    fullName: 'Lucas Anderson',
    alt: 'Lucas Anderson avatar',
  },
  {
    id: "mia-johnson",
    image: 'https://i.pravatar.cc/300?img=9',
    fullName: 'Mia Johnson',
    alt: 'Mia Johnson avatar',
  },
  
]);
  featuredImageId = signal<string>(this.images()[0]?.id || '');
  
removeImage(id: string) {
  const confirmed = window.confirm(
    '¿Estás seguro de que quieres eliminar esta imagen?'
  );

  if (confirmed) {
    this.images.update((currentImages) =>
      currentImages.filter((image) => image.id !== id)
    );

    if (this.featuredImageId() === id) {
      this.featuredImageId.set(this.images()[0]?.id || '');
    }
  }
}

}

