function searchProducts() {
    var input, filter, products, product, title, i, txtValue;
    input = document.getElementById('searchBar');
    filter = input.value.toUpperCase();  // Convert the input to uppercase for case-insensitive matching
    products = document.querySelectorAll('.product');  // Select all product items
    
    for (i = 0; i < products.length; i++) {
        product = products[i];
        title = product.querySelector('h3');  // Select the product title (name)
        
        if (title) {
            txtValue = title.textContent || title.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                product.style.display = '';  // Show product if it matches search
            } else {
                product.style.display = 'none';  // Hide product if it does not match search
            }
        }
    }
}
