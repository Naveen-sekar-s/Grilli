import React from 'react'

const BackToTop = () => {
  return (

    /* - #BACK TO TOP */

    <a
      href="#top"
      className="back-top-btn active"
      aria-label="back to top"
      data-back-top-btn
    >
      <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
    </a>
  )
}

export default BackToTop