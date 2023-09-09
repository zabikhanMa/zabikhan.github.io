
let cartProducts=[];
export let productsInCart=new Map();
 let productsInCarts=new Map();
let prodCart="";
const buton=document.querySelectorAll('.qty');
let totalItemsPrice=0.00;
let deliveryPrice=0.00;
document.addEventListener('DOMContentLoaded',(event)=>{

    console.log(new Map(JSON.parse(localStorage.getItem('products'))))
let productsInCart= (JSON.parse(localStorage.getItem('products')));
productsInCarts=productsInCart;
let itemCount=document.querySelector('.itemcounts');
let nummss=Array.from(productsInCart.entries()).length;
itemCount.textContent=nummss;
console.log(Array.from(productsInCart.entries()));
let cart=document.querySelector('.shopping-cart');
productsInCart.keySets
productsInCart.forEach((value,key)=>{
    let product=value[1];

const id=product.id;
const prodImage=product.prodImage;
const prodTitle=product.prodTitle;
const rating=product.rate.rating;
const numOfRatings=product.rate.num;
const price=product.pricing.price;
const cents=product.pricing.cents;
const catogory=product.catogory;
const items=product.items;
let ids=1;
let fourDayShpFee=100.00;
let twoDayShpFee=150.00;
let weekDayShpFee=0.00;

const subTotalPrice=`${price}.${cents}`*items;
totalItemsPrice=totalItemsPrice+parseFloat(subTotalPrice)

let rupess=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
<path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
</svg>`;

 prodCart=prodCart+`<div class="cart-prod" id=${id}>

<div class="left-cart">
<input type="checkbox" class="check-box" checked="true">


</div>
<div class="middle-cart">
<img src=${prodImage} class="cart-Img">

</div>
<div class="right-cart">
<span class="cart-prod-title">${prodTitle}</span>
<div class="cart-prod-price">
<span style="padding-top: 1px;"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
  </svg></span><span class='single-price' style="margin-bottom: 0px;">${price+`.`+cents}</span>
</div>
<span class="stock">In Stock</span>
<div class="gift-ind">
<input type="checkbox" >
<span class="gift">This is a gift</span>
</div>
<span style="font-size: 12px; font-family: Arial, Helvetica, sans-serif;"><b>Size:</b>Large</span>
<span style="font-size: 12px; font-family: Arial, Helvetica, sans-serif;"><b>Color:</b>Espresso</span>
<div class="quantity-cart" >
<select class="qty" data-prodId=${id}>
<option value="1">quantity:1</option>
<option value="2">quantity:2</option>
<option value="3">quantity:3</option>
<option value="4">quantity:4</option>
<option value="5">quantity:5</option>
<option value="6">quantity:6</option>
<option value="7">quantity:7</option>
<option value="8">quantity:8</option>
<option value="9">quantity:9</option>
<option value="10">quantity:10</option>
</select>
|
<button class="delete-btn" >Delete</button>|
<button class="save-btn">Save For Later</button>
</div>
</div>
<div class="deliveryDate">
<div class='deliveryOptions'>
    <input type="checkbox" class='check' checked=true data-shpfee=${weekDayShpFee}>
    <span class='d-date'>${convertDateToString(8)}</span>
    <div class='shipping-date'>
  
    <span class='shipping-price'>FREE Shipping<span class='ShippingFee' style='visibility:hidden;'>${weekDayShpFee}</span></span>
    </div>
</div>
<div class='deliveryOptions'>
    <input type="checkbox" class='check' data-shpfee=${fourDayShpFee}>
    <span class='d-date'>${convertDateToString(4)}</span>
    <div class='shipping-date'>
  
    <span class='shipping-price'>${rupess}<span class='ShippingFee'>${fourDayShpFee}</span>  -  Shipping</span>
    </div>
</div>
<div class='deliveryOptions'>
    <input type="checkbox" class='check' data-shpfee=${twoDayShpFee}>
    <span class='d-date'>${convertDateToString(2)}</span>
    <div class='shipping-date'>
  
    <span class='shipping-price'>${rupess}<span class='ShippingFee'>${twoDayShpFee}</span>  -  Shipping</span>
    </div>
</div>
</div>
</div>

<div class="subTotal">
<span class="ttl">Subtotal (<span class='sub-items'>${items}</span> items): <span style="padding-top: 1px;color: rgb(168, 45, 45);"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
<path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
</svg></span><span class='ttl-price'>${subTotalPrice}<span></span> 
</div>`;

ids=ids+1;

//document.append(cart)

   })
   totalItemsPrice=totalItemsPrice.toFixed(2)
   deliveryPrice=deliveryPrice*100/100;
   let totalBeforetax=(totalItemsPrice+deliveryPrice);
   totalBeforetax=Number.parseFloat(totalBeforetax).toFixed(2)
   let tax=Number.parseFloat((12*totalBeforetax)/100).toFixed(2);
   let totalPriceWithTax=Number.parseFloat((totalBeforetax+tax)).toFixed(2);
   let orderSumarryDiv=`<div class="order-summary">
   <span><h1 style='margin-top:0px;'>Order Summary</h1></span>
   <div class='smry-text'>
   <span>Items(${productsInCart.length}):</span>
   <div class='ttlpri'><span style="padding-bottom: 0px;color: rgb(168, 45, 45);"> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 14.5 14.5">
   <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
   </svg></span><span class='totalItemsPrice'>${totalItemsPrice}</span></div>
   </div>

   

   <div class='smry-text'>
   <span>Shipping & Handling:</span>
   <div class='ttlpri'><span style="padding-bottom: 0px;color: rgb(168, 45, 45);"> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 14.5 14.5">
   <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
   </svg></span><span class='deliveryPrice'>${deliveryPrice}</span></div>
   </div>

   <div class='smry-text'>
   <span>Total before Tax:</span>
   <div class='ttlpri'><span style="padding-bottom: 0px;color: rgb(168, 45, 45);"> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 14.5 14.5">
   <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
   </svg></span><span class='totalBeforetax'>${totalBeforetax}</span></div>
   </div>

   <div class='smry-text'>
   <span>Estimated Tax (~12%):</span>
   <div class='ttlpri'><span style="padding-bottom: 0px;color: rgb(168, 45, 45);"> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 14.5 14.5">
   <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
   </svg></span><span class='tax'>${tax}</span></div>
   </div>

   <div class='smry-text-ttl'>
   <span>Order Total:</span>
   <div class='ttlpri'><span style="padding-bottom: 0px;color: rgb(168, 45, 45);"> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 14.5 14.5">
   <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
   </svg></span><span class='totalPriceWithTax'>${totalPriceWithTax}</span></div>
   </div>
<div class='place-order'>
   <button class='place-order-button'>Place your order</button>
   </div>
 
 

</div>`;
prodCart+=orderSumarryDiv
   cart.innerHTML=prodCart;
   console.log(prodCart);
   let quantityButtons=document.querySelectorAll('.qty');

   quantityButtons.forEach((buttn)=>{
    console.log(buttn.value)
       buttn.addEventListener('change',(event,buttn)=>{
        onQuantityClick(event,buttn)
       });
       let productsCheck=document.querySelectorAll('.check-box');
productsCheck.forEach((prodCheckBox)=>{
    prodCheckBox.addEventListener('change',(event)=>{
        updateProductCheckBox(event);
    })
})
   })

     let shippingFeeElements=document.querySelectorAll('.check');

     shippingFeeElements.forEach((checkBox)=>{
        checkBox.addEventListener('change',(event)=>{
            onSelectDeliveryCheckBox(event);
        })
     })

     let deleteButton=document.querySelectorAll('.delete-btn');

     deleteButton.forEach((deleteButton)=>{
         deleteButton.addEventListener('click',(event)=>{
            console.log()
            event.target.parentElement.parentElement.parentElement.nextElementSibling.style='display:none';
            event.target.parentElement.parentElement.parentElement.style='display:none';
            console.log(productsInCarts)
            let prodInCarts;
            prodInCarts= productsInCart.filter((value,index,productsInCart)=>{
                if(event.target.parentElement.parentElement.parentElement.id!=value[0]){
                   return value;
                }
                event.target.parentElement.parentElement.parentElement.className='deleted-cart-prod'
              
            })
            let cartNumDiv=document.querySelector('.itemcounts');
            let count=parseInt(cartNumDiv.textContent);
            cartNumDiv.textContent=count-1;
            productsInCarts=prodInCarts;
            updateOrderSummary();
            console.log(prodInCarts)
         })
     })

        let placeOrderButton=document.querySelector('.place-order-button');
        placeOrderButton.addEventListener('click',(event)=>{
            document.body.innerHTML=`<div class='last-page'><img src='Logos/tick.png'   class="ticked"> <h1>Order placed successfully</h1></div>`
           console.log('order placed')
        })

});








buton.forEach((buttons)=>{
    buttons.addEventListener('click',()=>{
        console.log( JSON.parse(localStorage.getItem('products')))
    })
})




function onQuantityClick(event,buttn){


console.log('button clicked')
console.log(event.target.dataset.prodid)

let product=document.getElementById(event.target.dataset.prodid)
let price=product.querySelector('.single-price').textContent;
let totalPrice=price*event.target.value;
console.log(totalPrice)
let subTotalElement=product.nextElementSibling;

let ttlPrice=subTotalElement.querySelector('.ttl-price');
let subItems=subTotalElement.querySelector('.sub-items');
ttlPrice.textContent=totalPrice;
subItems.textContent=event.target.value;
updateOrderSummary();
}

function updateOrderSummary(){
    console.log(productsInCarts)
    productsInCarts.keySets
    let totalPrice=0;
    let shpFee=0;
    let cart=document.querySelectorAll('.cart-prod');
  
    console.log(cart)
    cart.forEach((value)=>{
        let product=value;
        //console.log(product)
        let shpFeeCheckBoxs=product.querySelectorAll('.check');
        let prodCheckBox=product.querySelector('.check-box');
        if(prodCheckBox.checked==true){
        shpFeeCheckBoxs.forEach((shpFeeCheckBox)=>{

            if(shpFeeCheckBox.checked==true){
                
                shpFee=(shpFee+Number.parseFloat(shpFeeCheckBox.dataset.shpfee));
            }
     
        })

        let subTotalElement=product.nextElementSibling;
        //console.log(subTotalElement)
        let ttlPrice=subTotalElement.querySelector('.ttl-price');
        //console.log(parseFloat(ttlPrice.textContent))
        totalPrice=totalPrice+parseFloat(ttlPrice.textContent);
    }
    }


    )
  
   // console.log(totalPrice)
   totalPrice=Number.parseFloat(totalPrice).toFixed(2)
    let deliveryPrice=Number.parseFloat(shpFee).toFixed(2);
    let totalBeforetax=(parseFloat(totalPrice)+parseFloat(deliveryPrice)).toFixed(2);
    let tax=Number.parseFloat((12*totalBeforetax)/100).toFixed(2);
    let totalPriceWithTax=Number.parseFloat((totalBeforetax+tax)).toFixed(2);
let orderSummary=document.querySelector('.order-summary');
let shpFeeElement=document.querySelector('.deliveryPrice');
let totalPriceElement=orderSummary.querySelector('.totalItemsPrice');
let totalBeforetaxElement=orderSummary.querySelector('.totalBeforetax');
let taxElement=orderSummary.querySelector('.tax');
let totalPriceWithTaxElement=orderSummary.querySelector('.totalPriceWithTax');
totalPriceElement.textContent=totalPrice;
shpFeeElement.textContent=deliveryPrice;
totalBeforetaxElement.textContent=totalBeforetax;
taxElement.textContent=tax;
totalPriceWithTaxElement.textContent=totalPriceWithTax;


}

function convertDateToString(num){
    let date=new Date();
    date.setDate(date.getDate()+num);
    const monthName = date.toLocaleString('default', { month: 'short' });
    //const weekDay=date.toLocaleString('default',{dateStyle:'full'})
    const weekDay=date.toLocaleString('default',{weekday:"long"})
    return (weekDay+', '+monthName+' '+date.getDate())
};

function onSelectDeliveryCheckBox(event){
let parentDeliveryListDivs=event.target.parentElement.parentElement;
console.log(parentDeliveryListDivs)
let checkBoxes=parentDeliveryListDivs.querySelectorAll('.check')
checkBoxes.forEach((delivery)=>{
    
   
        if(delivery!=event.target){
            delivery.checked=false;
        }
    
})
   

    updateOrderSummary();
}

function updateProductCheckBox(event){
    console.log('checked')
    console.log()
    if(event.target.checked==false){
    event.target.parentElement.parentElement.style='opacity:0.4'
    event.target.parentElement.parentElement.nextElementSibling.style='opacity:0.4'
    }
else{
    event.target.parentElement.parentElement.style='opacity:none'
    event.target.parentElement.parentElement.nextElementSibling.style='opacity:none'
}
    updateOrderSummary()
}




