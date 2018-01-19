//console.log(truckers); : pour afficher les elements
//console.log(deliveries);
//console.log(actors);

deliveries.forEach(function (delivery) {
   getPriceByDelivery(delivery);
    
});


function getPriceByDelivery(delivery) {
    var pricePerKm = 0;
    var pricePerVolume = 0;
    var truck = null;


    truckers.forEach(function (trucker) {
        if (trucker.id === delivery.truckerId) {
            pricePerKm = trucker.pricePerKm;
            pricePerVolume = trucker.pricePerVolume;
            truck = trucker;
        }
    });
    var distance = delivery.distance;
    var volume = delivery.volume;


    return getPricePerDistanceVolume(distance, pricePerKm, volume, pricePerVolume, truck, delivery);
}


function getPricePerDistanceVolume(distance, pricePerKm, volume, pricePerVolume,truck,delivery) {
	//console.log(truck.pricePerVolume);
	var additionalcharge = 0;

	var option = delivery.options.deductibleReduction;

	if (option=== true){
    	additionalcharge = delivery.volume;
    }
    

    //console.log(delivery.options.deductibleReduction);
    //console.log(additionalcharge);

	var price = (distance * pricePerKm + volume * pricePerVolume) + additionalcharge;
	

	if (truck.pricePerVolume > 5) {price = price - (price * 10/100);}
	if (truck.pricePerVolume > 10) {price = price - (price * 30/100);}
	if (truck.pricePerVolume > 25) {price = price - (price * 50/100);}

	
	

    



//Affichage
	console.log("id : " + delivery.id);
	console.log("options:'deductibleReduction': "
    +   delivery.options.deductibleReduction); 

    console.log("price : " + price + "EUR");
    

    getCommission(price, distance);
    console.log("-------------");
    
}

function getCommission(price, distance){

 var commission = price * 30/100;
 var insurance = commission / 2;
 var treasury = parseInt(distance/500);
 var convargo = price - commission - insurance - treasury;

 console.log("commission : "+commission);
 console.log("insurance : "+insurance);
 console.log("treasury : "+treasury);
 console.log("convargo : "+convargo);



}

