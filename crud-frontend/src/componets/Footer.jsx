import React, { Component } from 'react';

class Footer extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render() {
        return (
            <div>
                <footer className='footer'>
                    <span className='text-muted' color='white'>All Rights Reserved 2023 @CodingMunda</span>
                </footer>
            </div>
        );
    }
}

export default Footer;