import React from 'react'
import {Row} from 'reactstrap';
import axios from 'axios';

class ContactSummary extends React.Component{

    

    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }
    
    // callAPI() {
    //     fetch("http://localhost:9000/testAPI")
    //         .then(res => res.text())
    //         .then(res => this.setState({ apiResponse: res }));
    // }
    
    // componentWillMount() {
    //     this.callAPI();
    // }

    handleSubmit(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        axios({
            method: "POST", 
            url:"https://zsimarket.usermd.net/send3", 
            data: {
                name: name,   
                email: email,  
                message: message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                 alert("Wiadomość wysłana"); 
                document.getElementById("contact-form").reset();
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    }
    
    render(){
        return(
            <>
                <div className="container">
                    <Row>
                        <p className="h5 p-3 m-3 font-weight-normal text-center mx-auto">
                            Napisz do mnie przez formularz, lub od razu zamów <a href="formularz" className="font-weight-normal" style={{color:"#66615b", textDecoration:"underline"}}>darmową wycenę</a>!
                        </p>
                        <form className="w-100 mx-auto mb-5 text-center p-4 col-md-10" id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                            <Row>
                                <div className="form-group col-md-6 font-weight-normal">
                                    <label for="name ">Imię i Nazwisko</label>
                                    <input type="text" className="form-control text-center" id="name" />
                                </div>
                                <div className="form-group col-md-6 font-weight-normal">
                                    <label for="exampleInputEmail1">Twój E-mail</label>
                                    <input type="email" className="form-control text-center" id="email" aria-describedby="emailHelp" />
                                </div>

                            </Row>
                            
                            
                            <div className="form-group font-weight-normal">
                                <label for="message">Wiadomość</label>
                                <textarea className="form-control uneditable-input text-center" rows="5" id="message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-round px-5 sec-colour-bg">Wyślij</button>
                        </form>
                    </Row>


                </div>
            </>
        )
    }
}
export default ContactSummary;