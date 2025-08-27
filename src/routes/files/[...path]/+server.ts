import { files } from "$lib/files";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ params: { path } }) => {
  const stream = await files.read(path);
  // @ts-ignore
  return new Response(stream);
};
