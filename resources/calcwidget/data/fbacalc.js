var fbacalculatorASIN = new Array();
var parseURL = document.createElement('a');
parseURL.href = document.URL;
var fbaCalculatorURL = '';
var getPrice = true;
var priceString = '';

switch(parseURL.host) {
    case 'www.amazon.co.uk':
        fbaCalculatorURL = 'https://sellercentral.amazon.co.uk/gp/fbacalc/fba-calculator.html';
        break;
    case 'www.amazon.com':
        fbaCalculatorURL = 'https://sellercentral.amazon.com/gp/fbacalc/fba-calculator.html';
        break;
    case 'www.amazon.fr':
        fbaCalculatorURL = 'https://sellercentral.amazon.fr/gp/fbacalc/fba-calculator.html';
        getPrice = false;
        break;
    case 'www.amazon.de':
        fbaCalculatorURL = 'https://sellercentral.amazon.de/gp/fbacalc/fba-calculator.html';
        getPrice = false;
        break;
    case 'www.amazon.it':
        fbaCalculatorURL = 'https://sellercentral.amazon.it/gp/fbacalc/fba-calculator.html';
        getPrice = false;
        break;
    default:
        fbaCalculatorURL = 'https://sellercentral.amazon.com/gp/fbacalc/fba-calculator.html';
        getPrice = false;
}

if (document.getElementById('ASIN')) {
    if (getPrice) {
        if (document.getElementById('actualPriceValue')) {
            priceString = document.getElementById('actualPriceValue').textContent;    
        } else {
            if (document.getElementById("priceBlock")) {
                var priceBlock = document.getElementById("priceBlock");
                var priceLarge = priceBlock.getElementsByClassName("priceLarge");
                priceString = priceLarge[0].textContent;
            } else {
                if (document.getElementById("priceblock_ourprice")) {
                    priceString = document.getElementById('priceblock_ourprice').textContent; 
                } else {
                    priceString = false;
                }
            }
        }        
        priceString = priceString.replace(/[^0-9.]/g, '');
    }
    
    fbacalculatorASIN[0] = document.getElementById('ASIN').value;   //0 is ASIN
    fbacalculatorASIN[1] = priceString;                             //1 is Price
    fbacalculatorASIN[2] = fbaCalculatorURL;                        //2 is Calc URL
    
    self.port.emit('asin', fbacalculatorASIN);
} else {
    //alert('No ASIN');  
}