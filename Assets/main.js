// const orderNowButtons = document.querySelectorAll('.OrderId');

// orderNowButtons.forEach(button => {
//     button.addEventListener('click', function(e) {
        
//         e.preventDefault();
//         const product = this.closest('.divMenuProduct'); 

//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td><img src="${product.querySelector('.img2').src}" width="100"></td>
//             <td>${product.querySelector('.title3').textContent}</td>
//             <td>${product.querySelector('.text3').textContent}</td>
//         `;

//         document.querySelector('tbody').appendChild(row);
//     });
// });

// const Delete = ()=>{
//     let div = document.querySelector('tbody')
//     div.innerHTML = ""
// }


// let clickCounter = 1;
// let clickPrice = document.querySelector(".text3");
// const tableBody = document.querySelector('tbody');
// const UpdateRow = (product) => {
//     const existingRow = tableBody.querySelector('.tbody');
//     if (existingRow) {
//         existingRow.querySelector('.click-counter').textContent = `(${++clickCounter})`;
//         existingRow.querySelector('.click-price').textContent = `$${clickPrice}`;
//     } else {
//         const row = document.createElement('tr');
//         row.classList.add('tbody');
//         row.innerHTML += `
//             <td><img src="${product.querySelector('.img2').src}" width="100"></td>
//             <td style="font-size:1.5vw;">${product.querySelector('.title3').textContent}</td>
//             <td class="click-price" style="font-size:1.2vw;" >$${clickPrice++}</td>
//             <td class="click-counter" style="color:#0e6800; font-weight: 600; font-size:1.2vw;">${clickCounter}</td>
//         `;
//         tableBody.appendChild(row);
//     }
// };
// const orderNowBtn = document.querySelectorAll('.OrderId');
// orderNowBtn.forEach(button => {
//     button.addEventListener('click', function(e) {
//         console.log(clickPrice,"aa")
//         const product = this.closest('.divMenuProduct'); 
//         UpdateRow(product);
//     });
// });
// const Delete = () => {
//     tableBody.innerHTML = '';
//     clickCounter = 1
// };


const orderNowButtons = document.querySelectorAll('.OrderId');
const tbody = document.querySelector('tbody');
orderNowButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const product = this.closest('.divMenuProduct');
        const title = product.querySelector('.title3').textContent;
        const existingRow = Array.from(tbody.children).find(row => row.querySelector('.title').textContent === title);

        if (existingRow) {
            const quantityElement = existingRow.querySelector('.quantity');
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
            const priceElement = existingRow.querySelector('.price');
            const price = parseFloat(priceElement.textContent.replace('$', ''));
            priceElement.textContent = `$${(price * quantity).toFixed(2)}`;
        } else {

            const row = document.createElement('tr');
            const price = parseFloat(product.querySelector('.text3').textContent.replace('$', ''));
            row.innerHTML = `
                <td><img src="${product.querySelector('.img2').src}" width="100"></td>
                <td class="title" style="font-size:1vw; font-weight:600;">${title}</td>
                <td class="price" style="font-size:1.1vw; color: #0e6800; font-weight:600">$${price.toFixed(2)}</td>
                <td>•</td>
                <td class="quantity" style="font-size:1.1vw; font-weight:600;">1</td>
            `;
            tbody.appendChild(row);
        }
    });
});

const Delete = () => {
    tbody.innerHTML = '';
};
