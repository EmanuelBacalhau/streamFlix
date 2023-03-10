import { ResourceWithOptions } from "adminjs";
import { Category, Course, Episode } from "../../models";
import { categoryResourceOption } from "./category";
import { courseResourceOptions } from "./course";
import { episodesResourceOptions } from "./episode";

export const adminJsResources: ResourceWithOptions[] = [
    {
        resource: Category,
        options: categoryResourceOption,
    },

    {
        resource: Course,
        options: courseResourceOptions,
    },

    {
        resource: Episode,
        options: episodesResourceOptions,
    },
];
