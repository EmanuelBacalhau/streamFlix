'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("courses", {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },

            name: {
                type: Sequelize.STRING,
                allowNull: false
            },

            synopsis: {
                type: Sequelize.TEXT,
                allowNull: false
            },

            thumbnail_url: {
                type: Sequelize.STRING
            },

            featured: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },

            category_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: { model: "categories", key: "id" },
                onDelete: "RESTRICT",
                onUpdate: "CASCADE"
            },

            created_at: {
                type: Sequelize.DATE,
                allowNull: false
            },

            updated_at: {
                type: Sequelize.DATE,
                allowNull: false
            }

        })
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("categories");
    }
};
