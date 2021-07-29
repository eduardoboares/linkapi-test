import { container } from 'tsyringe';
import BlingProvider from './implementations/BlingProvider';
import IOrderProvider from './models/IOrderProvider';

const providers = {
    bling: BlingProvider
};

container.registerSingleton<IOrderProvider>('OrderProvider', providers.bling);
