/*
There are going to be 20 questions in the game, and each question will have the following properties:
- category: a string representing the category of the question
- question: a string representing the question itself
- correct_answer: a string representing the correct answer
- incorrect_answers: an array of strings representing the incorrect answers
The questions will be randomly selected from the possibleQuestions array, and the game will end after 20 questions have been answered.
*/

const possibleQuestions = [
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "Animals",
        "question": "What is Grumpy Cat&#039;s real name?",
        "correct_answer": "Tardar Sauce",
        "incorrect_answers": [
            "Sauce",
            "Minnie",
            "Broccoli"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "Science &amp; Nature",
        "question": "What is the primary addictive substance found in tobacco?",
        "correct_answer": "Nicotine",
        "incorrect_answers": [
            "Cathinone",
            "Ephedrine",
            "Glaucine"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "hard",
        "category": "Entertainment: Music",
        "question": "This album, now considered to be one of the greatest of all time, was a commercial failure when it was released.",
        "correct_answer": "The Velvet Underground and Nico",
        "incorrect_answers": [
            "Abbey Road",
            "Led Zeppelin IV",
            "Pet Sounds"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": "Sports",
        "question": "Which of these teams isn&#039;t a member of the NHL&#039;s &quot;Original Six&quot; era?",
        "correct_answer": "Philadelphia Flyers",
        "incorrect_answers": [
            "New York Rangers",
            "Toronto Maple Leafs",
            "Boston Bruins"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "Entertainment: Music",
        "question": "The band Muse released their first album, Showbiz, in what year?",
        "correct_answer": "1999",
        "incorrect_answers": [
            "1998",
            "2000",
            "2001"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": "Sports",
        "question": "Which car manufacturer won the 2016 24 Hours of Le Mans?",
        "correct_answer": "Porsche",
        "incorrect_answers": [
            "Toyota",
            "Audi",
            "Ferrari"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "Entertainment: Video Games",
        "question": "Who is the main villain in Bendy and the ink machine?",
        "correct_answer": "Bendy",
        "incorrect_answers": [
            "Joey Drew",
            "Alice",
            "Boris"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "Entertainment: Television",
        "question": "What is the name of the planet that the Doctor from television series &quot;Doctor Who&quot; comes from?",
        "correct_answer": "Gallifrey",
        "incorrect_answers": [
            "Sontar",
            "Skaro",
            "Mondas"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": "Science &amp; Nature",
        "question": "The &quot;Tibia&quot; is found in which part of the body?",
        "correct_answer": "Leg",
        "incorrect_answers": [
            "Arm",
            "Hand",
            "Head"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": "Geography",
        "question": "What mountain range lines the border between Spain and France?",
        "correct_answer": "Pyrenees",
        "incorrect_answers": [
            "Alps",
            "Carpathians",
            "Urals"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "Entertainment: Music",
        "question": "Which brass instrument has the lowest pitch in an orchestra?",
        "correct_answer": "Tuba",
        "incorrect_answers": [
            "Trumpet",
            "Saxophone",
            "Trombone"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "Celebrities",
        "question": "Neil Hamburger is played by which comedian?",
        "correct_answer": "Gregg Turkington",
        "incorrect_answers": [
            "Nathan Fielder",
            "Tim Heidecker",
            "Todd Glass"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "History",
        "question": "In which country was the Statue of Liberty built and exported to the United States of America?",
        "correct_answer": "France",
        "incorrect_answers": [
            "Germany",
            "Spain",
            "England"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": "Entertainment: Video Games",
        "question": "In Portal 2, which solar system body did Wheatley end up orbiting?",
        "correct_answer": "The moon",
        "incorrect_answers": [
            "Earth",
            "Jupiter",
            "Mars"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": "Entertainment: Japanese Anime &amp; Manga",
        "question": "Which of the following anime of the mecha genre began airing in 1982?",
        "correct_answer": "The Super Dimension Fortress Macross",
        "incorrect_answers": [
            "Mobile Suit Gundam",
            "Armored Trooper VOTOMS",
            "Neon Genesis Evangelion"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": "Entertainment: Music",
        "question": "What was Bon Iver&#039;s debut album released in 2007?",
        "correct_answer": "For Emma, Forever Ago",
        "incorrect_answers": [
            "Bon Iver, Bon Iver",
            "22, A Million",
            "Blood Bank EP"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "hard",
        "category": "General Knowledge",
        "question": "Chartreuse is a color between yellow and what?",
        "correct_answer": "Green",
        "incorrect_answers": [
            "Red",
            "Black",
            "Purple"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "Entertainment: Video Games",
        "question": "What year did the game &quot;Overwatch&quot; enter closed beta?",
        "correct_answer": "2015",
        "incorrect_answers": [
            "2013",
            "2011",
            "2016"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "hard",
        "category": "Science: Mathematics",
        "question": "Which of these numbers is closest to the total number of possible states for an army standard Enigma Machine?",
        "correct_answer": "1.58 x 10^20",
        "incorrect_answers": [
            "1.58 x 10^22",
            "1.58 x  10^18",
            "1.58 x 10^24"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "hard",
        "category": "Mythology",
        "question": "Who is a minor god that is protector and creator of various arts, such as cheese making and bee keeping.",
        "correct_answer": "Aristaeus",
        "incorrect_answers": [
            "Autonoe",
            "Carme",
            "Cephisso"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "Entertainment: Japanese Anime &amp; Manga",
        "question": "In the 2012 animated film &quot;Wolf Children&quot;, what are the names of the wolf children?",
        "correct_answer": "Ame &amp; Yuki",
        "incorrect_answers": [
            "Hana &amp; Yuki",
            "Ame &amp; Hana",
            "Chuck &amp; Anna"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "hard",
        "category": "Entertainment: Video Games",
        "question": "Which of the following games in the The Legend of Zelda franchise was released in Japan before North America?",
        "correct_answer": "The Legend of Zelda: The Minish Cap",
        "incorrect_answers": [
            "The Legend of Zelda: Twilight Princess",
            "The Legend of Zelda: Spirit Tracks",
            "The Legend of Zelda: Four Swords"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "hard",
        "category": "Entertainment: Television",
        "question": "Prior to working at Wizards of the Coast, &quot;Mark Rosewater&quot; was a writer for which show?",
        "correct_answer": "Roseanne",
        "incorrect_answers": [
            "Boy Meets World",
            "The X-Files",
            "NYPD Blue"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": "Sports",
        "question": "What is Tiger Woods&#039; all-time best career golf-score?",
        "correct_answer": "61",
        "incorrect_answers": [
            "65",
            "63",
            "67"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "hard",
        "category": "Entertainment: Board Games",
        "question": "What is the world&#039;s oldest board game?",
        "correct_answer": "Senet",
        "incorrect_answers": [
            "Chess",
            "Checkers",
            "Go"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "Entertainment: Music",
        "question": "&quot;The Singing Cowboy&quot; Gene Autry is credited with the first recording for all but which classic Christmas jingle?",
        "correct_answer": "White Christmas",
        "incorrect_answers": [
            "Frosty the Snowman",
            "Rudolph the Red-Nosed Reindeer",
            "Here Comes Santa Claus"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": "Science: Computers",
        "question": "What does the term MIME stand for, in regards to computing?",
        "correct_answer": "Multipurpose Internet Mail Extensions",
        "incorrect_answers": [
            "Mail Internet Mail Exchange",
            "Multipurpose Interleave Mail Exchange",
            "Mail Interleave Method Exchange"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "Entertainment: Music",
        "question": "Which 80s band is fronted by singer/guitarist Robert Smith?",
        "correct_answer": "The Cure",
        "incorrect_answers": [
            "The Smiths",
            "Echo &amp; the Bunnymen",
            "New Order"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "History",
        "question": "The idea of Socialism was articulated and advanced by whom?",
        "correct_answer": "Karl Marx",
        "incorrect_answers": [
            "Vladimir Lenin",
            "Joseph Stalin",
            "Vladimir Putin"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": "Vehicles",
        "question": "Which of the following is NOT a Russian car manufacturer?",
        "correct_answer": "BYD",
        "incorrect_answers": [
            "Silant",
            "Dragon",
            "GAZ"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": "Entertainment: Music",
        "question": "According to their 1974 hit, what were Brownsville Station doing &quot;In The Boys&#039; Room&quot;?",
        "correct_answer": "Smokin&#039;",
        "incorrect_answers": [
            "Hangin&#039;",
            "Lovin&#039;",
            "Peein&#039;"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "hard",
        "category": "Vehicles",
        "question": "Which car is the first mass-produced hybrid vehicle?",
        "correct_answer": "Toyota Prius",
        "incorrect_answers": [
            "Chevrolet Volt",
            "Honda Fit",
            "Peugeot 308 R HYbrid"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "In past times, what would a gentleman keep in his fob pocket?",
        "correct_answer": "Watch",
        "incorrect_answers": [
            "Money",
            "Keys",
            "Notebook"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": "Entertainment: Video Games",
        "question": "In the game &quot;Subnautica&quot;, which feature was removed due to performance issues in 2016?",
        "correct_answer": "Terraforming",
        "incorrect_answers": [
            "Building",
            "Crafting",
            "Multiplayer"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": "Entertainment: Cartoon &amp; Animations",
        "question": "In &quot;SpongeBob SquarePants&quot;, what is the name of Sandy Cheek&#039;s place of residence?",
        "correct_answer": "Sandy&#039;s Treedome",
        "incorrect_answers": [
            "&quot;The Dome&quot;",
            "Sandy&#039;s Bubble",
            "Auquatic Reseach Centre"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": "Science &amp; Nature",
        "question": "In Chemistry, how many isomers does Butanol (C4H9OH) have?",
        "correct_answer": "4",
        "incorrect_answers": [
            "3",
            "5",
            "6"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": "Sports",
        "question": "Which car manufacturer won the 2017 24 Hours of Le Mans?",
        "correct_answer": "Porsche",
        "incorrect_answers": [
            "Toyota",
            "Audi",
            "Chevrolet"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "hard",
        "category": "Entertainment: Music",
        "question": "What year was Huun Huur Tu&#039;s album Altai Sayan Tandy-Uula released? ",
        "correct_answer": "2004",
        "incorrect_answers": [
            "1993",
            "2006",
            "2010"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "Geography",
        "question": "Which US state has the highest population?",
        "correct_answer": "California",
        "incorrect_answers": [
            "New York",
            "Texas",
            "Florida"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": "Entertainment: Japanese Anime &amp; Manga",
        "question": "What song plays in the ending credits of the anime &quot;Ergo Proxy&quot;?",
        "correct_answer": "Paranoid Android",
        "incorrect_answers": [
            "Sadistic Summer",
            "Bittersweet Symphony",
            "Mad World"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "History",
        "question": "These two countries held a commonwealth from the 16th to 18th century.",
        "correct_answer": "Poland and Lithuania",
        "incorrect_answers": [
            "Hutu and Rwanda",
            "North Korea and South Korea",
            "Bangladesh and Bhutan"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": "Entertainment: Video Games",
        "question": "Which of these is not a character in the game, &quot;Lethal League&quot;?",
        "correct_answer": "Rex",
        "incorrect_answers": [
            "Switch",
            "Candyman",
            "Sonata"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": "Entertainment: Video Games",
        "question": "In which country&#039;s version of Half-Life are the HECU Marines replaced with robots?",
        "correct_answer": "Germany",
        "incorrect_answers": [
            "Japan",
            "China",
            "France"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "Mythology",
        "question": "In most traditions, who was the wife of Zeus?",
        "correct_answer": "Hera",
        "incorrect_answers": [
            "Aphrodite",
            "Athena",
            "Hestia"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "hard",
        "category": "History",
        "question": "What was Napoleon Bonaparte&#039;s name before he changed it?",
        "correct_answer": "Napoleone di Buonaparte",
        "incorrect_answers": [
            "Naapolion van Bonijpaart",
            "Napole&atilde;o do Boaparte",
            "Napoleona de Buenoparte"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": "Entertainment: Books",
        "question": "What was the pen name of novelist, Mary Ann Evans?",
        "correct_answer": "George Eliot",
        "incorrect_answers": [
            "George Orwell",
            "George Bernard Shaw",
            "George Saunders"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": "History",
        "question": "In what year did Neil Armstrong and Buzz Aldrin land on the moon?",
        "correct_answer": "1969",
        "incorrect_answers": [
            "1965",
            "1966",
            "1973"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": "Sports",
        "question": "Which nation hosted the FIFA World Cup in 2006?",
        "correct_answer": "Germany",
        "incorrect_answers": [
            "United Kingdom",
            "Brazil",
            "South Africa"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "hard",
        "category": "General Knowledge",
        "question": "When was &quot;YouTube&quot; founded?",
        "correct_answer": "February 14, 2005",
        "incorrect_answers": [
            "May 22, 2004",
            "September 12, 2005",
            "July 19, 2009"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "Entertainment: Music",
        "question": "Which of these is NOT the name of an album released by English singer-songwriter Adele?",
        "correct_answer": "12",
        "incorrect_answers": [
            "19",
            "21",
            "25"
        ]
    }
];

export default possibleQuestions;