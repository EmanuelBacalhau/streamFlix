import { ResourceWithOptions } from "adminjs";
import { Category, Course, Episode } from "../../models";
import { categoryResourceOption } from "./category";
import { courseResourceFeatures, courseResourceOptions } from "./course";
import { episodeResourceFeatures, episodeResourceOptions } from "./episode";

export const adminJsResources: ResourceWithOptions[] = [
    {
        resource: Category,
        options: categoryResourceOption,
    },

    {
        resource: Course,
        options: courseResourceOptions,
        features: courseResourceFeatures,
    },

    {
        resource: Episode,
        options: episodeResourceOptions,
        features: episodeResourceFeatures,
    },
];
