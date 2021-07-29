import ICreateOrderDTO from '@modules/order/dtos/ICreateOrderDTO';
import Order from '@modules/order/infra/typeorm/schemas/Order';
import IOrderRepository from '@modules/order/repositories/IOrderRepository';
import AppError from '@shared/errors/AppError';
import { getMongoRepository, MongoRepository } from 'typeorm';

class OrderRepository implements IOrderRepository {
    private ormRepository: MongoRepository<Order>;

    constructor() {
        this.ormRepository = getMongoRepository(Order);
    }

    public async findAll(): Promise<Array<Order>> {
        try {
            const orders = await this.ormRepository.find();

            return orders;
        } catch (error) {
            throw new AppError('An error occurred while list orders.');
        }
    }

    public async create({
        total_value,
        date
    }: ICreateOrderDTO): Promise<Order> {
        const order = this.ormRepository.create({
            total_value,
            date
        });

        await this.ormRepository.save(order);

        return order;
    }
}

export default OrderRepository;
