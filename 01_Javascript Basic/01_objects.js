function fullName(arr){
    console.log(Employee.name+' '+Employee.lastname)
}


function validateAge(arr){
    return Employee.age
}


function validateAddress(arr){
    var address = Employee.Address
    return address
}


var Employee = {
    name: "Grisha",
    lastname: "Jaeger",
    age: 48,
    showNameAndAge: function(){
        //return full object --> console.log( this )

        // return full name
        console.log(this.name+' - '+this.age)
    },
    Address: {
        country: "Paradis",
        city: "Shinganshina",
        showCityAndCountry: function(){
            //return Address object --> console.log( this )
            console.log(this.city+' - '+this.country)
        },
        House: {
            number: 434,
            street: "Fake Street"
        }
    },
    
};

console.log(typeof Employee); //object


var address = Employee.Address.House
console.log( address.street ) // Fake Street


fullName(Employee) //Grisha Jaeger


if( validateAge(Employee) >= 18 ){
    console.log( validateAge(Employee) ) //48
}else{
    console.log("This employee is a kid")
}


console.log( validateAddress(Employee) ) // address object

Employee.showNameAndAge() //Grisha - 48 

Employee.Address.showCityAndCountry() //Shinganshina - Paradis