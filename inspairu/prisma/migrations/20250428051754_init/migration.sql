-- CreateTable
CREATE TABLE `users` (
    `user_id` BIGINT NOT NULL AUTO_INCREMENT,
    `user_uuid` VARCHAR(36) NOT NULL,
    `first_name` VARCHAR(100) NOT NULL,
    `last_name` VARCHAR(100) NOT NULL,
    `username` VARCHAR(100) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `bio` TEXT NULL,
    `country_code` VARCHAR(5) NULL,
    `phone_number` VARCHAR(12) NULL,
    `dob` DATE NULL,
    `gender` ENUM('M', 'F', 'O') NULL,
    `password` VARCHAR(255) NOT NULL,
    `auth_key` VARCHAR(255) NULL,
    `is_blocked` BOOLEAN NULL DEFAULT false,
    `is_deleted` BOOLEAN NULL DEFAULT false,
    `is_verified` BOOLEAN NULL DEFAULT false,
    `created_datetime` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_datetime` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `user_uuid`(`user_uuid`),
    UNIQUE INDEX `users_username_key`(`username`),
    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `email_otp_verification` (
    `email_id` VARCHAR(80) NOT NULL,
    `OTP` VARCHAR(6) NOT NULL,

    PRIMARY KEY (`email_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `account` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` BIGINT NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `provider` VARCHAR(191) NOT NULL,
    `providerAccountId` VARCHAR(191) NOT NULL,
    `refresh_token` TEXT NULL,
    `access_token` TEXT NULL,
    `expires_at` INTEGER NULL,
    `token_type` VARCHAR(191) NULL,
    `scope` VARCHAR(191) NULL,
    `id_token` TEXT NULL,
    `session_state` VARCHAR(191) NULL,

    INDEX `Account_userId_fkey`(`userId`),
    UNIQUE INDEX `Account_provider_providerAccountId_key`(`provider`, `providerAccountId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ai_tool_mstr` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `is_active` BOOLEAN NULL,
    `created_datetime` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_datetime` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `name`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `blocked_comments` (
    `comment_id` BIGINT NOT NULL,
    `user_id` BIGINT NOT NULL,

    PRIMARY KEY (`comment_id`, `user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `comment_reaction` (
    `comment_id` BIGINT NOT NULL,
    `reacted_by` BIGINT NOT NULL,
    `created_datetime` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`comment_id`, `reacted_by`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `comment_reply` (
    `reply_id` BIGINT NOT NULL AUTO_INCREMENT,
    `comment_id` BIGINT NULL,
    `reply_by` BIGINT NULL,
    `reply` VARCHAR(255) NULL,
    `created_datetime` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_datetime` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `total_reaction` INTEGER NULL DEFAULT 0,

    PRIMARY KEY (`reply_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `comment_reply_reaction` (
    `reply_id` BIGINT NOT NULL,
    `reacted_by` BIGINT NOT NULL,
    `created_datetime` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`reply_id`, `reacted_by`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `comments` (
    `comment_id` BIGINT NOT NULL AUTO_INCREMENT,
    `feed_id` BIGINT NULL,
    `comment_by` BIGINT NULL,
    `comment` TEXT NULL,
    `total_reaction` INTEGER NULL DEFAULT 0,
    `total_reply` INTEGER NULL DEFAULT 0,
    `created_datetime` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_datetime` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`comment_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `feed_ai_tool` (
    `feed_id` BIGINT NOT NULL,
    `ai_tool_id` INTEGER NOT NULL,

    INDEX `fk_ai_tool`(`ai_tool_id`),
    PRIMARY KEY (`feed_id`, `ai_tool_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `feed_hashtag` (
    `feed_id` BIGINT NOT NULL,
    `hashtag` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`feed_id`, `hashtag`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `feed_media` (
    `id` BIGINT NOT NULL,
    `feed_id` BIGINT NOT NULL,
    `thumbnail_url` VARCHAR(255) NOT NULL,
    `media_url` VARCHAR(255) NOT NULL,
    `media_type` ENUM('image', 'video', 'music') NULL DEFAULT 'image',
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `fk_feed_media`(`feed_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `feeds` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `feed_uuid` CHAR(36) NOT NULL,
    `user_id` BIGINT NOT NULL,
    `caption` VARCHAR(255) NULL,
    `description` TEXT NULL,
    `prompt` TEXT NULL,
    `feed_type` ENUM('text', 'media') NULL DEFAULT 'text',
    `generated_text` TEXT NULL,
    `is_deleted` BOOLEAN NULL DEFAULT false,
    `total_views_count` BIGINT NULL DEFAULT 0,
    `total_likes_count` BIGINT NULL DEFAULT 0,
    `total_comments_count` BIGINT NULL DEFAULT 0,
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `feed_uuid`(`feed_uuid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reactions` (
    `feed_id` BIGINT NOT NULL,
    `reacted_by` BIGINT NOT NULL,
    `created_datetime` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`feed_id`, `reacted_by`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `report_feeds` (
    `feed_id` BIGINT NOT NULL,
    `blocked_by` BIGINT NOT NULL,
    `message` VARCHAR(256) NULL,
    `created_datetime` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_datetime` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`feed_id`, `blocked_by`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `views` (
    `feed_id` BIGINT NOT NULL,
    `viewed_by` BIGINT NOT NULL,
    `created_datetime` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`viewed_by`, `feed_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `account` ADD CONSTRAINT `Account_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `feed_ai_tool` ADD CONSTRAINT `fk_ai_tool` FOREIGN KEY (`ai_tool_id`) REFERENCES `ai_tool_mstr`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `feed_ai_tool` ADD CONSTRAINT `fk_feed_ai_tool` FOREIGN KEY (`feed_id`) REFERENCES `feeds`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `feed_hashtag` ADD CONSTRAINT `fk_feed_hashtag` FOREIGN KEY (`feed_id`) REFERENCES `feeds`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `feed_media` ADD CONSTRAINT `fk_feed_media` FOREIGN KEY (`feed_id`) REFERENCES `feeds`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;
