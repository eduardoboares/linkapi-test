import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import Order from '../infra/typeorm/schemas/Order';
import IOrderRepository from '../repositories/IOrderRepository';

@injectable()
export default class ListOrderService {
    constructor(
        @inject('OrderRepository')
        private orderRepository: IOrderRepository
    ) {}

    public async execute(): Promise<Array<Order>> {
        try {
            const orders = await this.orderRepository.findAll();

            return orders;
        } catch (error) {
            throw new AppError('An error occurred while list orders.');
        }
    }
}
