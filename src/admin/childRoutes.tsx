import PageTitle from "./components/PageTitle";
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
    //   {
    //     path: "/forms/form-elements",
    //     element: (
    //       <>
    //         <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //         <FormElements />
    //       </>
    //     ),
    //   },
    //   {
    //     path: "/forms/form-layout",
    //     element: (
    //       <>
    //         <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //         <FormLayout />
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
