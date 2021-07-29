import IDealProvider from '@shared/container/providers/DealProvider/models/IDealProvider';
import AppError from '@shared/errors/AppError';
import axios from 'axios';

const pipedriveApi = 'https://api.pipedrive.com/api/v1/deals/';

export default class PipedriveProvider implements IDealProvider {
    public async filterDealsByWon(): Promise<any> {
        try {
            const { data: wonDeals } = await axios.get(pipedriveApi, {
                params: {
                    api_token: process.env.PIPEDRIVE_KEY,
                    status: 'won'
                }
            });

            return wonDeals.data;
        } catch {
            throw new AppError(
                'An error occurred while filtering deals with won status.'
            );
        }
    }
}
