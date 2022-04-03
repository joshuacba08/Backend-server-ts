const form = document.querySelector('#form-product');
const productList = document.querySelector('.product-list');
const socket = io();


const addProduct = (e) => {

    e.preventDefault();
    console.log(e);

    const data = {
        title:e.target[0].value,
        price:e.target[1].value,
        thumbnail:e.target[2].value,
    }

    console.log(data);

    fetch('/api/products',{
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
                'Content-Type': 'application/json'
            }
        })
        .then((res) => res.json())
        .then( data => console.log(data));

    socket.emit('carga-producto',data)
    paintOneProduct(data);

}

const paintProducts = (arrayProducts) => {
    
    arrayProducts.forEach( el => {
        
        const product = document.createElement('article');
        product.classList.add('product-list__item');
        product.innerHTML = `
            <div class="item__img">
                <img src=${el.thumbnail} alt="">
            </div>
            <div class="item__info">
                <h3>${el.title}</h3>
                <span>$${el.price}</span>
            </div>
        `;
        productList.appendChild(product);

    });

}

const paintOneProduct = (newProduct) => {
    const product = document.createElement('article');
        product.classList.add('product-list__item');
        product.innerHTML = `
            <div class="item__img">
                <img src=${newProduct.thumbnail} alt="">
            </div>
            <div class="item__info">
                <h3>${newProduct.title}</h3>
                <span>$${newProduct.price}</span>
            </div>
        `;
        productList.appendChild(product);
}

form.addEventListener('submit', addProduct);




socket.on( 'connect', () => {
    console.log('conectado');
})

socket.on( 'disconnect', ()=>{
    console.log('desconectado');
})

//acá envío los productos
socket.on( 'product-list', (payload) => {
    paintProducts(payload);
})

socket.on( 'carga-producto', (payload)=>{
    console.log('archivo recibido',payload)
    paintOneProduct(payload);
})



