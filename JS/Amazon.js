 import { productsInCart } from "./Cart.JS";
 let prodMap=new Map();
document.addEventListener('click',(event)=>{

    if(event.target.className=='add-to-cart'){
      const id=event.target.dataset.productId;
      const catogory=event.target.dataset.productCatogory;
      console.log(event.target.dataset)
        const product=event.target.parentElement.parentElement;
        let prodImg=product.querySelector('.prod-image').src;
        let title=product.querySelector('.title').textContent;
        let rating=product.querySelector('.rating').textContent;
        let ratingImg=product.querySelector('.rating-img').src;
        let ratingNum=product.querySelector('.num-rating').textContent;
        let priceVal=product.querySelector('.priceval').textContent;
        let cents=product.querySelector('.cents').textContent;
     let prod={
        "id":id,
        "prodImage":prodImg,
        "prodTitle":title,
        "rate":{
            "rating":rating,
            "num":ratingNum
        },
        "pricing":{
            "price":priceVal,
            "cents":cents
        },
        "catogory":catogory,
        "items":1
     }
     console.log(prod.rate.rating)
     if(productsInCart.get(id)!=null && productsInCart.get(id)!=undefined){
       let productCartItem=productsInCart.get(id);
       productCartItem.items+=1;
       productsInCart.set(id,productCartItem);
         
     }else{
     let cartProd=[];

     cartProd.push(prod)
     productsInCart.set(id,prod);
     }
     console.log(JSON.stringify(Array.from(productsInCart.entries())))
localStorage.setItem('products',JSON.stringify(Array.from(productsInCart.entries())))
     let addedToCart=product.querySelector('.added-to-Cart');
     addedToCart.style.visibility='visible';
     
     let cartNums=document.querySelector('.cartNums');
     cartNums.textContent=Array.from(productsInCart.entries()).length
    }
    if(event.target.className=='homePage-link'){
       
    }
console.log(productsInCart)
});

export function getProductsInCart(){
    return productsInCart;
}


