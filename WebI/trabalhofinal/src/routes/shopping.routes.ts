import { Router, Request, Response } from "express";

const shoppingRoutes = Router();

shoppingRoutes.get('/:id', (req: Request, res: Response) => {
    res.json({
        message: 'compra rota getbyid'
    })
});

shoppingRoutes.get('/user/:id', (req: Request, res: Response) => {
    res.json({
        message: 'compras de um usuario rota getbyuserid'
    })
});

shoppingRoutes.post('/', (req: Request, res: Response) => {
    res.json({
        message: 'compra rota post'
    })
});

shoppingRoutes.delete('/', (req: Request, res: Response) => {
    res.json({
        message: 'compra rota delete(cancelar)'
    })
});

export default shoppingRoutes;