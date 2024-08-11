import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';
//import'../data/cart-class.js';
//import '../data/backend-practice.js';

async   function loadPage(){
   try{
   // throw 'error1';
    await loadProductsFetch();
    const value= await new Promise((resolve)=>{
        //throw 'error2';
     loadCart(()=>{
         resolve('value3');
     });
 });
   } catch(error){
    console.log('Unexpected error.please try again later.');

   }


    renderPaymentSummary();
    renderOrderSummary();

    
}
loadPage();
/*
Promise.all([s
  loadProductsFetch(),
    new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
        });
    })
 
]).then((values)=>{
    console.log(values);
    renderPaymentSummary();
    renderOrderSummary();
});
*/
/*
new Promise((resolve)=>{
    loadProducts(()=>{
        resolve('value1');

    }); 

}).then((value)=>{
    console.log(value);
    return new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
        });
    });
   
   
}).then(()=>{
    renderPaymentSummary();
    renderOrderSummary();
});
*/

/*
loadProducts(()=>{
    loadCart(()=>{
        renderPaymentSummary();
        renderOrderSummary();

    });
});

*/
