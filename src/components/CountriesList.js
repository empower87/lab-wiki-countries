import React from 'react';
import countries from './countries.json'
import { Switch, Router, Link } from 'react-router-dom'

function CountriesList(props) {
    // const makeList = () => {
    //     let links = []
    //     for (let i=0; i < )
    // }

    const linkTemplate = (i) => {
        return (
        <Link to={props.list[i].cca3} className="list-group-item list-group-item-action" >
            {props.list[i].flag} {props.list[i].name.common}
        </Link>
        )
    }
    const loop = () => {
        let arr = []
        for (let i=0; i < props.list.length; i++) {
            arr.push(linkTemplate(i))
        }
    }
    return (
        <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
            <div className="list-group">
                
                    <Link to="/ABW" className="list-group-item list-group-item-action" >
                        🇦🇼 Aruba
                    </Link>

        </div>
    </div>
    );
}

export default CountriesList;