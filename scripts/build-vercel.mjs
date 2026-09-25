import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

// Keep the deployment target explicit for local verification as well as Vercel.
// Nitro uses this preset to emit Vercel Build Output API artifacts in .vercel/output.
process.env.NITRO_PRESET ??= "vercel";

const viteCli = fileURLToPath(new URL("../node_modules/vite/bin/vite.js", import.meta.url));
const child = spawn(process.execPath, [viteCli, "build"], {
  stdio: "inherit",
  shell: false,
});

child.on("error", (error) => {
  console.error(error);
  process.exitCode = 1;
});

child.on("exit", (code, signal) => {
  process.exitCode = code ?? (signal ? 1 : 0);
});
