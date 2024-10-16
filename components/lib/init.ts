import { closeDB, getDatabase } from "@/components/lib/database";
import { SELECT_TABLE_LIST } from "@/components/lib/sql/sql";
/**
 * テーブルの作成を行う
 */
export const Init = async () => {
	const db = await getDatabase();

	const result = db.selectObjects(SELECT_TABLE_LIST);
	console.log(result);

	return result;
};
