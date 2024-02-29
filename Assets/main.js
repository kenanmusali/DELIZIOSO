const orderNowButtons = document.querySelectorAll('.OrderId');

orderNowButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        
        e.preventDefault();
        const product = this.closest('.divMenuProduct'); 

        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${product.querySelector('.img2').src}" width="100"></td>
            <td>${product.querySelector('.title3').textContent}</td>
            <td>${product.querySelector('.text3').textContent}</td>
        `;

        document.querySelector('tbody').appendChild(row);
    });
});


// const orderNowButtons = document.querySelectorAll('.OrderId');

// orderNowButtons.forEach(button => {
//     button.addEventListener('click', function(e) {

//         if (e.target.tagName === 'BUTTON') {
//             const product = this.closest('.divMenuProduct');

//             const row = document.createElement('tr');
//             row.innerHTML = `
//                 <td><img src="${product.querySelector('.img2').src}" width="100"></td>
//                 <td>${product.querySelector('.title3').textContent}</td>
//                 <td>${product.querySelector('.text3').textContent}</td>
//             `;

//             document.querySelector('tbody').appendChild(row);
//         }
//     });
// });
