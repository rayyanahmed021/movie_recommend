import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useEffect, useState } from "react";
import "./NavigationBar.css"
import search from '../searchPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from '../homepage';
import SearchPage from "../searchPage"
import FirstPage from "../firstPage"

function BasicExample() {
    const [query, setQuery] = useState("");
    
    return (
        <Navbar expand="lg" style={{backgroundColor:"#36474f"}}>
            
            <Container>
                <Navbar.Brand href="/">SceneScout</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link onClick={()=> setQuery(1)}>Search</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            
        </Navbar>
        
    );
    
}

export default BasicExample;