import uploadFileFeature from "@adminjs/upload";
import { FeatureType, ResourceOptions } from "adminjs";
import path from "path";

export const episodeResourceOptions: ResourceOptions = {
    navigation: "Catálogo",
    editProperties: [
        "name",
        "synopsis",
        "order",
        "uploadVideo",
        "secondsLong",
        "courseId",
    ],
    filterProperties: [
        "name",
        "order",
        "secondsLong",
        "courseId",
        "createdAt",
        "updatedAt",
    ],
    listProperties: ["id", "name", "order", "courseId"],
};

export const episodeResourceFeatures: FeatureType[] = [
    uploadFileFeature({
        provider: {
            local: {
                bucket: path.join(__dirname, "../../../uploads"),
                opts: {
                    baseUrl: "/uploads",
                },
            },
        },

        properties: {
            key: "videoUrl",
            file: "uploadVideo",
        },

        uploadPath: (record, filename) =>
            `thumbnails/course-${record.get("courseId")}/${filename}`,
    }),
];
