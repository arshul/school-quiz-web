import React, {Component, isValidElement, useCallback} from "react";
import {
    Button,
    Form,
    Input,
    Icon,
    Radio
} from "semantic-ui-react";
import {withRouter,Link} from 'react-router-dom';
var value1
class playQuiz extends Component{
    constructor(props) {
        super(props);
        this.state={
            
            questions : {
                selected_answer:null,
                question_attempt:0,
                correct_question:0,
                drop_question:0,
                wrong_question:0,
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
                selected_answer:null,
                question_attempt:this.state.question_attempt+1,
                correct_question:this.state.correct_question+1,
                drop_question:this.state.drop_question,
                wrong_question:this.state.wrong_question,

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
        value1=value;
        let questions = this.state.questions;
        questions[this.state.quesNo].selected_answer = value;
        this.setState({questions:questions});
       
       
    }
    setque_attempt(){
        let questions = this.state.questions;
        questions[this.state.quesNo].question_attempt=questions[this.state.quesNo].question_attempt+1;
        this.setState({questions:questions});
    }
    setque_correct(){
        let questions = this.state.questions;
        console.log("hii in correct");
        questions[this.state.quesNo].correct_question=questions[this.state.quesNo].correct_question+1;
        this.setState({questions:questions});
    }
    setque_wrong(){
        let questions = this.state.questions;
        console.log("hii in wrong");
        questions[this.state.quesNo].wrong_question=questions[this.state.quesNo].wrong_question+1;
        this.setState({questions:questions});
    }
    setque_drop(){
        let questions = this.state.questions;
        questions[this.state.quesNo].drop_question=questions[this.state.quesNo].drop_question+1;
        this.setState({questions:questions});
    }
    setMatch(correct_ans){
        if(this.state.questions.selected_answer){
            if (correct_ans == this.state.questions.selected_answer){
                this.setque_correct();
            }
            else{
                this.setque_wrong();
            }
        }else{
            this.setState();
        }
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
                                            <button class="ui button" onClick={()=>this.setMatch(question.correct_answer)}>
                                            OK
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