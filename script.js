(function () {
  const yesBtn = document.getElementById('yesBtn');
  const noBtn = document.getElementById('noBtn');
  const catImage = document.getElementById('catImage');
  const noMessageEl = document.getElementById('noMessage');
  const card = document.getElementById('card');
  const success = document.getElementById('success');
  const sceneRose = document.getElementById('sceneRose');

  if (!yesBtn || !noBtn || !catImage || !card || !success) return;

  const sadImages = [
    'images/sad1.png',
    'images/sad2.png',
    'images/sad3.png',
    'images/sad4.png',
    'images/sad5.png'
  ];

  let noClicks = 0;
  let yesScale = 1;
  let noScale = 1;

  function setScales() {
    yesBtn.style.transform = `scale(${yesScale.toFixed(3)})`;
    noBtn.style.transform = `scale(${noScale.toFixed(3)})`;
  }

  function updateImageOnNo() {
    const idx = Math.min(noClicks, sadImages.length - 1);
    catImage.src = sadImages[idx];
  }

  const pleaMessages = [
    'Pleaseee =((',
    'Are you sure? :(',
    'Pretty please with a heart 💗',
    'Okay okay, I give up... 😿'
  ];

  function updateMessageOnNo() {
    if (!noMessageEl) return;
    const idx = Math.min(Math.max(noClicks - 1, 0), pleaMessages.length - 1);
    noMessageEl.textContent = pleaMessages[idx];
    noMessageEl.classList.remove('subtitle-bump');
    // Force reflow to restart animation
    // eslint-disable-next-line no-unused-expressions
    void noMessageEl.offsetWidth;
    noMessageEl.classList.add('subtitle-bump');
  }

  function shakeNo() {
    noBtn.classList.remove('shake');
    // Force reflow to restart animation
    // eslint-disable-next-line no-unused-expressions
    void noBtn.offsetWidth;
    noBtn.classList.add('shake');
  }

  function spawnRosesBurst(count = 14) {
    const symbols = ['🌹'];
    for (let i = 0; i < count; i++) {
      const span = document.createElement('span');
      span.className = 'flying-rose';
      span.textContent = symbols[i % symbols.length];
      const dx = (Math.random() * 60 - 30).toFixed(1) + 'vw';
      const delay = (Math.random() * 0.6).toFixed(2) + 's';
      span.style.setProperty('--dx', dx);
      span.style.left = `${Math.random() * 90 + 5}%`;
      span.style.animationDelay = delay;
      document.body.appendChild(span);
      setTimeout(() => span.remove(), 3800);
    }
  }

  noBtn.addEventListener('click', () => {
    noClicks += 1;

    updateImageOnNo();
    updateMessageOnNo();

    yesScale *= 1.3;
    noScale *= 0.7;
    setScales();

    shakeNo();

    if (noClicks >= 4) {
      noBtn.disabled = true;
    }
  });

  yesBtn.addEventListener('click', () => {
    yesBtn.classList.add('grow-pop');

    // Transition to success view
    card.classList.add('hidden');
    success.classList.remove('hidden');

    // Roses celebration
    spawnRosesBurst(24);

    // Auto-transition to rose-beauty scene after 1.5s
    setTimeout(() => {
      if (!sceneRose) return;
      success.classList.add('hidden');
      sceneRose.classList.remove('hidden');
    }, 1500);
  });
})();


