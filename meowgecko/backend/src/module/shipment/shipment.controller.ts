import { Body, Controller, Post } from '@nestjs/common';
import { CreateShipmentDto } from './dto/create-shipment.dto';
import { CreateShipmentContentDto } from './dto/create-shipmentContrent.dto';
import { ShipmentService } from './shipment.service';

/**
 * 進貨單
 */

@Controller('shipment')
export class ShipmentController {
  constructor(private readonly shipmentService: ShipmentService) {}

  @Post()
  async create(
    @Body() createShipmentDto: CreateShipmentDto,
    @Body('contents') createShipmentContentDto: CreateShipmentContentDto[],
  ) {
    return await this.shipmentService.create(
      createShipmentDto,
      createShipmentContentDto,
    );
  }
}
