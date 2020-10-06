import React from 'react'

import './externalLink.scss'

export default function ExternalLink({ href, children, target = '_blank', rel = 'nofollow noopener noreferrer' }) {

    return <a className='externalLink' target={ target } rel={ rel } href={ href }>{ children } <i className='material-icons'>open_in_new</i></a>

}