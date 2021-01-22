// https://github.com/xoni3/3rd-assignmnt


problem 1:

function kilometerToMeter(kilometer){
    var meter = kilometer*1000;
    return meter;
}
var kilometer = kilometerToMeter(5);




problem 2: 

function budgetCalculator( watch, phone, laptop){
    var result = (watch + phone + laptop);
    return result
}

var total = budgetCalculator((50*2), (100*3), 500);



problem 3:

function hotelCost(days){
    var hotelCost = 0;

if (days <=10 ) {
    hotelCost = days * 100;
} 

else if (days <=20 ) {
    var firstTenDays = 10 * 100;
    var remaining = days - 10;
    var secondTenDays = remaining * 80;
    hotelCost = firstTenDays + secondTenDays;
}

else{
    var firstTenDays = 10 * 100;
    var secondTenDays = 10 * 80;
    var remaining = days - 20;
    var thirdTenDays = remaining * 50;
    hotelCost = firstTenDays + secondTenDays + thirdTenDays;
}
return hotelCost
}
var result = hotelCost(10);



problem 4:

function megaFreind(){
    var freinds = arguments[0];
    for (i = 0; i < arguments.length; i++){
        if(arguments[i].length > freinds.length){
            freinds = arguments[i];
        }
    }
    return freinds;
}
var result = megaFreind('manna', 'rituporna', 'riaj');


