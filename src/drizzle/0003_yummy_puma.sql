ALTER TABLE "resumes" RENAME COLUMN "userId" TO "user_id";--> statement-breakpoint
ALTER TABLE "resumes" RENAME COLUMN "createdAt" TO "created_at";--> statement-breakpoint
ALTER TABLE "resumes" RENAME COLUMN "updatedAt" TO "updated_at";--> statement-breakpoint
ALTER TABLE "resumes" DROP CONSTRAINT "resumes_userId_user_id_fk";
--> statement-breakpoint
ALTER TABLE "resumes" ADD CONSTRAINT "resumes_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;