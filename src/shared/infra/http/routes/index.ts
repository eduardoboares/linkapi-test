import orderRouter from '@modules/order/infra/http/routes/order.routes';
import { Request, Response, Router } from 'express';

const routes = Router();

routes.get('/health', (_: Request, response: Response) => {
    response.json('🚀 API-RESTful of LinkApi Test Running!');
});

routes.use('/order', orderRouter);

export default routes;
