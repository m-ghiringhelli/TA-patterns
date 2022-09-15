/* eslint-disable indent */
export function renderCandy(candy) {
  const li = document.createElement('li');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  h2.textContent = candy.name;
  p.textContent = candy.flavor + ' ' + candy.type;

  li.append(h2, p);

  return li;
}