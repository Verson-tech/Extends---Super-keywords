

class Pet{
    constructor(name, age){
        console.log('IN PET CONSTUCTOR');
        this.name = name;
        this.age= age;
    }
    eat(){
        return `${this.name} is eating!`;
    }
}


// we reuse the functionality from the constructor, but we add our own, which is 'livesLeft' property:
class Cat extends Pet{
    constructor(name,age,livesLeft = 9){
        console.log('IN CAT CONSTRUCTOR!');
        super(name,age);
        this.livesLeft = livesLeft;
    }
    meow(){
        return 'MEOWWWW!!!';
    }
}

class Dog extends Pet {
    bark(){
        return 'WOOOF!!!';
    }
    eat(){
        return `${this.name} scarfs his food`;
    }
}
const monty = new Cat ('monty',9)
