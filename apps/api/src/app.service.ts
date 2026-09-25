import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth() {
    return {
      status: 'ok',
      service: 'yzm-api',
      timestamp: new Date().toISOString(),
    };
  }
}
