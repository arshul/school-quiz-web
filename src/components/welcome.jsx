import React , {Component} from "react";
import {Button} from "semantic-ui-react";
import styled, { keyframes } from 'styled-components';
import { slideInRight ,slideInLeft,fadeIn,fadeOut,zoomIn,zoomOut} from 'react-animations';
import {withRouter,Link} from 'react-router-dom'

class welcome extends Component{
    constructor(props) {
        super(props);
        this.state={

        }
    }
    render() {

        const bounceAnimation = keyframes`${slideInRight}`;
        const bounceAnimation1 = keyframes`${slideInLeft}`;
        const bounceAnimation4 = keyframes`${zoomIn}`;
        const BouncyDiv = styled.div`
        animation: 2s ${bounceAnimation} ;
        `;
        const BouncyDiv1 = styled.div`
        animation: 3s ${bounceAnimation1} ;
        `;
        const BouncyDiv4 = styled.div`
        animation: 2s  ${bounceAnimation4} infinite;
        `;
        return (
            
            <body style={{background: "linear-gradient(-180deg, #FFEFBA ,#FFFFFF )"}}>
                <div className="ui  three column grid" style={{marginTop:30, fontFamily:"Cursive",fontSize:30 ,fontStyle:"italic" }}>
                    <div className="row">           
                        <div className="column" style={{textAlign:"center",color:"rgb(53, 58, 88)" }}><BouncyDiv4>How Many ?</BouncyDiv4></div>
                        <div className="column"style={{textAlign:"center",color:"rgb(53, 58, 88)" }}><BouncyDiv4>Prime Minister</BouncyDiv4></div>
                        <div className="column"style={{textAlign:"center",color:"rgb(53, 58, 88)" }}><BouncyDiv4>Rivers</BouncyDiv4></div>
                    </div>
                    </div>
                 
                   <div className="ui  three column grid" >
                    <div className="row" style={{
                        height:"10px",margin:10
                    }}>
                        <div className="column" style={{width:"33.3%",width:"30%",textAlign:"center",fontFamily:"Cursive",fontSize:30 ,fontStyle:"italic",display:"block",marginLeft:"auto",marginRight:"auto",color:"rgb(53, 58, 88)" }}><BouncyDiv4>Uttar Pradesh</BouncyDiv4></div>
                        <div className="column" style={{width:200,display:"block",marginLeft:"auto",marginRight:"auto",marginTop:0}}><img src="https://i.imgur.com/9kJIqJQ.png" className="ui large image" /></div>
                        <div className="column" style={{width:"33.3%",width:"30%",textAlign:"center",fontFamily:"Cursive",fontSize:30 ,fontStyle:"italic",display:"block",marginLeft:"auto",marginRight:"auto",color:"rgb(53, 58, 88)"  }}><BouncyDiv4>  Sports</BouncyDiv4></div>
                    </div>

                   </div>
                   <div className="ui  three column grid" >
                    <div className="row" style={{
                        height:"10px",marginTop:150
                    }}>
                        <div className="column" style={{width:"30%",textAlign:"center",fontFamily:"Cursive",fontSize:30 ,fontStyle:"italic",color:"rgb(53, 58, 88)"  }}><BouncyDiv4>Civil</BouncyDiv4></div>
                        <div className="column"><BouncyDiv style={{fontFamily:"Cursive",fontSize:80,fontWeight:"bold",fontStyle:"italic",color:"rgb(53, 58, 88)"  }}>School</BouncyDiv></div>
                        <div className="column" style={{width:"30%",textAlign:"center",fontFamily:"Cursive",fontSize:30 ,fontStyle:"italic",color:"rgb(53, 58, 88)"  }}><BouncyDiv4>Technology</BouncyDiv4></div>
                    </div>

                   </div>
                   <div className="ui  three column grid">
                    <div className="row" style={{
                        height:"10px",marginTop:50
                    }}>
                        <div className="column" style={{width:"50%",textAlign:"center",fontFamily:"Cursive",fontSize:30 ,fontStyle:"italic" ,color:"rgb(53, 58, 88)" }}><BouncyDiv4>Geography</BouncyDiv4></div>
                        <div className="column"><BouncyDiv1 style={{fontFamily:"Cursive",fontSize:80,fontWeight:"bold",fontStyle:"italic",color:"rgb(53, 58, 88)" }}>Quiz</BouncyDiv1></div>
                    </div>

                   </div>
                   <div className="ui  three column grid" >
                    <div className="row" style={{
                        height:"10px",marginTop:70
                    }}>
                        <div className="column" style={{width:"33.3%",width:"30%",textAlign:"center",fontFamily:"Cursive",fontSize:30 ,fontStyle:"italic",color:"rgb(53, 58, 88)"  }}><BouncyDiv4>Birds</BouncyDiv4></div>
                        <div className="column" style={{width:"33.3%",width:"30%",textAlign:"right",fontFamily:"Cursive",fontSize:30 ,fontStyle:"italic",color:"rgb(53, 58, 88)"  }}><BouncyDiv4>INDIA</BouncyDiv4></div>
                        <div className="column" style={{width:"33.3%",width:"30%",textAlign:"right",fontFamily:"Cursive",fontSize:30 ,fontStyle:"italic",color:"rgb(53, 58, 88)"  }}><BouncyDiv4>History</BouncyDiv4></div>
                    </div>

                   </div>
                   <div className="ui  three column grid" >
                    <div className="row" style={{
                        height:"10px",marginTop:50
                    }}>
                        <div className="column" style={{width:"33.3%",width:"30%",textAlign:"right",fontFamily:"Cursive",fontSize:30 ,fontStyle:"italic",color:"rgb(53, 58, 88)"  }}><BouncyDiv4>Languages</BouncyDiv4></div>
                        <div className="column" style={{width:"50%",width:"30%",textAlign:"right",fontFamily:"Cursive",fontSize:30 ,fontStyle:"italic" ,color:"rgb(53, 58, 88)" }}><BouncyDiv4>Science</BouncyDiv4></div>
                        <div className="column" style={{width:"15%",width:"30%",textAlign:"right ",fontFamily:"Cursive",fontSize:30 ,fontStyle:"italic",color:"rgb(53, 58, 88)"  }}><BouncyDiv4>Economy</BouncyDiv4></div>
                    </div>

                   </div>
                
                   <div className="ui  three column grid" >
                    <div className="row" style={{
                        height:"10px",marginTop:40
                    }}>
                        <div className="column" style={{width:"33.3%"}}></div>
                        <div className="column" style={{width:"33.3%" }}><Link to={'/home'}>
                    <Button
                    size="big"
                    positive
                    content='Go Ahead' icon='right arrow' labelPosition='right'
                    style={{
                        display:"block",
                        marginLeft:"auto",
                        marginRight:"auto",
                    }}

                />
                </Link></div>
                        <div className="column" style={{width:"33.3%"}}></div>
                    </div>

                   </div>
                
            </body>
        )
    }
}

export default withRouter(welcome);
