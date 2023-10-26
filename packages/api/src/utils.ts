import { v4 as uuid } from "uuid";

import { utapi } from "./utils/utapi";

export function generateId() {
  return uuid();
}

export async function getFirstImageUrl(key: string) {
  const files = await utapi.getFileUrls(key);
  const firstFile = files.at(0);

  if (!firstFile) {
    return null;
  }

  return firstFile.url;
}
