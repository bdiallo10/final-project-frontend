import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';

class Footer extends Component {
    render() {
        return (
            <div>
                 <Container className="footer">
                        <span>
                            <div>
                                <p>E Boutique</p>
                            </div>
                            <div>
                                <a href="https://github.com/bdiallo10/final-project-frontend">Github Front-End</a>
                                <a href="https://github.com/bdiallo10/final-project-backend">Github Back-End</a>
                            </div>
                            <div>
                                <p>Created by Boubacar Diallo</p>
                            </div>
                        </span>
                </Container>
            </div>
        );
    }
}

export default Footer;
