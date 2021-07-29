import {
    Column,
    CreateDateColumn,
    Entity,
    ObjectID,
    ObjectIdColumn
} from 'typeorm';

@Entity('order')
export default class Order {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    total_value: number;

    @CreateDateColumn()
    date: Date;
}
