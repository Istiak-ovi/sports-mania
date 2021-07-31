import { Button } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './NoMatch.css';
const NoMatch = () => {
    return (
        <div className="d-flex justify-content-around">
            <h1 className="text-center ">Error 404</h1>
            <Link to="/"><Button className=""  variant="danger btn-sm mt-2 "><FontAwesomeIcon icon={faHome} /> Go Back Home</Button></Link>
        </div>
    );
};

export default NoMatch;