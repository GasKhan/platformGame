import platformImageSrc from '../images/platform.png';
import platformSmallTallImageSrc from '../images/platformSmallTall.png';
import backgroundImageSrc from '../images/background.png';
import hillsImageSrc from '../images/hills.png';
import spriteStandLeftImageSrc from '../images/spriteStandLeft.png';
import spriteStandRightImageSrc from '../images/spriteStandRight.png';
import spriteRunLeftImageSrc from '../images/spriteRunLeft.png';
import spriteRunRightImageSrc from '../images/spriteRunRight.png';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.height = 576;
canvas.width = 1024;

const gravity = 0.15;

class Player {
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

class Platform {
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

class GenericObject {
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

function createImage(imageSrc) {
  const image = new Image();
  image.src = imageSrc;
  return image;
}

let platformImage = createImage(platformImageSrc);

let player = new Player();
let platforms = [];
let genericObjects = [];

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
  platforms = [
    new Platform({ x: 0, y: 460, image: platformImage }),
    new Platform({
      x: platformImage.width - 3,
      y: 460,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 2 + 100,
      y: 460,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 3 + 250,
      y: 460,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 4 - 40,
      y: 235,
      image: createImage(platformSmallTallImageSrc),
    }),
    new Platform({
      x: platformImage.width * 4 + 800,
      y: 460,
      image: platformImage,
    }),
  ];
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

  if (scrollProgress > platformImage.width * 4 + 800) {
    console.log('You won!');
  }

  if (player.position.y > canvas.height) init();

  genericObjects.forEach((genericObject) => genericObject.draw());
  platforms.forEach((platform) => platform.draw());
  player.update();
};

init();
animate();

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
      player.velocity.y -= 5;
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
