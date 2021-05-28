import React, { Component } from 'react'

class Guru extends Component {
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
                <div className="col-xl-8">
                    <h2>Table Guru serta CRUD</h2>
                </div>
            </div>
            // </MainLayout>
        )
    }
}

export default Guru