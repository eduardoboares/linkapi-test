const devConfig = {
    type: 'mongodb',
    url: process.env.MONGO_URL,
    useNewUrlParser: true,
    synchronize: true,
    logging: true,
    entities: ['./src/modules/**/infra/typeorm/schemas/*.ts']
};

const prodConfig = {
    type: 'mongodb',
    url: process.env.MONGO_URL,
    useNewUrlParser: true,
    synchronize: true,
    logging: true,
    entities: ['./src/modules/**/infra/typeorm/schemas/*.ts']
};

module.exports =
    process.env.NODE_ENV === 'development' ? devConfig : prodConfig;
