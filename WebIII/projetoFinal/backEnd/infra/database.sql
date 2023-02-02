CREATE DATABASE trabalho_final;

\c trabalho_final;

CREATE TABLE "veiculos" (
   placa VARCHAR ( 7 ) not null unique primary key,
   marca VARCHAR ( 50 ) not null,
   modelo VARCHAR ( 50 ) not null,
   ano_fab VARCHAR ( 4 ) not null,
   ano_modelo VARCHAR ( 4 ) not null,
   cor VARCHAR ( 50 ) not null);

INSERT INTO "veiculos" (placa, marca, modelo, ano_fab, ano_modelo, cor) 
VALUES('ABC123', 'Thamyres', 'THAMY2020', '2020', '2021', 'ROSA');
