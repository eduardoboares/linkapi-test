import IDealProvider from '@shared/container/providers/DealProvider/models/IDealProvider';
import IOrderProvider from '@shared/container/providers/OrderProvider/models/IOrderProvider';
import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import CreateOrderHelper from '../helpers/CreateOrderHelper';
import Order from '../infra/typeorm/schemas/Order';
import IOrderRepository from '../repositories/IOrderRepository';

@injectable()
export default class CreateOrderService {
    constructor(
        @inject('OrderRepository')
        private orderRepository: IOrderRepository,

        @inject('DealProvider')
        private dealProvider: IDealProvider,

        @inject('OrderProvider')
        private orderProvider: IOrderProvider
    ) {}

    public async execute(): Promise<Array<Order>> {
        try {
            const returnOrders: Order[] = [];

            const wonDeals = await this.dealProvider.filterDealsByWon();

            await Promise.all(
                wonDeals.map(async (deal: any) => {
                    const orderXML = await CreateOrderHelper();

                    const orderResponse =
                        await this.orderProvider.generateOrder(orderXML);

                    if (orderResponse.status === 201) {
                        try {
                            const orderGenerated =
                                await this.orderRepository.create({
                                    total_value: deal.value,
                                    date: new Date()
                                });

                            returnOrders.push(orderGenerated);
                        } catch {
                            throw new AppError(
                                'An error occurred while save orders in database.'
                            );
                        }
                    }
                })
            );

            return returnOrders;
        } catch {
            throw new AppError('An error occurred while create orders.');
        }
    }
}
