import React from 'react';
import img1 from '../../../../images/img_platform_01.png'
import img2 from '../../../../images/img_platform_02.png'
import img3 from '../../../../images/img_platform_03.png'
const CardGroup = () => {

    return (
        <React.Fragment>
            <div className="row pt-5 pb-5 mt-5 mb-5 ">
                <div className="col-12 mb-2" >
                    <h3>Robit Platform standard chunk of lorem <br />ipsum?</h3>
                    <p className="mt-5 mb-5 font-size-28">Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /> Lorem Ipsum has been the industry's standard.</p>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card shadow-lg" >
                        <img src={img1} className="card-img-top" alt="..." />
                        <div className="card-body bg-blue text-white">
                            <h5 className="card-title mb-4 mt-2 px-3">Lorem Ipsum</h5>
                            <p className="card-text font-size-18 px-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.</p>

                        </div>
                    </div>

                </div>
                <div className="col-md-4  mb-3">
                <div className="card shadow-lg " >
                        <img src={img2} className="card-img-top" alt="..." />
                        <div className="card-body bg-blue text-white">
                            <h5 className="card-title mb-4 mt-2 px-3">Lorem Ipsum</h5>
                            <p className="card-text font-size-18 px-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.</p>

                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                <div className="card shadow-lg  " >
                        <img src={img3} className="card-img-top" alt="..." />
                        <div className="card-body bg-blue text-white">
                            <h5 className="card-title mb-4 mt-2 px-3">Lorem Ipsum</h5>
                            <p className="card-text font-size-18 px-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.</p>

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>


    );

}

export default CardGroup;