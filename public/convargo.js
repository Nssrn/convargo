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
	
	var additionalcharge = 0;

	var option = delivery.options.deductibleReduction;

	if (option=== true){
    	additionalcharge = delivery.volume;
    }

    var npricePerVolume = pricePerVolume;
	if (delivery.volume > 5) {  npricePerVolume = pricePerVolume - (pricePerVolume * 10/100);}
	if (delivery.volume > 10) { npricePerVolume = pricePerVolume - (pricePerVolume * 30/100);}
	if (delivery.volume > 25) { npricePerVolume = pricePerVolume - (pricePerVolume * 50/100);}

   //console.log(npricePerVolume);
   var price = (distance * pricePerKm + volume * npricePerVolume);

//Affichage
	
	console.log("Delivery ID : " + delivery.id);
	//console.log("options:'deductibleReduction': " +   delivery.options.deductibleReduction); 

    console.log("price : " + price + "EUR");
    console.log("charge (deductible Reduction) : " +additionalcharge + "EUR");
    
    console.log("Payment : ");
    PayActors(price, distance,additionalcharge);
    //getCommission(price,distance);
    console.log("-------------");
    
    
}

function PayActors(price, distance,additionalcharge)
{
	var shipperAmount = price + additionalcharge;
	 var commission = price * 30/100;
	 var insurance = commission / 2;
	 var treasury = 1 + parseInt(distance/500);
	 var convargo = commission - insurance - treasury;

	 var ownerAmount = price - commission;
	 var convargoAmount = convargo + additionalcharge;

	 console.log("Shipper Amount : " + shipperAmount);

	 console.log("Owner Amount : " + ownerAmount);
	 console.log("Insurance Amount : "+ insurance);
	 console.log("Treasury Amount : "+treasury);
	 console.log("Convargo Amount : "+ convargoAmount);

	
}







