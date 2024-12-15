CREATE TABLE "series" (
	"pid" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "series_pid_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"title" varchar(100) NOT NULL,
	"owner" integer NOT NULL,
	"content" text,
	"public" boolean NOT NULL,
	"url" varchar(50) NOT NULL,
	"coverurl" varchar(50),
	"bannerurl" varchar(50),
	"createdat" timestamp NOT NULL,
	CONSTRAINT "series_url_unique" UNIQUE("url")
);
--> statement-breakpoint
CREATE TABLE "users" (
	"pid" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "users_pid_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"username" varchar(50) NOT NULL,
	"knownname" varchar(50) NOT NULL,
	"fedihandle" varchar(50) NOT NULL,
	"email" varchar(255) NOT NULL,
	"avatarurl" varchar(355),
	"bannerurl" varchar(355),
	"bio" varchar(500),
	"createdat" timestamp NOT NULL,
	"lastlogin" timestamp,
	CONSTRAINT "users_username_unique" UNIQUE("username"),
	CONSTRAINT "users_fedihandle_unique" UNIQUE("fedihandle"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "works" (
	"pid" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "works_pid_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"title" varchar(100) NOT NULL,
	"series" integer NOT NULL,
	"content" text,
	"public" boolean NOT NULL,
	"url" varchar(50) NOT NULL,
	"thumburl" varchar(50),
	"createdat" timestamp NOT NULL
);
