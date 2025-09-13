import { Controller, Get } from '@nestjs/common';

@Controller('date')
export class DateController {
  @Get()
  getCurrentDate() {
    const now = new Date();
    return ({ current: now })
  }

  @Get('past')
  getPastDate() {
    const past = new Date("2024-01-01");
    return ({ past })
  }
}
