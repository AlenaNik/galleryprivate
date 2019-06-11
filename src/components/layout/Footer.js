import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="grey-container">
                <p className="share">Share it now!</p>

                <ul className="footer-links">
                    <li><a href="https://roombox3d.com/legal/legal_eng.pdf">Terms of use</a></li>
                    <li><a href="https://roombox3d.com/legal/privacy_eng.pdf">Privacy Policy</a></li>
                </ul>
            </div>
        );
    }
}

export default Footer;