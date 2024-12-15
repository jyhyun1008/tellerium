"use server";
import { sql, eq, and, or, like } from 'drizzle-orm'
import { revalidatePath } from "next/cache";
import { db } from "@/src/db/drizzle";
import { users, works, series } from "@/src/db/schema";

export const getUsers = async () => {
    const data = await db.select().from(users);
    return data;
};

export const getUsersByUsername = async (username) => {
    const data = await db.select().from(users).where(eq(users.username, username));
    return data;
};

export const getWorks = async () => {
    const data = await db.select().from(works).where(eq(works.public, true));
    return data;
};

export const getSeries = async () => {
    const data = await db.select().from(series).where(eq(series.public, true));
    return data;
};

export const getSeriesByUrl = async (url) => {
    const data = await db.select().from(series).where(eq(series.url, url));
    return data;
};

export const getSeriesByUsername = async (username) => {
    const usernameresult = await db.select().from(users).where(eq(users.username, username));
    const data = await db.select().from(series).where(eq(series.owner, usernameresult[0].pid))
    return data;
};

export const getWorksBySeriesUrl = async (url) => {
    const seriesresult = await db.select().from(series).where(eq(series.url, url));
    const data = await db.select().from(works).where(eq(works.series, seriesresult[0].pid))
    return data;
};