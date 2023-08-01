import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { LessonModule } from './lesson/lesson.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { LessonResolvers } from './lesson/lesson.resolvers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson/lesson.entity';

@Module({
  imports: [

    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/school',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [Lesson],
    }),

    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true,
      driver: ApolloDriver,
    }),
    LessonModule,
  ],
  controllers: [],
  providers: [LessonResolvers],
})
export class AppModule {}
