import {Column, Entity, PrimaryGeneratedColumn,} from "typeorm";
@Entity({name:'post-likes'})
export class PostLike {
    @PrimaryGeneratedColumn({type: 'int'})
    public readonly id: number;
    @Column({type: 'int'})
    public IdU: number;
    @Column({type: 'int'})
    public IdP: number;
}