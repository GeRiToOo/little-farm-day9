const sounds = ['cow', 'chicken', 'donkey', 'goose', 'kitten', 'doggy'];
const buttons = document.querySelector('.buttons');

sounds.forEach((sound) => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  buttons.appendChild(btn);

  btn.addEventListener('click', () => {
    document.getElementById(sound).play();
  });
  const image = document.createElement('img');
  image.src = `./images/${sound}.png`;
  btn.appendChild(image);
});
