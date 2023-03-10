import { Category } from "./Category";
import { Course } from "./Course";
import { Episode } from "./Episode";

Category.hasMany(Course); // Uma categoria pode ter mais de um curso
Course.belongsTo(Category); // Um curso pode ter apenas uma categoria

Course.hasMany(Episode); // Um curso pode ter mais de um curso
Episode.belongsTo(Course); // Um episódio pertence a apenas um curso

export { Category, Course, Episode };
