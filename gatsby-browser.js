/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */
import * as React from "react"
import { Profiler } from "react"
import "./src/css/index.css"
function capturePageMetrics(
  id, // the "id" prop of the Profiler tree that has just committed
  phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  actualDuration, // time spent rendering the committed update
  baseDuration, // estimated time to render the entire subtree without memoization
  startTime, // when React began rendering this update
  commitTime, // when React committed this update
  interactions // the Set of interactions belonging to this update
) {
  // Aggregate or log render timings...
  console.table({
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions,
  })
}

export const wrapPageElement = ({ element, props }) => {
  const path = props.path || ""
  // See https://reactjs.org/docs/profiler.html#onrender-callback for onRender parameters
  return (
    <Profiler id={path} onRender={capturePageMetrics}>
      {element}
    </Profiler>
  )
}

export const registerServiceWorker = () => true
