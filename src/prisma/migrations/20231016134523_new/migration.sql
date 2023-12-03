/*
  Warnings:

  - You are about to drop the column `route_id` on the `schedule_bus` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `schedule_bus` DROP COLUMN `route_id`;

-- CreateTable
CREATE TABLE `bus_route` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bus_from` VARCHAR(191) NOT NULL,
    `bus_to` VARCHAR(191) NOT NULL,
    `estimated_fee` DOUBLE NOT NULL,
    `current_balance` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wallet` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `customer_id` INTEGER NOT NULL,
    `balance` DOUBLE NOT NULL,
    `card_no` VARCHAR(191) NOT NULL,
    `card_name` VARCHAR(191) NOT NULL,
    `cvv` VARCHAR(191) NOT NULL,
    `exp_date` DATE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
