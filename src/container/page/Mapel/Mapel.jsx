import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { API_URL } from '../../../config/config'
import axios from 'axios'

class Mapel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            mapels: [],
            input: {}
        }
    }
    handleModal() {
        this.setState({ show: !this.state.show })
    }
    componentDidMount() {
        this.props.hideHeaderCard()
        axios.get(`${API_URL}/api/admin/mapel`)
            .then(data => {
                if (data.data.code === 200) {
                    this.setState(prev => {
                        return {
                            ...prev,
                            mapels: data.data.data
                        }
                    })
                }
                console.log(data.data.data)
            }).catch(erro => console.log(erro))
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
                                    <h3 className="mb-0">Table Mata Pelajaran</h3>
                                </div>
                                <div className="col text-right">
                                    <Button onClick={() => { this.handleModal() }} className="btn btn-sm btn-primary">Data Baru</Button>
                                    <Modal show={this.state.show}>
                                        <Modal.Header>Input Data Baru</Modal.Header>
                                        <Modal.Body>
                                            <form>
                                                <div className="form-group row">
                                                    <label className="col-sm-4 col-form-label">Mata Pelajaran</label>
                                                    <div className="col-sm-8">
                                                        <input type="text" className="form-control" placeholder="Bahasa Yunani" />
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
                                        <th scope="col">Nama Pelajaran</th>
                                        <th scope="col">Dibuat pada</th>
                                        <th scope="col">Dirubah pada</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {(this.state.mapels.length === 0 ?
                                        <tr><td><h2 className="text-center">Loading</h2></td></tr>
                                        :
                                        this.state.mapels.map((v, i) => {
                                            { console.log("v", v) }
                                            <tr key={i}>
                                                <td>{v.id}</td>
                                                <td>{v.name}</td>
                                                <td>{v.created_at}</td>
                                                <td>{v.updated_at}</td>
                                            </tr>
                                        })
                                    )}
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

export default Mapel