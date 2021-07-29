import CreateOrderService from '@modules/order/services/CreateOrderService';
import ListOrderService from '@modules/order/services/ListOrderService';
import AppError from '@shared/errors/AppError';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class OrderController {
    public async index(
        request: Request,
        response: Response
    ): Promise<Response> {
        try {
            const listOrder = container.resolve(ListOrderService);

            const orders = await listOrder.execute();

            return response.json(orders);
        } catch (error) {
            throw new AppError('An error occurred.');
        }
    }

    public async create(
        request: Request,
        response: Response
    ): Promise<Response> {
        const createOrder = container.resolve(CreateOrderService);

        const orders = await createOrder.execute();

        return response.json(orders);
    }
}
