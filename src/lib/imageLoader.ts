import type { ImageLoaderProps } from "next/image";
import { assetPath } from "./assetPath";

export default function imageLoader({ src, width, quality }: ImageLoaderProps) {
  const url = assetPath(src);
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}w=${width}&q=${quality ?? 75}`;
}
