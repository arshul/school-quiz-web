import React, {Component} from "react";
import {
    Icon,
    Button
} from "semantic-ui-react";
import {withRouter,Link} from 'react-router-dom';
var value1=0;
var value2=0;
var value3=0;
var value4=0
class playQuiz extends Component{
    constructor(props) {
        super(props);
        this.state={
            
            questions : {
                selected_answer:null,
                question_attempt:null,
                correct_question:null,
                drop_question:null,
                wrong_question:null
            },
            quesNo:0,
            showInput:false,


        }
       
    }
    prevPage(){
        if(this.state.quesNo>=1){
            this.setState({quesNo:this.state.quesNo-1})
        }
        document.getElementById("toast").style.display="none";
    }
    nextPage(){
        if(!this.state.questions[this.state.quesNo+1]){
            let questions = this.state.questions;
            questions[this.state.quesNo+1] = {
                selected_answer:null,
                question_attempt:this.state.question_attempt,
                correct_question:this.state.correct_question,
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
        document.getElementById("toast").style.display="none";
        document.getElementById("main").style.display="block";
    }
    setSelect(value){
        let questions = this.state.questions;
        questions[this.state.quesNo].selected_answer = value;
        this.setState({questions:questions});
       
       
    }
    setque_attempt(){
        let questions = this.state.questions;
        value2=value2+1;
        questions.question_attempt = value2;
        console.log(questions.question_attempt)
        this.setState({questions:questions});
    }
    setque_correct(){
        let questions = this.state.questions;
        value1=value1+1;
        
        questions.correct_question = value1;
        console.log(questions.correct_question)
        this.setState({questions:questions});
    }
    myfunction(text){
        this.setMatch(text);
        this.setque_attempt();
    }
    setque_wrong(){
        let questions = this.state.questions;
        value3=value3+1;
        questions.wrong_question = value3;
        console.log(questions.wrong_question)
        this.setState({questions:questions});
    }
    setque_drop(){
        let questions = this.state.questions;
        value4=value4+1;
        questions.drop_question = value4;
        console.log(questions.drop_question)
        this.setState({questions:questions});
    }
    write(correct_ans){
        document.getElementById("toast").style.display="block";
        document.getElementById("main").style.display="none";
        let questions = this.state.questions;
        if (questions[this.state.quesNo].selected_answer == correct_ans){
            document.getElementById("toast1").innerHTML="Correct Answer";
            if(this.state.quesNo == 4){
                document.getElementById("resultbtn").style.display="block";
                document.getElementById("button").style.display="none";
            }
        }
        else if (questions[this.state.quesNo].selected_answer != correct_ans){
            document.getElementById("toast1").innerHTML="Wrong Answer";
            if(this.state.quesNo == 4){
                document.getElementById("resultbtn").style.display="block";
                document.getElementById("button").style.display="none";
            }
        }
    }
    setMatch(correct_ans){
        if(this.state.questions[this.state.quesNo].selected_answer){
            if (correct_ans == this.state.questions[this.state.quesNo].selected_answer){
                this.setque_correct();
            }
            else{
                this.setque_wrong();
            }
        }else{
            this.setque_drop();
            this.setState();
        }
     this.write(correct_ans)
    }
    createResult(){
        let data = {
            result: [
                {
                    question_attempt:value2,
                    correct_question:value1,
                    wrong_question:value3,
                    drop_question:value4
                }
                
            ],
            
        };
        
       fetch("http://localhost:5000/result/"+this.props.match.params.quizId,{
           method:"post",
           headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
       }).then(resp=>{
        console.log(resp)
    }).catch(err=>console.log(err))
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
                    <button className={`ui icon basic compact red button right align ${(this.state.quesNo == 4)?'disabled':''}`} onClick={()=>this.nextPage()}><i className={"arrow right icon"}/></button>
                    </div>
                </div>
                {question&&<div className={"ui container "} style={{
                    borderRadius: "10px",
                    padding: "1rem",
                    background: "white",
                    position: "relative",
                    boxShadow: "1px 1px 21px #00000017",
                    marginTop : "7px",
                    overflow:"auto"
                }}>
                     <div className="ui container" id="toast" style={{display:"none",boxShadow:"0px 0px 5px black",height:"400px",textAlign:"center",paddingTop:"120px",fontSize:"25px"}}>
                    <div className="ui container" id="toast1" style={{textAlign:"center",fontSize:"30px",paddingBottom:"10px"}}>
                        
                        </div>
                        <div  className="column" id="button" style={{display:"block",marginTop:"10px"}}>
                        <Button style={{fontSize:"20px"}}onClick={()=>this.nextPage()}>
                            Ok
                        </Button>
                    </div>
                    <div  className="column"id="resultbtn"style={{display:"none",fontSize:"20px",marginTop:"10px"}}>
                        <Button onClick={()=>this.createResult()}>
                            Submit
                        </Button>
                    </div>
                    </div>
                    <div id="main" style={{display:"block"}}>
                                <div className="two coloumn grid" v style={{borderWidth:1,borderRadius:2, borderColor: '#FF5722'}}>
                                    <div className="row"style={{fontSize:"22px"}}>
                                     <div className="ui column label " style={{fontSize:"22px",width:"8%",marginRight:"7px"}}>
                                        Q : {this.state.quesNo+1}
                                     </div>
                                     
                                        {question.question}
        
                                     </div>
                                </div>
                                    <br></br>
                                    <br></br>
                            
                                     <div className="ui  three column grid" style={{fontSize:"22px"}}>
                                     <div className="row"style={{fontSize:"22px"}}>
                                     <div className="ui column label " style={{fontSize:"22px",width:"6%",marginRight:"7px",marginLeft:12}}>
                                                A :
                                            </div>
                                            <div className="column "style={{width:"85%",marginTop:10}}>
                                            {question.options[0]}
                                            </div>
                                            <div className="column" style={{width:"5%"}}>
                                            <Icon name='check'onClick={()=>this.setSelect(question.options[0])} inverted circular link />
                                            </div>

                                        </div>
                                     </div>
                                     
                                     <div className="ui  three column grid" style={{fontSize:"16px"}}>
                                     <div className="row"style={{fontSize:"22px"}}>
                                     <div className="ui column label " style={{fontSize:"22px",width:"6%",marginRight:"7px",marginLeft:12}}>
                                                B :
                                            </div>
                                            <div className="column "style={{width:"85%",marginTop:11}}>
                                            {question.options[1]}
                                            </div>
                                            <div className="column" style={{width:"5%"}}>
                                            <Icon name='check'onClick={()=>this.setSelect(question.options[1])} inverted circular link />
                                            </div>

                                        </div>
                                     </div>
                                     <div className="ui  three column grid" style={{fontSize:"16px"}}>
                                     <div className="row"style={{fontSize:"22px"}}>
                                     <div className="ui column label " style={{fontSize:"22px",width:"6%",marginRight:"7px",marginLeft:12}}>
                                                C :
                                            </div>
                                            <div className="column "style={{width:"85%",marginTop:11}}>
                                            {question.options[2]}
                                            </div>
                                            <div className="column" style={{width:"5%"}}>
                                            <Icon name='check' onClick={()=>this.setSelect(question.options[2])} inverted circular link />
                                            </div>

                                        </div>
                                     </div>
                                     <div className="ui  three column grid" style={{fontSize:"16px"}}>
                                     <div className="row"style={{fontSize:"22px"}}>
                                     <div className="ui column label " style={{fontSize:"22px",width:"6%",marginRight:"7px",marginLeft:12}}>
                                                D :
                                            </div>
                                            <div className="column "style={{width:"85%",marginTop:11}}>
                                            {question.options[3]}
                                            </div>
                                            <div className="column" style={{width:"5%"}}>
                                            <Icon name='check'onClick={()=>this.setSelect(question.options[3])} inverted circular link />
                                            </div>

                                        </div>
                                     
                                     </div>
                                    
                                    <div  className="column"style={{marginTop:20}}>
                                            <Button className="ui button" style={{fontSize:"20px",float:"right"}} onClick={()=>this.myfunction(question.correct_answer)}>
                                            OK
                                            </Button>
                                        </div>
                                    
                                   
                                    </div> 
                </div>}

            </div>
            
            
                
        )

    }
}

export default withRouter(playQuiz);