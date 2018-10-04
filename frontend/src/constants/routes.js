const routes = {
    HOME: {
        displayInMenuBar: false,
        isProtected: false,
        name: "HOME",
        href: "/",
        header: "Welcome",
        menubarClassName: "home-menubar"
    },
    MUSIC: {
        displayInMenuBar: true,
        isProtected: false,
        name: "MUSIC",
        href: "/music",
        header: "Music",
        menubarClassName: "music-menubar"
    },
    SHOWS: {
        displayInMenuBar: true,
        isProtected: false,
        name: "SHOWS",
        href: "/show",
        header: "Shows",
        menubarClassName: "show-menubar"
    },
    BIO: {
        displayInMenuBar: true,
        isProtected: false,
        name: "BIO",
        href: "/bio",
        header: "Bio",
        menubarClassName: "bio-menubar"

    },
    CONTACT: {
        displayInMenuBar: true,
        isProtected: false,
        name: "CONTACT",
        href: "/contact",
        header: "Contact",
        menubarClassName: "contact-menubar"
    },
    ADMIN: {
        displayInMenuBar: true,
        isProtected: true,
        name: "ADMIN",
        href: "/admin",
        header: "Admin",
        menubarClassName: "admin-menubar"
    },
    LOGIN: {
        displayInMenuBar: false,
        isProtected: false,
        name: "LOGIN",
        href: "/login",
        header: "Login",
        menubarClassName: "login-menubar"
    }
};

export default routes;