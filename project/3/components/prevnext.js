import React, { useState } from 'react'
export default function PrevNext(props)
{
    const[current,setCurrent]=useState(0);
    const countPage=React.Children.count(props.children);
    function showElement()
    {
        const arr=React.Children.toArray(props.children)[current];
        return React.cloneElement(arr);

    }
    

    return(
        <>
        
        <br></br>
        <button disabled={current===0} onClick={(e)=>setCurrent(v=>v-1)}>&lt;prev</button>
        <button disabled={current>=countPage-1} onClick={(e)=>setCurrent(v=>v+1)}>next&gt;</button>
        <br></br>
        <br></br>
        {showElement()}
       
        </>
    )
}