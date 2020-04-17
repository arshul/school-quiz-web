import React, { Component } from "react";
import { withRouter, Link } from 'react-router-dom'

class startquiz extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="ui center aligned container" style={{top:"300px"}}>
                <Link to={'/play-quiz/'}>
                    <button class="ui primary button">Play Quiz</button>
                </Link>
            </div>
            

        )
    }
}

export default withRouter(startquiz);