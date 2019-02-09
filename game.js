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
    modifier: 7,
    description: 'Words will never hurt me. Yay, more power.'
  }

}

function stick() {
  target.items.push(items.sticks)

}

function stone() {
  target.items.push(items.stones)
}

function word() {
  target.items.push(items.words)
}

let total = 0;

function addMods() {
  for (let i = 0; i < target.items.length; i++) {
    total += target.items[i].modifier
  }

  return total;
}


function slap() {
  addMods()
  target.health -= total;
  target.health--;
  target.hits++;

  update()
}

function punch() {
  target.health -= 5;
  target.hits++;

  update()
  addMods()
}

function kick() {
  target.health -= 10;
  target.hits++;

  update()
  addMods()
}

function update() {
  document.getElementById('health').innerText = target.health.toString();
  document.getElementById('hits').innerText = target.hits.toString();

  total = 0;
}