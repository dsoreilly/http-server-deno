import { serveDir } from "https://deno.land/std@0.209.0/http/file_server.ts";

function handler(request: Request): Promise<Response> {
  return serveDir(request, { fsRoot: "./public" });
}

Deno.serve(handler);
