import React, { Component } from 'react';

import Nav from 'react-bootstrap/Nav'




const NavBar  = (props) => {
        return (
            <div>
                <div className="navbar">
                    <ul>
                        <li>
                            <Nav.Link href='/'>Home</Nav.Link> 
                        </li>

                        <li>
                            <Nav.Link href='/product'>Products</Nav.Link> 
                        </li>

                        <li>
                            <Nav.Link href='/register'>Register</Nav.Link>
                        </li>
                        <li>
                            <Nav.Link href='/Login'>Login</Nav.Link>
                        </li>
                        { props.currentUser ? 
                            <>
                                <li>
                                    <a href='/Logout' onClick={props.logout}>Logout</a>
                                </li>
                            </>
                        :
                            <>
                                 {/* <li>
                                    <a href='/Logout' onClick={props.logout}>Logout</a>
                                </li> */}
                            </>
                        }
                    </ul>
                </div>
            </div>
        );
}

export default NavBar;
