import React from 'react'
import { Helmet } from 'react-helmet';

const BgColor = () => {
    return (
        <div>
            <Helmet>
                <style>{'body { background: #E5E5E5; }'}</style>
          </Helmet>
        </div>
    )
}

export default BgColor
