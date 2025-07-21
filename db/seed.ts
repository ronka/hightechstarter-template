import { db } from "./index";
import { users, helloWorld } from "./schema";

async function seed() {
  try {
    console.log("🌱 Starting database seeding...");

    // Clear existing data
    await db.delete(helloWorld);
    await db.delete(users);

    // Seed users
    const insertedUsers = await db
      .insert(users)
      .values([
        {
          id: "user_1",
          name: "Alice",
        },
        {
          id: "user_2",
          name: "Bob",
        },
      ])
      .returning();
    console.log(`✅ Inserted ${insertedUsers.length} users`);

    // Seed hello_world
    const insertedHello = await db
      .insert(helloWorld)
      .values([
        { message: "Hello, world!" },
        { message: "Hi from the database!" },
      ])
      .returning();
    console.log(`✅ Inserted ${insertedHello.length} hello_world rows`);

    console.log("🎉 Database seeding completed successfully!");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
}

// Run the seed function
seed()
  .then(() => {
    console.log("✅ Seeding completed");
    process.exit(0);
  })
  .catch((error) => {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  });
