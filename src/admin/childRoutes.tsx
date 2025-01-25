import Gallery from "./components/Gallery/Gallery";
import PageTitle from "./components/PageTitle";
import About from "./components/SiteSettings/About";
import Contact from "./components/SiteSettings/Contact";
import AlumniList from "./pages/AlumniList/AlumniList";
import DashboardIndex from "./pages/Dashboard/DashboardIndex";
import Events from "./pages/Events/Events";


export const childRoutes = [
    {
        path: "",
        element: (
            <>
                <PageTitle title="Admin Dashboard | Dashboard" />
                <DashboardIndex />
            </>
        ),
        index: true,
    },
    {
        path: "events",
        element: (
            <>
                <PageTitle title="Events | Manage your Events Here" />
                <Events />
            </>
        ),
    },
    {
        path: "alumni",
        element: (
            <>
                <PageTitle title="Alumni List | Modarate Alumni List" />
                <AlumniList />
            </>
        ),
    },
    {
        path: "gallery",
        element: (
            <>
                <PageTitle title="Gallery | Photo Gallery" />
                <Gallery />
            </>
        ),
    },
    {
        path: "sitesettings/about",
        element: (
            <>
                <PageTitle title="About Us | About Us" />
                <About />
            </>
        ),
    },
    {
        path: "sitesettings/contact",
        element: (
            <>
                <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Contact />
            </>
        ),
    },
    // 
    //   {
    //     path: "/tables",
    //     element: (
    //       <>
    //         <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //         <Tables />
    //       </>
    //     ),
    //   },
    //   {
    //     path: "/tables",
    //     element: (
    //       <>
    //         <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //         <Tables />
    //       </>
    //     ),
    //   },
    //   {
    //     path: "/tables",
    //     element: (
    //       <>
    //         <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //         <Tables />
    //       </>
    //     ),
    //   },
    //   {
    //     path: "/settings",
    //     element: (
    //       <>
    //         <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //         <Settings />
    //       </>
    //     ),
    //   },
    //   {
    //     path: "/chart",
    //     element: (
    //       <>
    //         <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //         <Chart />
    //       </>
    //     ),
    //   },
    //   {
    //     path: "/ui/alerts",
    //     element: (
    //       <>
    //         <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //         <Alerts />
    //       </>
    //     ),
    //   },
    //   {
    //     path: "/ui/buttons",
    //     element: (
    //       <>
    //         <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //         <Buttons />
    //       </>
    //     ),
    //   },
    //   {
    //     path: "/auth/signin",
    //     element: (
    //       <>
    //         <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //         <SignIn />
    //       </>
    //     ),
    //   },
    //   {
    //     path: "/auth/signup",
    //     element: (
    //       <>
    //         <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //         <SignUp />
    //       </>
    //     ),
    //   },
];
