import React from "react"
import { LukeRoute, LukeRoutes } from "./LukeRoute"
import { SongAdmin } from "../../components/music"
import { ShowAdmin } from "../../components/shows"
import { BioAdmin } from "../../components/bio"

export const AdminRoutes = new LukeRoutes([
  new LukeRoute("Songs", "/songs", () => <SongAdmin/>),
  new LukeRoute("Shows", "/shows", () => <ShowAdmin/>),
  new LukeRoute("Bio", "/bio", () => <BioAdmin/>)
], "/songs", "/admin")