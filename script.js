const openLetter = document.getElementById('openLetter');
const letter = document.getElementById('letter');
const ourSong = document.getElementById('ourSong');
const passwordForm = document.getElementById('passwordForm');
const sitePassword = document.getElementById('sitePassword');
const passwordError = document.getElementById('passwordError');

passwordForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (sitePassword.value.trim() !== '19/10/2026') {
    passwordError.textContent = 'That date is not quite right. Please try again.';
    sitePassword.select();
    return;
  }

  document.getElementById('passwordGate').hidden = true;
  document.getElementById('siteContent').hidden = false;
  document.body.classList.remove('locked');
});

openLetter.addEventListener('click', () => {
  letter.scrollIntoView({ behavior: 'smooth' });
  ourSong.play().catch((error) => {
    console.error('Unable to start the song:', error);
    document.querySelector('.music-sub').textContent =
      'The song could not start automatically. Press play below to listen.';
  });
});

document.getElementById('forgiveBtn').addEventListener('click', () => {
  document.getElementById('response').textContent =
    'You just made Yassin the happiest person. The real gift is still on its way! ❤️';

  for (let i = 0; i < 24; i++) {
    setTimeout(createHeart, i * 75);
  }
});

function createHeart() {
  const heart = document.createElement('span');
  heart.textContent = ['♥', '♡', '💗'][Math.floor(Math.random() * 3)];
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (14 + Math.random() * 22) + 'px';
  heart.style.animationDuration = (4 + Math.random() * 4) + 's';

  document.querySelector('.floating-hearts').appendChild(heart);
  setTimeout(() => heart.remove(), 8500);
}

setInterval(() => {
  if (!document.body.classList.contains('locked')) {
    createHeart();
  }
}, 950);
