import { Router } from "express";
import { findCityById, listCities, saveCity } from "../controllers/cities";

const citiesRoutes = Router();

citiesRoutes.get('/', listCities);

citiesRoutes.get('/:id', findCityById);

citiesRoutes.post('/', saveCity);

export default citiesRoutes;