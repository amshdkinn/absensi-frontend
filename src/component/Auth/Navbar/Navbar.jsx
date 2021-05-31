import React from 'react'

export default function Navbar(props) {

    return (
        <nav id="navbar-main" className="navbar navbar-horizontal navbar-transparent navbar-main navbar-expand-lg navbar-light">
            <div className="container">
                <a className="navbar-brand" href="/dashboard">
                    <h2 className="text-white">Admin-Absensi</h2>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="navbar-collapse navbar-custom-collapse collapse" id="navbar-collapse">
                    <div className="navbar-collapse-header">
                        <div className="row">
                            <div className="col-6 collapse-brand">
                                <a href="dashboard.html">
                                    <img src="../assets/img/brand/blue.png" alt="bg" />
                                </a>
                            </div>
                            <div className="col-6 collapse-close">
                                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                                    <span />
                                    <span />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}
