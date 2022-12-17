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
    public role: string;
    @Column({type: 'varchar'})
    public status: string;
}