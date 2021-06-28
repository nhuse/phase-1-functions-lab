// Code your solution in this file!
function distanceFromHqInBlocks(streetNum) {
    let distanceFromHq = Math.abs(42-streetNum);
    return distanceFromHq;
}

function distanceFromHqInFeet(streetNum) {
    let blocksFromHq = distanceFromHqInBlocks(streetNum);
    return blocksFromHq * 264;
}

function distanceTravelledInFeet(streetNum1, streetNum2) {
    let blocksWalked = Math.abs(streetNum1 - streetNum2);
    return blocksWalked * 264;
}

function calculatesFarePrice(start, destination) {
    let totalDistanceInFt = distanceTravelledInFeet(start, destination);
    if(totalDistanceInFt <= 400) {
        return 0;
    }
    else if(totalDistanceInFt > 400 && totalDistanceInFt <= 2000) {
        return (totalDistanceInFt-400) * .02
    }
    else if(totalDistanceInFt > 2000 && totalDistanceInFt <= 2500) {
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
}