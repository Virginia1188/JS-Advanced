function solve() {
   const productsElements = document.querySelectorAll('.product');
   const checkoutBtn = document.querySelector('.checkout');
   const textField = document.querySelector('textarea');


   let products = Array
      .from(productsElements)
      .forEach(p => p.addEventListener('click', added));


   let productNames = [];
   let total = 0;

   function added(event) {
      console.log('clicked');
      if (event.target.className == 'add-product') {
         const price = event.currentTarget.querySelector('.product-line-price').textContent;
         const productName = event.currentTarget.querySelector('.product-title').textContent;
         textField.innerHTML += `Added ${productName} for ${Number(price).toFixed(2)} to the cart.\n`;
         productNames.push(productName);
         total += Number(price);
      }
   }

   checkoutBtn.addEventListener('click', checkOutAndDisable);

   function checkOutAndDisable() {
      const finalProducts = [...new Set(productNames)].join(', ');
      textField.innerHTML = `You bought ${finalProducts} for ${total.toFixed(2)}.`;
      products.forEach(p => p.removeEventListener('click', added));
      checkoutBtn.removeEventListener('click', checkOutAndDisable);
   }
   // checkoutBtn.removeEventListener('click', checkOutAndDisable);
}