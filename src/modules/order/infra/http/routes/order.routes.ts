// import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import { Router } from 'express';
import OrderController from '../controllers/OrderController';

const orderRouter = Router();
const orderController = new OrderController();

orderRouter.get('/deals', orderController.index);
orderRouter.post('/deals', orderController.create);

export default orderRouter;
