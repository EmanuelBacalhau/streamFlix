import { Category } from "./Category";
import { Course } from "./Course";

// Uma categoria pode ter mais de um curso
Category.hasMany(Course);
// Um curso pode ter apenas uma categoria
Course.belongsTo(Category);

export { Category, Course };
