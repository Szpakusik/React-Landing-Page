import React from 'react'
import {
    Button,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Row,
    Col,
    FormGroup,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Label,
    Input
  } from "reactstrap";
  import { validate } from 'assets/js/main.js'
  import ReactDatetime from "react-datetime"
  import axios from 'axios';
  var moment = require('moment');
    require('moment/locale/pl');    
  
  const navLinkStyle = {color:"white", fontWeight:'700'}

class ExtendedFormComponent extends React.Component{

    constructor(props) {
        
        super(props);
        this.state = { activeTab: "1", apiResponse: ""};

    }

    handleSubmit(e){
        e.preventDefault();

        let nameInputs = document.querySelectorAll('#name-row input');
        let contactInputs = document.querySelectorAll('#contact-row input');

        let validationFlag=0;

        for( let input of nameInputs ){

            if ( validate(input) ) validationFlag = 1
            else{
                validationFlag = 0
            } 

        }
        for( let input of nameInputs ){
            if ( validate(input) ){
                document.querySelector('#validation-error').innerHTML='';
                input.style.backgroundColor = '#fff';
            } 
            else {
                input.style.backgroundColor = '#ffc0a4';
                document.querySelector('#validation-error').innerHTML='Uzupełnij wymagane pola!';
            }
        }
        if( !validationFlag ) return 0
        for( let input of contactInputs ){
            console.log(input)
            if ( validate(input) ){
                validationFlag = 1
                break;
            } 
            else{
                validationFlag = 0;
                document.querySelector('#contact-row input').style.backgroundColor='#ffc0a4';
                document.querySelector('#validation-error').innerHTML='Uzupełnij wymagane pola!';
            } 
        }

        if( !validationFlag ){
            console.log('Not this time');
            return false;
        } 

        if (this.state.activeTab !== 2) {
            this.setState({activeTab: '2'})
        }

        axios({
            method: "POST", 
            url:"https://zsimarket.usermd.net/send", 
            data: {
                brideFirstName: document.getElementById('brideFirstName').value,
                brideLastName: document.getElementById('brideLastName').value,
                groomFirstName: document.getElementById('groomFirstName').value,
                groomLastName: document.getElementById('groomLastName').value,
                phone: document.getElementById('phone1').value,
                phone: document.getElementById('phone2').value,
                email: document.getElementById('email1').value,
                email: document.getElementById('email2').value,
                budget: document.getElementById('budget').value,
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Wiadomość wysłana"); 
                // document.getElementById("contact-form").reset();
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
        console.log(this.state)
    }
    handleClick(e){
        // e.preventDefault();

        const weddingAdds = document.querySelectorAll("#weddingExtras input");
        let checkedWeddingAdds = '**Dodatki do ślubu:';
        weddingAdds.forEach((item)=>{if(item.checked)checkedWeddingAdds+=`\n ${item.value}`})
        console.log(checkedWeddingAdds);
        
        const partyAdds = document.querySelectorAll("#partyExtras input");
        let checkedPartyAdds = '**Dodatki do Wesela:';
        partyAdds.forEach((item)=>{if(item.checked)checkedPartyAdds+=`\n ${item.value}`})
        console.log(checkedPartyAdds);
        
        const additionalAdds = document.querySelectorAll("#additionalExtras input");
        let checkedAdditionalAdds = '**Inne dodatki:';
        additionalAdds.forEach((item)=>{if(item.checked)checkedAdditionalAdds+=`\n ${item.value}`})
        console.log(checkedAdditionalAdds);
        
        axios({
            method: "POST", 
            url:"https://zsimarket.usermd.net/send2", 
            data: {
                bride: document.getElementById('bride').value,
                groom: document.getElementById('groom').value,
                weddingDate: document.getElementById('weddingDatetime').value,
                weddingType: document.getElementById('weddingType').value,
                weddingPlace: document.getElementById('weddingPlace').value,
                weddingSpot: document.getElementById('weddingSpot').value,
                weddingExtras: checkedWeddingAdds,
                partyPlace: document.getElementById('partyPlace').value,
                partySpot: document.getElementById('partySpot').value,
                partyRange: document.getElementById('partyRange').value,
                partyExtras: checkedPartyAdds,
                additionalMessage: document.getElementById('additionalMessage').value,
                additionalExtras: checkedAdditionalAdds,
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

    handleChange(e){
        e.target.style.backgroundColor = '#fff'
    }
    handleChange2(e){
        console.log(e.target.parentNode.children)
        e.target.parentNode.parentNode.children[1].children[0].style.backgroundColor = '#fff'
    }


    render(){
            const toggle = tab => {
                if (this.state.activeTab !== tab) {
                    this.setState({activeTab: tab})
                }
            };
            return(

                <>
                <Col>
                <div className="title font-weight-bold">
                    <h2>Darmowa wycena</h2>
                </div>
                <div className="nav-tabs-navigation d-none d-md-block">
                    <div className="nav-tabs-wrapper">
                    <Nav id="tabs" role="tablist" tabs>
                        <NavItem sm='6'>
                            <NavLink style={navLinkStyle}
                                className={this.state.activeTab === "1" ? "active" : ""}
                                onClick={() => {
                                toggle("1");
                                }}
                            >
                                Podstawowe informacje
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink  style={navLinkStyle}
                                className={this.state.activeTab === "2" ? "active" : ""}
                                onClick={() => {
                                toggle("2");
                                }}
                            >
                                Ślub
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink  style={navLinkStyle}
                                className={this.state.activeTab === "3" ? "active" : ""}
                                onClick={() => {
                                toggle("3");
                                }}
                            >
                                Uroczystość weselna
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink  style={navLinkStyle}
                                className={this.state.activeTab === "4" ? "active" : ""}
                                onClick={() => {
                                toggle("4");
                                }}
                            >
                                Dodatkowa pomoc
                            </NavLink>
                        </NavItem>
                    </Nav>
                    </div>
                </div>
                <TabContent activeTab={this.state.activeTab} className="text-center font-weight-bold">
                    <TabPane tabId="1">
                        <form className="w-100 mx-auto text-center pt-0 pl-4 pr-4 pb-4 col-md-10" id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                            <Row>
                                <p className="h4 w-100 text-center font-weight-bold mt-0 mb-3 prim-colour">Podstawowe informacje</p>
                            </Row>
                            <Row className="p-2" id="name-row">
                                
                                <div className="form-group col-md-6">
                                    <label htmlFor="bride">Panna Młoda</label>
                                    <input placeholder="Imię" type="text" className="form-control " id="brideFirstName" onChange={ this.handleChange.bind(this) } />
                                    <input placeholder="Nazwisko" type="text" className="form-control mt-3" id="brideLastName" onChange={ this.handleChange.bind(this) } />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="groom">Pan młody</label>
                                    <input placeholder="Imię" type="text" className="form-control " id="groomFirstName" onChange={ this.handleChange.bind(this) } />
                                    <input placeholder="Nazwisko" type="text" className="form-control mt-3" id="groomLastName" onChange={ this.handleChange.bind(this) } />
                                </div>
                            </Row>
                            <Row className="p-2" id='contact-row'>
                                <p className="w-100 font-weight-bold" style={{marginBottom:"8px"}}>Dane kontaktowe <span style={{color:'gray'}}>(min. 1)</span></p>
                                <div className="form-group col-md-6">   
                                    <input placeholder="Telefon kontaktowy" type="text" className="form-control " id="phone1" onChange={ this.handleChange2.bind(this) } />
                                </div>
                                <div className="form-group col-md-6">   
                                    <input placeholder="Telefon kontaktowy" type="text" className="form-control " id="phone2" onChange={ this.handleChange2.bind(this) } />
                                </div>
                                <div className="form-group col-md-6">                                    
                                    <input placeholder="Email" type="email" className="form-control " id="email1" aria-describedby="emailHelp"  onChange={ this.handleChange2.bind(this) }/>
                                </div>
                                <div className="form-group col-md-6">   
                                    <input placeholder="Email" type="text" className="form-control " id="email2"  onChange={ this.handleChange2.bind(this) }/>
                                </div>
                            </Row>
                            
                            <Row className="p-2">
                                <div className="form-group col-md-6 mx-auto">
                                    <label htmlFor="placeSelect">Planowany budżet na całą uroczystość</label>
                                    <select name="carlist" form="carform" className='form-control' id="budget">
                                        
                                        <option value="Poniżej 30 000 zł">Poniżej 30 000 zł</option>
                                        <option value="30 000 - 60 000 zł">30 000 - 60 000 zł</option>
                                        <option value="60 000 - 100 000 zł">60 000 - 100 000 zł</option>
                                        <option value="Powyżej 100 000 zł">Powyżej 100 000 zł</option>
                                    </select>
                                </div> 
                            </Row> 
                            <Row className="p-2">
                                <div className="form-group col-md-6 mx-auto">
                                    <label htmlFor="placeSelect">Planowana ilość osób</label>
                                    <select name="carlist" form="carform" className='form-control' id="budget">
                                        
                                        <option value="Poniżej 30 000 zł">Poniżej 50</option>
                                        <option value="30 000 - 60 000 zł">50 - 100 zł</option>
                                        <option value="60 000 - 100 000 zł">100 - 200 zł</option>
                                        <option value="Powyżej 100 000 zł">Powyżej 200</option>
                                    </select>
                                </div> 
                            </Row>   
                            <Row className='text-center'><p className='text-danger h6 w-100' id="validation-error"></p></Row>
                            <button type="submit" className="btn btn-round px-5 m-4 sec-colour-bg"
                            onClick={() => {
                                {/* toggle("2"); */}
                            }}>Dalej</button>
                        </form>
                    </TabPane>
                    <TabPane tabId="2">
                        <div className="w-100 mx-auto text-center pt-0 pl-4 pr-4 pb-4 col-md-10" id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                            <Row>
                                <p className="h4 w-100 text-center font-weight-bold mt-0 mb-3 prim-colour">Ślub</p>
                            </Row>
                            <Row className="p-2">
                                <Col sm="6" className=''>
                                    <FormGroup>
                                        <label htmlFor="weddingDatetime">Podaj datę ślubu</label>
                                        <InputGroup className="date">
                                            <ReactDatetime
                                                id="weddingDatetime"
                                                className='text-center' 
                                                inputProps={{
                                                placeholder: "Możesz pominąć to pole",
                                                id: 'weddingDatetime',
                                                }}
                                            />
                                            <InputGroupAddon addonType="append">
                                                <InputGroupText>
                                                    <span className="glyphicon glyphicon-calendar">
                                                        <i aria-hidden={true} className="fa fa-calendar" />
                                                    </span>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </FormGroup>
                                </Col>
                                <div className="form-group col-md-6">
                                    <label htmlFor="placeSelect">Rodzaj ślubu</label>
                                    <select name="carlist" form="carform" className='form-control' id="weddingType">
                                        <option value="Cywilny">Cywilny</option>
                                        <option value="Konkordatowy">Konkordatowy</option>
                                        <option value="Wyznaniowy">Wyznaniowy</option>
                                        <option value="Humanistyczny">Humanistyczny</option>
                                        <option value="Nie wiem">Nie wiem</option>
                                    </select>
                                </div> 
                            </Row>
                            <Row className="p-2">
                                <div className="form-group col-md-6">
                                    <label htmlFor="weddingPlace">Miejscowość</label>
                                    <input placeholder="W której ma odbyć się ślub" type="text" className="form-control " id="weddingPlace" onChange={this.handleChange.bind(this)} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="placeSelect">Miejsce ślubu</label>
                                    <select name="weddingSpot" form="carform" className='form-control' id="weddingSpot">
                                        <option value="Kościół">Kościół</option>
                                        <option value="Urząd Stanu Cywilnego">Urząd Stanu Cywilnego</option>
                                        <option value="Plener">Plener</option>
                                        <option value="Inne">Inne</option>
                                        <option value="Nie wiem">Nie wiem</option>
                                    </select>
                                </div> 
                            </Row>
                            <Row className='text-left p-4' id="weddingExtras">
                                <p className="w-100 font-weight-bold text-center pb-4" style={{marginBottom:"8px"}}>Zaznacz, w co pozwolisz mi się zaangażować <i className="fa fa-heart"></i></p>
                                <Col md='6'>
                                    <FormGroup check>
                                        <Label check>
                                            <Input  defaultValue="Formalności związane ze ślubem" type="checkbox" />
                                            Formalności związane ze ślubem <span className="form-check-sign" />
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input  defaultValue="Save the date" type="checkbox" />
                                            Save the date <span className="form-check-sign" />
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input  defaultValue="Zaproszenia" type="checkbox" />
                                            Zaproszenia <span className="form-check-sign" />
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input  defaultValue="Obrączki ślubne" type="checkbox" />
                                            Obrączki ślubne <span className="form-check-sign" />
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input  defaultValue="Fotograf" type="checkbox" />
                                            Fotograf <span className="form-check-sign" />
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input  defaultValue="Kamerzysta" type="checkbox" />
                                            Kamerzysta
                                            <span className="form-check-sign" />
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input  defaultValue="Wiązanka ślubna" type="checkbox" />
                                            Wiązanka ślubna<span className="form-check-sign" />
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md='6'>
                                    <FormGroup check>
                                        <Label check>
                                            <Input  defaultValue="Stylizacja pana młodego" type="checkbox" />
                                            Stylizacja pana młodego <span className="form-check-sign" />
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input  defaultValue="Stylizacja świadkowej/świadka" type="checkbox" />
                                            Stylizacja świadkowej/świadka <span className="form-check-sign" />
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input  defaultValue="Stylizacja panny młodej" type="checkbox" />
                                            Stylizacja panny młodej <span className="form-check-sign" />
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input  defaultValue="Dekoracja miejsca ślubu" type="checkbox" />
                                            Dekoracja miejsca ślubu <span className="form-check-sign" />
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input  defaultValue="Ślubna oprawa muzyczna" type="checkbox" />
                                            Oprawa muzyczna <span className="form-check-sign" />
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input  defaultValue="Pojazd do ślubu" type="checkbox" />
                                            Pojazd do ślubu <span className="form-check-sign" />
                                        </Label>
                                    </FormGroup>
      
                                    <FormGroup check>
                                        <Label check>
                                            <Input  defaultValue="Transport gości" type="checkbox" />
                                            Transport gości <span className="form-check-sign" />
                                        </Label>
                                    </FormGroup>
                                </Col>   
                            </Row>

                            <Row className='text-center'><p className='text-danger h6 w-100' id="validation-error2"></p></Row>
                            
                            <button type="submit" className="btn btn-round px-5 m-4 sec-colour-bg"
                            onClick={() => {
                                let spotInput = document.querySelector('#weddingPlace');
                                if( validate(spotInput) ){
                                    spotInput.style.backgroundColor='#fff';
                                    toggle("3");
                                    document.querySelector('#validation-error2').innerHTML='';
                                } 
                                else{
                                    spotInput.style.backgroundColor='#ffc0a4';
                                    document.querySelector('#validation-error2').innerHTML='Uzupełnij wymagane pola!';

                                }     
                                
                            }}>Dalej</button>
                                
                        </div>           
                    </TabPane>
                    <TabPane tabId="3">
                        <div className="w-100 mx-auto text-center pt-0 pl-4 pr-4 pb-4 col-md-10" id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                            <Row>
                                <p className="h4 w-100 text-center font-weight-bold mt-0 mb-3 prim-colour">Uroczystość Weselna</p>
                            </Row>
                            <Row className="p-2">
                                <div className="form-group col-md-6">
                                    <label htmlFor="datetimepicker">Miejscowość</label>
                                    <input placeholder="W której ma odbyć się wesele" type="text" className="form-control " id="partyPlace" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="placeSelect">Miejsce uroczystości weselnej</label>
                                    <select name="carlist" className='form-control' id="partySpot">
                                        <option value="Sala weselna">Sala weselna</option>
                                        <option value="Restauracja">Restauracja</option>
                                        <option value="Zamek">Zamek</option>
                                        <option value="Dworek">Dworek</option>
                                        <option value="Plener">Plener</option>
                                        <option value="Inne">Inne</option>
                                    </select>
                                </div> 
                            </Row>
                            <Row className="p-2">
                                <div className="form-group col-md-6 mx-auto">
                                    <label htmlFor="placeSelect">Tolerowana odległość uroczystości od miejsca ślubu</label>
                                    <select name="partyRange" className='form-control' id="partyRange">
                                        <option value="Poniżej 30 km">Poniżej 30 km</option>
                                        <option value="30 - 60 km">30 - 60 km</option>
                                        <option value="Powyżej 60 km">Powyżej 60 km</option>
                                    </select>
                                </div> 
                            </Row> 
                            <Row className='text-left p-4' id='partyExtras'>
                            <p className="w-100 font-weight-bold text-center pb-4" style={{marginBottom:"8px"}}>Zaznacz, w co pozwolisz mi się zaangażować <i className="fa fa-heart"></i></p>
                                <Col md='6'>
                                    <FormGroup check>
                                        <Label check>
                                            <Input  defaultValue="Dekoracja miejsca wesela" type="checkbox" />
                                            Dekoracja miejsca wesela <span className="form-check-sign" />
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input  defaultValue="Winietki, plan i numeracja stołów" type="checkbox" />
                                            Winietki, plan i numeracja stołów <span className="form-check-sign" />
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input  defaultValue="Menu" type="checkbox" />
                                            Menu <span className="form-check-sign" />
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input  defaultValue="Alkohol" type="checkbox" />
                                            Alkohol <span className="form-check-sign" />
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input  defaultValue="Tort" type="checkbox" />
                                            Tort <span className="form-check-sign" />
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>            
                                        <Label check>
                                            <Input  defaultValue="Dj/zespół muzyczny" type="checkbox" />
                                            Dj/zespół muzyczny
                                            <span className="form-check-sign" />
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input  defaultValue="Wodzirej" type="checkbox" />
                                            Wodzirej
                                            <span className="form-check-sign" />
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input  defaultValue="Pierwszy taniec" type="checkbox" />
                                            Pierwszy taniec<span className="form-check-sign" />
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md='6'>
                                    <FormGroup check>
                                        <Label check>
                                            <Input  defaultValue="Upominki dla gości weselnych" type="checkbox" />
                                            Upominki dla gości weselnych <span className="form-check-sign" />
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input  defaultValue="Księga gości" type="checkbox" />
                                            Księga gości <span className="form-check-sign" />
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input  defaultValue="Podziękowania dla rodziców" type="checkbox" />
                                            Podziękowania dla rodziców <span className="form-check-sign" />
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input  defaultValue="Dekoracja miejsca ślubu" type="checkbox" />
                                            Dekoracja miejsca ślubu <span className="form-check-sign" />
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input  defaultValue="Noclegi dla gości weselnych" type="checkbox" />
                                            Noclegi dla gości weselnych <span className="form-check-sign" />
                                        </Label>
                                    </FormGroup>
                                    
                                    <FormGroup check>
                                        <Label check>
                                            <Input  defaultValue="Stół tematyczny" type="checkbox" />
                                            Stół tematyczny <span className="form-check-sign" />
                                        </Label>
                                    </FormGroup>

                                    <FormGroup check>
                                        <Label check>
                                            <Input  defaultValue="Animacja dla dzieci podczas przyjęcia" type="checkbox" />
                                            Animacja dla dzieci podczas przyjęcia <span className="form-check-sign" />
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input  defaultValue="Dodatkowe atrakcje (np. fotobudka)" type="checkbox" />
                                            Dodatkowe atrakcje (np. fotobudka) <span className="form-check-sign" />
                                        </Label>
                                    </FormGroup>
                                </Col>
                                   
                            </Row>
                            
                            <button type="submit" className="btn btn-round px-5 m-4 sec-colour-bg"
                            onClick={() => {
                                toggle("4");
                            }}>Dalej</button>
                                
                        </div>           
                    </TabPane>
                    <TabPane tabId="4">
                        <div className="w-100 mx-auto text-center pt-0 pl-4 pr-4 pb-4 col-md-10 font-weight-bold" id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                            <Row>
                                <p className="h4 w-100 text-center font-weight-bold mt-0 mb-3 prim-colour">Dodatkowa pomoc</p>
                            </Row>
                            <Row>
                            <div className="form-group w-100">
                                <label htmlFor="message">Napisz, jeśli chcesz coś dodać:</label>
                                <textarea className="form-control uneditable-input text-center" rows="5" id="additionalMessage"></textarea>
                            </div>
                            </Row>
                            <Row className='text-left p-4'id='additionalExtras'>
                            <p className="w-100 font-weight-bold text-center pb-4" style={{marginBottom:"8px"}}>Zaznacz, w co pozwolisz mi się zaangażować <i className="fa fa-heart"></i></p>
                                <Col md='6'>
                                    <FormGroup check>
                                        <Label check>
                                            <Input  defaultValue="Wieczór panieński" type="checkbox" />
                                            Wieczór panieński <span className="form-check-sign" />
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input  defaultValue="Wieczór kawalerski" type="checkbox" />
                                            Wieczór kawalerski<span className="form-check-sign" />
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input  defaultValue="Koordynacja listy prezentów ślubnych" type="checkbox" />
                                            Koordynacja listy prezentów ślubnych <span className="form-check-sign" />
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input  defaultValue="Koordynacja potwierdzeń przybycia gości weselnych" type="checkbox" />
                                            Koordynacja potwierdzeń przybycia gości weselnych<span className="form-check-sign" />
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input  defaultValue="Rozliczenie z wszystkimi podwykonawcami" type="checkbox" />
                                            Rozliczenie z wszystkimi podwykonawcami <span className="form-check-sign" />
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md='6'>
                                    <FormGroup check>
                                        <Label check>
                                            <Input  defaultValue="Prowadzenie budżetu ślubnego" type="checkbox" />
                                            Prowadzenie budżetu ślubnego <span className="form-check-sign" />
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input  defaultValue="Organizacja poprawin" type="checkbox" />
                                            Organizacja poprawin <span className="form-check-sign" />
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input  defaultValue="Organizacja podróży poślubnej" type="checkbox" />
                                            Organizacja podróży poślubnej <span className="form-check-sign" />
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input  defaultValue="Dekoracja miejsca ślubu" type="checkbox" />
                                            Dekoracja miejsca ślubu <span className="form-check-sign" />
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input  defaultValue="Noclegi dla gości weselnych" type="checkbox" />
                                            Noclegi dla gości weselnych <span className="form-check-sign" />
                                        </Label>
                                    </FormGroup>
                                    
                                    <FormGroup check>
                                        <Label check>
                                            <Input  defaultValue="Pilnowanie pary młodej z wywiązywania się ze swoich obowiązków w poszczególnych etapach przygotowań do ślubu" type="checkbox" />
                                            Pilnowanie pary młodej z wywiązywania się ze swoich obowiązków w poszczególnych etapach przygotowań do ślubu <span className="form-check-sign" />
                                        </Label>
                                    </FormGroup>
                                </Col>
                                   
                            </Row>
                            <Button className=" btn-round px-5 m-4 sec-colour-bg"
                            onClick={() => {
                                this.handleClick();
                            }}
                            href='/'
                            >Wyślij</Button>
                        </div>
                    </TabPane>
                </TabContent>
                </Col>
                </>
        )
    }
}
export default ExtendedFormComponent