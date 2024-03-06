/*<<<<<<< mjBranchTest
export class Post {
  pid: number;
  uid: number;
  title: string;
  content: string;
  createdDate: Date;
  editDate?: Date;
  recommand: number;
  check: number;
  type: string;
  file?: string;
=======*/
import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Post {
  @PrimaryGeneratedColumn({type: 'int'})
  pid: number;

  @Column({type: 'int'})
  uid: number;

  @Column({type: 'text'})
  title: string;

  @Column({type: 'varchar'})
  writer: string;

  @Column({type: 'text'})
  content: string;

  @CreateDateColumn({type: 'timestamp'})
  createdDate: Date;

  @UpdateDateColumn({type: 'timestamp', default: null})
  editDate?: Date;

  @Column({type: 'int'})
  recommand: number;

  @Column({type: 'int'})
  check: number;

  @Column({type: 'varchar'})
  type: string;

  @Column({type: 'varchar', default: null})
  file?: string;

  @Column({type: 'varchar', default: null})
//>>>>>>> mjMainTest
  picture?: string;
}
