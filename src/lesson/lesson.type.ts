import { Field, ID, ObjectType } from "@nestjs/graphql";
import { StudentType } from "src/student/student.type";

@ObjectType('Lesson') // This decorator is used to expose the class to the GraphQL schema
export class LessonType {
    // Field decorator is used to expose the field to the GraphQL schema (type => ID means that the field is of type str
    @Field(type => ID)

    @Field()
    id: string;

    @Field()
    name: string;

    @Field()
    startDate: string;

    @Field()
    endDate: string;

    @Field(type => [StudentType])
    students: string[];
}