window.addEventListener('load', solve);

function solve() {

  const makeEl = document.getElementById('make');
  const modelEl = document.getElementById('model');
  const yearEl = document.getElementById('year');
  const fuelEl = document.getElementById('fuel');
  const originalPriceEl = document.getElementById('original-cost');
  const sellingPriceEl = document.getElementById('selling-price');
  const btnPublish = document.getElementById('publish');

  const tBodyEl = document.getElementById('table-body');
  const ulList = document.getElementById('cars-list');
  const profitEl = document.getElementById('profit');

  btnPublish.addEventListener('click', (e) => {
    e.preventDefault();
    const make = makeEl.value;
    const model = modelEl.value;
    const year = yearEl.value;
    const fuel = fuelEl.value;
    const originalPrice = Number(originalPriceEl.value);
    const sellingPrice = Number(sellingPriceEl.value);

    if (makeEl.value === '' || modelEl.value === '' || yearEl.value === '' || originalPriceEl.value === '' || fuelEl.value === '' || sellingPriceEl.value === '' || Number(originalPriceEl.value) > Number(sellingPriceEl.value)) {
      return;
    }

    const tr = createEl('tr', '', tBodyEl);
    tr.classList = 'row';
    const tdMake = createEl('td', makeEl.value, tr);
    const tdModel = createEl('td', modelEl.value, tr);
    const tdYear = createEl('td', yearEl.value, tr);
    const tdFuel = createEl('td', fuelEl.value, tr);
    const tdOrgPrice = createEl('td', originalPriceEl.value, tr);
    const tdSellingPrice = createEl('td', sellingPriceEl.value, tr);
    const tdButtons = createEl('td', '', tr);
    const btnEdit = createEl('button', 'Edit', tdButtons);
    btnEdit.classList = 'action-btn edit';
    const btnSell = createEl('button', 'Sell', tdButtons);
    btnSell.classList = 'action-btn sell';
    // tBodyEl.appendChild(tr);

    makeEl.value = '';
    modelEl.value = '';
    yearEl.value = '';
    fuelEl.value = '';
    originalPriceEl.value = '';
    sellingPriceEl.value = '';

    btnEdit.addEventListener('click', () => {
      makeEl.value = make;
      modelEl.value = model;
      yearEl.value = year;
      fuelEl.value = fuel;
      originalPriceEl.value = originalPrice;
      sellingPriceEl.value = sellingPrice;
      tr.remove();
    });

    btnSell.addEventListener('click',()=>{
      let difInPrice = Number(tdSellingPrice.textContent) - Number(tdOrgPrice.textContent);
      const liList = createEl('li','',ulList);
      liList.classList = 'each-list';
      const span1 = createEl('span',`${make} ${model}`,liList);
      const span2 = createEl('span', year, liList);
      const span3 = createEl('span', difInPrice,liList);
      tr.remove();
      profitEl.textContent = (Number(profitEl.textContent) + difInPrice).toFixed(2);

    });

  });

  function createEl(type, content, parent) {
    const element = document.createElement(type);
    element.textContent = content;
    parent.appendChild(element);
    return element;
  }
}
