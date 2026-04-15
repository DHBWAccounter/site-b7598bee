import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// Convex indexes are not unique by themselves.
// Enforce uniqueness in mutations before inserts when required by the product rules.
export default defineSchema({
  waitlistSignups: defineTable({
    email: v.string(),
    createdAt: v.number(),
  }).index("by_email", ["email"]),
});
