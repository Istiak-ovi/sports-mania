import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons';
import './TeamDetail.css';
import MaleImage from '../../Image/male.png';
import FemaleImage from '../../Image/female.png';
import Footer from '../Footer/Footer';


const TeamDetail = () => {
    const {idTeam} = useParams();
    const [team,setTeam] = useState({});
    const { strTeam, strSport, strGender, intFormedYear, strCountry, strDescriptionEN, strTeamBadge, strTeamBanner } = team;
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data.teams[0]))
    },[idTeam])
    return (
        <>
            <div>
                <img src={strTeamBanner} style={{ width: '100%', height: '320px' }} alt="" />
            </div>
            <Container className="border rounded p-3 mt-3">
                <div className="row detailsTeam m-3 p-3">
                    <div className="col-md-6 text-white d-flex align-items-center">
                        <div className="">
                        <h1><img src={strTeamBadge} style={{ width: '40px' }} alt="" /> {strTeam}</h1>
                        <h6> <FontAwesomeIcon icon={faCompass} /> Founded: {intFormedYear}</h6>
                        <h6><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</h6>
                        <h6><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</h6>
                        <h6><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</h6>
                    </div>
                    </div>

                    <div className="col-md-6 ">
                        <img className="inner-img " src={(Object.strGender !=='female')? MaleImage : FemaleImage} alt=""/>
                    </div>
                   
                </div>

                <div>
                    <p className="textDescription">{strDescriptionEN}</p>
                </div>
            
                <div className="text-center pb-5 icon-style">
                    <Footer team={team}></Footer>
                </div>
            </Container>
        </>
    );
};

export default TeamDetail;