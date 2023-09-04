import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { OwnersService } from './owners.service';
import { OwnersResolver } from './owners.resolver';
import { OwnerEntity } from './entities/owner.entity';

@Module({
  providers: [OwnersResolver, OwnersService],
  imports: [
    TypeOrmModule.forFeature([OwnerEntity])
  ],
  exports: [OwnersService]
})
export class OwnersModule {}
