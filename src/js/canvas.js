import platformImageSrc from '../images/platform.png';
import platformSmallTallImageSrc from '../images/platformSmallTall.png';
import backgroundImageSrc from '../images/background.png';
import hillsImageSrc from '../images/hills.png';
import { Player } from './Player';
import { Platform } from './Platform';
import { createImage } from './createImage';
import { GenericObject } from './GenericObject';

export const canvas = document.querySelector('canvas');
export const context = canvas.getContext('2d');

canvas.height = 576;
canvas.width = 1024;

let platformImage = createImage(platformImageSrc);

let player = new Player();
let platforms = [];
let genericObjects = [];
let gap = 100;

let lastKey;
const keys = {
  left: {
    isPressed: false,
  },
  right: {
    isPressed: false,
  },
};

let scrollProgress = 0;

function init() {
  platformImage = createImage(platformImageSrc);

  player = new Player();
  platforms = [new Platform({ x: 0, y: 460, image: platformImage })];

  for (let i = 1; i <= 27; i++) {
    if (i % 3 === 0) gap += 200;

    if (i % 5 === 0) {
      platforms.push(
        new Platform({
          x: platformImage.width * i - 40,
          y: 355,
          image: createImage(platformSmallTallImageSrc),
        })
      );
    } else {
      platforms.push(
        new Platform({
          x: platformImage.width * i + gap,
          y: 460,
          image: platformImage,
        })
      );
    }
  }
  genericObjects = [
    new GenericObject({ x: -1, y: -1, image: createImage(backgroundImageSrc) }),
    new GenericObject({ x: 0, y: 0, image: createImage(backgroundImageSrc) }),
    new GenericObject({ x: 0, y: 0, image: createImage(hillsImageSrc) }),
  ];

  scrollProgress = 0;
}

const animate = () => {
  requestAnimationFrame(animate);

  context.fillStyle = '#fff';
  context.fillRect(0, 0, canvas.width, canvas.height);

  if (
    (keys.left.isPressed && player.position.x > 100) ||
    (keys.left.isPressed && player.position.x > 0 && scrollProgress === 0)
  ) {
    player.velocity.x -= player.speed;
  } else if (keys.right.isPressed && player.position.x < 400) {
    player.velocity.x += player.speed;
  } else {
    player.velocity.x = 0;

    if (keys.left.isPressed && scrollProgress > 0) {
      scrollProgress -= player.speed;
      platforms.forEach((platform) => {
        platform.position.x += player.speed;
      });
      genericObjects.forEach(
        (genericObject) => (genericObject.position.x += player.speed * 0.66)
      );
    } else if (keys.right.isPressed) {
      scrollProgress += player.speed;
      platforms.forEach((platform) => {
        platform.position.x -= player.speed;
      });
      genericObjects.forEach(
        (genericObject) => (genericObject.position.x -= player.speed * 0.66)
      );
    }
  }

  platforms.forEach((platform) => {
    if (
      player.position.y + player.height <= platform.position.y &&
      player.position.y + player.height + player.velocity.y >=
        platform.position.y &&
      player.position.x + player.width >= platform.position.x &&
      player.position.x < platform.position.x + platform.width
    ) {
      player.velocity.y = 0;
    }
  });

  if (
    keys.right.isPressed &&
    lastKey === 'right' &&
    player.currentSprite !== player.sprites.run.right
  ) {
    player.frame = 1;
    player.currentSprite = player.sprites.run.right;
    player.cropWidth = player.sprites.run.cropWidth;
    player.width = player.sprites.run.width;
  } else if (
    keys.left.isPressed &&
    lastKey === 'left' &&
    player.currentSprite !== player.sprites.run.left
  ) {
    player.frame = 1;
    player.currentSprite = player.sprites.run.left;
    player.cropWidth = player.sprites.run.cropWidth;
    player.width = player.sprites.run.width;
  } else if (
    !keys.left.isPressed &&
    lastKey === 'left' &&
    player.currentSprite !== player.sprites.stand.left
  ) {
    player.frame = 1;
    player.currentSprite = player.sprites.stand.left;
    player.cropWidth = player.sprites.stand.cropWidth;
    player.width = player.sprites.stand.width;
  } else if (
    !keys.right.isPressed &&
    lastKey === 'right' &&
    player.currentSprite !== player.sprites.stand.right
  ) {
    player.frame = 1;
    player.currentSprite = player.sprites.stand.right;
    player.cropWidth = player.sprites.stand.cropWidth;
    player.width = player.sprites.stand.width;
  }

  if (scrollProgress > platformImage.width * 27 + gap) {
    console.log('You won!');
  }

  if (player.position.y > canvas.height) init();

  genericObjects.forEach((genericObject) => genericObject.draw());
  platforms.forEach((platform) => platform.draw());
  player.update();
};

init();
animate();

//Event listeners
window.addEventListener('keydown', ({ keyCode }) => {
  switch (keyCode) {
    case 65: {
      keys.left.isPressed = true;
      lastKey = 'left';
      break;
    }
    case 68: {
      keys.right.isPressed = true;
      lastKey = 'right';
      break;
    }
    case 87: {
      player.velocity.y -= 10;
      break;
    }
    case 83: {
    }
  }
});

window.addEventListener('keyup', ({ keyCode }) => {
  switch (keyCode) {
    case 65: {
      keys.left.isPressed = false;
      break;
    }
    case 68: {
      keys.right.isPressed = false;
      break;
    }
    case 87: {
      player.velocity.y = 0;
      break;
    }
  }
});
