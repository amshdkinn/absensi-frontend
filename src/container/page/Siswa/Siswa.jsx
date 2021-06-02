import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { API_URL } from '../../../config/config'
import axios from 'axios'

class Siswa extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            siswas: [],
            input: {}
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleModal() {
        this.setState({ show: !this.state.show })
    }
    componentDidMount() {
        this.props.hideHeaderCard()
        axios.get(`${API_URL}/api/admin/siswa`)
            .then(data => {
                if (data.data.code === 200) {
                    this.setState(prev => {
                        return {
                            ...prev,
                            siswas: data.data.data
                        }
                    })
                }
                console.log(data.data.data)
            }).catch(erro => console.log(erro))
    }
    handleInput(e) {
        let { value, name } = e.target;
        if (name === 'gender') value = value === 'l' ? 'm' : 'f'
        const temp = this.state.input;
        temp[name] = value

        this.setState(val => ({ ...val, input: { ...temp } }));

        if (name === 'nisn') {
            this.setState(val => ({ ...val, input: { ...val.input, username: value } }));
        }
    }

    handleSubmit(e) {

        console.log(e.target, this.state.input)
        const { input } = this.state
        axios.post(`${API_URL}/api/admin/siswa`, { ...input, class_id: 1, password: 'siswa', password_conf: 'siswa' })
            .then(res => window.location = '/siswa')
            .catch(err => console.log(err.response))
    }

    handleDelete(id) {
        axios.delete(`${API_URL}/api/admin/siswa/${id}`)
            .then(res => window.location = '/siswa').catch(err => console.log(err.response))
    }

    render() {
        console.log("asdasd", this.state.siswas)
        return (
            // <MainLayout>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-header border-0">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h3 className="mb-0">Tabel Siswa</h3>
                                </div>
                                <div className="col text-right">
                                    <Button onClick={() => { this.handleModal() }} className="btn btn-sm btn-primary">Data Baru</Button>
                                    <Modal show={this.state.show}>
                                        <Modal.Header>Input Data Baru</Modal.Header>
                                        <Modal.Body>
                                            <form onSubmit={this.handleSubmit} method="POST">
                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-form-label">NISN</label>
                                                    <div className="col-sm-9">
                                                        <input type="text" className="form-control" placeholder="1234567" name="nisn" onChange={this.handleInput} />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-form-label">Nama Lengkap</label>
                                                    <div className="col-sm-9">
                                                        <input type="text" className="form-control" placeholder="Supriadi" name="name" onChange={this.handleInput} />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-form-label">Alamat</label>
                                                    <div className="col-sm-9">
                                                        <textarea type="text" className="form-control" placeholder="Tejosari" name="address" onChange={this.handleInput} />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-sm-7">
                                                        <label className="form-label">Tanggal Lahir</label>
                                                        <input type="date" className="form-control" placeholder="" name="birth_date" onChange={this.handleInput} />
                                                    </div>
                                                    <div className="col-sm-5">
                                                        <label className="form-label">Jenis Kelamin</label>
                                                        <input type="text" className="form-control" placeholder="L/P" name="gender" onChange={this.handleInput} />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-form-label">Whatsapp</label>
                                                    <div className="col-sm-9">
                                                        <input type="text" className="form-control" placeholder="081353692108" name="whatsapp" onChange={this.handleInput} />
                                                    </div>
                                                </div>
                                            </form>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="danger" onClick={() => { this.handleModal() }}>Close</Button>
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
                                        <th scope="col">NISN</th>
                                        <th scope="col">Nama Lengkap</th>
                                        <th scope="col">Alamat</th>
                                        <th scope="col">Tanggal Lahir</th>
                                        <th scope="col">Gender</th>
                                        <th scope="col">Nomor Whatsapp</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {(this.state.siswas.length === 0 ?
                                        <tr>
                                            <td colspan="6"><h2 className="text-center">Loading...</h2></td>
                                        </tr>
                                        :
                                        this.state.siswas.map((v, i) => (
                                            <tr key={i}>
                                                <td>{v.nisn}</td>
                                                <td>{v.name}</td>
                                                <td>{v.address}</td>
                                                <td>{v.birth_date}</td>
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
            // </MainLayout>
        )
    }
}

export default Siswa