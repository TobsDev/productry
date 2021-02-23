import React from 'react';


import '../scss/main.scss'
import Layout from '../layout/layout/layout'

const Typography = () => {
    return (
        <Layout>
            <div>
                <h1>headline one</h1>
                <h2>headline two</h2>
                <h3>headline three</h3>
                <h4>headline four</h4>
                <p className="truncated">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p><a href="/typography">this is a link</a></p>
                <label>label</label>    
            </div>
 
        </Layout>
    )
}

export default Typography
    