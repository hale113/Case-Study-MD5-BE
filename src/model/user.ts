import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name:'users'})
export class User{
    @PrimaryGeneratedColumn({type:'int'})
    public readonly id: number;
    @Column({type:'varchar'})
    public name: string;
    @Column({type: 'varchar'})
    public password: string;
    @Column({type: 'varchar'})
    public img: string;
    @Column({type: 'int',default:1})//1: user
    public role: number ;
    @Column({type: 'int',default:1})//1: mở
    public status: number;
}