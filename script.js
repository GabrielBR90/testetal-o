document.addEventListener("DOMContentLoaded", function () {
    const naturezas = {
        "Contra a Pessoa e a Vida": ["Homicídio culposo", "Homicídio doloso", "Homicídio tentado", "Agressão", "Lesão corporal", "Violência Doméstica"],
        "Contra o Patrimônio": ["Furto", "Furto tentativa", "Roubo", "Extorsão", "Dano material", "Latrocínio"],
        "Contra a Administração Pública": ["Peculato", "Concussão", "Corrupção", "Desobediência", "Desacato"],
        "De Trânsito": ["Veículo", "Atropelamento", "Acidente de trânsito com vítima", "Acidente de trânsito sem vítima"]
    };

    function preencherSelect(selectId) {
        const selectElement = document.getElementById(selectId);

        const defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.textContent = "Selecione...";
        selectElement.appendChild(defaultOption);

        for (const grupo in naturezas) {
            const optgroup = document.createElement("optgroup");
            optgroup.label = grupo;

            naturezas[grupo].forEach(item => {
                const option = document.createElement("option");
                option.value = item;
                option.textContent = item;
                optgroup.appendChild(option);
            });

            selectElement.appendChild(optgroup);
        }
    }

    preencherSelect("natureza_inicial");
    preencherSelect("natureza_final");
});
