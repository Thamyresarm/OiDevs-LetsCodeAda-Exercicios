class Product {
    static count = 0

    constructor(name, price) {
        this.name = name
        this.price = price
        Product.count++
    }

    static setCount() {
        Product.count++
    }

    changePrice(price) {
        this.price = price
    }   
}

const Iphone = new Product('Iphone 11', 3500)
const Tv = new Product('Tv', 3500)

console.log(Iphone)
console.log(Tv)


console.log(Product.count)
Product.setCount()
console.log(Product.count)
