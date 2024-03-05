import { lazy, Suspense, React } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import  Navbar  from "./Navbar.jsx";
//PAGES
const Usuarios = lazy(() => import('../pages/usuarios/index.jsx'))
const Publicaciones = lazy (() => import("../pages/publicaciones/index.jsx"))
const ShowPublishByUser = lazy (() => import("../components/viewPublishesByUser.jsx"))

const MyRoute = () =>{
    return (
        <>
            <BrowserRouter>
                <Suspense>
                    <Navbar/>
                    <Routes>
                        
                        <Route path="/" element={<Usuarios/>} />
                        <Route path="/Publicaciones" element={<Publicaciones/>} />
                        <Route path="/Publicaciones/:userId" element={<ShowPublishByUser />} />


                    </Routes>
                </Suspense>
            </BrowserRouter>
        </>
    )
}

export default MyRoute