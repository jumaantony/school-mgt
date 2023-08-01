import { Module } from '@nestjs/common';
import { LessonResolvers } from './lesson.resolvers';

@Module({})
export class LessonModule {
    providers: [LessonResolvers]
}
