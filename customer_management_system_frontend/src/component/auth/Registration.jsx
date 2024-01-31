import React, { useState } from "react"
import { Link } from "react-router-dom"
import { registerUser } from "../service/ApiFunction"

const Registration = () => {
	const [registration, setRegistration] = useState({
		userName:"",
		email: "",
		password: "",
        role:""
	})
	const [successMessage, setSuccessMessage] = useState("")

	const handleInputChange = (e) => {
		setRegistration({ ...registration, [e.target.name]: e.target.value })
	}

	const handleRegistration = async (e) => {
		e.preventDefault()
		try {
			const result = await registerUser(registration)
			setSuccessMessage(result)
			setRegistration({ userName: "", email: "", password: "",role:"" })
		} catch (error) {
			setSuccessMessage("")
			console.error(`Registration error : ${error.message}`)
		}
		setTimeout(() => {
			setSuccessMessage("")
		}, 5000)
	}

	return (
		<section className="container col-6 mt-5 mb-5">
			{successMessage && <p className="alert alert-success">{successMessage}</p>}

			<h2>Register</h2>
			<form onSubmit={handleRegistration}>
				<div className="mb-3 row">
					<label htmlFor="userName" className="col-sm-2 col-form-label">
						Name
					</label>
					<div className="col-sm-10">
						<input
							id="userName"
							name="userName"
							type="text"
							className="form-control"
							value={registration.firstName}
							onChange={handleInputChange}
						/>
					</div>
				</div>

				<div className="mb-3 row">
					<label htmlFor="email" className="col-sm-2 col-form-label">
						Email
					</label>
					<div className="col-sm-10">
						<input
							id="email"
							name="email"
							type="email"
							className="form-control"
							value={registration.email}
							onChange={handleInputChange}
						/>
					</div>
				</div>

				<div className="mb-3 row">
					<label htmlFor="password" className="col-sm-2 col-form-label">
						Password
					</label>
					<div className="col-sm-10">
						<input
							type="password"
							className="form-control"
							id="password"
							name="password"
							value={registration.password}
							onChange={handleInputChange}
						/>
					</div>
				</div>
                <div className="mb-3 row">
					<label htmlFor="role" className="col-sm-2 col-form-label">
						Role
					</label>
					<div className="col-sm-10">
						<input
							id="role"
							name="role"
							type="text"
							className="form-control"
							value={registration.role}
							onChange={handleInputChange}
						/>
					</div>
				</div>
				<div className="mb-3">
					<button type="submit" className="btn btn-primary" style={{ marginRight: "10px" }}>
						Register
					</button>
					<span style={{ marginLeft: "10px" }}>
						Already have an account? <Link to={"/"}><button className="btn btn-primary">Login</button></Link>
					</span>
				</div>
			</form>
		</section>
	)
}

export default Registration