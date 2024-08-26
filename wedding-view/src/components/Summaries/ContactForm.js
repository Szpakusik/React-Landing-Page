import React from "react";
import { Row } from "reactstrap";
import axios from "axios";

class ContactSummary extends React.Component {
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

  handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    axios({
      method: "POST",
      url: "https://zsimarket.usermd.net/send3",
      data: {
        name: name,
        email: email,
        message: message,
      },
    }).then((response) => {
      if (response.data.msg === "success") {
        alert("Wiadomość wysłana");
        document.getElementById("contact-form").reset();
      } else if (response.data.msg === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  render() {
    return (
      <>
        <div className="container">
          <Row>
            <p className="h5 p-3 m-3 font-weight-normal text-center mx-auto px-5">
              Napiszcie do mnie przez formularz lub wypełnijcie{" "}
              <a
                href="formularz"
                className="font-weight-normal"
                style={{ color: "#66615b", textDecoration: "underline" }}
              >
                darmową wycenę
              </a>
              , a ja przygotuję dla Was spersonalizowaną ofertę!
            </p>
            <form
              className="w-100 mx-auto mb-5 text-center p-4 col-md-10"
              id="contact-form"
              onSubmit={this.handleSubmit.bind(this)}
              method="POST"
            >
              <Row>
                <div className="form-group col-md-6 font-weight-normal">
                  <label for="name ">Imię i Nazwisko</label>
                  <input
                    type="text"
                    className="form-control text-center"
                    id="name"
                  />
                </div>
                <div className="form-group col-md-6 font-weight-normal">
                  <label for="exampleInputEmail1">Twój E-mail</label>
                  <input
                    type="email"
                    className="form-control text-center"
                    id="email"
                    aria-describedby="emailHelp"
                  />
                </div>
              </Row>

              <div className="form-group font-weight-normal">
                <label for="message">Wiadomość</label>
                <textarea
                  className="form-control uneditable-input text-center"
                  rows="5"
                  id="message"
                ></textarea>
              </div>

              {/* <p className='text-right'><a href='/polityka-prywatnosci.docx' target='_blank' style={{color:"#66615b", textDecoration:"underline"}}>Polityka prywatności</a></p> */}
              <p className="text-left" style={{fontSize: "10px"}}>
                {" "}
                Administratorem danych osobowych podanych w formularzu
                kontaktowym jest Magdalena Stachurska prowadząca działalność
                gospodarczą pod firmą Magdalena Stachurska, ul. Lecha 1/25
                25-622, Kielce, NIP: 9592045709, Regon: 389801974. Kontakt
                z administratorem w sprawach dotyczących przetwarzania danych
                osobowych: [abcmagda6@gmail.com]. Twoje dane podane w formularzu
                kontaktowym są przetwarzane w celu udzielenia odpowiedzi na
                Twoje zapytanie. Jeśli wyrazisz na to zgodę, Twoje dane są też
                przetwarzane w celach marketingowych. Masz w szczególności prawo
                dostępu do swoich danych i ich usunięcia. Szczegóły dotyczące
                przetwarzania Twoich danych osobowych i przysługujących Ci praw
                znajdziesz w Polityce prywatności. Jeśli chcesz otrzymywać ode
                mnie informacje, potrzebuję na to Twojej zgody. Wyrażenie zgody
                jest dobrowolne i możesz ją cofnąć w dowolnym momencie, ze
                skutkiem na przyszłość, pisząc na adres podany powyżej albo
                klikając na link dostępny w przesyłanych Ci wiadomościach.
              </p>
              <button
                type="submit"
                className="btn btn-round px-5 sec-colour-bg"
              >
                Wyślij
              </button>
            </form>
          </Row>
        </div>
      </>
    );
  }
}
export default ContactSummary;
