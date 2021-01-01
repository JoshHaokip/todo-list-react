import React, {useState} from "react";
import TodoApp from "./components/TodoApp";



export default function App() {

    const container = {
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100%', 
        backgroundColor: 'white'};
    
    return (
        <>
        <div style={container}>

            <TodoApp />

        </div>
        
        </>
    )
    
};



