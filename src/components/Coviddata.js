import React from "react"
import './covid1.css'
export default function Coviddata(Props) { 
    return (
       <div className="cont">
        <div className="card cardst" >
            <div classNameName="cont card-body">
                <h3 className="card-title cardtp">{Props.title}</h3><hr></hr>
                <h5 className="card-title">Deaths:- {Props.total}</h5> <hr></hr>
                <h5 className="card-title">Discharge:- {Props.discharge}</h5> <hr></hr>
                <h5 className="card-title cardbt">Total Confirmed:- {Props.totalconfirmed}</h5>
            </div>
        </div>
       </div>
    )
}