import { init, Sprite, GameLoop } from 'kontra';

let { canvas } = init();

let sprite = Sprite({
  x: 0,        // starting x,y position of the sprite
  y: 80,
  color: 'rgb(0, 0, 0)',  // fill color of the sprite rectangle
  width: 20,     // width and height of the sprite rectangle
  height: 40,
  dx: 2,          // move the sprite 2px to the right every frame
  red: 0,
  colourIncrement: 1,
});

let loop = GameLoop({  // create the main game loop
  update: function() { // update the game state
    if (sprite.red > 254) {
      sprite.colourIncrement = -1;
    }

    if (sprite.red < 1) {
      sprite.colourIncrement = 1;
    }
    sprite.red = sprite.red + sprite.colourIncrement;

    sprite.color = `rgb(${sprite.red} 0 0)`;

    sprite.update();

    // wrap the sprites position when it reaches
    // the edge of the screen
    if (sprite.x > canvas.width) {
      sprite.x = -sprite.width;
    }
  },
  render: function() { // render the game state
    sprite.render();
  }
});

loop.start();    // start the game


