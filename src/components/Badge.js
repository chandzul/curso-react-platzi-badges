import React from 'react';

import "./styles/Badge.css"
import confLogo from '../images/badge-header.svg'

class Badge extends React.Component {
    render() {

        const firstName = this.props.firstName;
        const lastName = this.props.lastName;

        return <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt="encabezado"/>
            </div>

            <div className="Badge__section-name">
                {/* <img className="Badge__avatar" src="https://gravatar.com/avatar?d=identicon" alt="avatar"/> */}
                <img className="Badge__avatar" src={this.props.avatarUrl} alt="avatar"/>
                <h1>{firstName} <br/> {lastName}</h1>
            </div>

            <div className="Badge__section-info">
                <h4>{this.props.jobTitle}</h4>
                <p>@{this.props.twitter}</p>
            </div>

            <div className="Badge__footer">
                #Platziconf
            </div>

        </div>;
    }
}

export default Badge;