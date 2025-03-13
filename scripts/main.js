const button = document.getElementById('colorButton');
const body = document.body;

button.addEventListener('click', () => {
  const backgrounds = [
    'url("https://i.ytimg.com/vi/6LTe9iUJKec/maxresdefault.jpg")',
    'url("https://i.pinimg.com/originals/ea/4a/a8/ea4aa8f5132de06aac97c79cf82ff735.jpg")'
  ];
  const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  body.style.backgroundImage = randomBackground.includes('url') ? randomBackground : 'none';
  body.style.backgroundColor = randomBackground.includes('url') ? '#f4f4f4' : randomBackground;
});
