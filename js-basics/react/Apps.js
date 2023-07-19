import React from "react";

export default function Apps(){
    return(
        <div className="Apps">
            <h1>
                React Dersleri, <IsimGoster ad="Veli" link="/veli" />
            </h1>
            <Hosgeldiniz ad="Ahmet" link="/ahmet">
                <h3>props.children buradan gelir</h3>
            </Hosgeldiniz>
        </div>
    );
}

function Hosgeldiniz(props){
    return(
        <div>
            <p>
                Hosgeldiniz, <IsimGoster ad={props.ad} link={props.link}/>
            </p>
            {props.children}
        </div>
    );
}
function IsimGoster(props){
    return(
        <a href={props.link} alt={props.ad}>
            {props.ad || "misafir"}
        </a>
    );
}