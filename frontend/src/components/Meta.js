import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title,description,keywords }) => {
    return (
        
        <Helmet>
        <title>{title}</title>
        <meta name='description' content={description}/>
        <meta name='keywords' content={keywords} />
        </Helmet>
        
    )
}

Meta.defaultProps = {
    title: 'Welcome to DSK Store',
    keywords : 'Electronics,Clothing,Grooming,Hardware',
    description: "We sell Quality products world wide!"
}
export default Meta
