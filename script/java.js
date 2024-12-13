const gif = document.querySelector('.gif');
let isReversed = false;

gif.addEventListener('load', () => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const frames = [];
  let frameIndex = 0;

  canvas.width = gif.width;
  canvas.height = gif.height;

  const captureFrame = () => {
    ctx.drawImage(gif, 0, 0, gif.width, gif.height);
    frames.push(ctx.getImageData(0, 0, gif.width, gif.height));
  };

  const playReverse = () => {
    if (frameIndex < 0) {
      frameIndex = frames.length - 1;
    }
    ctx.putImageData(frames[frameIndex], 0, 0);
    frameIndex--;
    requestAnimationFrame(playReverse);
  };

  gif.addEventListener('animationiteration', () => {
    if (!isReversed) {
      for (let i = 0; i < gif.frames.length; i++) {
        captureFrame();
      }
      isReversed = true;
      playReverse();
    }
  });
});

