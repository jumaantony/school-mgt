import { Mutation, Query, Resolver, Args } from "@nestjs/graphql";
import { LessonType } from "./lesson.type";
import { LessonService } from "./lesson.service";
import { CreateLessonInput } from "./lesson.input";
import { AssignStudentsToLessonInput } from "./assign-students-to-lesson.input";

@Resolver(of => LessonType)
export class LessonResolver{

    constructor(
        private lessonService: LessonService
    ){}

    @Query(returns => LessonType)
    lesson(
        @Args('id') id: string,
    ){
        return this.lessonService.getLesson(id);
    }


    @Mutation(returns => LessonType)
    createLesson(
        @Args('createLessonInput') createLessonInput: CreateLessonInput,
    ){
        return this.lessonService.createLesson(createLessonInput);

    }

    @Query(returns => [LessonType])
    lessons(){
        return this.lessonService.getLessons();
    }

    @Mutation(returns => LessonType)
    assignStudentsToLesson(
        @Args('assignStudentsToLessonInput') assignStudentsToLessonInput: AssignStudentsToLessonInput,
    ){
        const { lessonId, studentIds } = assignStudentsToLessonInput;
        return this.lessonService.assignStudentsToLesson(lessonId, studentIds);
    }

}