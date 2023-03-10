import { ResourceOptions } from "adminjs";

export const courseResourceOptions: ResourceOptions = {
    navigation: "Catálogo",
    editProperties: [
        "name",
        "synopsis",
        "uploadThumbnail",
        "featured",
        "categoryId",
    ],
    filterProperties: ["name", "featured", "createdAt", "updatedAt"],
    listProperties: ["id", "name", "featured", "categoryId"],
    showProperties: [
        "id",
        "name",
        "synopsis",
        "thumbnailUrl",
        "featured",
        "categoryId",
        "createdAt",
        "updatedAt",
    ],
};
