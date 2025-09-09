import { Controller, Get } from '@nestjs/common';

@Controller('date')
export class DateController {
  @Get()
  getCurrentDate() {
    const now = new Date();
    return JSON.stringify({ current: now })
  }

  @Get('past')
  getPastDate() {
    const now = new Date("2024-01-01");
    return JSON.stringify({ current: now })
  }
}
