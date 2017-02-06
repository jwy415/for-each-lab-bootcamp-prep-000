function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var newArray = ['a', 'b', 'c']
  newArray.forEach(callback)
  return newArray
}


function doToArray(array, callback) {
  array.forEach(callback)
}