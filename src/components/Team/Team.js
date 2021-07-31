import React from 'react';
import './Team.css';
import {Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Team = (props) => {
    const {strTeam,strLeague,idTeam,strSport,strTeamBadge} = props.team;
    return (
        <>
            <div className="d-flex justify-content-around">
            <div className="boxStyle">
                <img className="picStyle" src={strTeamBadge} alt="" />
                <h3 className="teamTitle">{strTeam}</h3>
                <h3>{strLeague}</h3>
                <p>Sports Type: {strSport}</p>
                <Link to={`/Details/${idTeam}`}>
                   <Button variant="danger" >Explore Here <FontAwesomeIcon icon={faLongArrowAltRight}/></Button> </Link>
                
            </div>
            </div>
        </>
    );
};

export default Team;