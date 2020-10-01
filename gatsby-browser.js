import React from 'react'

// import TueriProvider from 'components/Tueri'
import Header from 'components/Header'
import Footer from 'components/Footer'

import 'styles/app.scss'

// export const wrapRootElement = ({ element }) => (
//     <TueriProvider 
//         replacements={[['https://teenranch.nyc3.digitaloceanspaces.com/website/assets/', 'https://cdn.tueri.io/68719476739/assets/']]}
//     >
//         { element }
//         <Footer/>
//     </TueriProvider>
// )

export const wrapPageElement = ({ element, props }) => (
    <>
        <Header {...props}/>
        { element }
        <Footer />
    </>
)