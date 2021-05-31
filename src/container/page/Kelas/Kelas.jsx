import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'

class Kelas extends Component {
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
                                    <h3 className="mb-0">Class Table</h3>
                                </div>
                                <div className="col text-right">
                                    <Button onClick={() => { this.handleModal() }} className="btn btn-sm btn-primary">Data Baru</Button>
                                    <Modal show={this.state.show}>
                                        <Modal.Header>Input Data Baru</Modal.Header>
                                        <Modal.Body>
                                            <form>
                                                <div className="form-group row">
                                                    <label className="col-sm-4 col-form-label">Nama Kelas</label>
                                                    <div className="col-sm-8">
                                                        <input type="text" className="form-control" placeholder="XII RPL 3" />
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
                                        <th scope="col">Id</th>
                                        <th scope="col">Nama Kelas</th>
                                        <th scope="col">Dibuat pada</th>
                                        <th scope="col">Dirubah pada</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            1
              </th>
                                        <td>XII RPL 1
              </td>
                                        <td>
                                            24 Juni 2019
              </td>
                                        <td>
                                            24 Juni 2019
              </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            2
              </th>
                                        <td>
                                            XII RPL 2
                                        </td>
                                        <td>
                                            24 Juni 2019
              </td>
                                        <td>
                                            24 Juni 2019
              </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            3
              </th>
                                        <td>
                                            XII BC </td>
                                        <td>
                                            12 Juni 2019
              </td>
                                        <td>
                                            12 Juni 2019
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

export default Kelas