import "dotenv/config";

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { migrate } from "drizzle-orm/neon-http/migrator";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

const main = async () => {
  try {
    await migrate(db, {
      migrationsFolder: "./src/drizzle",
    });
    console.log("Migration completa");
  } catch (err) {
    console.error("Erro durante a migration: ", err);
    process.exit(1);
  }
};

main();
