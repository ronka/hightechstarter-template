// Re-export database connection and types
export { db, testConnection } from "../db";
export type {
  User,
  NewUser,
} from "../db/schema";
