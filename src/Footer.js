import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { fab, faFacebook, faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <div>
        <footer>
            <ul>
                <li>
                    <FontAwesomeIcon icon={faGithub} /> Github
                </li>
                <li>
                    <FontAwesomeIcon icon={faFacebook} /> Facebook
                </li>
                <li>
                    <FontAwesomeIcon icon={faTwitter} /> Twitter
                </li>
                <li>
                    <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                </li>
            </ul>
        </footer>
    </div>
  )
}
