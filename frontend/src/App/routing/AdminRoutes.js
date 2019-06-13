import React from "react"
import { LukeRoute, LukeRoutes } from "./LukeRoute"
import SongAdmin from "../../music/admin/SongAdmin"
import ShowAdmin from "../../shows/ShowAdmin"
import BioAdmin from "../../bio/BioAdmin"

export const AdminRoutes = new LukeRoutes([
  new LukeRoute("Songs", "/songs", () => <SongAdmin/>),
  new LukeRoute("Shows", "/shows", () => <ShowAdmin/>),
  new LukeRoute("Bio", "/bio", () => <BioAdmin/>)
], "/songs", "/admin")