import PageTitle from "./components/PageTitle";
import AlumniList from "./pages/AlumniList/AlumniList";
import SignIn from "./pages/Authentication/SignIn";
import SignUp from "./pages/Authentication/SignUp";
import DashboardIndex from "./pages/Dashboard/DashboardIndex";
import Events from "./pages/Events/Events";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/SiteSettings/Contact";
import SiteContent from "./pages/SiteSettings/Content";


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
        path: "sitesettings/content",
        element: (
            <>
                <PageTitle title="Site Content | Modarate Site content" />
                <SiteContent />
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

    {
        path: "authentication/signin",
        element: (
            <>
                <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <SignIn />
            </>
        ),
    },
    {
        path: "authentication/signup",
        element: (
            <>
                <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <SignUp />
            </>
        ),
    },
];
