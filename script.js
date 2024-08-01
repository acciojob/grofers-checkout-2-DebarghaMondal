
let priceElements =document.querySelectorAll('[data-ns-test="price"]');

let total = 0;
for (let i = 0; i < priceElements.length;i++){
	total+= parseFloat(priceElements[i].textContent)
};

let newRow = document.createElement('tr');
let newCell = document.createElement('td');

newCell.textContent = total;
newRow.appendChild(newCell);

document.getElementById('myTable').appendChild(newRow);

newCell.setAttribute('data-ns-test', 'grandTotal')