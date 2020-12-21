import React from 'react';
import data from '../../../../model/Data';


let arr = []
{
    data.map( item  => arr.push(item.title));
}  // dataları getirme 


const About = () => {
    return (
        <React.Fragment>
            <div className="col-12">
         
                <div className="h4-text lh-lg"><h4>Lorem Ipsum Robit is simply dummy  <br/>text of the printing</h4></div>
            </div>
                <div className="col-md-6">
                   
                     <div className="head-text mt-5 mb-5 ">
                      <h5 className="mb-3">{arr[0]}</h5>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
                          since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                     </div>
                     <div className="head-text  mt-5 mb-5 ">
                      <h5 className="mb-3">{arr[1]}</h5>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
                          since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                     </div>


                </div>  
                <div className="col-md-6 ">
                           
                <div className="head-text  mt-5 mb-5  ps-md-4 ">
                      <h5 className="mb-3">{arr[2]}</h5>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
                          since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                     </div>
                     <div className="head-text  ps-md-4">
                      <h5 className="mb-3">{arr[3]}</h5>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
                          since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                     </div>
                </div>
                
        </React.Fragment>
    );
}


export default About;