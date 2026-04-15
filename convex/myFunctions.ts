import { mutation } from "./_generated/server";
import { v } from "convex/values";

// Validates email format: contains @ with text on both sides
function isValidEmail(email: string): boolean {
  const parts = email.split("@");
  if (parts.length !== 2) return false;
  const [local, domain] = parts;
  return local.length > 0 && domain.length > 0 && domain.includes(".");
}

export const joinWaitlist = mutation({
  args: {
    email: v.string(),
  },
  handler: async (ctx, args) => {
    // Normalize email to lowercase for case-insensitive duplicate detection
    const normalizedEmail = args.email.toLowerCase().trim();

    // Validate email format
    if (!isValidEmail(normalizedEmail)) {
      throw new Error("Please enter a valid email address");
    }

    // Check for existing email using the unique index
    const existing = await ctx.db
      .query("waitlistSignups")
      .withIndex("by_email", (q) => q.eq("email", normalizedEmail))
      .first();

    if (existing) {
      throw new Error("This email is already on the waitlist");
    }

    // Insert the new signup
    await ctx.db.insert("waitlistSignups", {
      email: normalizedEmail,
      createdAt: Date.now(),
    });

    return { success: true };
  },
});
