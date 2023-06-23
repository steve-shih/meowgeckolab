import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ShipmentContent } from '../../model/schema/ShipmentContent.model';
import { Shipment } from '../../model/schema/Shipment.model';
import { CreateShipmentDto } from './dto/create-shipment.dto';
import { CreateShipmentContentDto } from './dto/create-shipmentContrent.dto';

@Injectable()
export class ShipmentService {
  constructor(
    @InjectModel(Shipment.name) private shipmentModel: Model<ShipmentContent>,
    @InjectModel(ShipmentContent.name)
    private shipmentContentModel: Model<ShipmentContent>,
  ) {}

  async create(
    createShipmentDto: CreateShipmentDto,
    createShipmentContentDto: CreateShipmentContentDto[],
  ) {
    const createdShipment = new this.shipmentModel(createShipmentDto);
    const savedShipment = await createdShipment.save();

    // 未來可以使用bulkwrite
    for (const contentDto of createShipmentContentDto) {
      const createdContent = new this.shipmentContentModel({
        ...contentDto,
        shipmentNumber: savedShipment._id,
      });
      await createdContent.save();
    }
  }
}
