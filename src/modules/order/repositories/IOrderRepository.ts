import ICreateOrderDTO from '@modules/order/dtos/ICreateOrderDTO';
import Order from '@modules/order/infra/typeorm/schemas/Order';

export default interface IOrderRepository {
    findAll(): Promise<Array<Order>>;
    create(data: ICreateOrderDTO): Promise<Order>;
}
