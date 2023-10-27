import { auth } from "@clerk/nextjs";
import { createUploadthing } from "uploadthing/next";
import type { FileRouter } from "uploadthing/next";

const f = createUploadthing();

const ensureAuthMiddleware = async () => {
  // This code runs on your server before upload
  const { userId } = auth();

  // If you throw, the user will not be able to upload
  if (!userId) throw new Error("Unauthorized");

  // Whatever is returned here is accessible in onUploadComplete as `metadata`
  return { userId };
};

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  storeAvatar: f({ image: { maxFileSize: "4MB" } })
    // Set permissions and file types for this FileRoute
    .middleware(ensureAuthMiddleware)
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("[StoreAvatar] Upload complete for userId:", metadata.userId);
      console.log("file url", file.url);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
