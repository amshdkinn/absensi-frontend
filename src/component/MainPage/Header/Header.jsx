import React from 'react'

export default function Header({ cardHidden }) {
    return (
        <div className="header bg-primary pb-9">
            <div className="container-fluid">
                <div className="header-body">
                    <div className="row align-items-center py-4">
                        <div className="col-lg-6 col-7">
                            <h6 className="h2 text-white d-inline-block mb-0">Dashboard</h6>
                            <nav aria-label="breadcrumb" className="d-none d-md-inline-block ml-md-4">
                                <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                    <li className="breadcrumb-item"><a href="#"><i className="fas fa-home" /></a></li>
                                    <li className="breadcrumb-item"><a href="#">Dashboards</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Default</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    {/* Card stats */}
                    {
                        !cardHidden &&
                        <div className="row">
                            <div className="col-xl-3 col-md-6">
                                <div className="card card-stats">
                                    {/* Card body */}
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <h5 className="card-title text-uppercase text-muted mb-0">Jumlah Guru</h5>
                                                <span className="h2 font-weight-bold mb-0">350,897</span>
                                            </div>
                                            <div className="col-auto">
                                                <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                                                    <i className="ni ni-single-02" />
                                                </div>
                                            </div>
                                        </div>
                                        <p className="mt-3 mb-0 text-sm">
                                            <span className="text-success mr-2"><i className="fa fa-arrow-up" /> 3.48%</span>
                                            <span className="text-nowrap">Since last month</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="card card-stats">
                                    {/* Card body */}
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <h5 className="card-title text-uppercase text-muted mb-0">Jumlah Mapel</h5>
                                                <span className="h2 font-weight-bold mb-0">2,356</span>
                                            </div>
                                            <div className="col-auto">
                                                <div className="icon icon-shape bg-gradient-orange text-white rounded-circle shadow">
                                                    <i className="ni ni-single-copy-04" />
                                                </div>
                                            </div>
                                        </div>
                                        <p className="mt-3 mb-0 text-sm">
                                            <span className="text-success mr-2"><i className="fa fa-arrow-up" /> 3.48%</span>
                                            <span className="text-nowrap">Since last month</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="card card-stats">
                                    {/* Card body */}
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <h5 className="card-title text-uppercase text-muted mb-0">Jumlah Kelas</h5>
                                                <span className="h2 font-weight-bold mb-0">924</span>
                                            </div>
                                            <div className="col-auto">
                                                <div className="icon icon-shape bg-gradient-green text-white rounded-circle shadow">
                                                    <i className="ni ni-money-coins" />
                                                </div>
                                            </div>
                                        </div>
                                        <p className="mt-3 mb-0 text-sm">
                                            <span className="text-success mr-2"><i className="fa fa-arrow-up" /> 3.48%</span>
                                            <span className="text-nowrap">Since last month</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="card card-stats">
                                    {/* Card body */}
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <h5 className="card-title text-uppercase text-muted mb-0">Total Siswa</h5>
                                                <span className="h2 font-weight-bold mb-0">49,65%</span>
                                            </div>
                                            <div className="col-auto">
                                                <div className="icon icon-shape bg-gradient-info text-white rounded-circle shadow">
                                                    <i className="ni ni-chart-bar-32" />
                                                </div>
                                            </div>
                                        </div>
                                        <p className="mt-3 mb-0 text-sm">
                                            <span className="text-success mr-2"><i className="fa fa-arrow-up" /> 3.48%</span>
                                            <span className="text-nowrap">Since last month</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>

    )
}
