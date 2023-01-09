import { Router } from "express";

const citiesRotes = Router();

let cities: any[] = [];

citiesRotes.get('/', (request, response) => {
  return response.send(cities);
});

citiesRotes.get('/:id', (request, response) => {
  const { id } = request.params;
  const city = cities.find((x) => x.id === Number(id));

  if (!city) { 
    return response.status(404).send('City not found!');
  }

  return response.send(city);
});

citiesRotes.post('/', (request, response) => {
  const city = request.body;

  if(!city.id){
    return response.status(400).send({
      field: 'id',
      message: 'Id invalid!'
    })
  }

  if(!city.name){
    return response.status(400).send({
      field: 'name',
      message: 'name invalid'
    })
  }

  if(!city.uf){
    return response.status(400).send({
      field: 'uf',
      message: 'UF invalid'
    })
  }


  cities.push(city);
  return response.send(city);
});

citiesRotes.put('/:id', (request, response) => {
  const { id } = request.params;
  const cityIndex = cities.findIndex((x) => x.id === Number(id));

  if (cityIndex === -1) {
    // Retornar que não encontrou
    return response.send('Not Found!');
  }

  cities[cityIndex].name = request.body.name;
  cities[cityIndex].uf = request.body.uf;

  return response.send(cities[cityIndex]);
});

citiesRotes.delete('/:id', (request, response) => {
  const { id } = request.params;
  cities = cities.filter((x) => x.id !== Number(id));
  return response.send('Deleted!');
});

export default citiesRotes;