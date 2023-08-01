import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { LessonModule } from './lesson/lesson.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { LessonResolvers } from './lesson/lesson.resolvers';

@Module({
  imports: [
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
