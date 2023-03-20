import spriteStandLeftImageSrc from '../images/spriteStandLeft.png';
import spriteStandRightImageSrc from '../images/spriteStandRight.png';
import spriteRunLeftImageSrc from '../images/spriteRunLeft.png';
import spriteRunRightImageSrc from '../images/spriteRunRight.png';
import { createImage } from './createImage';
import { context } from './canvas';
import { canvas } from './canvas';

const gravity = 0.15;

export class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100,
    };
    this.height = 150;
    this.width = 66;

    this.speed = 10;
    this.velocity = {
      x: 0,
      y: 0,
    };

    this.frame = 0;

    this.sprites = {
      stand: {
        right: createImage(spriteStandRightImageSrc),
        left: createImage(spriteStandLeftImageSrc),
        cropWidth: 177,
        width: 66,
      },
      run: {
        right: createImage(spriteRunRightImageSrc),
        left: createImage(spriteRunLeftImageSrc),
        cropWidth: 341,
        width: 127.875,
      },
    };

    this.currentSprite = this.sprites.stand.right;
    this.cropWidth = this.sprites.stand.cropWidth;
  }

  update() {
    this.draw();

    this.frame++;
    if (
      this.frame > 59 &&
      (this.currentSprite == this.sprites.stand.right ||
        this.currentSprite == this.sprites.stand.left)
    )
      this.frame = 0;
    else if (
      this.frame > 29 &&
      (this.currentSprite == this.sprites.run.right ||
        this.currentSprite == this.sprites.run.left)
    )
      this.frame = 0;

    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;

    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      this.velocity.y += gravity;
    }
  }

  draw() {
    context.drawImage(
      this.currentSprite,
      this.cropWidth * this.frame,
      0,
      this.cropWidth,
      400,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}
