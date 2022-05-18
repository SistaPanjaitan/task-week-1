class Tiger {
    energy = 100
    isDangerous = true;

    constructor(name, height, weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
        
    }
    roar () {console.log("Roarrrrr")};
    die () {this.isDangerous = false}
}
const lion = new Tiger('Lion', '125', '56')
lion.die(); 
console.log (lion.isDangerous); 
lion.roar()

class Cat extends Tiger {
    energy = 10
    isDangerous = false;

    constructor (name, height,weight) {
    super(name, address);
    }
    roar () {console.log("Meoww")}
    die () {this.isDangerous = false}
}

const angora = new Cat('Angora', '35', '7');
angora.die(); 
console.log (angora.isDangerous); 
angora.roar()
