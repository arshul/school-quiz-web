import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { withRouter, Link } from 'react-router-dom'

class startquiz extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="ui center aligned container">
                <Link to={'/play-quiz'}><div>
                    <button class="ui primary button">Start Quiz</button>
                </div></Link>
            </div>
            

        )
    }
}

export default withRouter(startquiz);