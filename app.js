


const fromDollarToYen = function (valueInDollar){
    let valueInYen= valueinDollar*127.9;
    return valueInYen;

}



const fromYenToPound = function (valueInYen){
    let valueInPound= valueInYen*0.8;
    return valueInPound;

}


const fromEuroToDollar = function (valueInEuro){
    let valueInDollar= valueInEuro *1.2;
    return valueInEuro;

}




module.exports ={fromDollarToYen,fromYenToPound,fromEuroToDollar};


