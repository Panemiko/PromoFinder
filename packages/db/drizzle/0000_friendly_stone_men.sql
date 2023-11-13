CREATE TABLE `promofinder_email_subscriptions` (
	`id` varchar(256) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`email` varchar(256),
	CONSTRAINT `promofinder_email_subscriptions_id` PRIMARY KEY(`id`),
	CONSTRAINT `promofinder_email_subscriptions_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
CREATE TABLE `promofinder_products` (
	`id` varchar(256) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updated_at` timestamp ON UPDATE CURRENT_TIMESTAMP,
	`name` varchar(256) NOT NULL,
	`description` varchar(1024),
	`photo_id` varchar(256) NOT NULL,
	`ean_code` varchar(256),
	CONSTRAINT `promofinder_products_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `promofinder_store_permissions` (
	`id` varchar(256) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updated_at` timestamp ON UPDATE CURRENT_TIMESTAMP,
	`user_id` varchar(256),
	`role` enum('master','admin','promoter','user'),
	`enabled` boolean,
	`store_id` varchar(256),
	CONSTRAINT `promofinder_store_permissions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `promofinder_stores` (
	`id` varchar(256) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updated_at` timestamp ON UPDATE CURRENT_TIMESTAMP,
	`name` varchar(256) NOT NULL,
	`banner_key` varchar(256),
	`avatar_key` varchar(256) NOT NULL,
	CONSTRAINT `promofinder_stores_id` PRIMARY KEY(`id`)
);
