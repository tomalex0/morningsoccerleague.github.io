module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      staticDistDir: "public",
      isSinglePageApplication: true,
      settings: {
        chromeFlags: " --no-sandbox --disable-dev-shm-usage",
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
    assert: {
      preset: "lighthouse:no-pwa"
    },
  },
}
