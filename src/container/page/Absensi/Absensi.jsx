import React, { Component } from 'react'

class Absensi extends Component {
    constructor(props) {
        super(props)
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
                                    <h3 className="mb-0">Absensi Table</h3>
                                </div>
                                <div className="col text-right">

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
                                        <th scope="col">Id Jadwal</th>
                                        <th scope="col">Waktu Absen</th>
                                        <th scope="col">Lokasi Absen</th>
                                        <th scope="col">Keterangan</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Absen Pada</th>
                                        <th scope="col">Dirubah Pada</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            11223344
              </th>
                                        <td>Bambank
              </td>
                                        <td>
                                            2
              </td>
                                        <td>
                                            19.00
              </td>
                                        <td>121312311243144131213</td>
                                        <td>

                                        </td>
                                        <td>
                                            i
              </td>
                                        <td>29 Juni 2019</td>
                                        <td>29 Juni 2019</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            11223344
              </th>
                                        <td>Supardi
              </td>
                                        <td>
                                            2
              </td>
                                        <td>
                                            19.00
              </td>
                                        <td>121312311243144131213</td>
                                        <td>

                                        </td>
                                        <td>
                                            -
              </td>
                                        <td>29 Juni 2019</td>
                                        <td>29 Juni 2019</td>
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

export default Absensi