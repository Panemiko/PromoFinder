import { UTApi } from "uploadthing/server";

export const utapi = new UTApi();

export async function getFirstImageUrl(key: string) {
  const files = await utapi.getFileUrls(key);
  const firstFile = files.at(0);

  if (!firstFile) {
    return null;
  }

  return firstFile.url;
}
