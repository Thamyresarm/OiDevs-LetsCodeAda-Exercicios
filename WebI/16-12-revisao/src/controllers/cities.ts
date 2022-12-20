import { Request, Response } from "express";
import { getCityUseCase } from "../useCases/cities/getCity";

const cities: any[] = [];

export function listCities(request: Request, response: Response){
    return response.json(cities);
}

export function findCityById(request: Request, response: Response){
    const parametros = request.params;
    const city = cities.find(x => x.id === parametros.id)
    // const city = getCityUseCase(parametros.id);

    if(!city){
        response.status(404).json({
            message: 'Not found!'
        });
    }
    return response.json(city);
}

export function saveCity(request: Request, response: Response){
    const city = request.body;

    if(!city.name){
        return response.status(400).json({
            message: 'Name cannot be empty!'
        })
    }
    cities.push(city);
    
    return response.json(city);
}