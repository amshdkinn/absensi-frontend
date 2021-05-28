import React, { useState } from 'react'
import BlockUi from 'react-block-ui'
import 'react-block-ui/style.css'
import './MainLayout.css'
import { connect } from 'react-redux'
import { Header, Sidenav, Topnav, Footer } from '../../../component/MainPage/index'

function Mainlayout(props) {
    const [headerCardHide, setHeaderCardHide] = useState(false)
    const { render: Children, ...rest } = props
    const { store: { global: { layoutIsBlocked } } } = props
    const { noHeader } = props

    const hideHeaderCard = () => {
        setHeaderCardHide(true)
    }
    return (
        <React.Fragment>
            <BlockUi tag="div" blocking={layoutIsBlocked} style={{ zIndex: 9999 }}>
                <Sidenav />
                <div className="main-content" id="panel">
                    <Topnav />
                    {!headerCardHide ? <Header /> : <Header cardHidden={true} />}
                    {/* <Header /> */}
                    <div className="container-fluid mt--6">
                        <Children {...rest} hideHeaderCard={hideHeaderCard} />
                        <Footer />
                    </div>
                </div>
            </BlockUi>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        store: state
    }
}

export default connect(mapStateToProps)(Mainlayout)