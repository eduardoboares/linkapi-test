import { parse } from 'js2xmlparser';

async function convertObjToXml(): Promise<any> {
    const orderObj = {
        pedido: [
            {
                cliente: {
                    nome: 'Eduardo',
                    email: 'eduardop.boares@gmail.com'
                },
                transporte: {
                    transportadora: 'Transportadora XYZ',
                    tipo_frete: 'R',
                    servico_correios: 'SEDEX - CONTRATO'
                },
                volumes: {
                    volume: {
                        servico: 'SEDEX - CONTRATO',
                        codigoRastreamento: 'RX32084021'
                    }
                },
                items: {
                    item: {
                        codigo: 1,
                        descricao: 'Item',
                        vlr_unit: '10'
                    }
                }
            }
        ]
    };

    return parse('pedido', orderObj);
}

export default convertObjToXml;
