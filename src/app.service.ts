import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  doSomething(): string{
    return "Code ran successfully"
  }
}

