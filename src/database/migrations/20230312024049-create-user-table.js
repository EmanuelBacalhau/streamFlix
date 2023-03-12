'use strict';

const { emit } = require('process');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("users", {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },

            first_name: {
                type: Sequelize.STRING,
                allowNull: false
            },

            last_name: {
                type: Sequelize.STRING,
                allowNull: false
            },

            phone: {
                type: Sequelize.STRING,
                allowNull: false,
            },

            birth: {
                type: Sequelize.DATE,
                allowNull: false
            },

            email: {
                type: Sequelize.STRING,
                unique: true,
                allowNull: false,
                validate: {
                    isEmail: true
                }
            },

            password: {
                type: Sequelize.STRING,
                allowNull: false
            },

            role: {
                type: Sequelize.STRING,
                allowNull: false
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
        await queryInterface.dropTable('users');

    }
};
