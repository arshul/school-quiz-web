import React , {Component} from "react";
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

        }
    }
    render() {
        return (
            <div style={{
                height: "100vh",
                background: "linear-gradient(-180deg, rgb(53, 58, 88) 25.5%, rgb(197, 197, 197) 25.5%)",
                padding: "5px"
            }}>
                <h1 className="ui center aligned header" style={{
                    color:"white"
                }}>School Quiz</h1>
                <div className={"ui right aligned container"} style={{marginBottom:"10px"}}>
                    <a className={"ui icon basic compact red button"}><i className={"arrow left icon"}/></a>
                    <a className={"ui icon basic compact red button"}><i className={"arrow right icon"}/></a>
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
                  <Input label='Q 1' placeholder='Write the question here. . .' />
                </Form.Field>
                <div className={"ui center aligned container"}>
                    <Button icon basic color={'primary'} labelPosition='right'>
                          Add Image Url
                          <Icon name='plus' />
                    </Button>
                    <span>OR </span>
                    <Button icon basic color={'primary'} labelPosition='right'>
                          Add Video Url
                          <Icon name='plus' />
                    </Button>
                </div>
                    <div className={"ui container"} style={{
                        padding:"3rem"
                    }}>
                        <Form.Field
                  // control={Checkbox}
                  label="Options"
                />
                <Form.Input
                  error={this.state.error ?{ content: 'Please enter your first name', pointing: 'below' }:null}
                  placeholder='Option A'
                  id=''
                  icon={<Icon name='check' inverted circular link />}
                  // width={}
                />
                <Form.Input
                  error={this.state.error?'Please enter your last name':null}
                  placeholder='Option B'
                  icon={<Icon name='check' inverted circular link />}
                />
                <Form.Input
                  error={this.state.error?'Please enter your last name':null}
                  placeholder='Option C'
                  icon={<Icon name='check' color={"green"} inverted circular link />}
                />
                <Form.Input
                  error={this.state.error?'Please enter your last name':null}
                  placeholder='Option D'
                  icon={<Icon name='check' inverted circular link />}
                />
                    </div>

              </Form>
                </div>

            </div>
        )
    }
}

export default CreateQuiz;
