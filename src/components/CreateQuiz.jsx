import React, {Component, isValidElement} from "react";
import {
    Button,
    Form,
    Input,
    Icon,
    Radio
} from "semantic-ui-react";
import {withRouter,Link} from 'react-router-dom'

class CreateQuiz extends Component{
    constructor(props) {
        super(props);
        this.state={
            questions : {
                1:{
                    a:"",
                    b:"",
                    c:"",
                    d:"",
                    question:"",
                    imageUrl:"",
                    videoUrl:"",
                    correct:null,
                    team:""
                }
            },
            quesNo:1,
            showInput:false,

        }
    }
    prevPage(){
        if(this.state.quesNo>1){
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
                        team : ""
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
    setUrl(value,field){
        let questions = this.state.questions;
        questions[this.state.quesNo][field] = value;
        this.setState({questions: questions});
    }
    setOption(text,op){
        let questions = this.state.questions;
        questions[this.state.quesNo][op] = text;
        this.setState({questions:questions});
    }
    setCorrect(correct){
        let questions = this.state.questions;
        questions[this.state.quesNo].correct = correct;
        this.setState({questions:questions});
    }
    setTeam(value){
        let questions = this.state.questions;
        questions[this.state.quesNo].team = value;
        this.setState({questions:questions});
    }
    setQuestion(value){
        let questions = this.state.questions;
        questions[this.state.quesNo].question = value;
        this.setState({questions: questions});
    }
    clearUrl(){
        let questions = this.state.questions;
        questions[this.state.quesNo].imageUrl = "";
        questions[this.state.quesNo].videoUrl = "";
        this.setState({
            showInput:false,
            image:null,video:null,
            questions:questions
        })
    }
    validQuestion(){
        let question = this.state.questions[this.state.quesNo];
        return !(question.question === "" ||
            question.a === "" ||
            question.b === "" ||
            question.team === "" ||
            question.correct == null);

    }

    createQuiz(){
        let data = {
            created_by_uid: "e0d07404-e858-4ae3-b9f3-98315f2610e3",
            questions: Object.values(this.state.questions).map(ques=>{
                let ob = {
                    question:ques.question,
                    options:[
                        ques.a,
                        ques.b
                    ],
                    correct_answer: ques.correct,
                    team:ques.team
                };
                if(ques.c!=="") ob.options.push(ques.c);
                if(ques.d!=="") ob.options.push(ques.d);
                return ob;
            }),
        };
        fetch("http://localhost:5000/quizzes",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        }).then(resp=>{
            console.log(resp)
        }).catch(err=>console.log(err))
    }

    render() {
        let {
            quesNo, questions
        } = this.state;
        console.log(this.state);
        return (
            <div style={{
                height: "100vh",
                background: "linear-gradient(-180deg, rgb(53, 58, 88) 25.5%, rgb(197, 197, 197) 25.5%)",
                padding: "5px"
            }}>
                <h1 className="ui center aligned header" style={{
                    color:"white"
                }}>School Quiz</h1>
                <div className={"ui four column grid"} style={{marginBottom:"1px"}}>
                <div className="row">
                    <div className="column ">
                    <div class="ui labeled input">
                        <div class="ui label label">Team</div>
                        <input type="text" value={questions[this.state.quesNo].team}  placeholder='Team No.' onChange={(e)=>this.setTeam(e.target.value)} />
                        </div>
                    
                    </div>
                    <div className="column ">
                    
                    </div>
                    <div className="column ">
                    
                    </div>
                    <div className="column">
                        <div style={{marginLeft:150}}>
                    <button className={"ui icon basic compact red button right align"} onClick={()=>this.prevPage()}><i className={"arrow left icon"}/></button>
                    <button className={`ui icon basic compact red button right align ${this.validQuestion()?'':'disabled'}`} onClick={()=>this.nextPage()} ><i className={"arrow right icon"}/></button>
                    </div>
                    </div>
                </div>
                    </div>
                <div className={"ui container"} style={{
                    borderRadius: "10px",
                    padding: "1rem",
                    paddingTop: "1.5rem",
                    background: "white",
                    position: "relative",
                    boxShadow: "1px 1px 21px #00000017",

                }}>
                <Form>
                <Form.Field>
                  <Input value={questions[this.state.quesNo].question} label={`Q ${quesNo}`} placeholder='Write the question here. . .' onChange={(e)=>this.setQuestion(e.target.value)} />
                </Form.Field>
                    {!this.state.showInput&&<div className={"ui center aligned container"}>
                    <Button onClick={()=>this.setState({showInput:true,image:true})} icon basic color={'primary'} labelPosition='right'>
                          Add Image Url
                          <Icon name='plus' />
                    </Button>
                    <span>OR </span>
                    <Button onClick={()=>this.setState({showInput:true,video:true})} icon basic color={'primary'} labelPosition='right'>
                          Add Video Url
                          <Icon name='plus' />
                    </Button>
                </div>}
                    {this.state.showInput&&<div className={"ui center aligned container"}>
                    <Input
                      // error={this.state.error ?{ content: 'Please enter your first name', pointing: 'below' }:null}
                      placeholder='https://'
                      onChange={(e)=>this.setUrl(e.target.value,this.state.image ?
                                "imageUrl"
                                :
                                this.state.video
                                    ?
                                    "videoUrl":null )}
                      labelPosition={"left"}
                      label={{ icon:this.state.image ?
                                "image"
                                :
                                this.state.video
                                    ?
                                    "video":null
                      }}
                      icon={<Icon name='close' onClick={()=>this.clearUrl()} inverted circular link />}
                      style={{
                          width:"50%"
                      }}
                      value={this.state.image ?
                                questions[this.state.quesNo].imageUrl
                                :
                                this.state.video
                                    ?
                                    questions[this.state.quesNo].videoUrl:null}
                    />
                </div>}
                    <div className={"ui container"} style={{
                        padding:"3rem"
                    }}>
                        <Form.Field

                  label="Options"
                />
                <Form.Input
                  error={this.state.error ?{ content: 'Please Enter at least two options' }:null}
                  placeholder='Option A'
                  id=''
                  value={questions[quesNo].a}
                  onChange={(e)=>this.setOption(e.target.value,"a")}
                  icon={<Icon name='check' color={questions[quesNo].correct===questions[quesNo].a?"green":null} onClick={()=>this.setCorrect(questions[quesNo].a)} inverted circular link />}
                />
                <Form.Input
                  error={this.state.error?'Please Enter at least two options':null}
                  placeholder='Option B'
                  value={questions[quesNo].b}
                  icon={<Icon name='check' color={questions[quesNo].correct===questions[quesNo].b?"green":null} onClick={()=>this.setCorrect(questions[quesNo].b)} inverted circular link />}
                  onChange={(e)=>this.setOption(e.target.value,"b")}
                />
                <Form.Input
                  error={this.state.error?'Please enter your last name':null}
                  placeholder='Option C'
                  value={questions[quesNo].c}
                  icon={<Icon name='check' color={questions[quesNo].correct===questions[quesNo].c?"green":null} onClick={()=>this.setCorrect(questions[quesNo].c)} inverted circular link />}
                  onChange={(e)=>this.setOption(e.target.value,"c")}
                />
                <Form.Input
                  error={this.state.error?'Please enter your last name':null}
                  placeholder='Option D'
                  value={questions[quesNo].d}
                  icon={<Icon name='check' color={questions[quesNo].correct===questions[quesNo].d?"green":null} onClick={()=>this.setCorrect(questions[quesNo].d)} inverted circular link />}
                  onChange={(e)=>this.setOption(e.target.value,"d")}
                />
                    </div>
                <Button primary type='submit'className={`${this.state.quesNo >= 3?'':'disabled'}`} onClick={()=>this.createQuiz()}>Create Quiz</Button>
              </Form>

                </div>

            </div>
        )
    }
}

export default CreateQuiz;
