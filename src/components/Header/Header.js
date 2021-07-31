import React from 'react';
import { Container } from 'react-bootstrap';
import './Header.css';
const Header = () => {
    return (
        <Container fluid={true} className="topBannerFixed p-0">
            <div className="topBannerLayout">
                <h1 className="title">FootBall Club -2021</h1>
            </div>
        </Container>
    );
};

export default Header;