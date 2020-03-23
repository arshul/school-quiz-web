import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { withRouter, Link } from 'react-router-dom'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="ui center aligned container">
                <Link to={'/create-quiz'} style={{top:"300px"}}><div>
                    <button class="ui primary button">Create Quiz</button>
                </div></Link>
                <br>
                </br>
                <Link to={'/create-quiz'}><div>
                    <button class="ui secondary button">Old Quiz</button>
                </div></Link><div style={{marginTop:"300px"}}>

</div>
            </div>

        )
    }
}

export default withRouter(Home);
