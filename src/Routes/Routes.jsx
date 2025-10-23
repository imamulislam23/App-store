import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";


const  router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>
    }
]
)

export default router