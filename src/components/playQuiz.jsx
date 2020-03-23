import React, {Component, isValidElement} from "react";
import {
    Button,
    Form,
    Input,
    Icon,
    Radio
} from "semantic-ui-react";
import {withRouter,Link} from 'react-router-dom';

class playQuiz extends Component{
    constructor(props) {
        super(props);
        this.state={
            
            questions : {
               
                selected_answer:null
            },
            quesNo:0,
            showInput:false,


        }
       
    }
    prevPage(){
        if(this.state.quesNo>=1){
            this.setState({quesNo:this.state.quesNo-1})
        }
    }
    nextPage(){
        if(!this.state.questions[this.state.quesNo+1]){
            let questions = this.state.questions;
            questions[this.state.quesNo+1] = {
                        a:"",
                        b:"",
                        c:"",
                        d:"",
                        question:"",
                        imageUrl:"",
                        videoUrl:"",
                        correct:null,
                        team : "",
                        selected_answer:null

            };
            this.setState({
                quesNo:this.state.quesNo+1,
                questions:questions
            });
            console.log(this.state)
        }else{
            this.setState({quesNo:this.state.quesNo+1})
        }
    }
    setSelect(value){
        let questions = this.state.questions;
        questions[this.state.quesNo].selected_answer = value;
        this.setState({questions:questions});
    }
  match(){
    let className  
    className= `${this.state.selected_answer == this.state.correct?<p>hii</p>:<p>wrong</p>}`
  }
    componentDidMount(){
        fetch('http://localhost:5000/quizzes/'+this.props.match.params.quizId)

        .then((response)=>response.json())
        .then((responseJson)=>{
           console.log(responseJson);
           this.setState({ questions:responseJson.result.questions});
        })
        .catch((error)=>{
            console.error(error);
        });
    }
    render()
    { 
        let question = this.state.questions[this.state.quesNo]
        return(
            <div style={{
                            height: "100vh",
                            background: "linear-gradient(-180deg, rgb(53, 58, 88) 25.5%, rgb(197, 197, 197) 25.5%)",
                            padding: "5px"
                        }}>
                 <h1 className="ui center aligned header" style={{
                                                                    color:"white",
                                                                    marginTop:6,
                                                                    fontWeight:"bold",
                                                                    fontSize:72
                                                                }}>School Quiz</h1>
                <div className="ui  container" style={{marginBottom:"5px",marginLeft:800}}>
                <div style={{marginLeft:"90%"}}>
                    <button className={`ui icon basic compact red button right align ${(this.state.quesNo >= 1)?'':'disabled'}`} onClick={()=>this.prevPage()}><i className={"arrow left icon"}/></button>
                    <button className={"ui icon basic compact red button right align "} onClick={()=>this.nextPage()}><i className={"arrow right icon"}/></button>
                    </div>
                </div>
                {question&&<div className={"ui container"} style={{
                    borderRadius: "10px",
                    padding: "1rem",
                    background: "white",
                    position: "relative",
                    boxShadow: "1px 1px 21px #00000017",
                    marginTop : "7px"
                }}>             
                                <div class="two coloumn grid" v style={{borderWidth:1,borderRadius:2, borderColor: '#FF5722'}}>
                                    <div class="row"style={{fontSize:"22px"}}>
                                     <div class="ui column label " style={{fontSize:"22px",width:"8%",marginRight:"7px"}}>
                                        Q : {this.state.quesNo+1}
                                     </div>
                                     
                                        {question.question}
        
                                     </div>
                                </div>
                                    <br></br>
                                    <br></br>
                            
                                     <div class="ui  three column grid" style={{fontSize:"22px"}}>
                                     <div class="row"style={{fontSize:"22px"}}>
                                     <div class="ui column label " style={{fontSize:"22px",width:"6%",marginRight:"7px",marginLeft:12}}>
                                                A :
                                            </div>
                                            <div class="column "style={{width:"85%",marginTop:10}}>
                                            {question.options[0]}
                                            </div>
                                            <div class="column" style={{width:"5%"}}>
                                            <Icon name='check'onClick={()=>this.setSelect(question.options[0])} inverted circular link />
                                            </div>

                                        </div>
                                     </div>
                                     <div class="ui  three column grid" style={{fontSize:"16px"}}>
                                     <div class="row"style={{fontSize:"22px"}}>
                                     <div class="ui column label " style={{fontSize:"22px",width:"6%",marginRight:"7px",marginLeft:12}}>
                                                B :
                                            </div>
                                            <div class="column "style={{width:"85%",marginTop:11}}>
                                            {question.options[1]}
                                            </div>
                                            <div class="column" style={{width:"5%"}}>
                                            <Icon name='check'onClick={()=>this.setSelect(question.options[1])} inverted circular link />
                                            </div>

                                        </div>
                                     </div>
                                     <div class="ui  three column grid" style={{fontSize:"16px"}}>
                                     <div class="row"style={{fontSize:"22px"}}>
                                     <div class="ui column label " style={{fontSize:"22px",width:"6%",marginRight:"7px",marginLeft:12}}>
                                                C :
                                            </div>
                                            <div class="column "style={{width:"85%",marginTop:11}}>
                                            {question.options[2]}
                                            </div>
                                            <div class="column" style={{width:"5%"}}>
                                            <Icon name='check'onClick={()=>this.setSelect(question.options[2])} inverted circular link />
                                            </div>

                                        </div>
                                     </div>
                                     <div class="ui  three column grid" style={{fontSize:"16px"}}>
                                     <div class="row"style={{fontSize:"22px"}}>
                                     <div class="ui column label " style={{fontSize:"22px",width:"6%",marginRight:"7px",marginLeft:12}}>
                                                D :
                                            </div>
                                            <div class="column "style={{width:"85%",marginTop:11}}>
                                            {question.options[3]}
                                            </div>
                                            <div class="column" style={{width:"5%"}}>
                                            <Icon name='check'onClick={()=>this.setSelect(question.options[3])} inverted circular link />
                                            </div>

                                        </div>
                                     
                                     </div>
                                     <div className="ui two grid container">
                                        <div class="row">
                                        
                                        <div  class="column"style={{marginTop:20,marginLeft:"45%",marginRight:"38%"}}>
                                        <div style={{width: "100%", textAlign: "center"}}>
                                        <span style={{fontSize:22,fontWeight:"bold"}}>60</span>
                                        </div> 
                                        </div> 
                                    <div  class="column"style={{marginTop:20}}>
                                            <button class="ui button" onClick={()=>this.match}>
                                            <div class="visible content" style={{fontWeight:"bold",fontSize:22}}>OK</div>
                                 
                                            </button>
                                        </div>
                                    </div> 
                                    </div>
                </div>}

            </div>
            
                
        )

    }
}

export default withRouter(playQuiz);