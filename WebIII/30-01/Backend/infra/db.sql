\c postgres

CREATE TABLE "customers" ( 
  id TEXT UNIQUE NOT NULL,   
  name TEXT NOT NULL,   
  email TEXT NOT NULL UNIQUE PRIMARY KEY,   
  birthday TEXT NOT NULL,   
  cpf TEXT NOT NULL,   
  typeAccount TEXT NOT NULL 
);

INSERT INTO customers (id, name, email, birthday, cpf, typeAccount) 
VALUES('ABC123', 'Thamyres Magalhães', 'thamyres.magalhaes@letscode.com', '24/06/1992', '30356278490', 'PF');
