import { Column, Entity, PrimaryColumn} from "typeorm";

@Entity({
  database: 'user', name:'user'
})
export class User {
  @PrimaryColumn({type: 'int'})
  uid: number;

  @Column({type: 'varchar'})
  email: string;

  @Column({type: 'int'})
  level: number; 

  @Column({type: 'int'})
  studentId: number; //학번

  @Column({type: 'int'})
  period: number;

  @Column({type: 'int'})
  phoneNumber: number;

  @Column({type: 'varchar'})
  name: string;

  @Column({type: 'timestamp'})
  creationDate: Date;
}
