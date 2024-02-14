import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post {
  @PrimaryGeneratedColumn({type: 'int'})
  pid: number;

  @PrimaryColumn({type: 'int'})
  uid: number;

  @Column({type: 'text'})
  title: string;

  @Column({type: 'text'})
  content: string;

  @Column({type: 'timestamp'})
  createdDate: Date;

  @Column({type: 'timestamp', default: null})
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
  picture?: string;
}
