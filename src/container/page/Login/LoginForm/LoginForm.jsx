import React, { useState, useEffect } from 'react'

export default function LoginForm({ setLoginState, loginSubmit }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = (e) => {
        const id = e.target.id
        const value = e.target.value

        switch (id) {
            case 'username':
                setUsername(value)
                break
            case 'password':
                setPassword(value)
                break
            default:
                return ''
        }
    }

    useEffect(() => {
        setLoginState({ username, password })
    }, [username, password])

    const handleSubmit = (e) => {
        e.preventDefault()
        loginSubmit(e)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
                <div className="bg-secondary input-group input-group-merge input-group-alternative">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fas fa-address-card" /></span>
                    </div>
                    <input className="form-control form-control-alternative px-2" placeholder="NIP / Kode Guru / NISN" type="text" id="username" value={username} onChange={handleChange} />
                    <div className="invalid-feedback p-1">
                        Please provide a valid city.
                    </div>
                </div>
                <small className="form-text text-muted">*Gunakan NIP/Kode Guru jika Anda seorang guru dan gunakan NISN jika Anda seorang siswa.</small>
            </div>

            <div className="form-group mb-3">
                <div className="bg-secondary input-group input-group-merge input-group-alternative">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="ni ni-lock-circle-open" /></span>
                    </div>
                    <input className="form-control form-control-alternative px-2" placeholder="Password" id="password" type="password" value={password} onChange={handleChange} />
                </div>
            </div>
            {/* <div className="custom-control custom-control-alternative custom-checkbox">
                                                <input className="custom-control-input" id=" customCheckLogin" type="checkbox" />
                                                <label className="custom-control-label" htmlFor=" customCheckLogin">
                                                    <span className="text-muted">Remember me</span>
                                                </label>
                                            </div> */}
            <div className="text-center">
                <button type="submit" className="btn btn-primary btn-block mt-4">Sign in</button>
            </div>
        </form>
    )
}
