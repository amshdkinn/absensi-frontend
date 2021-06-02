import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { API_URL } from '../../../config/config'
import axios from 'axios'

class Guru extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            gurus: [],
            input: {}
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleModal() {
        this.setState({ show: !this.state.show })
    }

    handleInput(e) {
        let { value, name } = e.target;
        if (name === 'gender') value = value === 'l' ? 'm' : 'f'
        const temp = this.state.input;
        temp[name] = value

        this.setState(val => ({ ...val, input: { ...temp } }));

        if (name === 'nip') {
            this.setState(val => ({ ...val, input: { ...val.input, username: value } }));
        }
    }

    handleSubmit(e) {

        console.log(e.target, this.state.input)
        const { input } = this.state
        axios.post(`${API_URL}/api/admin/guru`, { ...input, password: 'guru', password_conf: 'guru' })
            .then(res => window.location = '/guru')
            .catch(err => console.log(err.response))
    }

    handleDelete(id) {
        axios.delete(`${API_URL}/api/admin/guru/${id}`)
            .then(res => window.location = '/guru').catch(err => console.log(err.response))
    }

    componentDidMount() {
        this.props.hideHeaderCard()
        axios.get(`${API_URL}/api/admin/guru`)
            .then(data => {
                if (data.data.code === 200) {
                    this.setState(prev => {
                        return {
                            ...prev,
                            gurus: data.data.data
                        }
                    })
                }
                console.log(data.data.data)
            }).catch(erro => console.log(erro))
    }

    render() {
        // console.log(this.state.gurus)
        // return (
        //     this.state.gurus.map(guru => guru.NIP)
        // )
        return (
            // <MainLayout>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-header border-0">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h3 className="mb-0">Tabel Guru</h3>
                                </div>
                                <div className="col text-right">
                                    <Button onClick={() => { this.handleModal() }} className="btn btn-sm btn-primary">Data Baru</Button>
                                    <Modal show={this.state.show}>
                                        <Modal.Header>Input Data Baru</Modal.Header>
                                        <Modal.Body>
                                            <form onSubmit={this.handleSubmit} method="POST">
                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-form-label">NIP</label>
                                                    <div className="col-sm-9">
                                                        <input type="text" onChange={this.handleInput} name="nip" className="form-control" placeholder="1234567" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-form-label">Nama Lengkap</label>
                                                    <div className="col-sm-9">
                                                        <input type="text" onChange={this.handleInput} name="name" className="form-control" placeholder="Supriadi" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-form-label">Alamat</label>
                                                    <div className="col-sm-9">
                                                        <textarea type="text" onChange={this.handleInput} name="address" className="form-control" placeholder="Tejosari" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-sm-7">
                                                        <label className="form-label">Tanggal Lahir</label>
                                                        <input type="date" onChange={this.handleInput} name="birth_date" className="form-control" placeholder="" />
                                                    </div>
                                                    <div className="col-sm-5">
                                                        <label className="form-label">Gender</label>
                                                        <input type="text" onChange={this.handleInput} name="gender" className="form-control" placeholder="L/P" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-form-label">Whatsapp</label>
                                                    <div className="col-sm-9">
                                                        <input type="text" onChange={this.handleInput} name="whatsapp" className="form-control" placeholder="081353692108" />
                                                    </div>
                                                </div>
                                            </form>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="danger" onClick={() => { this.handleModal() }}>Tutup</Button>
                                            <Button variant="primary" onClick={this.handleSubmit}>Input</Button>
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
                                        <th scope="col">NIP</th>
                                        <th scope="col">Nama Lengkap</th>
                                        <th scope="col">Alamat</th>
                                        <th scope="col">Tanggal Lahir</th>
                                        <th scope="col">Gender</th>
                                        <th scope="col">Nomor Whatsapp</th>
                                        <th scope="col">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {(this.state.gurus.length === 0 ?
                                        <tr>
                                            <td colspan="6"><h2 className="text-center">Loading...</h2></td>
                                        </tr>
                                        :
                                        this.state.gurus.map((v, i) => (
                                            <tr key={i}>
                                                <td>{v.NIP}</td>
                                                <td>{v.name}</td>
                                                <td>{v.address}</td>
                                                <td>{v.birth}</td>
                                                <td>{v.gender}</td>
                                                <td>{v.whatsapp}</td>
                                                <td>
                                                    <Button variant="primary" className="btn btn-sm btn-primary" onClick={() => this.handleDelete(v.id)}>Hapus</Button>
                                                </td>
                                            </tr>
                                        )))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            ///hurung mari gan
            // </MainLayout>
        )
    }
}

export default Guru