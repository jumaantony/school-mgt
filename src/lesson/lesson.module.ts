import { Module } from '@nestjs/common';
import { LessonResolver } from './lesson.resolvers';
import { LessonService } from './lesson.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lesson])],
  providers: [LessonService, LessonResolver],
  exports: [LessonService],
})
export class LessonModule {}
