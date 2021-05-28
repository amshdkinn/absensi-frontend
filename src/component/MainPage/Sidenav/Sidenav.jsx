import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidenav(props) {

    return (
        <nav className="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
            <div className="scrollbar-inner">
                {/* Brand */}
                <div className="sidenav-header  align-items-center">
                    <a className="navbar-brand" href="/dashboard">
                        <h2>Admin-Absensi</h2>
                    </a>
                </div>
                <div className="navbar-inner">
                    {/* Collapse */}
                    <div className="collapse navbar-collapse" id="sidenav-collapse-main">
                        {/* Nav items */}
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/dashboard" className="nav-link ">
                                    <i className="ni ni-tv-2 text-primary" />
                                    <span className="nav-link-text">Dashboard</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/guru" className="nav-link">
                                    <i className="ni ni-single-02 text-orange" />
                                    <span className="nav-link-text">Guru</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/siswa" className="nav-link">
                                    <i className="ni ni-single-02 text-blue" />
                                    <span className="nav-link-text">Siswa</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/mapel" className="nav-link">
                                    <i className="ni ni-single-copy-04 text-green" />
                                    <span className="nav-link-text">Mapel</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/kelas" className="nav-link">
                                    <i className="ni ni-money-coins text-yellow" />
                                    <span className="nav-link-text">Kelas</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/jadwal" className="nav-link">
                                    <i className="ni ni-bullet-list-67 text-default" />
                                    <span className="nav-link-text">Jadwal</span>
                                </Link>
                            </li>
                        </ul>
                        {/* Divider */}
                        <hr className="my-3" />
                        {/* Heading */}
                        <h6 className="navbar-heading p-0 text-muted">
                            <span className="docs-normal">Documentation</span>
                        </h6>
                        {/* Navigation */}
                        <ul className="navbar-nav mb-md-3">
                            <li className="nav-item">
                                <a className="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/getting-started/overview.html" rel="noopener noreferrer" target="_blank">
                                    <i className="ni ni-spaceship" />
                                    <span className="nav-link-text">Getting started</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/foundation/colors.html" rel="noopener noreferrer" target="_blank">
                                    <i className="ni ni-palette" />
                                    <span className="nav-link-text">Foundation</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/components/alerts.html" rel="noopener noreferrer" target="_blank">
                                    <i className="ni ni-ui-04" />
                                    <span className="nav-link-text">Components</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/plugins/charts.html" rel="noopener noreferrer" target="_blank">
                                    <i className="ni ni-chart-pie-35" />
                                    <span className="nav-link-text">Plugins</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

    )
}
