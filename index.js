let matrix = [
  [1, 0, 1, 0],
  [0, 1, 1, 0],
  [1, 0, 1, 0],
  [1, 0, 1, 0],
];

for (var i = 0; i < matrix.length; i++) {
  var doc = document.createElement('div');
  doc.className = 'item-holder';

  for (var j = 0; j < matrix.length; j++) {
    doc.innerHTML += `<div class="item">${matrix[i][j]}</div>`;
    // console.log(`j = ${j}`);
    // console.log(`[${i}][${j}]`);
    document.getElementsByClassName('container')[0].appendChild(doc);
  }
}
