import { Routes as ReactRouterRoutes, Route } from "react-router";
import App from "../App";
import Sets from "../pages/sets";
import Workouts from "../pages/workouts";
import WorkoutsPlannning from "../pages/workouts-planning";

export default function Routes() {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<App />}>
        <Route path="/set" element={<Sets />} />
        <Route path="/workout" element={<Workouts />} />
        <Route path="/planning" element={<WorkoutsPlannning />} />
      </Route>
    </ReactRouterRoutes>
  )
}