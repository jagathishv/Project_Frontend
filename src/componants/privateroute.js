import React from "react";

export function Aprivateroute({ children }) {
    const auth = window.localStorage.getItem("Aauth");
    return auth ? children : window.location = "/alogin"
}

export function Uprivateroute({ children }) {
    const auth = window.localStorage.getItem("Uauth");
    return auth ? children : window.location = "/login"
}