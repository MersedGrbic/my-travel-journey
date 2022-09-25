import React from "react";

export default function Card(props){
    return(
        <section className="card">
            <div className="places-img">
                <img className="card--img"src={props.img}/>
            </div>
            <div className="about">
                <div className="place">
                    <img className="location--img" src="../src/images/location.png"/>
                    <p>{props.location}</p>
                    <a href={props.googleMapsUrl} target="_blank">View on Google maps</a>
                </div>
             <h1 className="place--name">{props.title}</h1>
             <p className="place--date">{props.startDate} - {props.endDate}</p>
             <p className="place--info">{props.description}</p>
            
            </div>
            <div className="spacer"></div>
        </section>
    )
}