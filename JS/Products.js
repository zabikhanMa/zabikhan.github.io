
export let products=[
    {
        "id":"Product1",
        "prodImage":"/Images/Product1.jpg",
        "prodTitle":"LLdress Mens Polo Shirts Long Sleeve and Short Sleeve Casual Golf Moisture Wicking Dry Quickly Cationic Shirt",
        "ratings":{
            "rating":"4.5",
            "num":"34"
        },
        "pricing":{
            "price":"550",
            "cents":"99"
        },
        "catogory":"Mens clothing"
    
    },

    {
        "id":"Product2",
    "prodImage":"/Images/Product2.jpg",
    "prodTitle":"YTD Mens Casual Slim Fit Basic Henley Long Sleeve Fashion T-Shirt",
    "ratings":{
        "rating":"4.5",
        "num":"180"
    },
    "pricing":{
        "price":"720",
        "cents":"99"
    },
    "catogory":"Mens clothing"

},
{
    "id":"Product3",
    "prodImage":"/Images/Product3.jpg",
    "prodTitle":"True Classic Polo Shirts for Men, Premium Fitted Golf Shirts for Men and Mens Polo Shirts Short Sleeve",
    "ratings":{
        "rating":"3.5",
        "num":"59"
    },
    "pricing":{
        "price":"1500",
        "cents":"60"
    },
    "catogory":"Mens clothing"

},
{
    "id":"Product4",
    "prodImage":"/Images/Product4.jpg",
    "prodTitle":"PJ PAUL JONES Men's Short Sleeve Knit Polo Shirt Vintage Button Down Golf Polo",
    "ratings":{
        "rating":"5.0",
        "num":"480"
    },
    "pricing":{
        "price":"2500",
        "cents":"10"
    },
    
    "catogory":"Mens clothing"
},
{
    "id":"Product5",
    "prodImage":"/Images/Product5.jpg",
    "prodTitle":"MEROKEETY Womens Long Sleeve Waffle Knit Cardigan Open Front Side Slit Sweater",
    "ratings":{
        "rating":"4.0",
        "num":"90"
    },
    "pricing":{
        "price":"3300",
        "cents":"20"
    },
    "catogory":"Womens clothing"

},
{
    "id":"Product6",
    "prodImage":"/Images/Product6.jpg",
    "prodTitle":"Miusey Women's Long Sleeve Cowl Neck Form Fitting Casual Tunic Top Blouse",
    "ratings":{
        "rating":"3.0",
        "num":"30"
    },
    "pricing":{
        "price":"899",
        "cents":"50"
    },
    "catogory":"Womens clothing"

},
{
    "id":"Product7",
    "prodImage":"/Images/Product7.jpg",
    "prodTitle":"ladyline Womens Georgette Chiffon Chickankari & Sequins Work Kurti Tunic Kurta (White, 36)",
    "ratings":{
        "rating":"5.0",
        "num":"4"
    },
    "pricing":{
        "price":"4800",
        "cents":"50"
    },
    "catogory":"Womens clothing"

},
{
    "id":"Product8",
    "prodImage":"/Images/Product8.jpg",
    "prodTitle":"Amazon Essentials Disney | Marvel | Star Wars | Frozen Boys and Toddlers' Short-Sleeve T-Shirts (Previously Spotted Zebra)",
    "ratings":{
        "rating":"3.5",
        "num":"728"
    },
    "pricing":{
        "price":"999",
        "cents":"50"
    },
    "catogory":"Kids clothing"

},
{
    "id":"Product9",
    "prodImage":"/Images/Product9.jpg",
    "prodTitle":"Simple Joys by Carter's Toddlers and Baby Boys' 3-Piece Playwear Set",
    "ratings":{
        "rating":"2.5",
        "num":"87"
    },
    "pricing":{
        "price":"1200",
        "cents":"50"
    },
    "catogory":"Kids clothing"

},
{
    "id":"Product10",
    "prodImage":"/Images/Product10.jpg",
    "prodTitle":"Renotemy Baby Girl Clothes Toddler Girl Clothes Outfits Infant Clothing Floral Pants Set Cute Clothes Set for Girls",
    "ratings":{
        "rating":"1.5",
        "num":"4"
    },
    "pricing":{
        "price":"760",
        "cents":"50"
    },
    "catogory":"Kids clothing"

}
];

window.onload=()=>{
    let container=document.createElement('div');
    container.className='container';
products.forEach(product => {
    let productDiv=document.createElement('div');
    productDiv.className='products';
    let prodImg=product.prodImage;
    let prodTitle=product.prodTitle;
    let rating=product.ratings.rating;
let numofRatings=product.ratings.num;
let price=product.pricing.price;
let cents=product.pricing.cents;
let id=product.id;
let catogory=product.catogory;
productDiv.innerHTML=`<div class="prod-img-container">
<img src=${prodImg} class="prod-image">
</div>
<div class="prod-title"></div>
<span class="title">${prodTitle}
</span>
<div class="ratings">
  <span class='rating'>${rating}</span>
<img src="/Ratings/rating-45.png" class="rating-img" >
<span class='num-rating' style="color: rgb(73, 199, 241);">${numofRatings}</span>
</div>
<div class="price">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
        <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
      </svg><span class="priceval">${price}</span> <span class="cents">${cents}</span>
</div>
<div class="added-to-Cart"><img src='/Logos/tick.png'   class="tick"> <span class='add-to-cart-txt'>Added to cart</span></div>
<div class="button-class">
    <button class="add-to-cart"  data-product-id=${id} data-product-catogory=${catogory}>Add to Cart</button>
</div>`;
container.append(productDiv);

});
document.body.append(container);

let cartLink=document.querySelector('.cartLink');
/*cartLink.addEventListener('click',(event)=>{
    event.preventDefault();
       document.body.classList.add('flip');

       setTimeout(()=>{
        window.location.href = cartLink.href;
       },2000)

})
*/

};



