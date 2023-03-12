import { ResourceOptions } from "adminjs";

export const userResourceOptions: ResourceOptions = {
    navigation: "Administração",
    properties: {
        birth: {
            type: "date",
        },

        password: {
            type: "password",
        },

        role: {
            availableValues: [
                { value: "admin", label: "Administrador" },
                { value: "user", label: "Usuário padrão" },
            ],
        },
    },

    editProperties: [
        "firstName",
        "lastName",
        "phone",
        "birth",
        "email",
        "password",
        "role",
    ],
    filterProperties: [
        "firstName",
        "lastName",
        "phone",
        "birth",
        "email",
        "role",
    ],
    listProperties: ["id", "firstName", "email", "role"],
};
