import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'

class Jadwal extends Component {
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
                                    <h3 className="mb-0">Jadwal Table</h3>
                                </div>
                                <div className="col text-right">
                                <Button onClick={() => { this.handleModal() }} className="btn btn-sm btn-primary">New Data</Button>
                                    <Modal show={this.state.show}>
                                        <Modal.Header>Input Data Baru</Modal.Header>
                                        <Modal.Body>
                                            <form>
                                                <div className="form-group row">
                                                    <label className="col-sm-4 col-form-label">Days</label>
                                                    <div className="col-sm-8">
                                                    <select className="form-control form-control-lg" aria-label="Default select example">
                                                        <option selected disabled>Choosen a Day</option>
                                                        <option value="senin">Senin</option>
                                                        <option value="selasa">Selasa</option>
                                                        <option value="rabu">Rabu</option>
                                                        <option value="kamis">Kamis</option>
                                                        <option value="jumat">Jumat</option>
                                                        <option value="sabtu">Sabtu</option>
                                                        <option value="minggu">Minggu</option>
                                                    </select>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-4 col-form-label">Jam Ke-</label>
                                                    <div className="col-sm-8">
                                                        <input type="text" className="form-control" placeholder="1/3/5" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-4 col-form-label">Kelas</label>
                                                    <div className="col-sm-8">
                                                    <select className="form-control form-control-lg" aria-label="Default select example">
                                                        <option selected disabled>Pilih Kelas</option>
                                                        <option value="1">XII RPL 1</option>
                                                        <option value="2">XII RPL 2</option>
                                                    </select>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-4 col-form-label">Guru</label>
                                                    <div className="col-sm-8">
                                                    <select className="form-control form-control-lg" aria-label="Default select example">
                                                        <option selected disabled>Daftar Guru</option>
                                                        <option value="1">Supriadi</option>
                                                        <option value="2">mas e Supriadi</option>
                                                    </select>
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
                                        <th scope="col">Hari</th>
                                        <th scope="col">Waktu / Jam ke-</th>
                                        <th scope="col">Kelas</th>
                                        <th scope="col">Id Guru</th>
                                        <th scope="col">Dibuat Pada</th>
                                        <th scope="col">Dirubah Pada</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            Senin
              </th>
                                        <td>1
              </td>
                                        <td>
                                            XII RPL 1
              </td>
                                        <td>1
                                            
              </td>
                                        <td>24 juni 2019</td>
                                        <td>
                                            24 juni 2019
              </td>

                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            Senin
              </th>
                                        <td>3
              </td>
                                        <td>
                                            XII RPL 1
              </td>
                                        <td>7
                                            
              </td>
                                        <td>24 juni 2019</td>
                                        <td>
                                            24 juni 2019
              </td>

                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            Senin
              </th>
                                        <td>5
              </td>
                                        <td>
                                            XII RPL 1
              </td>
                                        <td>9
                                            
              </td>
                                        <td>24 juni 2019</td>
                                        <td>
                                            24 juni 2019
              </td>

                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            Senin
              </th>
                                        <td>7
              </td>
                                        <td>
                                            XII RPL 1
              </td>
                                        <td>4
                                            
              </td>
                                        <td>24 juni 2019</td>
                                        <td>
                                            24 juni 2019
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

export default Jadwal