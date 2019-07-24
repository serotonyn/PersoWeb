import React from 'react'
import Layout from '../components/layout'

const Bytesnime = ({ location: { state } }) => {
    return (
        <Layout fromLink={true} >
            <div className="with-left-drawer-spacer">
                <h1>Bytesnime</h1>
                <p>Welcome to page 2</p>
            </div>
        </Layout>
    )
}

export default Bytesnime

