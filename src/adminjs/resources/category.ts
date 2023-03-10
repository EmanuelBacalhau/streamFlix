import { ResourceOptions } from "adminjs";

export const categoryResourceOption: ResourceOptions = {
    navigation: "Catálogo",
    editProperties: ["name", "position"],
    filterProperties: ["name", "position", "createdAt", "updatedAt"],
    listProperties: ["name", "position"],
    showProperties: ["id", "name", "position", "createdAt", "updatedAt"],
};
