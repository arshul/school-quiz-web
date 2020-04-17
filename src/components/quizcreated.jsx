import React , {Component} from "react";
import {Button} from "semantic-ui-react";
import styled, { keyframes } from 'styled-components';
import { slideInRight ,slideInLeft,fadeIn,fadeOut,zoomIn,zoomOut} from 'react-animations';
import {withRouter,Link} from 'react-router-dom'

const bounceAnimation = keyframes`${zoomIn}`;
const BouncyDiv = styled.div`
        animation: 1s ${bounceAnimation} ;
        `;
        class quizcreated extends Component {
            constructor(props) {
                super(props);
                this.state = {
        
                }
            }
            render() {
                return (
                    <div>
                    <div className="ui center aligned container" style={{top:"300px"}}>
                        <BouncyDiv>
                            <h1 style={{fontSize:82,fontStyle:"italic"}}>Quiz Created</h1>
                        </BouncyDiv>
                        <Link to={'/start-quiz/'}>
                            <button class="ui primary button">Ok</button>
                        </Link>
                    </div>
                    </div>
                    
        
                )
            }
        }
        
        export default withRouter(quizcreated);