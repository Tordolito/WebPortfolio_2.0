const translations = {
    sv: {
      "start-text": "Jag är Tord",
      "navbar-left": "Tord Månström",
      "navbar-center": "Projekt",
      "navbar-about": "Om mig",
      "navbar-contact": "Kontakt",
      "about-title": "Om mig",
      "about-content": "Jag är en passionerad utvecklare som älskar att skapa moderna lösningar.",
      "projects-title": "Projekt",
      "projects-content": "Här är några av mina senaste projekt.",
      "contact-title": "Kontakt",
      "contact-firstname": "Förnamn:",
      "contact-firstname-placeholder": "Ditt förnamn",
      "contact-lastname": "Efternamn:",
      "contact-lastname-placeholder": "Ditt efternamn",
      "contact-phone": "Telefonnummer:",
      "contact-phone-placeholder": "+46 70 123 45 67",
      "contact-company": "Företag:",
      "contact-company-placeholder": "Ditt företag",
      "contact-job": "Yrkesroll:",
      "contact-job-placeholder": "Ex. Utvecklare, Projektledare",
      "contact-email": "E-post:",
      "contact-email-placeholder": "din@email.com",
      "contact-message": "Meddelande:",
      "contact-message-placeholder": "Ditt meddelande",
      "contact-submit": "Skicka",
      "footer-cv": "CV"
    },
    en: {
      "start-text": "I'm Tord",
      "navbar-left": "Tord Månström",
      "navbar-center": "Projects",
      "navbar-about": "About Me",
      "navbar-contact": "Contact",
      "about-title": "About Me",
      "about-content": "I am a passionate developer who loves creating modern solutions.",
      "projects-title": "Projects",
      "projects-content": "Here are some of my latest projects.",
      "contact-title": "Contact",
      "contact-firstname": "First Name:",
      "contact-firstname-placeholder": "Your first name",
      "contact-lastname": "Last Name:",
      "contact-lastname-placeholder": "Your last name",
      "contact-phone": "Phone Number:",
      "contact-phone-placeholder": "+44 20 1234 5678",
      "contact-company": "Company:",
      "contact-company-placeholder": "Your company",
      "contact-job": "Job Title:",
      "contact-job-placeholder": "e.g. Developer, Project Manager",
      "contact-email": "Email:",
      "contact-email-placeholder": "your@email.com",
      "contact-message": "Message:",
      "contact-message-placeholder": "Your message",
      "contact-submit": "Send",
      "footer-cv": "Resume"
    },
    no: {
      "start-text": "Jeg er Tord",
      "navbar-left": "Tord Månström",
      "navbar-center": "Prosjekter",
      "navbar-about": "Om meg",
      "navbar-contact": "Kontakt",
      "about-title": "Om meg",
      "about-content": "Jeg er en lidenskapelig utvikler som elsker å lage moderne løsninger.",
      "projects-title": "Prosjekter",
      "projects-content": "Her er noen av mine nyeste prosjekter.",
      "contact-title": "Kontakt",
      "contact-firstname": "Fornavn:",
      "contact-firstname-placeholder": "Ditt fornavn",
      "contact-lastname": "Etternavn:",
      "contact-lastname-placeholder": "Ditt etternavn",
      "contact-phone": "Telefonnummer:",
      "contact-phone-placeholder": "+47 123 45 678",
      "contact-company": "Firma:",
      "contact-company-placeholder": "Ditt firma",
      "contact-job": "Yrkesrolle:",
      "contact-job-placeholder": "F.eks. Utvikler, Prosjektleder",
      "contact-email": "E-post:",
      "contact-email-placeholder": "din@email.com",
      "contact-message": "Melding:",
      "contact-message-placeholder": "Din melding",
      "contact-submit": "Send",
      "footer-cv": "CV"
    },
    es: {
      "start-text": "Soy Tord",
      "navbar-left": "Tord Månström",
      "navbar-center": "Proyectos",
      "navbar-about": "Sobre mí",
      "navbar-contact": "Contacto",
      "about-title": "Sobre mí",
      "about-content": "Soy un desarrollador apasionado que ama crear soluciones modernas.",
      "projects-title": "Proyectos",
      "projects-content": "Aquí están algunos de mis últimos proyectos.",
      "contact-title": "Contacto",
      "contact-firstname": "Nombre:",
      "contact-firstname-placeholder": "Tu nombre",
      "contact-lastname": "Apellido:",
      "contact-lastname-placeholder": "Tu apellido",
      "contact-phone": "Número de teléfono:",
      "contact-phone-placeholder": "+34 612 345 678",
      "contact-company": "Empresa:",
      "contact-company-placeholder": "Tu empresa",
      "contact-job": "Título del trabajo:",
      "contact-job-placeholder": "Ej. Desarrollador, Gerente de Proyecto",
      "contact-email": "Correo electrónico:",
      "contact-email-placeholder": "tu@email.com",
      "contact-message": "Mensaje:",
      "contact-message-placeholder": "Tu mensaje",
      "contact-submit": "Enviar",
      "footer-cv": "Currículum",
    },
  };



  function changeLanguage(lang) {
    // Uppdatera textinnehåll (labels, knappar, osv.)
    document.querySelectorAll("[data-lang]").forEach((element) => {
      const key = element.getAttribute("data-lang");
      if (translations[lang] && translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });
  
    // Uppdatera alla placeholders
    document.querySelectorAll("[data-lang-placeholder]").forEach((element) => {
      const key = element.getAttribute("data-lang-placeholder");
      if (translations[lang] && translations[lang][key]) {
        element.setAttribute("placeholder", translations[lang][key]); // Ändra placeholder-texten
      }
    });
  }

  // Hantera väder
document.addEventListener("DOMContentLoaded", function () {
    const translations = {
        sv: {
            title: "Väder i Hudiksvall",
            fetching: "Hämtar väderdata...",
            error: "Kunde inte hämta vädret.",
            clear: "Klart väder",
            rain: "Regn",
            snow: "Snö",
            cloudy: "Molnigt",
            light_rain: "Lätt regn",
            heavy_rain: "Kraftigt regn",
            mist: "Dimma",
            thunderstorm: "Åskväder"
        },
        en: {
            title: "Weather in Hudiksvall",
            fetching: "Fetching weather data...",
            error: "Could not fetch the weather.",
            clear: "Clear sky",
            rain: "Rain",
            snow: "Snow",
            cloudy: "Cloudy",
            light_rain: "Light rain",
            heavy_rain: "Heavy rain",
            mist: "Mist",
            thunderstorm: "Thunderstorm"
        },
        no: {
            title: "Vær i Hudiksvall",
            fetching: "Henter værdata...",
            error: "Kunne ikke hente været.",
            clear: "Klart vær",
            rain: "Regn",
            snow: "Snø",
            cloudy: "Skyet",
            light_rain: "Lett regn",
            heavy_rain: "Kraftig regn",
            mist: "Tåke",
            thunderstorm: "Tordenvær"
        },
        es: {
            title: "Tiempo en Hudiksvall",
            fetching: "Obteniendo datos del tiempo...",
            error: "No se pudo obtener el tiempo.",
            clear: "Cielo despejado",
            rain: "Lluvia",
            snow: "Nieve",
            cloudy: "Nublado",
            light_rain: "Lluvia ligera",
            heavy_rain: "Lluvia fuerte",
            mist: "Niebla",
            thunderstorm: "Tormenta"
        }
    };

    const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=61.7274&longitude=17.1056&hourly=temperature_2m,precipitation,rain,snowfall&models=ecmwf_ifs025&timezone=Europe/Stockholm";

    function updateWeather(language = "sv") {
        document.getElementById("weather-title").innerText = translations[language].title;
        document.getElementById("weather-info").innerText = translations[language].fetching;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data && data.hourly) {
                    const currentHour = new Date().getHours();
                    const temp = data.hourly.temperature_2m[currentHour];
                    const rain = data.hourly.rain[currentHour];
                    const snow = data.hourly.snowfall[currentHour];

                    let weatherText = `${temp}°C`;

                    // Välj rätt väderbeskrivning baserat på regn och snö
                    if (rain > 5) {
                        weatherText += ` 🌧️ ${translations[language].heavy_rain}`;
                    } else if (rain > 0) {
                        weatherText += ` 🌦️ ${translations[language].light_rain}`;
                    }

                    if (snow > 0) {
                        weatherText += ` ❄️ ${snow} cm ${translations[language].snow}`;
                    }

                    if (rain === 0 && snow === 0) {
                        weatherText += ` ☀️ ${translations[language].clear}`;
                    }

                    document.getElementById("weather-info").innerHTML = weatherText;
                } else {
                    document.getElementById("weather-info").innerText = translations[language].error;
                }
            })
            .catch(error => {
                console.error("Fel vid hämtning av väderdata:", error);
                document.getElementById("weather-info").innerText = translations[language].error;
            });
    }

    // Hämta vädret vid start (standard svenska)
    updateWeather("sv");

    // Uppdatera vädret vid språkbyte
    document.querySelectorAll("[onclick^='changeLanguage']").forEach(button => {
        button.addEventListener("click", function () {
            const newLang = this.getAttribute("onclick").match(/'([^']+)'/)[1];
            updateWeather(newLang);
        });
    });
});

