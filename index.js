// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
   const newObj = Object.assign({}, driver)
   newObj[key] = value
   return newObj
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(driver, key) {
    const obj = Object.assign({} ,driver)
    delete obj[key]
    return obj
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
}