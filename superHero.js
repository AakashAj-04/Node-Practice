//Module Caching

class superHero {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    return (this.name = name);
  }
}

module.exports = new superHero("Superman"); // Caching will Happen

module.exports = superHero;
