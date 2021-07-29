import OrderRepository from '@modules/order/infra/typeorm/repositories/OrderRepository';
import IOrderRepository from '@modules/order/repositories/IOrderRepository';
import { container } from 'tsyringe';
import './providers';

container.registerSingleton<IOrderRepository>(
    'OrderRepository',
    OrderRepository
);
