import { context } from './canvas';

export class GenericObject {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y,
    };

    this.image = image;
    this.height = this.image.height;
    this.width = this.image.width;
  }

  draw() {
    context.drawImage(this.image, this.position.x, this.position.y);
  }
}
