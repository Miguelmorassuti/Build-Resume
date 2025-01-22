ALTER TABLE "resumes" RENAME COLUMN "user_id" TO "userId";--> statement-breakpoint
ALTER TABLE "resumes" RENAME COLUMN "created_at" TO "createdAt";--> statement-breakpoint
ALTER TABLE "resumes" RENAME COLUMN "updated_at" TO "updatedAt";--> statement-breakpoint
ALTER TABLE "resumes" DROP CONSTRAINT "resumes_user_id_user_id_fk";
--> statement-breakpoint
ALTER TABLE "resumes" ADD CONSTRAINT "resumes_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;