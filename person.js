class Person{

    //Constructor
    constructor(...params){
        this.firstName=params[0];
        this.lastName=params[1];
        this.address=params[2];
        this.city=params[3];
        this.state=params[4];
        this.zip=params[5];
        this.phoneNumber=params[6];
        this.email=params[7];
    }    

    //ToString Method
    toString(){
        return '\nFirstName: ' + this.firstName + ' LastName: ' + this.lastName + ' Address: ' + this.address+ ' City: '+ this.city+' State : '+ this.state+ ' Zip: '+this.zip+' PhoneNumber: '+this.phoneNumber+' Email: '+ this.email;
    }
}

let personData = new Person("Bhaskar","Navuluri","nippo","nlr","ap",400017,'91 1234567890','abc@gmail.com');
console.log(personData.toString());