import { defineSchema } from "convex/server";

export default defineSchema({
  waitlistSignups: {
    email: {
      type: "string",
      description:
        "The email address of the signup, stored in lowercase for case-insensitive duplicate detection.",
    },
    createdAt: {
      type: "number",
      description: "Unix timestamp in milliseconds when the signup was created.",
    },
  },
  indexes: {
    by_email: {
      indexDescriptor: "by_email",
      fields: ["email"],
    },
  },
});
