import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Jen unit testy v test/ — e2e Playwright testy v tests/e2e/ spouští playwright
    include: ['test/**/*.{test,spec}.{js,ts}'],
  },
});
