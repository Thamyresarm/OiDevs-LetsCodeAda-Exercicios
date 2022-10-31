import prompt from 'prompt'


/*interface Pessoa {
    email: string
    password: string
    isAdmin: boolean
}

class Admin implements Pessoa {
    public email: string
    public password: string
    public  isAdmin: boolean = true

    constructor(email: string, password: string) {
        this.email = email
        this.password = password
    }
}

class Client implements Pessoa {
    public email: string
    public password: string
    public  isAdmin: boolean = false

    constructor(email: string, password: string) {
        this.email = email
        this.password = password
    }
}*/


/*abstract*/ class Pessoa {
    private _email:string
    private _password:string
    private isAdmin: boolean

     constructor(email: string, password: string, isAdmin: boolean) {
         this._email = email
         this._password = password
         this.isAdmin = isAdmin
     }

     get admin():boolean {
         return this.isAdmin
     }

     get email():string {
         return this._email
     }
     get password():string {
         return this._password
     }
 }


 class Admin extends Pessoa {
     constructor(email: string, password: string) {
         super(email, password, true)
     }
 }

 class Client extends Pessoa {
     constructor(email: string, password: string) {
         super(email, password, false)
     }
 }

class Product {
    private _id: number
    private name: string
    private brand: string
    private category: string
    private price: number

    static productCount: number = 0

    constructor(
        name: string, 
        brand: string, 
        category: string, 
        price: number) {
            this._id = Product.productCount + 1
            this.name = name
            this.brand = brand
            this.category = category
            this.price = price

            Product.productCount++
    }

    get id():number {
        return this._id
    }
}

class Catalog {
    private products: Product[] = []
    private count: number

    constructor() {
        this.count = 0
    }

    public addProduct(product:Product):void {
        this.products.push(product)
        this.count++
    }

    public getProduct(id: number):Product | null {
        const product = this.products.find(product => product.id === id)

        return product || null
    }

    public show():void {
        console.table(this.products)
    }
}

class Cart {
    private products: Product[] = []
    private total: number

    constructor() {
        this.total = 0
    }

    public addProductIntoCart(product: Product):void {
        this.products.push(product)
    }

    public removeProductFromCart(position: number):void {
        const updatedList = this.products.filter((p, index) => index != position)

        this.products = updatedList
    }

    public show():void {
        console.table(this.products)
    }
}

const main = async function () {
    const client = new Client('esdras@client.com', '12345')
    const admin = new Admin('esdras@admin.com', '12345')
    //const pesso = new Pessoa()
    const users = [client, admin]

    
    let shouldRun = true

    const catalog = new Catalog()
    const cart = new Cart()

    console.log('===== Ecomerce Lets Code =====')
    console.log('Login:')

    const response = await prompt.get(['email', 'senha'])

    console.clear()

    const userLogged = users.find(user => user.email === response.email && user.password === response.password)

    if(!userLogged) {
        return console.log('Usuário não encontrado ou senha incorreta') //não valida
    }

    
    while(shouldRun) {
        
        if(userLogged.admin) {
            console.log('===== Ecomerce Lets Code =====')
            console.log('Escolha uma das opções abaixo:')
            console.log('   1. Cadastrar produto')
            console.log('   2. Adicionar produto ao carrinho')
            console.log('   3. Remover produto do carrinho')
            console.log('   4. Ver produtos')
            console.log('   5. Ver Carrinho')
            console.log('   9. Sair')
            
            const response = await prompt.get(['option'])
            switch (response.option) {
                case '1':
                    console.clear()
                    console.log('===== Cadastro de produtos =====')
                    console.log('Preencha as informações do produto')
    
                    const response = await prompt.get(['nome', 'marca', 'categoria', 'preco'])
    
                    catalog.addProduct(new Product(
                        response.nome.toString(), 
                        response.marca.toString(), 
                        response.categoria.toString(), 
                        Number(response.preco)))
    
                    break;
                case '2':
                    console.clear()
                    console.log('===== Adicionar produto ao carrinho =====')
                    catalog.show()
    
                    console.log('Insira o id do produto que deseja comprar:')
                    
                    const item = await prompt.get(['id'])
                    
                    const foundProduct = catalog.getProduct(Number(item.id))
    
                    if(!foundProduct) {
                        console.log('Produto não encontrado...')
                        break;
                    }
    
                    cart.addProductIntoCart(foundProduct)
                    break;
    
                case '3':
                    console.clear()
                    console.log('===== Remover produtos do carrinho =====')
                    cart.show()
                    console.log('Insira a posição do produto que deseja remover:')
                    const position = await prompt.get(['index'])
                    cart.removeProductFromCart(Number(position.index))
    
                    break;
    
                case '4':
                    console.clear()
                    console.log('===== Catalogo de produtos =====')
                    catalog.show()
                    console.log('Pressiona uma tecla para voltar ao menu anterior...')
                    await prompt.get(['pressione'])
    
                    break;
    
                case '5':
                    console.clear()
                    console.log('===== Carrinho de compras =====')
                    cart.show()
                    console.log('Pressiona uma tecla para voltar ao menu anterior...')
                    await prompt.get(['pressione'])
    
                    break;
                case '9':
                    shouldRun = false
                    break;
                default:
                    break;
            }
        } else {
            console.log('===== Ecomerce Lets Code =====')
            console.log('Escolha uma das opções abaixo:')
            console.log('   1. Adicionar produto ao carrinho')
            console.log('   2. Remover produto do carrinho')
            console.log('   3. Ver produtos')
            console.log('   4. Ver Carrinho')
            console.log('   9. Sair')

            const response = await prompt.get(['option'])

            switch (response.option) {
                case '1':
                    console.clear()
                    console.log('===== Adicionar produto ao carrinho =====')
                    catalog.show()
    
                    console.log('Insira o id do produto que deseja comprar:')
                    
                    const item = await prompt.get(['id'])
                    
                    const foundProduct = catalog.getProduct(Number(item.id))
    
                    if(!foundProduct) {
                        console.log('Produto não encontrado...')
                        break;
                    }
    
                    cart.addProductIntoCart(foundProduct)
                    break;
    
                case '2':
                    console.clear()
                    console.log('===== Remover produtos do carrinho =====')
                    cart.show()
                    console.log('Insira a posição do produto que deseja remover:')
                    const position = await prompt.get(['index'])
                    cart.removeProductFromCart(Number(position.index))
    
                    break;
    
                case '3':
                    console.clear()
                    console.log('===== Catalogo de produtos =====')
                    catalog.show()
                    console.log('Pressiona uma tecla para voltar ao menu anterior...')
                    await prompt.get(['pressione'])
    
                    break;
    
                case '4':
                    console.clear()
                    console.log('===== Carrinho de compras =====')
                    cart.show()
                    console.log('Pressiona uma tecla para voltar ao menu anterior...')
                    await prompt.get(['pressione'])
    
                    break;
                case '9':
                    shouldRun = false
                    break;
                default:
                    break;
            }
        }
    

        console.clear()
    }
}

main()