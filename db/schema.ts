import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

// Users table
export const users = pgTable("users", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Example hello_world table
export const helloWorld = pgTable("hello_world", {
  id: serial("id").primaryKey(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// TypeScript types
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

export type HelloWorld = typeof helloWorld.$inferSelect;
export type NewHelloWorld = typeof helloWorld.$inferInsert;
