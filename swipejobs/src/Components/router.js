import React from "react";
import { Route, Routes } from "react-router-dom";
import { Body } from "./body";
import {Confirmation} from "./confirmation";

export function Router({workerId}){


    return(
        <Routes>
            <Route path="/" element={<Body workerId={workerId}/>}/> 
            <Route path="/confirmation" element={<Confirmation/>}/>
        </Routes>

    );
}