// Uppdatera CV vid språkbyte
document.addEventListener("DOMContentLoaded", function () {
  const cvLinks = {
      sv: "./CVs/SE_Tord_Manstrom_CV_Svenska_2025.pdf",
      en: "./CVs/EN_Tord_Manstrom_CV_English_2025.pdf",
      no: "./CVs/NO_Tord_Manstrom_CV_Norsk_2025.pdf",
      es: "./CVs/ES_Tord_Manstrom_CV_Castellano_2025.pdf"
  };

  function updateCVLink(language) {
      const cvLink = document.getElementById("cv-link");
      if (cvLinks[language]) {
          cvLink.href = cvLinks[language];
      }
  }

  function changeLanguage(lang) {
      updateCVLink(lang);

      document.querySelectorAll("[data-lang]").forEach((element) => {
          const key = element.getAttribute("data-lang");
          if (translations[lang] && translations[lang][key]) {
              element.textContent = translations[lang][key];
          }
      });

      document.querySelectorAll("[data-lang-placeholder]").forEach((element) => {
          const key = element.getAttribute("data-lang-placeholder");
          if (translations[lang] && translations[lang][key]) {
              element.setAttribute("placeholder", translations[lang][key]);
          }
      });
  }

  // Hämta det första språket (default: svenska)
  updateCVLink("sv");

  // Lägg till eventlyssnare på språkknappar
  document.querySelectorAll("[onclick^='changeLanguage']").forEach(button => {
      button.addEventListener("click", function () {
          const newLang = this.getAttribute("onclick").match(/'([^']+)'/)[1];
          changeLanguage(newLang);
      });
  });
});

