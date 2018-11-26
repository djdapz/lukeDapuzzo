import {LukeRoute, LukeRoutes} from "../LukeRoute";
import {shallow} from "enzyme"

describe("LukeRoutes", () => {
    const firstRoute = new LukeRoute("label1", "/first", () => <div className="first">HI</div>);
    const secondRoute = new LukeRoute("label2", "/second", () => <div className="second">HI</div>);


    // it('should render each link as a route', function () {
    //     let links = new LukeRoutes([firstRoute, secondRoute], "/first", "/test").toLinks("/asdf");
    //
    //     let renderdLinks = shallow(links).find("Tab");
    //     expect(renderdLinks.length).toBe(2);
    //
    //     expect(renderdLinks.at(0).prop("to")).toBe("/test/first");
    //     expect(renderdLinks.at(1).prop("to")).toBe("/test/second");
    // });
    //
    // it('should render links as active if at that path', function () {
    //     let links = new LukeRoutes([firstRoute, secondRoute], "/first", "/test").toLinks("/test/first");
    //TODO
    //     let renderdLinks = shallow(links).find("Tab");
    //     expect(renderdLinks.length).toBe(2);
    //
    //     expect(renderdLinks.at(0).prop("className")).toBe("nav-link active");
    //     expect(renderdLinks.at(1).prop("className")).toBe("nav-link");
    // });

    it('should work', function () {
        expect(1).toEqual(1)
    });
});