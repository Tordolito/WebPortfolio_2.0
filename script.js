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
      "contact-phone": "Telefon: 070-123-4567",
      "contact-email": "E-post: example@email.com",
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
      "contact-phone": "Phone: 070-123-4567",
      "contact-email": "Email: example@email.com",
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
      "contact-phone": "Telefon: 070-123-4567",
      "contact-email": "E-post: example@email.com",
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
      "contact-phone": "Teléfono: 070-123-4567",
      "contact-email": "Correo electrónico: example@email.com",
    },
  };

  function changeLanguage(lang) {
    // Iterera över alla element med data-lang
    document.querySelectorAll("[data-lang]").forEach((element) => {
      const key = element.getAttribute("data-lang"); // Hämta data-lang-nyckeln
      if (translations[lang] && translations[lang][key]) {
        element.textContent = translations[lang][key]; // Uppdatera texten
      }
    });
  }
  