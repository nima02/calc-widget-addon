self.port.on("asin", function(asin) {
    document.getElementById('search-string').value = asin[0];
    document.getElementById('search-string').focus();    
    document.getElementById('search-products').click();        
    if (asin[1]) {
        document.getElementById('afn-fees-price').value = asin[1];
        setTimeout(function(){document.getElementById('update-fees-link').click()},1000);
    }
});
