'use strict';
const n = document.querySelector('.btn--new');
const r = document.querySelector('.btn--roll');
const s = document.querySelectorAll('.score');
const c3 = document.querySelectorAll('.current-score');
const p1 = document.querySelector('.player--0 ');
const p2 = document.querySelector('.player--1');
const d = document.querySelector('.dice');
const ps1 = document.getElementById('score--0');
let c, a, h, play;
const init = function () {
  c = 0;
  a = 0;
  h = [0, 0];
  play = true;
  d.classList.add('hidden');
  p1.classList.add('player--active');
  p2.classList.remove('player--active');
};
init();
const y = function () {
  p1.classList.toggle('player--active');
  p2.classList.toggle('player--active');
};
const z = function () {
  c3[1].textContent = c3[0].textContent = 0;
  c = 0;
  a == 0 ? (a = 1) : (a = 0);
  y();
};
s[0].textContent = s[1].textContent = '0';
d.classList.add('hidden');
for (let i = 0; i < s.length; i++) {
  n.addEventListener('click', function () {
    s[i].textContent = '0';
    c3[i].textContent = 0;
    p1.classList.remove('player--winner');
    p2.classList.remove('player--winner');
    init();
  });
}
r.addEventListener('click', function () {
  if (play) {
    const dn = Math.trunc(Math.random() * 6) + 1;
    d.classList.remove('hidden');
    d.src = `dice-${dn}.png`;
    if (dn !== 1) {
      //console.log('sdvv');

      c += dn;
      document.getElementById(`current--${a}`).textContent = c;
    } else {
      z();
      // document.querySelector('btn--hold').disabled = true;
    }
  }
});
document.querySelector('.btn--hold').addEventListener('click', function () {
  if (play) {
    h[a] += c;
    s[a].textContent = h[a];
    // d.classList.add('hidden');
    if (h[a] >= 50) {
      d.classList.add('hidden');
      document.querySelector(`.player--${a}`).classList.add('player--winner');
      document
        .querySelector(`.player--${a}`)
        .classList.remove('player--active');
      play = false;
      // y();
    } else {
      z();
    }
  }
});
