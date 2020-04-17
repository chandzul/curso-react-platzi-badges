import React from 'react';
import confLogo from '../images/badge-header.svg'

class Badge extends React.Component {
    render() {
        return <div>
            <div>
                <img src={confLogo} alt="encabezado"/>
            </div>

            <div>
                <img src="https://gravatar.com/avatar?d=identicon" alt="avatar"/>
                <h1>David <br/> Chandzul</h1>
            </div>

            <div>
                <p>lorem ipsun dolor sit a met</p>
                <p>@dchandzul</p>
            </div>

            <div>
                #Platziconf
            </div>

        </div>;
    }
}

export default Badge;