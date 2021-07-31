import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { faRssSquare } from '@fortawesome/free-solid-svg-icons';
const Footer = (props) => {
    const {strFacebook, srtTwitter, strYoutube, strRSS} = props.team;
    return (
        <div>
            <a target="_blank" rel="noreferrer" href={`https://${strFacebook}`}><FontAwesomeIcon icon={faFacebookSquare} /></a>
            <a target="_blank" rel="noreferrer" href={`https://${srtTwitter}`}><FontAwesomeIcon icon={faTwitterSquare} /></a>
            <a target="_blank" rel="noreferrer" href={`https://${strYoutube}`}><FontAwesomeIcon icon={faYoutubeSquare} /></a>
            <a target="_blank" rel="noreferrer" href={`https://${strRSS}`}><FontAwesomeIcon icon={faRssSquare} /></a>
        </div>
    );
};

export default Footer;