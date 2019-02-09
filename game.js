let total = 0;

let target = {
  name: 'Kung Fu Panda',
  health: 100,
  hits: 0,
  items: []
}

let items = {
  firework: {
    name: 'firework',
    modifier: 3,
    description: 'That\'s hot, ouch!'
  },
  ninjaStar: {
    name: 'ninjaStar',
    modifier: 5,
    description: 'Yikes, that\'s sharp, double ouch!'
  },
  noodles: {
    name: 'noodles',
    modifier: 10,
    description: 'Yummy, noodle soup. Yay, more power.'
  }
}

function modifyItem(type) {
  if (target.items.length == 0) {
    target.items.push(items[type])
    document.getElementById('firework').disabled = true;
    document.getElementById('ninjaStar').disabled = true;
  }
}

function eat() {
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
      document.getElementById('attackImg').setAttribute("style", "display: block")
      document.getElementById('attackImg').setAttribute("src", "img/slap.png")
      if (target.items.length > 0) {
        if (target.items[0].name == 'firework') {
          document.getElementById('attackMods').setAttribute("style", "display: block")
          document.getElementById('attackMods').setAttribute("src", "img/firework.png")
        }
        if (target.items[0].name == 'ninjaStar') {
          document.getElementById('attackMods').setAttribute("style", "display: block")
          document.getElementById('attackMods').setAttribute("src", "img/ninja-star.png")
        }
      }
    } else if (type == 'punch') {
      target.health -= 5;
      document.getElementById('attackImg').setAttribute("style", "display: block")
      document.getElementById('attackImg').setAttribute("src", "img/punch.png")
      if (target.items.length > 0) {
        if (target.items[0].name == 'firework') {
          document.getElementById('attackMods').setAttribute("style", "display: block")
          document.getElementById('attackMods').setAttribute("src", "img/firework.png")
        }
        if (target.items[0].name == 'ninjaStar') {
          document.getElementById('attackMods').setAttribute("style", "display: block")
          document.getElementById('attackMods').setAttribute("src", "img/ninja-star.png")
        }
      }
    } else {
      if (target.health >= 10) {
        target.health -= 10;
        document.getElementById('attackImg').setAttribute("style", "display: block")
        document.getElementById('attackImg').setAttribute("src", "img/kick.png")
        if (target.items.length > 0) {
          if (target.items[0].name == 'firework') {
            document.getElementById('attackMods').setAttribute("style", "display: block")
            document.getElementById('attackMods').setAttribute("src", "img/firework.png")
          }
          if (target.items[0].name == 'ninjaStar') {
            document.getElementById('attackMods').setAttribute("style", "display: block")
            document.getElementById('attackMods').setAttribute("src", "img/ninja-star.png")
          }
        }
      }
    }
  }
  update()
}

function update() {
  //update health, progress bar, and hits to screen
  document.getElementById('health').innerText = target.health.toString();
  document.getElementById('progress').style.width = target.health + '%';
  document.getElementById('hits').innerText = target.hits.toString();

  //change panda picture
  if (target.health < 100) {
    document.getElementById('pandaTarget').setAttribute("src", "img/panda-healthy.png")
  }
  if (target.health < 70) {
    document.getElementById('pandaTarget').setAttribute("src", "img/panda-block1.png")
  }
  if (target.health < 30) {
    document.getElementById('pandaTarget').setAttribute("src", "img/panda-block2.png")
  }
  if (target.health < 1) {
    document.getElementById('pandaTarget').setAttribute("src", "img/panda-defeated.png")
  }

  //remove attack image after delay
  setTimeout(function flashAttackImg() {
    document.getElementById('attackImg').setAttribute("style", "display: none")
    document.getElementById('attackMods').setAttribute("style", "display: none")
  }, 400);

  //attack buttons enabled/disabled logic
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

  //modifier buttons enabled/disabled logic
  document.getElementById('firework').disabled = false;
  document.getElementById('ninjaStar').disabled = false;
  if (target.health <= 90) {
    document.getElementById('noodles').disabled = false;
  } else {
    document.getElementById('noodles').disabled = true;
  }
  if (target.health == 0) {
    document.getElementById('noodles').disabled = true;
  }

  total = 0;
  target.items = [];
}

//game over, replay, stop play
let isGameOver = setInterval(function gameOver() {
  if (target.health == 0)
    $('#gameOver').modal('show')
}, 2000);

function playAgain() {
  location.reload();
}

function endGame() {
  clearInterval(isGameOver)
}