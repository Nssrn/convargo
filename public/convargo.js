//console.log(truckers); : pour afficher les elements
//console.log(deliveries);
//console.log(actors);

deliveries.forEach(function (delivery) {
    var priceDelivery = getPriceByDelivery(delivery);
    console.log(delivery.id);
    console.log(priceDelivery + "EUR");
    console.log("-------------");
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
    return getPricePerDistanceVolume(distance, pricePerKm, volume, pricePerVolume, truck);
}


function getPricePerDistanceVolume(distance, pricePerKm, volume, pricePerVolume,truck) {
	console.log(truck.pricePerVolume);
	var price = distance * pricePerKm + volume * pricePerVolume;
	

	if (truck.pricePerVolume > 5) {price = price - (price * 10/100);}
	if (truck.pricePerVolume > 10) {price = price - (price * 30/100);}
	if (truck.pricePerVolume > 25) {price = price - (price * 50/100);}


    return price;
}

