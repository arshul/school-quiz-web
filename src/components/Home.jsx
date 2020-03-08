import React , {Component} from "react";
import {Button} from "semantic-ui-react";
import {withRouter,Link} from 'react-router-dom'

class Home extends  Component{
    constructor(props) {
        super(props);
        this.state={

        }
    }
    render() {
        return (
            <div
            >
                <Link to={'/create-quiz'}>
                    <Button
                    secondary
                    content='Create New Quiz' icon='right arrow' labelPosition='right'
                    style={{
                        position: "absolute",
                        bottom: 30
                    }}

                />
                </Link>
            </div>
        )
    }
}

export default withRouter(Home);
