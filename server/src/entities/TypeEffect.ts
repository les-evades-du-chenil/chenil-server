import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Type } from "./Type";

@Entity()
export class TypeEffect {
  @PrimaryGeneratedColumn("uuid")
  TypeEffectId: string;

  @OneToOne(() => Type)
  fromType: Type;

  @OneToOne(() => Type) // Probably not OneToOne cause 1 type can be linked to many type...
  toType: Type;

  @Column()
  coefficient: number;
}
