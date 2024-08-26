import React from "react";

function CookieConsent({ setIsCookieAccepted }) {
  return (
    <>
      <div
        className="w-100 inherit2 p-3 text-center font-smaller"
        style={{ position: "fixed", bottom: 0, zIndex: 9, fontSize: "8px" }}
      >
        Na tej stronie stosuję pliki cookie (tzw. ciasteczka). Służą one do
        dostosowania zawartości strony do Twoich preferencji, optymalizacji
        korzystania z niej oraz dopasowywania treści reklamowych do Twoich
        preferencji. W związku z powyższym ja oraz zaufani partnerzy, możemy
        przechowywać w Twojej przeglądarce pliki cookie oraz przetwarzać zawarte
        w nich dane osobowe w celach analitycznych oraz marketingowych. Możesz w
        dowolnym momencie zdecydować o możliwości zapisywania plików cookie
        poprzez zmianę ustawień przeglądarki z której korzystasz. Przeglądając
        moją stronę internetową bez tych zmian, wyrażasz zgodę na używanie
        plików cookie, zgodnie z aktualnymi ustawieniami Twojej przeglądarki.
        Dodatkowe informacje o zasadach przetwarzania Twoich danych osobowych,
        przysługujących Ci prawach oraz o tym, jak zmienić ustawienia plików
        cookie, znajdziesz w Polityce Prywatności.
        <span
          className="font-weight-bold text-white"
          style={{ textDecoration: "underline", cursor:"pointer" }}
          onClick={() => setIsCookieAccepted(true)}
        >
          OK
        </span>
      </div>
    </>
  );
}

export default CookieConsent;
