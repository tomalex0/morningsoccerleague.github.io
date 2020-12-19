module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      url: [
        "https://tomalex0.github.io/morningsoccerleague.github.io/",
        "https://tomalex0.github.io/morningsoccerleague.github.io/players/",
        "https://tomalex0.github.io/morningsoccerleague.github.io/players/kartik-pisupati/",
        "https://tomalex0.github.io/morningsoccerleague.github.io/seasons/",
        "https://tomalex0.github.io/morningsoccerleague.github.io/seasons/3-2019/",
        "https://tomalex0.github.io/morningsoccerleague.github.io/teams/",
      ],
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
      // assertions: {
      //   "uses-rel-preload": "off",
      //   "uses-rel-preconnect": "off",
      //   "robots-txt": "off",
      //   "legacy-javascript": "off",
      //   "unused-javascript": "off",
      //   "non-composited-animations": "off",
      //   "tap-targets": "off",
      //   "errors-in-console": "off",
      //   "max-potential-fid": "off",
      //   "is-crawlable": "off",
      //   "unsized-images": "off",
      //   "cumulative-layout-shift": "off",
      //   "mainthread-work-breakdown": "off",
      //   "uses-long-cache-ttl": "off",
      //   "speed-index": "off",
      //   "largest-contentful-paint": "off",
      //   interactive: "off",
      //   "first-cpu-idle": "off",
      //   "meta-description": "off",
      //   "meta-description": "off",
      //   "font-size": "off",
      // },
    },
  },
}
