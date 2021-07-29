import IOrderProvider from '@shared/container/providers/OrderProvider/models/IOrderProvider';
import AppError from '@shared/errors/AppError';
import axios from 'axios';

const bligApi = 'https://bling.com.br/Api/v2/pedido/json/';

export default class BlingProvider implements IOrderProvider {
    public async generateOrder(orderXML: XMLDocument): Promise<any> {
        try {
            const order = await axios.post(
                bligApi,
                {},
                {
                    params: {
                        apikey: process.env.BLING_KEY,
                        xml: orderXML
                    }
                }
            );

            return order;
        } catch {
            throw new AppError('An error occurred while generating order.');
        }
    }
}
