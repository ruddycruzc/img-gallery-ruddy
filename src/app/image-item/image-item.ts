import { Component, input,output } from '@angular/core';
import { Image } from '../interfaces/image-interface';

@Component({
  selector: 'app-image-item',
  imports: [],
  templateUrl: './image-item.html',
  styleUrl: './image-item.css',
})
export class ImageItem {
  image = input.required<Image>();
  isFeatured = input<boolean>(false);
  
  deleteImage = output<string>();

  onDeleteClick(event: MouseEvent) {
  event.stopPropagation();

  this.deleteImage.emit(this.image().id);
}
}