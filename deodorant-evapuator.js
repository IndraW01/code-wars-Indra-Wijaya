function evaporator(content, evap_per_day, threshold){ 
  const days = Math.ceil(Math.log(threshold / 100) / Math.log(1 - evap_per_day / 100));
    return days;
}

console.log(evaporator(10,10,10));