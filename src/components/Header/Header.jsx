import React from 'react';
import Jumbotron from './Jumbotron/Jumbotron';
import Items from './Jumbotron/Items';

const Header = () => {
    return (   
            <div className="row">
                <div className="col-md-6">
                    <Jumbotron />
                </div>
                <div className="col-md-6">
                        <Items />
                </div>
            </div>
        
    );

}

export default Header;