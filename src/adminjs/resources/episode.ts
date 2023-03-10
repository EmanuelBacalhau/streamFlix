import { ResourceOptions } from "adminjs";

export const episodesResourceOptions: ResourceOptions = {
    navigation: "Catálogo",
    editProperties: [
        "name",
        "synopsis",
        "order",
        "uploadVideo",
        "uploadThumbnail",
        "secondsLong",
        "courseId",
    ],
    filterProperties: [
        "name",
        "secondsLong",
        "courseId",
        "createdAt",
        "updatedAt",
    ],
    listProperties: ["id", "name", "order", "secondsLong", "courseId"],
    showProperties: [
        "id",
        "name",
        "synopsis",
        "order",
        "videoUrl",
        "thumbnailUrl",
        "secondsLong",
        "courseId",
        "createdAt",
        "updatedAt",
    ],
};
