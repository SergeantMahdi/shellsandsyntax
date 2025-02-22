document.addEventListener("DOMContentLoaded", function () {
    // Disable right-click on the entire page
    document.addEventListener('contextmenu', event => event.preventDefault());

    const dropZone = document.querySelector(".drop-zone");
    const seashellImage = document.getElementById("seashell-img");
    const scoreContainer = document.querySelector(".score");

    //Get the Score element and set it to 0
    let score = 0
    scoreContainer.textContent = `Score: ${score}`;

    // Define each shell's correct answer and its three options
    const questions = [
        {
            image: "conusvidua.jpg",
            correctAnswer: "Conus vidua",
            options: ["Conus vidua", "Conus tulipa", "Conus marmoreus"]
        },
        {
            image: "enginalauta.jpg",
            correctAnswer: "Engina lauta",
            options: ["Engina lauta", "Patella caerulea", "Cellana rota"]
        },
        {
            image: "annachlamysreevei.jpg",
            correctAnswer: "Annachlamys reevei",
            options: ["Emarginula sicula", "Annachlamys reevei", "Oliva keeni"]
        },
        {
            image: "stellariasolaris.jpg",
            correctAnswer: "Stellaria solaris",
            options: ["Anatoma eximia", "Haliotis mykonosensis", "Stellaria solaris"]
        },
        {
            image: "barycypraeateulerei.jpg",
            correctAnswer: "Barycypraea teulerei",
            options: ["Pilus conicus", "Barycypraea teulerei", "Gibbula ardens"]
        },
        {
            image: "aspamarginata.jpg",
            correctAnswer: "Aspa marginata",
            options: ["Engina lauta", "Aspa marginata", "Anatoma crispata"]
        },
        {
            image: "calliostomasimulatum.jpg",
            correctAnswer: "Calliostoma simulatum",
            options: ["Calliostoma simulatum", "Bolma rugosa", "Clelandella miliaris"]
        },
        {
            image: "calocochleafestiva.jpg",
            correctAnswer: "Calocochlea festiva",
            options: ["Calocochlea festiva", "Cadulus jeffreysi", "Lepetella sierrai"]
        },
        {
            image: "coelopleurusgranulatus.jpg",
            correctAnswer: "Coelopleurus granulatus",
            options: ["Gibbula fanulum", "Steromphala albida", "Coelopleurus granulatus"]
        },
        {
            image: "carculumcardissa.jpg",
            correctAnswer: "Corculum cardissa",
            options: ["Bogia labronica", "Corculum cardissa", "Sinezona plicata"]
        },
        {
            image: "cerithiumvulgatum.jpg",
            correctAnswer: "Cerithium vulgatum",
            options: ["Achatina greyi", "Allopeas gracile", "Cerithium vulgatum"]
        },
        {
            image: "conustulipa.jpg",
            correctAnswer: "Conus tulipa",
            options: ["Conus tulipa", "Emarginula sicula", "Tectura virginea"]
        },
        {
            image: "jujubinuscurinii.jpg",
            correctAnswer: "Jujubinus curinii",
            options: ["Leptochiton scabridus", "Cadulus jeffreysi", "Jujubinus curinii"]
        },
        {
            image: "bivetiellacancellata.jpg",
            correctAnswer: "Bivetiella cancellata",
            options: ["Nassa serta", "Muricopsis zeteki", "Bivetiella cancellata"]
        },
        {
            image: "cypraeovulafuscorubra.jpg",
            correctAnswer: "Cypraeovula fuscorubra",
            options: ["Diodora producta", "Cypraeovula fuscorubra", "Zeidora naufraga"]
        },
        {
            image: "astraliumrhodostomum.jpg",
            correctAnswer: "Astralium rhodostomum",
            options: ["Astralium rhodostomum", "Haliotis stomatiaeformis", "Fissurella nubecula"]
        },
        {
            image: "canariumesculentum.jpg",
            correctAnswer: "Canarium esculentum",
            options: ["Gibbula magus", "Leptochiton sarsi", "Canarium esculentum"]
        },
        {
            image: "conusaxelrodi.jpg",
            correctAnswer: "Conus axelrodi",
            options: ["Limopsis minuta", "Conus axelrodi", "Anatoma aspera"]
        },
        {
            image: "astraliumstellare.jpg",
            correctAnswer: "Astralium stellare",
            options: ["Pecten jacobeus", "Astralium stellare", "Lembulus pelius"]
        },
        {
            image: "conomurexluhuanus.jpg",
            correctAnswer: "Conomurex luhuanus",
            options: ["Conomurex luhuanus", "Manupecten pesfelis", "Glans trapezia"]
        },
        {
            image: "ministrombusminimus.jpg",
            correctAnswer: "Ministrombus minimus",
            options: ["Steromphala spratti", "Pecten maximus", "Ministrombus minimus"]
        },
        {
            image: "amoriacanaliculata.jpg",
            correctAnswer: "Amoria canaliculata",
            options: ["Sinezona cingulata", "Amoria canaliculata", "Anatoma umbilicata"]
        },
        {
            image: "chicomurexlaciniatus.jpg",
            correctAnswer: "Chicomurex laciniatus",
            options: ["Chicomurex laciniatus", "Cadulus jeffreysi", "Cochlitoma ustulata"]
        },
        {
            image: "astraliumprovisorium.jpg",
            correctAnswer: "Astralium provisorium",
            options: ["Astralium provisorium", "Coripia corbis", "Cymbula safiana"]
        },
        {
            image: "chelycypraeatestudinaria.jpg",
            correctAnswer: "Chelycypraea testudinaria",
            options: ["Emarginula crassa", "Anatoma tenuisculpta", "Chelycypraea testudinaria"]
        },
        {
            image: "clivipolliapulchra.jpg",
            correctAnswer: "Clivipollia pulchra",
            options: ["Bolma rugosa", "Clivipollia pulchra", "Gibbula fanulum"]
        },
        {
            image: "bractechlamysvexillum.jpg",
            correctAnswer: "Bractechlamys vexillum",
            options: ["Bractechlamys vexillum", "Bulla punctulata", "Morula spinosa"]
        },
        {
            image: "chicoreusdodongi.jpg",
            correctAnswer: "Chicoreus dodongi",
            options: ["Chicoreus dodongi", "Favartia tetragonus", "Scalptia crenifera"]
        },
        {
            image: "colubrariamuricata.jpg",
            correctAnswer: "Colubraria muricata",
            options: ["Bulla mabillei", "Colubraria muricata", "Bistolida vasta"]
        },
        {
            image: "conusmarmoreus.jpg",
            correctAnswer: "Conus marmoreus",
            options: ["Nevia spirata", "Eupleura nitida", "Conus marmoreus"]
        },
    ];

    let currentQuestionIndex = 0; // Track the current question index

    function loadQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        seashellImage.src = `images/${currentQuestion.image}`; // Set the image

        // Clear previous options before adding new ones
        const optionsContainer = document.querySelector(".seashell-names");
        optionsContainer.innerHTML = "";

        // Shuffle options for variety
        const shuffledOptions = [...currentQuestion.options];
        shuffledOptions.sort(() => Math.random() - 0.5);

        // Add options
        shuffledOptions.forEach(option => {
            const optionDiv = document.createElement("div");
            optionDiv.classList.add("draggable");
            optionDiv.textContent = option;
            optionDiv.setAttribute("draggable", "true");
            optionsContainer.appendChild(optionDiv);

            // Drag and drop functionality for each option
            optionDiv.addEventListener("dragstart", () => {
                optionDiv.classList.add("dragging");
            });

            optionDiv.addEventListener("dragend", () => {
                optionDiv.classList.remove("dragging");
            });
        });

        // Reset drop zone visual state
        dropZone.classList.remove("hovered");
    }

    // Handle drop event
    dropZone.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropZone.classList.add("hovered");
    });

    dropZone.addEventListener("dragleave", () => {
        dropZone.classList.remove("hovered");
    });


    dropZone.addEventListener("drop", (e) => {
        e.preventDefault();
        const draggedItem = document.querySelector(".dragging");

        // Check if the correct answer was dropped
        const currentQuestion = questions[currentQuestionIndex];
        const result = document.getElementById("result");

        if (draggedItem.textContent === currentQuestion.correctAnswer) {
            result.textContent = "Correct!";
            result.style.color = "green";
            result.style.fontSize = "30px"; // Increase font size for correct message
            score += 1;
            scoreContainer.textContent = `Score: ${score}`;
            // Disable the correct answer option
            draggedItem.setAttribute("draggable", "false");

            // Wait for 1.5 seconds, then go to the next question
            setTimeout(() => {
                // Move to the next question
                currentQuestionIndex = (currentQuestionIndex + 1) % questions.length; // Loop back to first question if at the end
                loadQuestion(); // Load next question
                result.textContent = "";
            }, 1500);
        } else {
            result.textContent = "Oops! Try again!";
            result.style.color = "red";
            result.style.fontSize = "24px"; // Increase font size for incorrect message
        }

        dropZone.classList.remove("hovered");
    });

    // Initialize the game with the first question
    loadQuestion();
});
