// this is just a file containing a couple of functions to
// to demonstrate testing with React

import React, {useReducer} from "react";

export function timesTwo(val) {
    return val * 2;
}

export function Checkbox() {

    const [checked, toggle] = useReducer( (checked) => !checked, false )
  
    return (
        <>
            <label htmlFor="checkbox">{checked ? "checked" : "not checked"}</label>
            <input id="checkbox" type="checkbox" value={checked} onChange={toggle} />
        </>
    );
  }