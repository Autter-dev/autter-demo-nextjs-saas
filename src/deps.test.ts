import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, test } from "vitest";

// Guards the CVE remediation: the packages listed in the update notes must be
// resolved to their fixed versions in package-lock.json.
const lock = JSON.parse(
  readFileSync(join(process.cwd(), "package-lock.json"), "utf8"),
) as { packages: Record<string, { version?: string }> };

const fixedVersions: Record<string, string> = {
  "node_modules/next": "15.5.24",
  "node_modules/zod": "4.6.6",
  "node_modules/vitest": "4.1.11",
  "node_modules/vite": "8.3.3",
  "node_modules/vite/node_modules/postcss": "8.5.18",
  "node_modules/sharp": "0.35.0",
  "node_modules/source-map-js": "1.2.2",
  "node_modules/nanoid": "3.3.16",
  "node_modules/tinypool": "2.1.1",
  "node_modules/@vitest/mocker": "4.1.11",
};

describe("CVE dependency bumps", () => {
  for (const [lockPath, expected] of Object.entries(fixedVersions)) {
    test(`${lockPath} is resolved to ${expected}`, () => {
      expect(lock.packages[lockPath]?.version).toBe(expected);
    });
  }
});
