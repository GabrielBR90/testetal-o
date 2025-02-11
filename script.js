document.addEventListener("DOMContentLoaded", function () {
    const naturezas = {
        "Grupo A - Contra a Pessoa e a Vida": [
            { code: "A01", name: "Homicídio culposo" },
            { code: "A02", name: "Homicídio doloso" },
            { code: "A03", name: "Homicídio tentado" },
            { code: "A05", name: "Agressão" },
            { code: "A30", name: "Lesão corporal" },
            { code: "A98", name: "Violência Doméstica" },
            { code: "A99", name: "Medidas Protetivas (aplicativo)" }
        ],
        "Grupo B - Contra o Patrimônio": [
            { code: "B01", name: "Furto" },
            { code: "B02", name: "Furto tentativa" },
            { code: "B04", name: "Roubo" },
            { code: "B05", name: "Extorsão" },
            { code: "B07", name: "Dano material" },
            { code: "B11", name: "Latrocínio" }
        ],
        "Grupo E - Contra a Administração Pública": [
            { code: "E01", name: "Peculato" },
            { code: "E02", name: "Concussão" },
            { code: "E03", name: "Corrupção" },
            { code: "E08", name: "Desobediência" },
            { code: "E09", name: "Desacato" }
        ],
        "Grupo L - De Trânsito": [
            { code: "L01", name: "Veículo" },
            { code: "L07", name: "Atropelamento" },
            { code: "L08", name: "Acidente de trânsito com vítima" },
            { code: "L09", name: "Acidente de trânsito sem vítima" }
        ]
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
                option.value = item.code;
                option.textContent = item.name;
                optgroup.appendChild(option);
            });

            selectElement.appendChild(optgroup);
        }
    }

    preencherSelect("natureza_inicial");
    preencherSelect("natureza_final");
});
