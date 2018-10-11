import {LukeRoute, LukeRoutes} from "../classes/LukeRoute";
import SongAdmin from "../components/AdminPage/SongAdmin";
import React from "react";
import ShowAdmin from "../components/AdminPage/ShowAdmin";

export const AdminRoutes = new LukeRoutes([
    new LukeRoute("Songs", "/songs", () => <SongAdmin/>),
    new LukeRoute("Shows", "/shows", () => <ShowAdmin/>)
], "/songs", "/admin");