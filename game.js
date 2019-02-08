let health = 100;
let name = 'happyStick';
let hits = 0;

function slap() {
  health--;
  hits++;

  update()
}

function punch() {
  health -= 5;
  hits++;

  update()
}

function kick() {
  health -= 10;
  hits++;

  update()
}

function update() {
  document.getElementById('health').innerText = health.toString();
  document.getElementById('hits').innerText = hits.toString();

}