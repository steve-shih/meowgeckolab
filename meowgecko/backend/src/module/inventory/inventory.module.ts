import { Module } from '@nestjs/common';
import { InventoryController } from './inventory.controller';
import { InventoryService } from './inventory.service';
import { inventorySchema, Inventory } from '../../model/schema/Inventory.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Inventory.name, schema: inventorySchema },
    ]),
  ],
  controllers: [InventoryController],
  providers: [InventoryService],
})
export class InventoryModule {}
