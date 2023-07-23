let searchForm = document.querySelector(".search_form");
let searchButton = document.querySelector("#search_btn");
let basketWrapper = document.querySelector(".basket_item").firstElementChild;
searchButton.addEventListener("click", function () {
    searchForm.classList.toggle("active");
});


$(function () {

    $(".basketbtn").click(function () {

        $(".basket").toggleClass("active", 1000)

    })



})




let products = [
    {
        id: 1,
        name: '6 Mini Pizzas',
        price: 104.99,
        img: "/images/menu-1.png"

    },
    {
        id: 2,
        name: '5 Mini Burgers',
        price: 99.99,
        img: "/images/menu-2.png"

    },
    {
        id: 3,
        name: '2 Mixed Pizza',
        price: 49.99,
        img: "/images/menu-3.png"

    },
    {
        id: 4,
        name: '3 Burgers',
        price: 79.99,
        img: "/images/menu-4.png"

    },
];

function onloadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers')
    if (productNumbers) {
        document.querySelector('.basketbtn span').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers')
    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1)
        document.querySelector('.basketbtn span').textContent = productNumbers + 1;
    }
    else {
        localStorage.setItem('cartNumbers', 1)
        document.querySelector('.basketbtn span').textContent = 1;
    }
}



onloadCartNumbers();




let productWrapper = document.querySelector(".box_container");

function handleRender() {
    products.map((product) => {
        productWrapper.innerHTML += `

        <div class="box">
                    <div class="box_head">
                        <img class="menu_image" src="${product.img}" alt="">
                        <span class="menu_catagory">Pizza</span>
                        <h3>${product.name}</h3>
                        <div class="price">$${product.price} <span>119.99
                            </span></div>
                    </div>
                    <div class="box_button">
                    <button class="btn"  type="button" onclick="addtoCart(${product.id})">
                   Add to Card
                    </button>
                       
                    </div>
                </div>
        `
    })
}

handleRender()


let carts = document.querySelectorAll(".btn");

for (i = 0; i < carts.length; i++) {

    carts[i].addEventListener("click", (e) => {
        e.preventDefault();
        cartNumbers(products[i])

    })
}


let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

function addtoCart(productId) {


    let currentProduct = products.find((product) => product.id === productId)

    let isExist = cartItems.some(item => item.id === productId);

    if (isExist) {
        handleChangeCount('plus', currentProduct.id)
    } else {
        cartItems.push({ ...currentProduct, count: 1 })
    }
    // const Toast = Swal.mixin({
    //     toast: true,
    //     position: 'top-end',
    //     showConfirmButton: false,
    //     timer: 3000,
    //     timerProgressBar: true,
    //     didOpen: (toast) => {
    //       toast.addEventListener('mouseenter', Swal.stopTimer)
    //       toast.addEventListener('mouseleave', Swal.resumeTimer)
    //     }
    //   })
      
    //   Toast.fire({
    //     icon: 'success',
    //     title: 'Signed in successfully'
    //   })
    upload()
}



function handleRenderCartItem() {
    basketWrapper.innerHTML = " "
    cartItems.map((item) => {
        basketWrapper.innerHTML += `
        <li>
        <b>${item.id}</b>
        <img class="basket_photo" src="${item.img}" alt="">
        <span>${item.name}</span>
        <div class="basket_item_count">
            <button class="count-changer" onclick="handleChangeCount('minus',${item.id})">-</button>
            <span class="basket_count">${item.count}</span>
            <button class="count-changer" onclick="handleChangeCount('plus',${item.id})">+</button>
        </div>
        <b class="price">${item.price}</b>
        <button class="rmv-btn deleteButton">X</button>

    </li>
        `

        
    })

}



let basketCount = document.querySelector(".basket_count");
function handleChangeCount(action, id) {
    cartItems = cartItems.map((item => {
        let oldCount = item.count;
        if (item.id === id) {
            if (action === 'minus') {
                if (item.count > 1) {
                    oldCount--;
                }

            } else {
                oldCount++;
                cartNumbers(products[i])
            }
        }
        return {
            ...item,
            count: oldCount,
        }

    }))

    upload()

}


// let removeButton=document.querySelector(".deleteButton");

// removeButton.addEventListener("click",handleRemove(item.id));


function handleRemove(deleteAll,productId) {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    cartItems = cartItems.filter((item) => item.id !== productId);

    localStorage.setItem("cart", JSON.stringify(cartItems));

    handleRenderCartItem();


    upload();
}

let subtotal = document.querySelector(".subtotal")

function sumTotal() {
    let totalPrice = 0;
    let totalCount = 0;

    cartItems.map((item) => {

        totalPrice += item.price * item.count;
        let round=totalPrice.toFixed(2);
        totalCount += item.count;

    })

    subtotal.innerHTML = `
    <b>Total:$${totalPrice}</b>
    <b>All-Products:${totalCount}</b>
    `

}


function upload() {
    sumTotal();
    handleRenderCartItem();
    localStorage.setItem("cart", JSON.stringify(cartItems));
    
}


if (localStorage.getItem("cart")) {

    upload();

}






























































//     let basketItem = document.querySelector(".basket_item");

//     basketItem.innerHTML = `
//     <ul>
//     <li>
//         <img class="basket_photo" src="/images/menu-1.png" alt="">
//         <div class="basket_item_buttons">
//             <button>-</button>
//             <span>0</span>
//             <button>+</button>
//         </div>
//         <p> Name:${products[i].name}</p>
//         <p>Price:${products[i].price}%</p>
//     </li>
// </ul>
//     `



//     // setItems(product)
// }
// // function setItems(product) {
// //     let cartItems = {
// //         [products.name]: product
// //     }
// //     if (cartItems !== null) {
// //         cartItems[product.name].inCart += 1;
// //     }
// //     product.inCart = 1;
// //     localStorage.setItem("productsIn card ", JSON.stringify(cartItems))
// // }


// function totalCost(product) {
//     console.log(products.price);
// }