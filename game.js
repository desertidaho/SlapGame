let total = 0;

let target = {
  name: 'happyStick',
  health: 100,
  hits: 0,
  items: []
}

let items = {
  sticks: {
    name: 'Stick',
    modifier: 3,
    description: 'Breaking bones, ouch!'
  },
  stones: {
    name: 'Stone',
    modifier: 5,
    description: 'Breaking bones, double Ouch!'
  },
  words: {
    name: 'Words',
    modifier: 10,
    description: 'Words will never hurt me. Yay, more power.'
  }
}

function modifier(type) {
  if (target.items.length == 0) {
    target.items.push(items[type])
    document.getElementById('stick-btn').disabled = true;
    document.getElementById('stone-btn').disabled = true;
  } else {

  }
}

function word() {
  if (target.health <= 90) {
    target.health += 10;
  }
  update()
}

function addMods() {
  for (let i = 0; i < target.items.length; i++) {
    total += target.items[i].modifier
  }
  return total;
}

function attack(type) {
  addMods()
  if (target.health >= total + 1) {
    target.health -= total;
    target.hits++;
    if (type == 'slap') {
      target.health--;
    } else if (type == 'punch') {
      target.health -= 5;
    } else {
      if (target.health >= 10) {
        target.health -= 10;
      }
    }
  }
  update()
}

function update() {
  document.getElementById('health').innerText = target.health.toString();
  document.getElementById('hits').innerText = target.hits.toString();

  if (target.health >= 1) {
    document.getElementById('slap1').disabled = false;
  } else {
    document.getElementById('slap1').disabled = true;
  }
  if (target.health >= 5) {
    document.getElementById('punch5').disabled = false;
  } else {
    document.getElementById('punch5').disabled = true;
  }
  if (target.health >= 10) {
    document.getElementById('kick10').disabled = false;
  } else {
    document.getElementById('kick10').disabled = true;
  }

  document.getElementById('stick-btn').disabled = false;
  document.getElementById('stone-btn').disabled = false;
  if (target.health <= 90) {
    document.getElementById('word-btn').disabled = false;
  } else {
    document.getElementById('word-btn').disabled = true;
  }

  total = 0;
  target.items = [];
}


/*
old code, refactored above

function slap() {
  addMods()
  if (target.health >= total + 1) {
    target.health -= total;
    target.health--;
    target.hits++;
  }
  update()
}

function punch() {
  addMods()
  if (target.health >= total + 1) {
    target.health -= total;
    target.health -= 5;
    target.hits++;
  }
  update()
}

function kick() {
  addMods()
  if (target.health >= total + 1) {
    target.health -= total;
    target.health -= 10;
    target.hits++;
  }
  update()
}

function stone() {
  target.items.push(items.stones)
}

*/