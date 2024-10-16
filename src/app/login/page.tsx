"use client";

import { Backend_Acesso } from "@/api/backend";
import { error } from "console";
import { useEffect } from "react"
import Loginn from "../../components/login/login"

export default function Login(){
    const backendAcesso = new Backend_Acesso();

    useEffect(() => {
        backendAcesso.listarTodos()
            .then(data => {
                console.log(data);
            }).catch((error) => {
                console.log(error);
            })

    }, [])

    return(
        <div>
            <Loginn/>
        </div>
    
    )
}