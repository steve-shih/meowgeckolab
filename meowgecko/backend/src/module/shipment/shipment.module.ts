import { Module } from '@nestjs/common';
import { ShipmentController } from './shipment.controller';
import { ShipmentService } from './shipment.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Shipment, shipmentSchema } from '../../model/schema/Shipment.model';
import {
  ShipmentContent,
  ShipmentContentSchema,
} from '../../model/schema/ShipmentContent.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Shipment.name, schema: shipmentSchema },
      { name: ShipmentContent.name, schema: ShipmentContentSchema },
    ]),
  ],
  controllers: [ShipmentController],
  providers: [ShipmentService],
})
export class ShipmentModule {}
