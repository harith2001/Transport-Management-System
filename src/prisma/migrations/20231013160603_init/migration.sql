-- AlterTable
ALTER TABLE `customer_foreign` MODIFY `depature_date` DATE NOT NULL,
    MODIFY `arrival_date` DATE NOT NULL;

-- AlterTable
ALTER TABLE `customer_local` MODIFY `DOB` DATE NOT NULL;
