import React, { useState } from 'react';
const Items = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");
    const RegisterForm = e => {
        e.preventDefault();

        console.log(name);
        console.log(surname);
        console.log(email);
        console.log(password);
    }

    return (
        <div className="bg-white mt-5 p-5 mb-5 ms-auto register-form  ">
            <div className="mb-3 row">

                <div className="col-sm-10">
                    <span className="font-size-18">Sign up for a free account</span>
                </div>
            </div>
            <form onSubmit={RegisterForm}>
                <div className="row">

                    <div className="col">
                        <input type="text" className="form-control" name="name" onChange={(e) => setName(e.target.value)} placeholder="First name" aria-label="First name" />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" name="surname" onChange={(e) => setSurname(e.target.value)} placeholder="Last name" aria-label="Last name" />
                    </div>


                    <div className="mb-3 mt-3">

                        <input type="email" className="form-control" name="email" onChange={(e) => setEmail(e.target.value)} id="exampleFormControlInput1" placeholder="E-mail" />
                    </div>
                    <div className="mb-3">

                        <input type="password" className="form-control" name="password" onChange={(e) => setPassword(e.target.value)} id="exampleFormControlInput1" placeholder="Password" />
                    </div>
                    <button type="submit" className=" button-normal bg-blue text-white rounded   px-4 ms-3">Register</button>

                </div>
            </form>
        </div>
    );

}

export default Items;