import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''

    })

    const [errors, setErrors] = useState({
        nameError: '',
        emailError: '',
        passwordError: '',
        confirmPasswordError: ''
    })

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setUser({ ...user, [name]: value })

        switch (name) {
            case 'name':
                setErrors({
                    ...errors,
                    nameError: (value.length === 0) ?
                        "Name is required" :
                        (value.length < 3) ?
                            "Name must be at least 3 characters" :
                            ""
                })
                break;
            case "email":
                const emailRegix = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                setErrors({
                    ...errors,
                    emailError:
                        (value.length === 0) ?
                            "email is required" :
                            emailRegix.test(value) ? '' :
                                "Invalid Email"
                })
                break;
            case 'password':
                const passwordRegex = /^.{8,}$/;
                setErrors({
                    ...user,
                    passwordError:
                        (value.length === 0) ?
                            "password is required" :
                            passwordRegex.test(value) ? '' :
                                "more than 8 characters"
                })
                break;
            case 'confirmPassword':
                setErrors({
                    ...errors,
                    confirmPasswordError:
                        (value.length === 0) ? "" :
                            (value !== user.password) ?
                                "Passwords do not match" : ""
                })
                break;
            default:
                break;
        }
    }

    const signUpSubmit = () => {
        navigate('/home');
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        {
            signUpSubmit();
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="bg-dark text-center align-items-center justify-content-center d-flex" >
                <div className="container col-lg-5 col-md-8 col-sm-10">
                    <div className="BBG bg-black rounded-5">
                        <div className="d-flex flex-row bd-highlight ">
                            <div className="col d-flex align-items-center justify-content-center">
                                <div className="d-grid gap-4 text-white">
                                    <br />

                                    <h2 className=''>create your account</h2>

                                    <div>
                                        <input
                                            type="text"
                                            className={` form-control ${(errors.nameError) ? 'is-invalid' : 'text-dark'}`}
                                            name='name'
                                            placeholder="enter your name"
                                            value={user.name}
                                            onChange={handleChange}
                                        />
                                        <div className="invalid-feedback">{errors.nameError}</div>
                                    </div>

                                    <div>
                                        <input
                                            type="text"
                                            className={`form-control ${(errors.emailError) ? 'is-invalid' : 'text-dark'}`}
                                            name='email'
                                            placeholder="enter your email"
                                            value={user.email}
                                            onChange={handleChange}
                                        />
                                        <div className='invalid-feedback'>{errors.emailError}</div>
                                    </div>


                                    <div className=''>
                                        <input
                                            className={`form-control ${(errors.passwordError) ? 'is-invalid' : 'text-dark'}`}
                                            type={showPassword ? "text" : "password"}
                                            name='password'
                                            placeholder="enter your password"
                                            onChange={handleChange}
                                        />
                                        {/* <button
                                            type='button'
                                            className='btn btn-success'
                                            onClick={togglePasswordVisibility}
                                        >
                                            {showPassword ? "hide" : 'show'}
                                        </button> */}
                                        <div className='wid invalid-feedback'>{errors.passwordError}</div>
                                    </div>

                                    <div>
                                        <input
                                            className={`form-control ${(errors.confirmPasswordError) ? 'is-invalid' : 'text-dark'}`}
                                            type="password"
                                            placeholder="Re-enter your password"
                                            name='confirmPassword'
                                            value={user.confirmPassword}
                                            onChange={handleChange}
                                        />
                                        <div className='invalid-feedback'>{errors.confirmPasswordError}</div>
                                    </div>


                                    <button
                                        type="submit"
                                        className="btn border rounded-pill btn-light fw-bold"
                                    >
                                        Sign Up
                                    </button>
                                    <h5><NavLink to='/join' className='text-danger'>back</NavLink> </h5>
                                </div>
                            </div>
                        </div>
                        <br />
                    </div>
                </div>
            </form>
        </>
    )
}

export default SignUp;