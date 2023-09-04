import { Field, GraphQLISODateTime, Int, ObjectType } from '@nestjs/graphql';
import { IBaseEntity } from '../interfaces/IBaseEntity';
import { Entity, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@ObjectType()
export abstract class BaseEntity implements IBaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @CreateDateColumn()
  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @CreateDateColumn()
  @Field(() => GraphQLISODateTime)
  updatedAt: Date;
}
