import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignInModule } from './auth/sign_in/sign_in.module';
import { SignUpModule } from './auth/sign_up/sign_up.module';

@Module({
  imports: [SignInModule, SignUpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
