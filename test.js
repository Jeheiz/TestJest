
test ("convertir Dollar a Yen",()=>{
    const{fromDollarToYen}=require('./app.js')

    expect(fromDollarToYen(10)).toBe(1279)// (10*127.9)
});



test ("convertir Yen to Pound",()=>{
    const{fromYenToPound}=require('./app.js')

    expect(fromYenToPound(15)).toBe(12)// (15*0.8)
})



test ("convertir Euro to Dollar",()=>{
    const{fromEuroToDollar}=require('./app.js')

  
    expect(fromEuroToDollar(3)).toBe(3.6) // (3*1.2) change /
})


