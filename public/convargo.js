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
    truckers.forEach(function (trucker) {
        if (trucker.id === delivery.truckerId) {
            pricePerKm = trucker.pricePerKm;
            pricePerVolume = trucker.pricePerVolume;
        }
    });
    var distance = delivery.distance;
    var volume = delivery.volume;
    return getPricePerDistanceVolume(distance, pricePerKm, volume, pricePerVolume);
}

function getPricePerDistanceVolume(distance, pricePerKm, volume, pricePerVolume) {
    return distance * pricePerKm + volume * pricePerVolume;
}