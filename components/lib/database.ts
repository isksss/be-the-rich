"use client";

import sqlite3InitModule, {
	type Database,
	type Sqlite3Static,
} from "@sqlite.org/sqlite-wasm";

let db: Database | null = null;

const connectDB = (sqlite3: Sqlite3Static) => {
	db = new sqlite3.oo1.DB("file:local?vfs=kvvfs", "ct");
	return db;
};

/**
 * DBを閉じる
 */
export const closeDB = () => {
	db?.close();
	db = null;
};

/**
 * DB接続を取得.
 *
 * @returns
 */
export const getDatabase = async (): Promise<Database> => {
	if (db) {
		return db;
	}

	try {
		const sqlite3 = await sqlite3InitModule();

		db = connectDB(sqlite3);

		return db;
	} catch (err: unknown) {
		if (err instanceof Error) {
			throw err;
		}
	}

	throw new Error("unknown error");
};
