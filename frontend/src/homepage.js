import React from "react";
import pic from "./illustration.png"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "./home.css"


export default function HomePage() {
    return (
        <div class="Home_outer__yFb70">
            <div class="Home_container__bCOhY container">
                <div class="Home_alignCenter__24fiK row">
                    <div class="col-md-7">
                        <h1 class="Home_h1__7tdRW" style={{ color: "black" }}>Dont waste your time searching for movies</h1>
                        <p>SceneScout uses advanced Natural Language Processing to understand your movie preferences and deliver highly
relevant search results.</p>
                        {/* <div class="d-flex">
                            <input type="text" class="Home_input__ZarWZ form-control me-2" placeholder="Find recommended movies" value="" />
                            <a class="Home_btn__UGRT9 btn" href="#">
                                <span class="Home_text__upzyl">Find Labs</span>
                                <i class="bi bi-arrow-right" style={{ marginLeft: "3px", marginRight: "3px" }}></i></a></div>
                                 */}

                        <InputGroup className="input-group input-group-lg" >
                            <Form.Control
                                placeholder="Find recommended movies"
                                aria-label="Large"
                                style={{borderRadius:"0.5vw", fontSize: '20px'}}
                            />
                            <Button  size="lg" href="/search" style={{marginLeft:"1vw",borderRadius:"0.5vw",backgroundColor:"#ba68c8",fontSize: '20px'}}>
                                Find Movies
                            </Button>
                        </InputGroup>
                        
                                </div>
                    <div class="col-md-5">
                        <img src={pic} alt="Illustration" class="Home_illustration__0Ui3l img-fluid" /></div></div></div></div>
    )
}  