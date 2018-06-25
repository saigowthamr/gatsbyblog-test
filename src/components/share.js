import React from 'react'
import twitterIcon from '../img/twitter.png'
import fbIcon from '../img/facebook.png'

const Share = props => (
    <div>
        <h4 style={{textAlign:"center",margin:"0 0 .5rem 1rem",}}>Share Me</h4>
    <ul className="social">
      <li style={{ margin:"0 10px 0 0" }}>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${props.url +
            props.pathname}`}
          target="blank"
        >
          <img src={fbIcon} alt="facebook" className="shareme" />
        </a>
      </li>
      <li>
        <a
          href={`https://twitter.com/intent/tweet?url=${props.url +
            props.pathname}&text=${props.title} by @saigowthamr`}
          target="blank"
        >
          <img src={twitterIcon} alt="twitter" />
        </a>
      </li>
    </ul>
  </div>
)

export default Share
