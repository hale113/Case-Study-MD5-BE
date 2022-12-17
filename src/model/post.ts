import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name:'posts'})
export class Post{
    @PrimaryGeneratedColumn({type:'int'})
    public readonly id: number;
    @Column({type:'int'})
    public idU: number;
    @Column({type:'varchar'})
    public title: string;
    @Column({type:'varchar'})
    public content: string;
    @Column({type:'varchar'})
    public time: string;
    @Column({type:'varchar'})
    public img: string;
    @Column({type:'varchar'})
    public status: string;
    @Column({type:'int'})
    public like: number;
    @Column({type:'varchar'})
    public comments: string
}