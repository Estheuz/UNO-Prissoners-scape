import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Player { //Add the correct fields later
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;//aa

  @Column()
  email: string;
}