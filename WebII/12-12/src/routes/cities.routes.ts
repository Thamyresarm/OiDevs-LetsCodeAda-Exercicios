import { PrismaClient } from "@prisma/client";
import { Request, Response, Router } from 'express';
import { v4 } from "uuid";
import { CityDto } from "../domain/dtos/city";

const citiesRotes = Router();

const prisma = new PrismaClient();

citiesRotes.get('/', async (request: Request, response: Response) => {

  const cities = await prisma.city.findMany();

  return response.send(cities);
});

interface GetParams {
  id: number;
}

citiesRotes.get('/:id', async (request: Request<GetParams>, response: Response) => {
  const { id } = request.params;

  const city = await prisma.city.findFirst({
    where: {
      id: {
        equals: id
      }
    }
  })

  if (!city) { 
    return response.status(404).send('City not found!');
  }

  return response.send(city);
});

citiesRotes.post('/', async (request: Request<{}, {}, CityDto>, response: Response) => {
  const city = request.body;

  if(!city.name){
    return response.status(400).send({
      field: 'name',
      message: 'name invalid'
    })
  }

  if(!city.UF){
    return response.status(400).send({
      field: 'uf',
      message: 'UF invalid'
    })
  }

  const createdCity = await prisma.city.create({
    data: {
      id: city.id,
      name: city.name,
      uf: city.UF,
    }
  })

  return response.send(createdCity);
});

interface PutParams {
  id: number;
}

citiesRotes.put('/:id', async (
  request: Request<PutParams, {}, Omit<CityDto, 'id'>>,
  response: Response
) => {
  const { id } = request.params;
  const cityData = request.body
  
  const city = await prisma.city.findFirst({
    where: {
      id: {
        equals: id,
      },
    },
  });

  if (!city) {
    return response.status(404).json({
      message: 'City not found!',
    });
  }

  if (!city.name) {
    return response.status(400).json({
      field: 'name',
      message: 'Name is invalid!',
    });
  }

  const updatedCity = await prisma.city.update({
    data: {
      name: cityData.name,
      uf: cityData.UF,
    },
    where: {
      id: id,
    },
  });

  return response.json(updatedCity);
});

interface DeleteParams {
  id: number;
}

citiesRotes.delete('/:id', async (request: Request<DeleteParams>, response: Response) => {
  const { id } = request.params;

  const cityExists = await prisma.city.findFirst({
    where: {
      id: {
        equals: id,
      },
    },
  });

  if (!cityExists) {
    return response.status(404).json({
      message: 'City not found!',
    });
  }

  await prisma.city.delete({
    where: {
      id: id,
    },
  });
  
  return response.json({
    message: 'City deleted succeeded!',
  });
}
);


export default citiesRotes;