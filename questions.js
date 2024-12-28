const questions = {
    aptitude: {
        level1: [
            {
                question: "What is 15% of 200?",
                options: ["35", "40", "30", "25"],
                correct: 2,
                explanation: "15% of 200 = (15/100) × 200 = 30"
            },
            {
                question: "If 3x + 7 = 22, what is x?",
                options: ["7", "5", "8", "6"],
                correct: 1,
                explanation: "3x + 7 = 22 → 3x = 15 → x = 5"
            },
            {
                question: "What is the next number in the sequence: 2, 4, 8, 16, ...?",
                options: ["30", "28", "32", "24"],
                correct: 2,
                explanation: "Each number is doubled: 16 × 2 = 32"
            },
            {
                question: "If a train travels 120 km in 2 hours, what is its speed?",
                options: ["75 km/h", "65 km/h", "70 km/h", "60 km/h"],
                correct: 3,
                explanation: "Speed = Distance/Time = 120/2 = 60 km/h"
            },
            {
                question: "What is 1/4 of 100?",
                options: ["30", "35", "20", "25"],
                correct: 3,
                explanation: "1/4 = 25/100, so 1/4 of 100 = 25"
            },
            {
                question: "If 5 pencils cost $10, how much do 8 pencils cost?",
                options: ["$14", "$18", "$16", "$20"],
                correct: 2,
                explanation: "Cost per pencil = $2, so 8 pencils = $16"
            },
            {
                question: "What is the sum of angles in a triangle?",
                options: ["190°", "170°", "160°", "180°"],
                correct: 3,
                explanation: "The sum of angles in a triangle is always 180 degrees"
            },
            {
                question: "If today is Monday, what day will it be after 100 days?",
                options: ["Tuesday", "Sunday", "Wednesday", "Monday"],
                correct: 3,
                explanation: "100 ÷ 7 = 14 remainder 2, so it will be Monday"
            },
            {
                question: "What is 20% of 50?",
                options: ["15", "12", "10", "8"],
                correct: 2,
                explanation: "20% of 50 = (20/100) × 50 = 10"
            },
            {
                question: "If a = 5 and b = 3, what is a² + b²?",
                options: ["30", "32", "36", "34"],
                correct: 3,
                explanation: "a² + b² = 5² + 3² = 25 + 9 = 34"
            },
            {
                question: "A car covers 240 km in 3 hours. What is its speed in meters per second?",
                options: ["20 m/s", "25 m/s", "22.22 m/s", "18 m/s"],
                correct: 2,
                explanation: "Speed = 240/3 = 80 km/h = 22.22 m/s"
            },
            {
                question: "If 8 workers can complete a task in 12 days, how many workers are needed to complete it in 6 days?",
                options: ["14", "12", "16", "18"],
                correct: 2,
                explanation: "Using (W1 × D1) = (W2 × D2): 8 × 12 = W2 × 6 → W2 = 16"
            },
            {
                question: "A shopkeeper bought an item for $800 and sold it for $1000. What is the profit percentage?",
                options: ["30%", "15%", "20%", "25%"],
                correct: 3,
                explanation: "Profit % = (Profit/Cost Price) × 100 = (200/800) × 100 = 25%"
            },
            {
                question: "If the compound interest on a sum for 2 years at 10% per annum is $441, what is the simple interest for the same period and rate?",
                options: ["$420", "$440", "$380", "$400"],
                correct: 3,
                explanation: "CI = P[(1 + r/100)² - 1], SI = P × r × t/100"
            },
            {
                question: "What is the smallest prime number that is greater than 100?",
                options: ["107", "109", "103", "101"],
                correct: 3,
                explanation: "101 is the first prime number after 100"
            },
            {
                question: "Which particle was discovered by James Chadwick in 1932?",
                options: ["Proton", "Electron", "Positron", "Neutron"],
                correct: 3,
                explanation: "James Chadwick discovered the neutron in 1932"
            },
            {
                question: "A car travels from city A to city B at 60 km/h and returns at 40 km/h. What is the average speed?",
                options: ["50 km/h", "52 km/h", "55 km/h", "48 km/h"],
                correct: 3,
                explanation: "Average speed = (2 × 60 × 40)/(60 + 40) = 48 km/h"
            },
            {
                question: "If a = 2 and b = 4, what is a³ + b³?",
                options: ["70", "68", "72", "66"],
                correct: 2,
                explanation: "a³ + b³ = 2³ + 4³ = 8 + 64 = 72"
            },
            {
                question: "What is the sum of the interior angles of a quadrilateral?",
                options: ["380°", "400°", "360°", "420°"],
                correct: 2,
                explanation: "The sum of interior angles of a quadrilateral is always 360 degrees"
            },
            {
                question: "If a train travels 300 km in 5 hours, what is its speed?",
                options: ["65 km/h", "70 km/h", "75 km/h", "60 km/h"],
                correct: 3,
                explanation: "Speed = Distance/Time = 300/5 = 60 km/h"
            },
            {
                question: "Two trains moving in opposite directions at 60 km/h and 90 km/h pass each other in 10 seconds. What is the total length of the trains?",
                options: ["400 meters", "450 meters", "380 meters", "416.67 meters"],
                correct: 3,
                explanation: "Relative speed = 150 km/h = 41.67 m/s, Distance = Speed × Time = 41.67 × 10 = 416.67m"
            },
            {
                question: "A sum of money doubles itself in 8 years at simple interest. What is the rate of interest?",
                options: ["15%", "12.5%", "10%", "8%"],
                correct: 1,
                explanation: "Using SI formula: 100 × R × 8 = 100 × 100 → R = 12.5%"
            },
            {
                question: "If the area of a circle is 16π cm², what is its radius?",
                options: ["6 cm", "8 cm", "5 cm", "4 cm"],
                correct: 3,
                explanation: "Area = πr², so 16π = πr² → r = 4 cm"
            },
            {
                question: "What is the volume of a cube with edge length 6 cm?",
                options: ["200 cm³", "220 cm³", "240 cm³", "216 cm³"],
                correct: 3,
                explanation: "Volume = edge³ = 6³ = 216 cm³"
            },
            {
                question: "If a = 3 and b = 4, what is a⁴ + b⁴?",
                options: ["361", "353", "345", "369"],
                correct: 3,
                explanation: "a⁴ + b⁴ = 3⁴ + 4⁴ = 81 + 256 = 337"
            },
            {
                question: "What is the surface area of a sphere with radius 4 cm?",
                options: ["80π cm²", "100π cm²", "120π cm²", "64π cm²"],
                correct: 3,
                explanation: "Surface area = 4πr² = 4π × 4² = 64π cm²"
            },
            {
                question: "If a train travels 480 km in 8 hours, what is its speed?",
                options: ["65 km/h", "70 km/h", "75 km/h", "60 km/h"],
                correct: 3,
                explanation: "Speed = Distance/Time = 480/8 = 60 km/h"
            },
            {
                question: "What is the sum of the interior angles of a hexagon?",
                options: ["740°", "760°", "780°", "720°"],
                correct: 3,
                explanation: "The sum of interior angles of a hexagon is always 720 degrees"
            },
            {
                question: "If a = 2 and b = 5, what is a⁵ + b⁵?",
                options: ["3125", "3123", "3121", "3127"],
                correct: 3,
                explanation: "a⁵ + b⁵ = 2⁵ + 5⁵ = 32 + 3125 = 3157"
            },
            {
                question: "What is the volume of a cylinder with radius 4 cm and height 10 cm?",
                options: ["180π cm³", "200π cm³", "220π cm³", "160π cm³"],
                correct: 3,
                explanation: "Volume = πr²h = π × 4² × 10 = 160π cm³"
            }
        ],
    },


    english: {
        level1: [
            {
                question: "Choose the correct synonym for 'happy'.",
                options: ["Sad", "Joyful", "Angry", "Confused"],
                correct: 1,
                explanation: "'Joyful' is a synonym for 'happy'."
            },
            {
                question: "What is the plural form of 'child'?",
                options: ["Childs", "Children", "Childes", "Childrens"],
                correct: 1,
                explanation: "The correct plural form of 'child' is 'children'."
            },
            {
                question: "Identify the noun in the sentence: 'The cat is sleeping.'",
                options: ["Cat", "Sleeping", "Is", "The"],
                correct: 0,
                explanation: "'Cat' is a noun in the sentence."
            },
            {
                question: "Which word is a verb?",
                options: ["Quickly", "Run", "Beautiful", "Chair"],
                correct: 1,
                explanation: "'Run' is a verb."
            },
            {
                question: "Choose the correct spelling:",
                options: ["Recieve", "Receive", "Receeve", "Receiv"],
                correct: 1,
                explanation: "The correct spelling is 'Receive'."
            },
            {
                question: "What is the synonym for 'beautiful'?",
                options: ["Ugly", "Pretty", "Dark", "Rough"],
                correct: 1,
                explanation: "'Pretty' is a synonym for 'beautiful'."
            },
            {
                question: "What is the past tense of 'eat'?",
                options: ["Eated", "Ate", "Eating", "Eat"],
                correct: 1,
                explanation: "The past tense of 'eat' is 'ate'."
            },
            {
                question: "Choose the correct article: 'I saw ___ elephant.'",
                options: ["a", "an", "the", "none"],
                correct: 1,
                explanation: "The correct sentence is 'I saw an elephant.'"
            },
            {
                question: "Identify the pronoun in the sentence: 'She is reading a book.'",
                options: ["She", "Book", "Reading", "Is"],
                correct: 0,
                explanation: "'She' is the pronoun in the sentence."
            },
            {
                question: "What is the antonym of 'fast'?",
                options: ["Slow", "Quick", "Speedy", "Rapid"],
                correct: 0,
                explanation: "'Slow' is the antonym of 'fast'."
            },
            {
                question: "Choose the correct form of the verb: 'He ___ the movie yesterday.'",
                options: ["watch", "watched", "watches", "watching"],
                correct: 1,
                explanation: "The correct sentence is 'He watched the movie yesterday.'"
            },
            {
                question: "Identify the adjective: 'The blue sky is beautiful.'",
                options: ["Blue", "Sky", "Is", "Beautiful"],
                correct: 0,
                explanation: "'Blue' is the adjective in the sentence."
            },
            {
                question: "What is the plural form of 'mouse'?",
                options: ["Mouses", "Mice", "Mouse", "Mices"],
                correct: 1,
                explanation: "The plural form of 'mouse' is 'mice'."
            },
            {
                question: "Which sentence is written in the future tense?",
                options: ["She sings.", "She will sing.", "She sang.", "She is singing."],
                correct: 1,
                explanation: "'She will sing' is in the future tense."
            },
            {
                question: "Choose the correct conjunction: 'I wanted to go, ___ it was raining.'",
                options: ["and", "but", "or", "so"],
                correct: 1,
                explanation: "The correct sentence is 'I wanted to go, but it was raining.'"
            },
            {
                question: "Identify the verb: 'The dog barked loudly.'",
                options: ["Dog", "Barked", "Loudly", "The"],
                correct: 1,
                explanation: "'Barked' is the verb in the sentence."
            },
            {
                question: "What is the opposite of 'hot'?",
                options: ["Warm", "Cold", "Cool", "Heat"],
                correct: 1,
                explanation: "'Cold' is the opposite of 'hot'."
            },
            {
                question: "Choose the correct preposition: 'The book is ___ the table.'",
                options: ["on", "in", "at", "with"],
                correct: 0,
                explanation: "The correct sentence is 'The book is on the table.'"
            },
            {
                question: "Identify the subject: 'The birds are singing.'",
                options: ["The", "Birds", "Are", "Singing"],
                correct: 1,
                explanation: "'Birds' is the subject of the sentence."
            },
            {
                question: "What is the past participle of 'write'?",
                options: ["Written", "Wrote", "Writing", "Writes"],
                correct: 0,
                explanation: "The past participle of 'write' is 'written'."
            },

            {
                question: "Choose the correct antonym for 'increase'.",
                options: ["Reduce", "Enhance", "Expand", "Grow"],
                correct: 0,
                explanation: "'Reduce' is an antonym for 'increase'."
            },
            {
                question: "What is the past tense of 'go'?",
                options: ["Goes", "Went", "Gone", "Going"],
                correct: 1,
                explanation: "The past tense of 'go' is 'went'."
            },
            {
                question: "Complete the sentence: 'She ___ to the market yesterday.'",
                options: ["go", "gone", "went", "going"],
                correct: 2,
                explanation: "The correct sentence is 'She went to the market yesterday.'"
            },
            {
                question: "Identify the adjective in the sentence: 'The beautiful garden is full of flowers.'",
                options: ["Beautiful", "Garden", "Flowers", "Full"],
                correct: 0,
                explanation: "'Beautiful' is the adjective in the sentence."
            },
            {
                question: "Choose the correct preposition: 'She is good ___ math.'",
                options: ["on", "at", "in", "with"],
                correct: 1,
                explanation: "The correct sentence is 'She is good at math.'"
            },
            {
                question: "What is the collective noun for 'a group of fish'?",
                options: ["Swarm", "Pack", "School", "Flock"],
                correct: 2,
                explanation: "A collective noun for a group of fish is 'school'."
            },
            {
                question: "Choose the correct pronoun: '___ is my best friend.'",
                options: ["He", "Him", "His", "You"],
                correct: 0,
                explanation: "The correct sentence is 'He is my best friend.'"
            },
            {
                question: "What is the correct form of the verb: 'She ___ playing chess now.'",
                options: ["is", "are", "was", "were"],
                correct: 0,
                explanation: "The correct sentence is 'She is playing chess now.'"
            },
            {
                question: "Identify the interjection: 'Wow! That is amazing.'",
                options: ["Wow", "That", "Is", "Amazing"],
                correct: 0,
                explanation: "'Wow' is the interjection in the sentence."
            },
            {
                question: "What is the plural form of 'tooth'?",
                options: ["Teeth", "Tooths", "Toothes", "Tooth"],
                correct: 0,
                explanation: "The plural form of 'tooth' is 'teeth'."
            },
            {
                question: "What is the correct form of the verb in the sentence: 'If I ___ a bird, I would fly.'",
                options: ["am", "was", "were", "be"],
                correct: 2,
                explanation: "The correct sentence is 'If I were a bird, I would fly.'"
            },
            {
                question: "Identify the type of sentence: 'Do you know where she went?'.",
                options: ["Declarative", "Imperative", "Exclamatory", "Interrogative"],
                correct: 3,
                explanation: "The sentence is a question, so it is interrogative."
            },
            {
                question: "What is a compound sentence?",
                options: [
                    "A sentence with one clause",
                    "A sentence with two independent clauses",
                    "A sentence with a dependent clause",
                    "A simple sentence"
                ],
                correct: 1,
                explanation: "A compound sentence contains two independent clauses joined by a conjunction."
            },
            {
                question: "Choose the correct word: 'The book on the table is ___.'",
                options: ["your", "yours", "you", "you're"],
                correct: 1,
                explanation: "The correct sentence is 'The book on the table is yours.'"
            },
            {
                question: "Identify the figure of speech in the sentence: 'The stars danced in the sky.'",
                options: ["Simile", "Personification", "Metaphor", "Hyperbole"],
                correct: 1,
                explanation: "'The stars danced in the sky' is an example of personification."
            }
        ],
    },

    computerScience: {

            level1: [
                {
                    question: "What does CPU stand for?",
                    options: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Central Process Utility"],
                    correct: 0,
                    explanation: "CPU stands for Central Processing Unit, which is the brain of a computer."
                },
                {
                    question: "Which programming paradigm treats computation as the evaluation of mathematical functions?",
                    options: ["Object-Oriented", "Functional", "Procedural", "Imperative"],
                    correct: 1,
                    explanation: "Functional programming treats computation as the evaluation of mathematical functions."
                },
                {
                    question: "What is the time complexity of binary search?",
                    options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
                    correct: 1,
                    explanation: "Binary search has a time complexity of O(log n) as it divides the search space in half each time."
                },
                {
                    question: "Which data structure uses LIFO (Last In First Out)?",
                    options: ["Queue", "Stack", "Tree", "Graph"],
                    correct: 1,
                    explanation: "Stack follows LIFO principle where the last element added is the first one to be removed."
                },
                {
                    question: "What is polymorphism in OOP?",
                    options: [
                        "Ability of objects to take multiple forms",
                        "Hiding implementation details",
                        "Creating new classes from existing ones",
                        "Grouping data and methods"
                    ],
                    correct: 0,
                    explanation: "Polymorphism allows objects to take multiple forms and behave differently based on context."
                },
                {
                    question: "Which sorting algorithm has the best average case time complexity?",
                    options: ["Bubble Sort", "Quick Sort", "Selection Sort", "Insertion Sort"],
                    correct: 1,
                    explanation: "Quick Sort has an average time complexity of O(n log n), making it one of the fastest sorting algorithms."
                },
                {
                    question: "What is recursion?",
                    options: [
                        "A function calling itself",
                        "A loop structure",
                        "A data type",
                        "An array operation"
                    ],
                    correct: 0,
                    explanation: "Recursion is when a function calls itself to solve a smaller instance of the same problem."
                },
                {
                    question: "What is the purpose of a constructor in OOP?",
                    options: [
                        "To initialize object properties",
                        "To delete objects",
                        "To copy objects",
                        "To compare objects"
                    ],
                    correct: 0,
                    explanation: "Constructors are used to initialize the properties of an object when it is created."
                },
                {
                    question: "Which is not a primitive data type in most programming languages?",
                    options: ["String", "Integer", "Boolean", "Array"],
                    correct: 3,
                    explanation: "Array is a composite/reference data type, not a primitive data type."
                },
                {
                    question: "What is encapsulation in OOP?",
                    options: [
                        "Bundling data and methods that operate on that data",
                        "Creating multiple instances of a class",
                        "Inheriting properties from parent class",
                        "Converting data types"
                    ],
                    correct: 0,
                    explanation: "Encapsulation is bundling data and the methods that operate on that data within a single unit."
                },
                {
                    question: "Which is the smallest unit of data in a computer?",
                    options: ["Byte", "Bit", "Kilobyte", "Gigabyte"],
                    correct: 1,
                    explanation: "A bit is the smallest unit of data, representing a binary value (0 or 1)."
                },
                {
                    question: "What does HTML stand for?",
                    options: ["Hyper Text Markup Language", "Hyper Text Management Language", "Home Tool Markup Language", "Hyperlink Text Markup Language"],
                    correct: 0,
                    explanation: "HTML stands for Hyper Text Markup Language, used to structure content on the web."
                },
                {
                    question: "Which of the following is a non-relational database?",
                    options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
                    correct: 2,
                    explanation: "MongoDB is a non-relational database that stores data in a flexible, JSON-like format."
                },
                {
                    question: "What is an IP address?",
                    options: ["Internet Protocol address", "Internal Process address", "Interface Packet address", "Initial Path address"],
                    correct: 0,
                    explanation: "An IP address is a unique identifier assigned to each device connected to a network."
                },
                {
                    question: "Which layer of the OSI model is responsible for routing data packets?",
                    options: ["Network", "Data Link", "Transport", "Session"],
                    correct: 0,
                    explanation: "The Network layer is responsible for routing data packets between devices on different networks."
                },
                {
                    question: "Which of the following is an example of a high-level programming language?",
                    options: ["Assembly", "C", "Python", "Machine Code"],
                    correct: 2,
                    explanation: "Python is a high-level programming language that is easy to read and write."
                },
                {
                    question: "What does API stand for?",
                    options: ["Application Programming Interface", "Automated Program Interface", "Application Process Interface", "Automated Programming Interface"],
                    correct: 0,
                    explanation: "API stands for Application Programming Interface, allowing different software applications to communicate."
                },
                {
                    question: "Which of the following is used to find and remove errors from a program?",
                    options: ["Compiler", "Interpreter", "Debugger", "Assembler"],
                    correct: 2,
                    explanation: "A debugger is used to identify and fix errors in a program."
                },
                {
                    question: "What is the main purpose of an operating system?",
                    options: ["To execute programs", "To manage hardware and software resources", "To store data", "To run applications"],
                    correct: 1,
                    explanation: "The main purpose of an operating system is to manage the computer's hardware and software resources."
                },
                {
                    question: "Which of the following is not a type of loop in programming?",
                    options: ["For", "While", "Do-While", "Until"],
                    correct: 3,
                    explanation: "Until is not a standard loop in programming. The common loops are For, While, and Do-While."
                },
                {
                    question: "What is the purpose of the 'public' access modifier in Java?",
                    options: [
                        "To allow the class to be accessed by any other class",
                        "To restrict access to the class only within its package",
                        "To ensure the class is not inherited",
                        "To make the class accessible only by subclasses"
                    ],
                    correct: 0,
                    explanation: "'Public' access modifier allows a class to be accessed by any other class."
                },
                {
                    question: "What is the purpose of the 'this' keyword in Java?",
                    options: [
                        "Refers to the current object",
                        "Refers to the parent class",
                        "Refers to the method",
                        "Refers to the constructor"
                    ],
                    correct: 0,
                    explanation: "'This' refers to the current instance of the class."
                },
                {
                    question: "Which of the following is a feature of Object-Oriented Programming?",
                    options: [
                        "Encapsulation",
                        "Inheritance",
                        "Polymorphism",
                        "All of the above"
                    ],
                    correct: 3,
                    explanation: "All of these are core features of Object-Oriented Programming."
                },
                {
                    question: "Which of the following is not a valid variable name in Java?",
                    options: ["myVar", "1stVar", "var_1", "var1"],
                    correct: 1,
                    explanation: "Variable names cannot begin with a digit in Java."
                },
                {
                    question: "Which data structure is used to implement a priority queue?",
                    options: ["Array", "Stack", "Heap", "Linked List"],
                    correct: 2,
                    explanation: "A heap data structure is commonly used to implement a priority queue."
                },
                {
                    question: "What is the output of the following Java code snippet: int x = 5; System.out.println(x++);?",
                    options: ["5", "6", "7", "Error"],
                    correct: 0,
                    explanation: "The 'x++' operator prints the value of x before incrementing, so the output is 5."
                },
                {
                    question: "Which of the following is used to handle exceptions in Java?",
                    options: ["Try-Catch", "Throw-Catch", "If-Else", "Do-While"],
                    correct: 0,
                    explanation: "Try-Catch blocks are used to handle exceptions in Java."
                },
                {
                    question: "What is the difference between process and thread?",
                    options: [
                        "Process is lightweight, thread is heavyweight",
                        "Thread is lightweight, process is heavyweight",
                        "They are the same thing",
                        "Processes can't communicate"
                    ],
                    correct: 1,
                    explanation: "Threads are lightweight units of execution within a process, while processes are heavyweight and independent."
                },
                {
                    question: "Which sorting algorithm is generally the most efficient for large datasets?",
                    options: ["Bubble Sort", "Quick Sort", "Merge Sort", "Insertion Sort"],
                    correct: 2,
                    explanation: "Merge Sort is a divide-and-conquer algorithm that is efficient for large datasets with O(n log n) complexity."
                },
                {
                    question: "What is the difference between an abstract class and an interface in Java?",
                    options: [
                        "Abstract class can implement methods, interface cannot",
                        "Interface can implement methods, abstract class cannot",
                        "An interface can only have abstract methods",
                        "Both abstract class and interface are the same"
                    ],
                    correct: 0,
                    explanation: "An abstract class can have methods with implementations, while an interface cannot, except for default methods in Java 8."
                },
                {
                    question: "Which of the following is an example of a reference data type in Java?",
                    options: ["int", "boolean", "String", "char"],
                    correct: 2,
                    explanation: "String is a reference data type, whereas int, boolean, and char are primitive data types."
                },
                {
                    question: "What is a deadlock in multi-threading?",
                    options: [
                        "When two threads modify the same data simultaneously",
                        "When a process terminates unexpectedly",
                        "When the OS schedules threads inefficiently",
                        "When a thread waits indefinitely"
                    ],
                    correct: 0,
                    explanation: "A deadlock occurs when two or more threads are blocked forever because they are each waiting on each other."
                },
                {
                    question: "What is the time complexity of merge sort?",
                    options: ["O(n log n)", "O(n)", "O(log n)", "O(n²)"],
                    correct: 0,
                    explanation: "Merge sort has a time complexity of O(n log n), making it efficient for large datasets."
                },
                {
                    question: "Which of the following is a feature of functional programming?",
                    options: [
                        "State changes and mutable data",
                        "First-class functions",
                        "Loops and iteration",
                        "Object-oriented design"
                    ],
                    correct: 1,
                    explanation: "In functional programming, functions are first-class citizens, meaning they can be passed as arguments or returned as values."
                }
            ],

        },
        
    operatingSystem: {
                level1: [
                    {
                        question: "What is a deadlock?",
                        options: [
                            "When two processes wait for each other indefinitely",
                            "When a process is terminated",
                            "When CPU is idle",
                            "When memory is full"
                        ],
                        correct: 0,
                        explanation: "Deadlock occurs when two or more processes wait indefinitely for resources held by each other."
                    },
                    {
                        question: "What is virtual memory?",
                        options: [
                            "Using hard disk space as RAM",
                            "A type of cache",
                            "Physical RAM",
                            "CPU register"
                        ],
                        correct: 0,
                        explanation: "Virtual memory uses hard disk space to extend RAM, allowing programs to use more memory than physically available."
                    },
                    {
                        question: "Which scheduling algorithm is non-preemptive?",
                        options: ["Round Robin", "FCFS", "Priority Scheduling", "SJF"],
                        correct: 1,
                        explanation: "First Come First Serve (FCFS) is a non-preemptive scheduling algorithm."
                    },
                    {
                        question: "What is the purpose of a semaphore?",
                        options: [
                            "Process synchronization",
                            "Memory allocation",
                            "File management",
                            "CPU scheduling"
                        ],
                        correct: 0,
                        explanation: "Semaphores are used for process synchronization and controlling access to shared resources."
                    },
                    {
                        question: "What is thrashing in OS?",
                        options: [
                            "Excessive page swapping",
                            "CPU overload",
                            "Network congestion",
                            "Disk fragmentation"
                        ],
                        correct: 0,
                        explanation: "Thrashing occurs when there is excessive page swapping between memory and disk, degrading system performance."
                    },
                    {
                        question: "What is the purpose of the kernel in an operating system?",
                        options: [
                            "Manages system resources",
                            "Provides network connectivity",
                            "Performs input/output operations",
                            "Runs applications"
                        ],
                        correct: 0,
                        explanation: "The kernel is the core part of an operating system that manages system resources and provides essential services."
                    },
                    {
                        question: "What is a page fault?",
                        options: [
                            "When a page is not found in memory",
                            "When a page is accessed from disk",
                            "When memory is full",
                            "When a page is corrupted"
                        ],
                        correct: 0,
                        explanation: "A page fault occurs when a program accesses a page not currently in memory, requiring it to be loaded from disk."
                    },
                    {
                        question: "Which of the following is not a part of the operating system?",
                        options: ["Kernel", "Shell", "Compiler", "File System"],
                        correct: 2,
                        explanation: "The compiler is a separate program used to translate source code into machine code, not part of the OS."
                    },
                    {
                        question: "What is a process control block (PCB)?",
                        options: [
                            "A data structure containing information about a process",
                            "A memory region for storing processes",
                            "A type of file used for storing processes",
                            "A tool for debugging processes"
                        ],
                        correct: 0,
                        explanation: "A PCB is a data structure that stores information about a process such as its state, program counter, and resources."
                    },
                    {
                        question: "Which of the following is a process state in an operating system?",
                        options: ["Running", "Ready", "Blocked", "All of the above"],
                        correct: 3,
                        explanation: "Processes can be in several states including Running, Ready, and Blocked."
                    },
                    {
                        question: "What is an interrupt in an operating system?",
                        options: [
                            "A signal to the processor to stop executing the current program",
                            "A type of memory access",
                            "A process waiting for resources",
                            "A system error"
                        ],
                        correct: 0,
                        explanation: "An interrupt is a signal to the processor to stop executing the current program and attend to a different task."
                    },
                    {
                        question: "Which is the highest priority scheduling algorithm?",
                        options: ["Shortest Job First", "Round Robin", "First Come First Serve", "Priority Scheduling"],
                        correct: 3,
                        explanation: "Priority Scheduling assigns priorities to processes, and the highest priority process is scheduled first."
                    },
                    {
                        question: "What is a fork system call?",
                        options: [
                            "Creates a new process",
                            "Terminates a process",
                            "Suspends a process",
                            "Releases a process from the ready queue"
                        ],
                        correct: 0,
                        explanation: "The fork system call creates a new process by duplicating the calling process."
                    },
                    {
                        question: "What does the term 'context switch' refer to?",
                        options: [
                            "Switching between user and kernel modes",
                            "Changing the execution context of a process",
                            "Switching between threads",
                            "Changing the state of a process"
                        ],
                        correct: 1,
                        explanation: "A context switch refers to the process of saving the state of the currently executing process and loading the state of the next process."
                    },
                    {
                        question: "Which of the following is not a part of the memory hierarchy?",
                        options: ["Registers", "Cache", "Hard Drive", "GPU"],
                        correct: 3,
                        explanation: "GPU is a specialized processing unit, not part of the memory hierarchy which includes registers, cache, and hard drive."
                    },
                    {
                        question: "What is the role of a device driver?",
                        options: [
                            "To manage communication between the OS and hardware devices",
                            "To schedule processes",
                            "To control memory allocation",
                            "To execute applications"
                        ],
                        correct: 0,
                        explanation: "Device drivers allow the operating system to communicate with and control hardware devices."
                    },
                    {
                        question: "Which of the following is true about a multithreaded process?",
                        options: [
                            "Each thread has its own memory space",
                            "Threads share the same memory space",
                            "Each thread is a separate process",
                            "Threads do not require synchronization"
                        ],
                        correct: 1,
                        explanation: "Threads within a process share the same memory space, which allows for efficient communication but requires synchronization."
                    },
                    {
                        question: "What is the function of the file system in an operating system?",
                        options: [
                            "Manages files and directories",
                            "Handles input/output operations",
                            "Manages network connections",
                            "Schedules processes"
                        ],
                        correct: 0,
                        explanation: "The file system organizes and manages files and directories in an operating system."
                    },
                    {
                        question: "Which type of scheduling algorithm is Round Robin?",
                        options: ["Preemptive", "Non-preemptive", "Both", "None"],
                        correct: 0,
                        explanation: "Round Robin is a preemptive scheduling algorithm where each process is assigned a fixed time slice."
                    },
                    {
                        question: "What is the purpose of a memory manager in an operating system?",
                        options: [
                            "To allocate and deallocate memory to processes",
                            "To perform garbage collection",
                            "To maintain the file system",
                            "To schedule CPU tasks"
                        ],
                        correct: 0,
                        explanation: "The memory manager is responsible for allocating and deallocating memory to processes."
                    },
                    {
                        question: "Which of the following is not an example of an operating system?",
                        options: ["Linux", "Windows", "MacOS", "Java"],
                        correct: 3,
                        explanation: "Java is a programming language, not an operating system."
                    },
                    {
                        question: "Which of the following is a type of memory management technique?",
                        options: [
                            "Paging",
                            "Segmentation",
                            "Fragmentation",
                            "All of the above"
                        ],
                        correct: 3,
                        explanation: "Paging, segmentation, and fragmentation are all memory management techniques used in operating systems."
                    },
                    {
                        question: "What is the function of an operating system's I/O manager?",
                        options: [
                            "Handles input and output devices",
                            "Manages memory",
                            "Schedules processes",
                            "Controls network traffic"
                        ],
                        correct: 0,
                        explanation: "The I/O manager controls communication between the OS and input/output devices."
                    },
                    {
                        question: "What is the result of a process entering the 'zombie' state?",
                        options: [
                            "The process is still running",
                            "The process is waiting for resources",
                            "The process has completed execution but its information is still retained by the OS",
                            "The process has been terminated"
                        ],
                        correct: 2,
                        explanation: "A zombie process has completed execution but still has an entry in the process table."
                    },
                    {
                        question: "What is a race condition in concurrent programming?",
                        options: [
                            "When two threads modify the same data simultaneously",
                            "When a process terminates unexpectedly",
                            "When the OS schedules threads inefficiently",
                            "When a thread waits indefinitely"
                        ],
                        correct: 0,
                        explanation: "A race condition occurs when two or more threads try to access and modify shared data at the same time, leading to unpredictable results."
                    },
                    {
                        question: "What is the purpose of a watchdog timer in operating systems?",
                        options: [
                            "To monitor the system's performance",
                            "To ensure the system does not hang or crash",
                            "To schedule processes",
                            "To manage memory"
                        ],
                        correct: 1,
                        explanation: "A watchdog timer monitors the system and ensures it does not hang or crash by resetting the system if necessary."
                    },
                    {
                        question: "Which of the following is true about an operating system's scheduling policy?",
                        options: [
                            "It determines the order in which processes are executed",
                            "It is the same for all systems",
                            "It only affects CPU-bound processes",
                            "It is always preemptive"
                        ],
                        correct: 0,
                        explanation: "An operating system's scheduling policy determines the order in which processes are executed based on factors such as priority and availability."
                    }
                ],

            },
        
    database: {
                    level1: [
                        {
                            question: "What is a primary key?",
                            options: [
                                "Unique identifier for a record",
                                "Foreign key reference",
                                "Table name",
                                "Column name"
                            ],
                            correct: 0,
                            explanation: "A primary key uniquely identifies each record in a database table."
                        },
                        {
                            question: "What is normalization?",
                            options: [
                                "Process of organizing data to reduce redundancy",
                                "Adding more data to tables",
                                "Deleting data from tables",
                                "Backing up database"
                            ],
                            correct: 0,
                            explanation: "Normalization is the process of organizing data to minimize redundancy and dependency."
                        },
                        {
                            question: "What is ACID in database transactions?",
                            options: [
                                "Atomicity, Consistency, Isolation, Durability",
                                "Array, Cursor, Index, Data",
                                "Access, Create, Insert, Delete",
                                "Admin, Create, Insert, Drop"
                            ],
                            correct: 0,
                            explanation: "ACID stands for Atomicity, Consistency, Isolation, and Durability - properties of database transactions."
                        },
                        {
                            question: "What is a foreign key?",
                            options: [
                                "A field that uniquely identifies a record",
                                "A field that links to the primary key in another table",
                                "A field that stores the table name",
                                "A field that contains the values for the entire row"
                            ],
                            correct: 1,
                            explanation: "A foreign key is a field in a table that links to the primary key of another table, establishing a relationship between the two."
                        },
                        {
                            question: "What is a relational database?",
                            options: [
                                "A database with tables that relate to each other",
                                "A database with no tables",
                                "A database that stores data as documents",
                                "A database for storing files"
                            ],
                            correct: 0,
                            explanation: "A relational database stores data in tables, with relationships between tables established using primary and foreign keys."
                        },
                        {
                            question: "What is SQL?",
                            options: [
                                "Structured Query Language",
                                "System Query Language",
                                "Standard Question Language",
                                "Structured Query Link"
                            ],
                            correct: 0,
                            explanation: "SQL stands for Structured Query Language, a language used to manage and manipulate relational databases."
                        },
                        {
                            question: "Which command is used to retrieve data from a database?",
                            options: [
                                "SELECT",
                                "GET",
                                "FETCH",
                                "RETRIEVE"
                            ],
                            correct: 0,
                            explanation: "The SELECT command is used to retrieve data from a database."
                        },
                        {
                            question: "What is a join in SQL?",
                            options: [
                                "Combining two or more tables to retrieve related data",
                                "A condition for selecting data",
                                "A way to update a table",
                                "A process of deleting a table"
                            ],
                            correct: 0,
                            explanation: "A join in SQL is used to combine data from two or more tables based on a related column, typically a foreign key."
                        },
                        {
                            question: "What does 'NULL' represent in a database?",
                            options: [
                                "An empty field",
                                "A zero value",
                                "A missing or unknown value",
                                "A string value"
                            ],
                            correct: 2,
                            explanation: "'NULL' represents a missing or unknown value in a database field."
                        },
                        {
                            question: "What is a database index?",
                            options: [
                                "A way to organize tables",
                                "A search optimization mechanism",
                                "A backup for data",
                                "A method for deleting records"
                            ],
                            correct: 1,
                            explanation: "A database index is used to optimize the search process by allowing quick retrieval of data based on specific columns."
                        },
                        {
                            question: "What is a schema in a database?",
                            options: [
                                "The structure or blueprint of a database",
                                "A type of data in a table",
                                "A method for deleting data",
                                "A storage device for databases"
                            ],
                            correct: 0,
                            explanation: "A schema defines the structure or blueprint of a database, including tables, fields, and relationships."
                        },
                        {
                            question: "What is a stored procedure?",
                            options: [
                                "A precompiled SQL query that can be executed by the database",
                                "A method to insert data",
                                "A temporary table in a database",
                                "A command to back up the database"
                            ],
                            correct: 0,
                            explanation: "A stored procedure is a precompiled SQL query that is stored and executed in the database."
                        },
                        {
                            question: "What is the purpose of a transaction in a database?",
                            options: [
                                "To manage changes to the database as a single unit",
                                "To store user data",
                                "To schedule backups",
                                "To organize indexes"
                            ],
                            correct: 0,
                            explanation: "A transaction ensures that database operations are performed as a single unit, maintaining data consistency."
                        },
                        {
                            question: "What does 'referential integrity' refer to?",
                            options: [
                                "The consistency and accuracy of data across related tables",
                                "The uniqueness of primary keys",
                                "The method for organizing data",
                                "The encryption of sensitive data"
                            ],
                            correct: 0,
                            explanation: "Referential integrity ensures that relationships between tables are maintained, typically through the use of foreign keys."
                        },
                        {
                            question: "What is a data type in a database?",
                            options: [
                                "Defines the kind of data a field can hold",
                                "A way to store data",
                                "A command for inserting data",
                                "A method for accessing data"
                            ],
                            correct: 0,
                            explanation: "A data type defines the kind of data that can be stored in a field, such as integer, varchar, or date."
                        },
                        {
                            question: "What is the purpose of a view in a database?",
                            options: [
                                "To present data from one or more tables as a virtual table",
                                "To store data permanently",
                                "To speed up data retrieval",
                                "To delete data"
                            ],
                            correct: 0,
                            explanation: "A view is a virtual table that presents data from one or more tables based on a predefined query."
                        },
                        {
                            question: "What is the difference between a primary key and a unique key?",
                            options: [
                                "A primary key cannot have NULL values, while a unique key can",
                                "A unique key cannot have NULL values, while a primary key can",
                                "Both allow NULL values",
                                "A unique key can be used as a foreign key"
                            ],
                            correct: 0,
                            explanation: "A primary key cannot have NULL values, while a unique key can allow one NULL value but ensures all other values are unique."
                        },
                        {
                            question: "What does SQL 'GROUP BY' do?",
                            options: [
                                "Groups rows that have the same values in specified columns",
                                "Sorts data",
                                "Filters records",
                                "Updates data"
                            ],
                            correct: 0,
                            explanation: "The 'GROUP BY' clause is used to group rows that have the same values in specified columns."
                        },
                        {
                            question: "What is a composite key?",
                            options: [
                                "A key made of two or more columns",
                                "A primary key with additional constraints",
                                "A foreign key linking multiple tables",
                                "A temporary key"
                            ],
                            correct: 0,
                            explanation: "A composite key consists of two or more columns that uniquely identify a record in a table."
                        },
                        {
                            question: "What is a data warehouse?",
                            options: [
                                "A central repository for storing large amounts of data",
                                "A storage unit for database backups",
                                "A device for indexing data",
                                "A tool for querying data"
                            ],
                            correct: 0,
                            explanation: "A data warehouse is a large centralized repository for storing data from different sources for analysis and reporting."
                        },
                        {
                            question: "What does SQL 'ORDER BY' do?",
                            options: [
                                "Sorts data based on one or more columns",
                                "Filters data",
                                "Groups data",
                                "Deletes data"
                            ],
                            correct: 0,
                            explanation: "The 'ORDER BY' clause is used to sort the result set based on one or more columns, either ascending or descending."
                        },
                        {
                            question: "What is a subquery?",
                            options: [
                                "A query embedded inside another query",
                                "A type of table",
                                "A stored procedure",
                                "A database backup"
                            ],
                            correct: 0,
                            explanation: "A subquery is a query embedded inside another query, typically used in the WHERE or HAVING clauses."
                        },
                        {
                            question: "What is a trigger in a database?",
                            options: [
                                "A database object that automatically executes a predefined action when certain conditions are met",
                                "A stored procedure that handles errors",
                                "A method for indexing data",
                                "A command to back up the database"
                            ],
                            correct: 0,
                            explanation: "A trigger automatically executes a predefined action in response to certain events in the database."
                        },
                        {
                            question: "What is a constraint in a database?",
                            options: [
                                "A rule that restricts the type of data that can be stored in a table",
                                "A method for retrieving data",
                                "A tool for creating indexes",
                                "A mechanism for backups"
                            ],
                            correct: 0,
                            explanation: "A constraint is a rule that restricts the type of data that can be stored in a column or table, such as unique or not null constraints."
                        }
                    ]
    },
                
    git: {
            level1: [
                {
                    question: "What does 'git clone' do?",
                    options: [
                        "Creates a copy of a repository",
                        "Deletes a repository",
                        "Updates a repository",
                        "Lists all repositories"
                    ],
                    correct: 0,
                    explanation: "git clone creates a copy of a remote repository on your local machine."
                },
                {
                    question: "What is the purpose of 'git commit'?",
                    options: [
                        "Save changes to local repository",
                        "Download changes",
                        "Upload changes",
                        "Delete changes"
                    ],
                    correct: 0,
                    explanation: "git commit saves your changes to the local repository with a descriptive message."
                },
                {
                    question: "What does 'git push' do?",
                    options: [
                        "Upload local commits to remote",
                        "Download updates",
                        "Create new branch",
                        "Delete branch"
                    ],
                    correct: 0,
                    explanation: "git push uploads your local commits to the remote repository."
                },
                {
                    question: "What is 'git pull' used for?",
                    options: [
                        "Fetch and merge changes from remote to local repository",
                        "Push changes from local to remote",
                        "Delete a branch",
                        "Clone a repository"
                    ],
                    correct: 0,
                    explanation: "git pull fetches and merges changes from a remote repository to your local repository."
                },
                {
                    question: "What is a 'branch' in Git?",
                    options: [
                        "A pointer to a specific commit",
                        "A new remote repository",
                        "A backup of the repository",
                        "A way to share files"
                    ],
                    correct: 0,
                    explanation: "A branch in Git is a pointer to a specific commit, allowing multiple development paths."
                },
                {
                    question: "What does 'git status' show?",
                    options: [
                        "The current state of the working directory and staging area",
                        "The changes committed to the repository",
                        "All remote repositories",
                        "A list of all branches"
                    ],
                    correct: 0,
                    explanation: "git status shows the current state of the working directory and staging area, indicating modified files."
                },
                {
                    question: "What is a 'commit' in Git?",
                    options: [
                        "A snapshot of changes in the repository",
                        "A request to merge branches",
                        "A way to store remote repositories",
                        "A file that contains version history"
                    ],
                    correct: 0,
                    explanation: "A commit in Git is a snapshot of changes in the repository, used to record and track the history of a project."
                },
                {
                    question: "What is 'git merge' used for?",
                    options: [
                        "Combining changes from different branches",
                        "Deleting a branch",
                        "Creating a new commit",
                        "Reverting to a previous commit"
                    ],
                    correct: 0,
                    explanation: "git merge is used to combine changes from different branches into one branch."
                },
                {
                    question: "What is 'git diff' used for?",
                    options: [
                        "Show differences between the working directory and staged files",
                        "Display the commit history",
                        "Delete a branch",
                        "Fetch new branches from a remote repository"
                    ],
                    correct: 0,
                    explanation: "git diff shows the differences between the working directory and staged files, helping to review changes."
                },
                {
                    question: "What does 'git log' show?",
                    options: [
                        "The commit history",
                        "The current status of files",
                        "List of branches in the repository",
                        "The files that have been deleted"
                    ],
                    correct: 0,
                    explanation: "git log shows the commit history, displaying a list of commits with information like commit ID, author, and message."
                },
                {
                    question: "What is the purpose of 'git remote'?",
                    options: [
                        "To manage remote repositories",
                        "To show the status of the local repository",
                        "To push changes to a branch",
                        "To view differences between commits"
                    ],
                    correct: 0,
                    explanation: "git remote is used to manage remote repositories, allowing you to fetch, push, and list remote repositories."
                },
                {
                    question: "What does 'git reset' do?",
                    options: [
                        "Unstage changes or reset the repository to a previous commit",
                        "Delete a branch",
                        "Merge two branches",
                        "Create a new remote repository"
                    ],
                    correct: 0,
                    explanation: "git reset is used to unstage changes or reset the repository to a previous commit, removing changes from the staging area."
                },
                {
                    question: "What does 'git init' do?",
                    options: [
                        "Initializes a new Git repository",
                        "Clone a remote repository",
                        "List all Git repositories",
                        "Create a new branch"
                    ],
                    correct: 0,
                    explanation: "git init initializes a new Git repository in the current directory, starting version control for your project."
                },
                {
                    question: "What is a 'fork' in Git?",
                    options: [
                        "A copy of a repository from a remote location",
                        "A new commit to a branch",
                        "A new file created in the repository",
                        "A local branch"
                    ],
                    correct: 0,
                    explanation: "A fork in Git is a copy of a repository from a remote location, often used for contributing to open-source projects."
                },
                {
                    question: "What does 'git rebase' do?",
                    options: [
                        "Reapply commits on top of another base commit",
                        "Merge two branches",
                        "Create a new commit",
                        "Push changes to a remote repository"
                    ],
                    correct: 0,
                    explanation: "git rebase is used to apply commits on top of another base commit, often used to integrate changes from one branch into another."
                },
                {
                    question: "What does 'git tag' do?",
                    options: [
                        "Creates a label for a specific commit",
                        "Deletes a commit",
                        "Lists remote repositories",
                        "Tags a file for staging"
                    ],
                    correct: 0,
                    explanation: "git tag is used to create a label for a specific commit, often used to mark release points."
                },
                {
                    question: "What is 'git stash' used for?",
                    options: [
                        "Temporarily saves changes that are not ready to commit",
                        "Create a new branch",
                        "Push local changes to remote",
                        "View the history of a repository"
                    ],
                    correct: 0,
                    explanation: "git stash is used to temporarily save changes that are not yet ready to commit, allowing you to work on something else."
                },
                {
                    question: "What is 'git fetch' used for?",
                    options: [
                        "Downloads updates from a remote repository without merging",
                        "Pushes changes to a remote repository",
                        "Lists all branches",
                        "Deletes a local branch"
                    ],
                    correct: 0,
                    explanation: "git fetch downloads updates from a remote repository without merging them into your local branch."
                },
                {
                    question: "What is the purpose of 'git branch'?",
                    options: [
                        "List, create, or delete branches",
                        "Push changes to remote",
                        "Fetch updates from remote",
                        "Commit changes"
                    ],
                    correct: 0,
                    explanation: "git branch is used to list, create, or delete branches in a Git repository."
                }
            ]
        },    


    cmd: {
            level1: [
                {
                    question: "What command shows the current directory?",
                    options: ["pwd", "cd", "ls", "dir"],
                    correct: 0,
                    explanation: "pwd (print working directory) shows the current directory path."
                },
                {
                    question: "Which command changes directory?",
                    options: ["cd", "pwd", "ls", "mkdir"],
                    correct: 0,
                    explanation: "cd (change directory) is used to navigate between directories."
                },
                {
                    question: "What command creates a new directory?",
                    options: ["mkdir", "touch", "rm", "cp"],
                    correct: 0,
                    explanation: "mkdir (make directory) creates a new directory."
                },
                {
                    question: "What command lists files and directories?",
                    options: ["ls", "cd", "pwd", "dir"],
                    correct: 0,
                    explanation: "ls lists files and directories in the current directory."
                },
                {
                    question: "What command removes a file?",
                    options: ["rm", "del", "rmdir", "touch"],
                    correct: 0,
                    explanation: "rm removes a file or directory."
                },
                {
                    question: "Which command shows the contents of a file?",
                    options: ["cat", "echo", "more", "less"],
                    correct: 0,
                    explanation: "cat displays the content of a file."
                },
                {
                    question: "Which command moves or renames files or directories?",
                    options: ["mv", "cp", "rm", "touch"],
                    correct: 0,
                    explanation: "mv is used to move or rename files and directories."
                },
                {
                    question: "What command copies files or directories?",
                    options: ["cp", "mv", "rm", "mkdir"],
                    correct: 0,
                    explanation: "cp is used to copy files or directories."
                },
                {
                    question: "What command displays the system date and time?",
                    options: ["date", "time", "clock", "datetime"],
                    correct: 0,
                    explanation: "date displays the current system date and time."
                },
                {
                    question: "What command displays information about the system's CPU?",
                    options: ["top", "ps", "uname", "lscpu"],
                    correct: 3,
                    explanation: "lscpu shows detailed information about the CPU architecture."
                },
                {
                    question: "What command is used to check disk space usage?",
                    options: ["df", "du", "ls", "df -h"],
                    correct: 0,
                    explanation: "df shows the amount of disk space used and available on filesystems."
                },
                {
                    question: "What command is used to check memory usage?",
                    options: ["free", "df", "top", "ps"],
                    correct: 0,
                    explanation: "free displays the amount of free and used memory in the system."
                },
                {
                    question: "Which command is used to change file permissions?",
                    options: ["chmod", "chown", "chgrp", "touch"],
                    correct: 0,
                    explanation: "chmod changes file or directory permissions."
                },
                {
                    question: "Which command is used to display the manual pages for commands?",
                    options: ["man", "help", "info", "docs"],
                    correct: 0,
                    explanation: "man displays the manual pages for various commands."
                },
                {
                    question: "Which command is used to search for files or directories?",
                    options: ["find", "locate", "grep", "search"],
                    correct: 0,
                    explanation: "find searches for files and directories based on criteria."
                },
                {
                    question: "What command terminates a running process?",
                    options: ["kill", "ps", "stop", "end"],
                    correct: 0,
                    explanation: "kill terminates a running process by its process ID."
                },
                {
                    question: "What command displays the last login history?",
                    options: ["last", "history", "login", "who"],
                    correct: 0,
                    explanation: "last shows the login history of users on the system."
                },
                {
                    question: "Which command is used to show the network status?",
                    options: ["netstat", "ifconfig", "ping", "route"],
                    correct: 0,
                    explanation: "netstat displays network connections, routing tables, and other network statistics."
                },
                {
                    question: "What command is used to check network interfaces?",
                    options: ["ifconfig", "netstat", "ping", "ip"],
                    correct: 0,
                    explanation: "ifconfig shows details about network interfaces."
                },
                {
                    question: "What command is used to display the current working directory?",
                    options: ["pwd", "ls", "dir", "cd"],
                    correct: 0,
                    explanation: "pwd (print working directory) shows the current directory."
                },
                {
                    question: "What command is used to compare two files line by line?",
                    options: ["diff", "cmp", "compare", "check"],
                    correct: 0,
                    explanation: "diff compares two files line by line and shows the differences."
                },
                {
                    question: "Which command is used to download files from the internet?",
                    options: ["wget", "curl", "ftp", "scp"],
                    correct: 0,
                    explanation: "wget is used to download files from the internet."
                },
                {
                    question: "What command is used to extract compressed files?",
                    options: ["tar", "zip", "gunzip", "unzip"],
                    correct: 0,
                    explanation: "tar is used to create and extract compressed archive files."
                },
                {
                    question: "Which command is used to change the owner of a file?",
                    options: ["chown", "chmod", "chgrp", "chdir"],
                    correct: 0,
                    explanation: "chown changes the owner of a file or directory."
                },
                {
                    question: "What command is used to view the contents of a directory?",
                    options: ["ls", "cd", "dir", "find"],
                    correct: 0,
                    explanation: "ls is used to view the contents of a directory."
                },
                {
                    question: "What command is used to display the path of a command?",
                    options: ["which", "whereis", "find", "locate"],
                    correct: 0,
                    explanation: "which shows the path of a command in the system."
                },
                {
                    question: "What command is used to display the current user?",
                    options: ["whoami", "who", "id", "whois"],
                    correct: 0,
                    explanation: "whoami displays the username of the current user."
                },
                {
                    question: "What command is used to display all active processes?",
                    options: ["ps", "top", "jobs", "tasklist"],
                    correct: 0,
                    explanation: "ps shows the current processes running on the system."
                },
                {
                    question: "What command is used to search for text inside files?",
                    options: ["grep", "find", "locate", "search"],
                    correct: 0,
                    explanation: "grep searches for patterns within files."
                },
                {
                    question: "What command is used to redirect output to a file?",
                    options: [">", "|", "<", "&"],
                    correct: 0,
                    explanation: "> redirects the output of a command to a file."
                },
                {
                    question: "What command is used to display the environment variables?",
                    options: ["env", "set", "echo", "printenv"],
                    correct: 0,
                    explanation: "env displays the environment variables in the system."
                },
                {
                    question: "Which command is used to show the available disk space?",
                    options: ["df", "du", "ls", "disk"],
                    correct: 0,
                    explanation: "df shows the available disk space on filesystems."
                },
                {
                    question: "What command is used to display the network routing table?",
                    options: ["route", "netstat", "ip", "traceroute"],
                    correct: 0,
                    explanation: "route displays the system's network routing table."
                },
                {
                    question: "What command is used to send a test packet to a network address?",
                    options: ["ping", "traceroute", "netstat", "nslookup"],
                    correct: 0,
                    explanation: "ping sends a test packet to a network address to check connectivity."
                },
                {
                    question: "What command is used to create a symbolic link?",
                    options: ["ln -s", "cp", "mv", "ln"],
                    correct: 0,
                    explanation: "ln -s creates a symbolic link (symlink) to a file or directory."
                },
                {
                    question: "Which command is used to sort the contents of a file?",
                    options: ["sort", "order", "arrange", "rank"],
                    correct: 0,
                    explanation: "sort sorts the lines of a file in a specified order."
                },
                {
                    question: "What command is used to view the process status in real time?",
                    options: ["top", "ps", "kill", "jobs"],
                    correct: 0,
                    explanation: "top displays the status of running processes in real time."
                },
                {
                    question: "What command is used to print the contents of a file to the terminal?",
                    options: ["cat", "echo", "print", "list"],
                    correct: 0,
                    explanation: "cat displays the content of a file."
                },
                {
                    question: "What command is used to display the users logged in to the system?",
                    options: ["who", "users", "w", "whoami"],
                    correct: 0,
                    explanation: "who shows the list of users currently logged into the system."
                },
                {
                    question: "What command is used to check if a file or directory exists?",
                    options: ["test", "ls", "find", "check"],
                    correct: 0,
                    explanation: "test checks if a file or directory exists."
                },
                {
                    question: "What command is used to make an empty file?",
                    options: ["touch", "mkdir", "create", "file"],
                    correct: 0,
                    explanation: "touch is used to create an empty file."
                },
                {
                    question: "What command is used to count the number of lines, words, and characters in a file?",
                    options: ["wc", "count", "cat", "stat"],
                    correct: 0,
                    explanation: "wc (word count) is used to count lines, words, and characters in a file."
                }
            ]
        },
        

    dsa: {
            level1: [
                {
                    question: "What is the time complexity of binary search?",
                    options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
                    correct: 1,
                    explanation: "Binary search has a time complexity of O(log n) as it divides the search space in half each time."
                },
                {
                    question: "Which data structure uses FIFO (First In First Out) principle?",
                    options: ["Stack", "Queue", "Tree", "Graph"],
                    correct: 1,
                    explanation: "Queue follows FIFO principle where the first element added is the first one to be removed."
                },
                {
                    question: "What is the space complexity of a recursive fibonacci function?",
                    options: ["O(1)", "O(n)", "O(log n)", "O(2ⁿ)"],
                    correct: 1,
                    explanation: "The recursive fibonacci function uses O(n) space due to the call stack."
                },
                {
                    question: "Which sorting algorithm has the worst time complexity?",
                    options: ["Quick Sort", "Merge Sort", "Bubble Sort", "Heap Sort"],
                    correct: 2,
                    explanation: "Bubble Sort has O(n²) time complexity in worst and average cases."
                },
                {
                    question: "What is the main advantage of a hash table?",
                    options: [
                        "O(1) average case for insertions and lookups",
                        "Maintains sorted order",
                        "Uses less memory than arrays",
                        "Better for sequential access"
                    ],
                    correct: 0,
                    explanation: "Hash tables provide O(1) average time complexity for insertions and lookups."
                },
                {
                    question: "What is the time complexity of heapify operation?",
                    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
                    correct: 1,
                    explanation: "Heapify operation takes O(log n) time as it moves down the height of the heap."
                },
                {
                    question: "Which of these is not a balanced tree?",
                    options: ["AVL Tree", "Red-Black Tree", "Binary Search Tree", "B-Tree"],
                    correct: 2,
                    explanation: "A regular Binary Search Tree is not guaranteed to be balanced."
                },
                {
                    question: "What is the space complexity of DFS on a graph?",
                    options: ["O(V)", "O(E)", "O(V + E)", "O(1)"],
                    correct: 0,
                    explanation: "DFS uses O(V) space for the recursion stack in worst case, where V is number of vertices."
                },
                {
                    question: "Which sorting algorithm has the best time complexity in the average case?",
                    options: ["Quick Sort", "Bubble Sort", "Insertion Sort", "Merge Sort"],
                    correct: 0,
                    explanation: "Quick Sort has an average case time complexity of O(n log n)."
                },
                {
                    question: "Which data structure is used to implement recursion?",
                    options: ["Stack", "Queue", "Linked List", "Array"],
                    correct: 0,
                    explanation: "A stack is used to store the function calls in recursion."
                },
                {
                    question: "What is the time complexity of accessing an element in an array?",
                    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
                    correct: 0,
                    explanation: "Array access has a time complexity of O(1), as elements can be accessed directly using an index."
                },
                {
                    question: "What is the time complexity of insertion in a doubly linked list?",
                    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
                    correct: 0,
                    explanation: "Insertion in a doubly linked list has a time complexity of O(1) if the position is known."
                },
                {
                    question: "What is the time complexity of quicksort in the worst case?",
                    options: ["O(n log n)", "O(n²)", "O(log n)", "O(n)"],
                    correct: 1,
                    explanation: "In the worst case, quicksort has a time complexity of O(n²), when the pivot divides the array unevenly."
                },
                {
                    question: "Which data structure is ideal for implementing a priority queue?",
                    options: ["Heap", "Queue", "Stack", "Linked List"],
                    correct: 0,
                    explanation: "A heap is an efficient data structure for implementing a priority queue."
                },
                {
                    question: "What is the time complexity of searching for an element in a binary search tree?",
                    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
                    correct: 1,
                    explanation: "In a balanced binary search tree, searching has a time complexity of O(log n)."
                },
                {
                    question: "What is the space complexity of a linked list?",
                    options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
                    correct: 0,
                    explanation: "The space complexity of a linked list is O(n), where n is the number of nodes."
                },
                {
                    question: "Which of these is not a stable sorting algorithm?",
                    options: ["Merge Sort", "Quick Sort", "Bubble Sort", "Insertion Sort"],
                    correct: 1,
                    explanation: "Quick Sort is not a stable sorting algorithm, as it may reorder equal elements."
                },
                {
                    question: "What is the worst-case time complexity of bubble sort?",
                    options: ["O(n)", "O(log n)", "O(n log n)", "O(n²)"],
                    correct: 3,
                    explanation: "Bubble sort has a worst-case time complexity of O(n²)."
                },
                {
                    question: "Which data structure allows efficient search, insert, and delete operations?",
                    options: ["Hash Table", "Array", "Linked List", "Queue"],
                    correct: 0,
                    explanation: "Hash tables allow O(1) average time complexity for search, insert, and delete operations."
                },
                {
                    question: "Which algorithm is used to find the shortest path in a weighted graph?",
                    options: ["Dijkstra's Algorithm", "DFS", "Bubble Sort", "Merge Sort"],
                    correct: 0,
                    explanation: "Dijkstra's algorithm is used to find the shortest path in a weighted graph."
                },
                {
                    question: "What is the space complexity of an array?",
                    options: ["O(1)", "O(n)", "O(n²)", "O(log n)"],
                    correct: 1,
                    explanation: "An array uses O(n) space, where n is the number of elements."
                },
                {
                    question: "Which data structure is used in the implementation of Depth First Search?",
                    options: ["Stack", "Queue", "Tree", "Array"],
                    correct: 0,
                    explanation: "DFS uses a stack (either explicitly or via recursion) to traverse the graph."
                },
                {
                    question: "Which algorithm is commonly used for sorting large datasets?",
                    options: ["Merge Sort", "Quick Sort", "Insertion Sort", "Bubble Sort"],
                    correct: 0,
                    explanation: "Merge Sort is often used for sorting large datasets due to its O(n log n) time complexity."
                },
                {
                    question: "What is the time complexity of searching for an element in an unsorted array?",
                    options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
                    correct: 0,
                    explanation: "In an unsorted array, searching has a time complexity of O(n)."
                },
                {
                    question: "What is the time complexity of deleting an element from a singly linked list?",
                    options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
                    correct: 1,
                    explanation: "In a singly linked list, deleting an element requires O(n) time to find the element."
                },
                {
                    question: "Which of the following is an example of a greedy algorithm?",
                    options: ["Knapsack Problem", "Dijkstra's Algorithm", "Merge Sort", "Quick Sort"],
                    correct: 1,
                    explanation: "Dijkstra's Algorithm is a greedy algorithm for finding the shortest path in a graph."
                },
                {
                    question: "Which data structure is used for implementing an adjacency matrix?",
                    options: ["2D Array", "Linked List", "Hash Table", "Stack"],
                    correct: 0,
                    explanation: "An adjacency matrix is typically implemented using a 2D array."
                },
                {
                    question: "What is the time complexity of the insert operation in a binary search tree?",
                    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
                    correct: 1,
                    explanation: "In a balanced binary search tree, the insert operation has a time complexity of O(log n)."
                },
                {
                    question: "What is the time complexity of merge sort in the worst case?",
                    options: ["O(n log n)", "O(n)", "O(n²)", "O(log n)"],
                    correct: 0,
                    explanation: "Merge Sort has a worst-case time complexity of O(n log n)."
                },
                {
                    question: "What is the time complexity of finding the minimum element in an unsorted array?",
                    options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
                    correct: 0,
                    explanation: "Finding the minimum element in an unsorted array takes O(n) time."
                },
                {
                    question: "What is the space complexity of an adjacency list representation of a graph?",
                    options: ["O(V)", "O(V + E)", "O(E)", "O(1)"],
                    correct: 1,
                    explanation: "An adjacency list uses O(V + E) space, where V is the number of vertices and E is the number of edges."
                },
                {
                    question: "What is the time complexity of heap sort?",
                    options: ["O(n log n)", "O(n)", "O(log n)", "O(n²)"],
                    correct: 0,
                    explanation: "Heap Sort has a time complexity of O(n log n) in both average and worst cases."
                },
                {
                    question: "Which algorithm is used to solve the traveling salesman problem?",
                    options: ["Dynamic Programming", "Greedy Algorithm", "Brute Force", "All of the above"],
                    correct: 3,
                    explanation: "The traveling salesman problem can be solved using dynamic programming, greedy algorithm, or brute force."
                }
            ]
        }
        
};


// Level progression rules
const levelRules = {
    questionsPerLevel: 10,
    minCorrectToAdvance: 7
};
