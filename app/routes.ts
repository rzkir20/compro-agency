import { type RouteConfig, index } from "@react-router/dev/routes";

import { route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("services/:id?", "routes/services.tsx"),
  route("about", "routes/about.tsx"),
  route("portfolio/:id?", "routes/portofolio.tsx"),
  route("team/:id?", "routes/team.tsx"),
  route("work-With-us", "routes/work-with-us.tsx"),
] satisfies RouteConfig;
