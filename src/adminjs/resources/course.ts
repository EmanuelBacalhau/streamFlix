import uploadFileFeature from "@adminjs/upload";
import { FeatureType, ResourceOptions } from "adminjs";
import path from "path";

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

export const courseResourceFeatures: FeatureType[] = [
    uploadFileFeature({
        provider: {
            local: {
                bucket: path.join(__dirname, "../../../public"),
                opts: {
                    baseUrl: "/public",
                },
            },
        },

        properties: {
            key: "thumbnailUrl",
            file: "uploadThumbnail",
        },

        uploadPath: (record, filename) =>
            `thambnails/course-${record.get("courseId")}/${filename}`,
    }),
];
