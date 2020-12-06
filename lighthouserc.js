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
      preset: "lighthouse:no-pwa",
      assertions: {
        "uses-rel-preload": "off",
        "uses-rel-preconnect": "off",
        "robots-txt": "off",
        "legacy-javascript": "off",
        "unused-javascript": "off",
        "non-composited-animations": "off",
        "tap-targets": "off",
        "errors-in-console": "off",
        "max-potential-fid": "off",
        "is-crawlable": "off",
        "unsized-images": "off",
        "cumulative-layout-shift": "off",
        "mainthread-work-breakdown": "off",
        "uses-long-cache-ttl": "off",
      },
    },
  },
}
