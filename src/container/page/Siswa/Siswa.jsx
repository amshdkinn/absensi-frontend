import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'

class Siswa extends Component {
    constructor(props) {
        super(props)
        this.state = { show: false }
    }
    handleModal() {
        this.setState({ show: !this.state.show })
    }
    componentDidMount() {
        this.props.hideHeaderCard()
    }

    render() {
        return (
            // <MainLayout>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-header border-0">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h3 className="mb-0">Student Table</h3>
                                </div>
                                <div className="col text-right">
                                    <Button onClick={() => { this.handleModal() }} className="btn btn-sm btn-primary">New Date</Button>
                                    <Modal show={this.state.show}>
                                        <Modal.Header>Input Data Baru</Modal.Header>
                                        <Modal.Body>
                                            <form>
                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-form-label">NISN</label>
                                                    <div className="col-sm-9">
                                                        <input type="text" className="form-control" placeholder="1234567" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-form-label">Full Name</label>
                                                    <div className="col-sm-9">
                                                        <input type="text" className="form-control" placeholder="Supriadi" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-form-label">Address</label>
                                                    <div className="col-sm-9">
                                                        <textarea type="text" className="form-control" placeholder="1234567" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-sm-7">
                                                        <label className="form-label">Date of Birth</label>
                                                        <input type="date" className="form-control" placeholder="" />
                                                    </div>
                                                    <div className="col-sm-5">
                                                        <label className="form-label">Gender</label>
                                                        <input type="text" className="form-control" placeholder="1234567" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-form-label">Whatsapp</label>
                                                    <div className="col-sm-9">
                                                        <input type="text" className="form-control" placeholder="1234567" />
                                                    </div>
                                                </div>
                                            </form>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="danger" onClick={() => { this.handleModal() }}>Close</Button>
                                            <Button variant="primary" onClick={() => { this.handleModal() }}>Input</Button>
                                        </Modal.Footer>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive">
                            {/* Projects table */}
                            <table className="table align-items-center table-flush">
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">NISN</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">Date Of Birth</th>
                                        <th scope="col">Gender</th>
                                        <th scope="col">Whatsapp number</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            11223344
              </th>
                                        <td>Supardi
              </td>
                                        <td>
                                            Jl.raya karanglo
              </td>
                                        <td>
                                            28 mei 1965
              </td>
                                        <td>L</td>
                                        <td>
                                            089567432123
              </td>

                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            11223344
              </th>
                                        <td>
                                            Suparman              </td>
                                        <td>
                                            Jl.raya turen gedangan
              </td>
                                        <td>
                                            5 Juni 1978
              </td>
                                        <td>L</td>
                                        <td>
                                            089567432123
              </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            11223344
              </th>
                                        <td>
                                            super mario </td>
                                        <td>
                                            Jl.raya Nitendo etan
              </td>
                                        <td>
                                            8 Februari 1988
              </td>
                                        <td>L</td>
                                        <td>
                                            089567432123
              </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            112233444</th>
                                        <td>
                                            Naruto
              </td>
                                        <td>
                                            Jl.raya De leaf,konoha
              </td>
                                        <td>
                                            27 Oktober 1988
              </td>
                                        <td>L</td>
                                        <td>
                                            089567432123
              </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            11223344
              </th>
                                        <td>
                                            Takashi</td>
                                        <td>
                                            Jl.raya tokyo gg.12
              </td>
                                        <td>
                                            21 Maret 1992
              </td>
                                        <td>L</td>
                                        <td>
                                            089567432123
              </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            // </MainLayout>
        )
    }
}

export default Siswa