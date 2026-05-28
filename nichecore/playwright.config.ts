import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 90_000,
  retries: 1,                       // shake out the rare dev-compile flake
  reporter: [["list"]],
  // Dev mode compiles routes on demand; concurrent compiles on the dynamic
  // /c/[category]/package route race each other and cause spurious timeouts.
  // Running one worker keeps the audit deterministic. Full suite still completes < 6 min.
  workers: 1,
  fullyParallel: false,
  use: {
    baseURL: process.env.BASE_URL ?? "http://localhost:3000",
    trace: "retain-on-failure",
    navigationTimeout: 60_000,
  },
  projects: [
    { name: "chromium-desktop", use: { ...devices["Desktop Chrome"], viewport: { width: 1440, height: 900 } } },
  ],
  webServer: {
    command: "npm run dev",
    url: "http://localhost:3000",
    reuseExistingServer: true,
    timeout: 120_000,
    env: { NODE_TLS_REJECT_UNAUTHORIZED: "0" },
  },
});
