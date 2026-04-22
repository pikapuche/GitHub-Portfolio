function setLanguage(lang) {
    localStorage.setItem("lang", lang);

    fetch(`./lang/${lang}.json`)
        .then(res => res.json())
        .then(data => {
            document.querySelectorAll("[data-i18n]").forEach(el => {
                const key = el.getAttribute("data-i18n");
                if (data[key]) {
                    el.innerHTML = data[key];
                }
            });
        })
        .catch(err => console.error("Erreur de chargement langue :", err));
}

document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || "en";
    setLanguage(savedLang);
});
