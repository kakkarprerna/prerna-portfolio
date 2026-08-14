import fs from "fs";
import path from "path";

export function checkHasPhoto(): boolean {
  const photoPath = path.join(process.cwd(), "public", "photo.png");
  return fs.existsSync(photoPath);
}
