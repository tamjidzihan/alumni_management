import PageTitle from "./components/PageTitle";
import DashboardIndex from "./pages/Dashboard/DashboardIndex";


export const childRoutes = [
    {
        path: "",
        element: (
            <>
                <PageTitle title="Admin Dashboard | Cumilla Modern High School Alumni Association" />
                <DashboardIndex />
            </>
        ),
        index: true,
    },
    //   {
    //     path: "/calendar",
    //     element: (
    //       <>
    //         <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //         <Calendar />
    //       </>
    //     ),
    //   },
    //   {
    //     path: "/profile",
    //     element: (
    //       <>
    //         <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //         <Profile />
    //       </>
    //     ),
    //   },
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
