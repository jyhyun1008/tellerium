import { integer, pgTable, varchar, timestamp, boolean, text } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
    pid: integer().primaryKey().generatedAlwaysAsIdentity(),
    username: varchar({length: 50 }).notNull().unique(),
    knownname: varchar({ length: 50 }).notNull(),
    fedihandle: varchar({ length: 50 }).notNull().unique(),
    email: varchar({ length: 255 }).notNull().unique(),
    avatarurl: varchar({ length: 355 }),
    bannerurl: varchar({ length: 355 }),
    bio: varchar({ length: 500 }),
    createdat: timestamp().notNull(),
    lastlogin: timestamp(),
})

export const series = pgTable('series', {
    pid: integer().primaryKey().generatedAlwaysAsIdentity(),
    title: varchar({length: 100 }).notNull(),
    owner: integer().notNull(),
    content: text(),
    public: boolean().notNull(),
    url: varchar({ length: 50 }).notNull().unique(),
    coverurl: varchar({ length: 355 }),
    bannerurl: varchar({ length: 355 }),
    createdat: timestamp().notNull(),
})

export const works = pgTable('works', {
    pid: integer().primaryKey().generatedAlwaysAsIdentity(),
    title: varchar({length: 100 }).notNull(),
    series: integer().notNull(),
    content: text(),
    public: boolean().notNull(),
    url: varchar({ length: 50 }).notNull(),
    thumburl: varchar({ length: 355 }),
    createdat: timestamp().notNull(),
})