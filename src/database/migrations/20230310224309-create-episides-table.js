'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("episodes", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },

            name: {
                type: Sequelize.STRING,
                allowNull: false
            },

            synopsis: {
                type: Sequelize.TEXT,
                allowNull: false
            },

            order: {
                type: Sequelize.INTEGER,
                allowNull: false
            },

            video_url: {
                type: Sequelize.STRING
            },

            thumbnail_url: {
                type: Sequelize.STRING
            },

            seconds_long: {
                type: Sequelize.INTEGER
            },

            course_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: { model: "courses", key: "id" },
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
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("episodes")
    }
};
