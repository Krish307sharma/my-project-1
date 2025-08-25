const svg = document.getElementById('canvas');
const clearBtn = document.getElementById('clearBtn');

let drawing = false;
let currentPath = null;

function getPoint(evt) {
  const r = svg.getBoundingClientRect();
  return { x: evt.clientX - r.left, y: evt.clientY - r.top };
}

svg.addEventListener('mousedown', (e) => {
  drawing = true;
  const p = getPoint(e);
  currentPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  currentPath.setAttribute('d', `M ${p.x} ${p.y}`);
  svg.appendChild(currentPath);
});

svg.addEventListener('mousemove', (e) => {
  if (!drawing || !currentPath) return;
  const p = getPoint(e);
  let d = currentPath.getAttribute('d');
  d += ` L ${p.x} ${p.y}`;
  currentPath.setAttribute('d', d);
});

window.addEventListener('mouseup', () => {
  drawing = false;
  currentPath = null;
});

clearBtn.addEventListener('click', () => {
  while (svg.firstChild) svg.removeChild(svg.firstChild);
});
