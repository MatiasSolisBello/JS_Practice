function Protagonist(name, lastname, age){
    this.name = name;
    this.lastname = lastname;
    this.age = age;

    this.fullname = function(){
        return this.name+' '+this.lastname+'('+this.age+')'
    }
}

var protagonist = new Protagonist("Mikasa", "Ackerman", 20);

console.log( protagonist ) //object

console.log( protagonist.fullname() ) //fullname + age