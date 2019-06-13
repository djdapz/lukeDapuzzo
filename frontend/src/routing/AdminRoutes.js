import {LukeRoute, LukeRoutes} from "../classes/LukeRoute";
import SongAdmin from "../music/admin/SongAdmin";
import React from "react";
import ShowAdmin from "../components/AdminPage/ShowAdmin";
import BioAdmin from "../bio/BioAdmin"

export const AdminRoutes = new LukeRoutes([
    new LukeRoute("Songs", "/songs", () => <SongAdmin/>),
    new LukeRoute("Shows", "/shows", () => <ShowAdmin/>),
    new LukeRoute("Bio", "/bio", () => <BioAdmin/>)
], "/songs", "/admin");