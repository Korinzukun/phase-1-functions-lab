function distanceFromHqInBlocks(pickupLocation) {
  return Math.abs(pickupLocation - 42);
}

function distanceFromHqInFeet(pickupLocation) {
  const blocks = distanceFromHqInBlocks(pickupLocation);
  return blocks * 264;
}

function distanceTravelledInFeet(start, destination) {
  const blocks = Math.abs(destination - start);
  return blocks * 264;
}

function calculatesFarePrice(start, destination) {
  const feetTravelled = distanceTravelledInFeet(start, destination);
  
  if (feetTravelled <= 400) {
    return 0;
  } else if (feetTravelled > 400 && feetTravelled <= 2000) {
    return (feetTravelled - 400) * 0.02;
  } else if (feetTravelled > 2000 && feetTravelled < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}