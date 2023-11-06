var mobile = {
    brand : "google",
    price: 87000,
    color : "black",
    camera : "30MP"
}

// console.log(mobile.brand);
// console.log(Object.keys(mobile));
// console.log(Object.values(mobile));
// var propertyName = "brand";

// var propertyValue = mobile[propertyName];
// console.log(propertyValue);


// for(var propertyName in mobile){
//     // console.log(propertyName);
//     var propertyValue = mobile[propertyName];
//     console.log(propertyName, propertyValue);
// }
// var propertyName = 'brand';
// var propertyValue = mobile[propertyName];
// console.log(propertyValue);


var propertyName = Object.keys(mobile);
console.log(propertyName);
for(var i = 0; i < propertyName.length; i++){
    var eachProperty = propertyName[i];
    // console.log(eachProperty);
    var eachPropertyValue = mobile[eachProperty];
    console.log(eachProperty, eachPropertyValue);
}