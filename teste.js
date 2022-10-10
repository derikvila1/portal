function getDate(){

    let today = new Date
    day = today.getDate()
    month = today.getMonth() +1
    year = today.getFullYear()
    result = day+"/"+month+"/"+year
    return result;
}

console.log(getDate())