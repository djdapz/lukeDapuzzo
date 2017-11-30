const routes = {
    HOME: {
        displayInMenuBar: false,
        name: "HOME",
        href: "/",
        header: "Welcome",
        menubarClassName: "home-menubar"
    },
    MUSIC: {
        displayInMenuBar: true,
        name: "MUSIC",
        href: "/music",
        header: "Music",
        menubarClassName: "music-menubar"

    },
    SHOWS: {
        displayInMenuBar: true,
        name: "SHOWS",
        href: "/show",
        header: "Shows",
        menubarClassName: "show-menubar"
    },
    BIO: {
        displayInMenuBar: true,
        name: "BIO",
        href: "/bio",
        header: "Bio",
        menubarClassName: "bio-menubar",

    },
    MEDIA: {
        displayInMenuBar: false,
        name: "MEDIA",
        href: "/media",
        header: "Media",
        menubarClassName: "media-menubar",
    },
    CONTACT:{
        displayInMenuBar: true,
        name: "CONTACT",
        href: "/contact",
        header: "Contact",
        menubarClassName: "contact-menubar",
        disable: false
    },
    ADMIN:{
        displayInMenuBar: false,
        name: "ADMIN",
        href: "/admin",
        header: "Admin",
        menubarClassName: "admin-menubar",
        disable: false
    }

};

export default routes;