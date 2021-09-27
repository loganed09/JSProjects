const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this.appetizers;
  },

  set appetizers(appetizerIn) {
    this.appetizers = appetizerIn;
  },

  get mains() {
    return this.mains;
  },

  set mains(mainIn) {
    this.mains = mainIn;
  },

  get desserts() {
    return this.desserts;
  },

  set desserts(dessertIn) {
    this.desserts = dessertIn;
  },

  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },

  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    }
    this._courses[courseName].push(dish);
  },

  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    let randomNum = Math.floor(Math.random()*dishes.length);
    return dishes[randomNum];
  },
  
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    let total = appetizer.price + main.price + dessert.price;
    console.log(`You have ordered ${appetizer.name} for starters.  A wonderful ${main.name} for your entree, and a delicious ${dessert.name} for dessert! Your total is $${total}.`);
  }
}




menu.addDishToCourse('appetizers', 'Mozz Stix', 3.99);
menu.addDishToCourse('appetizers', 'Nachos', 5.99);
menu.addDishToCourse('appetizers', 'Bruchetta', 8.99);
menu.addDishToCourse('mains', 'Steak', 12.99);
menu.addDishToCourse('mains', 'Spaghetti', 10.99);
menu.addDishToCourse('mains', 'Lobster', 17.99);
menu.addDishToCourse('desserts', 'Cake', 4.99);
menu.addDishToCourse('desserts', 'Lava Cake', 8.99);
menu.addDishToCourse('desserts', 'Creme Brulee', 7.99);


let meal = menu.generateRandomMeal();




