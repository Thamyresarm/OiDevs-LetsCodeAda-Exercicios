class User {
    protected email: string;
    protected senha:  string;
    protected admin: boolean = false;
    
    constructor(email: string, senha: string){
        this.email = email;
        this.senha = senha;        
    }

    public isAdmin(): string {
        if(this.admin === false){
            return "É um usuário";
        } else {
            return "É um Administrador";
        }
    }
}

class Admin extends User{   
    
    constructor(email: string, senha: string){
        super(email, senha);
        this.admin = true;
    }
}

const pessoa1 = new User("user@user.com", "123456");
const pessoa2 = new Admin("admin@admin.com", "123456");

console.log(pessoa1.isAdmin());

console.log(pessoa2.isAdmin());