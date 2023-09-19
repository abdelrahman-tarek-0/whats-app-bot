exports.serialize = (number) => {

   const sanitized_number = number.toString().replace(/[- )(]/g, '') // remove unnecessary chars from the number
   const final_number = `20${sanitized_number.substring(
      sanitized_number.length - 10
   )}` 
   
    return final_number
}