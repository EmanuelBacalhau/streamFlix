import { ResourceWithOptions } from "adminjs";
import { Category } from "../../models";
import { categoryResourceOption } from "./category";

export const adminJsResources: ResourceWithOptions[] = [
    {
        resource: Category,
        options: categoryResourceOption,
    },
];
