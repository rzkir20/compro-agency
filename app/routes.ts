import { type RouteConfig, index } from "@react-router/dev/routes";

import { route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("services", "routes/services.tsx"),
  route("services/:slug", "routes/service-details.tsx"),
  route("services/:slug/pricing", "routes/service-pricing.tsx"),
  route("services/:slug/schedule", "routes/service-schedule.tsx"),
  route("about", "routes/about.tsx"),
  route("portfolio/:id?", "routes/portofolio.tsx"),
  route("team/:id?", "routes/team.tsx"),
  route("work-With-us", "routes/work-with-us.tsx"),
] satisfies RouteConfig;
