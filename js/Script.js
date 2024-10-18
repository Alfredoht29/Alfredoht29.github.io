const translations = {
    "en": {
        "header": "Emilio Alfredo Perez Villa",
        "project1Title": "Detiqueta Project",
        "project1Technologies": "In development, it is a digital marketing project to position restaurant promotions, developed with Next.js and Tailwind with DaisyUI.",
        "project2Title": "Detiqueta Mobile Project",
        "project2Technologies": "Mockup made in Native Swift with SwiftUI.",
        "project3Title": "MenuI18 Project",
        "project3Technologies": "Multilingual QR menu made with Laravel, Alpine.js, and Tailwind. It features account verification, localization in Laravel with i18n, and a mobile device preview.",
        "project4Title": "News App Project",
        "project4Technologies": "This project is a news app that consumes an external API with StoreKit2 and Core ML to filter words considered positive and negative."
    },
    "es": {
        "header": "Emilio Alfredo Perez Villa",
        "project1Title": "Proyecto Detiqueta",
        "project1Technologies": "En desarrollo , es un proyecto de marketing digital para posicionar promociones de restaurantes esta desarrollado con Nextjs y Tailwind con DaisyUi",
        "project2Title": "Proyecto Detiqueta Mobile",
        "project2Technologies": "Maqueta hecha en Swift Nativo con Swiftui",
        "project3Title": "Proyecto MenuI18",
        "project3Technologies": "Menu qr multidioma hecho con laravel alpinejs y tailwind, tiene verificacion de cuenta y localizacion en laravel con i18n y previsualizador de dipoitivo movil",
        "project4Title": "Proyecto News App",
        "project4Technologies": "Este proyecto es una app de noticias que consume una api externa con StoreKit2 and Core ML para filtrar por palabras consideradas positivas y negativas"
    }
};

function setLanguage(lang) {
    $.each(translations[lang], function (key, value) {
        $("[data-i18n='" + key + "']").text(value);
    });
}

$('#en').click(function () {
    setLanguage('en');
});

$('#es').click(function () {
    setLanguage('es');
});

setLanguage('en');