const driver = {}

// it does not modify the original driver, but rather returns a clone with the new data
function updateDriverWithKeyAndValue(driver, key, value) {
   const newDriver = Object.assign({}, driver, { [key]: value }); 
   return newDriver; 
}

// updates `driver` with the given `key` and `value` (it is destructive) and returns the entire updated driver
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
   driver[key] = value; 
   return driver; 
}

// deletes `key` from a clone of driver and returns the new driver (it is non-destructive):
function deleteFromDriverByKey(driver, key) {
   const newDriver = Object.assign({}, driver);
   delete newDriver[key];
   return newDriver; 
}

// returns driver without the delete key/value pair
function destructivelyDeleteFromDriverByKey(driver, key) {
   delete driver[key]; 
   return driver; 
}


