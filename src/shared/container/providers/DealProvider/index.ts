import { container } from 'tsyringe';
import PipedriveProvider from './implementations/PipedriveProvider';
import IDealProvider from './models/IDealProvider';

const providers = {
    pipedrive: PipedriveProvider
};

container.registerSingleton<IDealProvider>('DealProvider', providers.pipedrive);
