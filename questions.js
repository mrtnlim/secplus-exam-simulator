const questions = [
{
    type: "mc",
    question: "Which control type is a firewall?",
    answers: [
        { text: "Detective", correct: false, why: "Detective controls identify incidents after they occur." },
        { text: "Preventive", correct: true, why: "Firewalls block unauthorized traffic before access is granted." },
        { text: "Corrective", correct: false, why: "Corrective controls fix issues after detection." },
        { text: "Compensating", correct: false, why: "Compensating controls are alternatives, not primary defenses." }
    ]
},
{
    type: "mc",
    question: "Which port does HTTPS use?",
    answers: [
        { text: "80", correct: false, why: "Port 80 is HTTP." },
        { text: "443", correct: true, why: "HTTPS uses TCP port 443." },
        { text: "22", correct: false, why: "Port 22 is SSH." },
        { text: "21", correct: false, why: "Port 21 is FTP." }
    ]
},
{
    type: "mc",
    question: "What attack uses fraudulent emails?",
    answers: [
        { text: "Phishing", correct: true, why: "Phishing uses deceptive emails to trick users." },
        { text: "DDoS", correct: false, why: "DDoS overwhelms resources." },
        { text: "SQL Injection", correct: false, why: "SQL injection targets databases." },
        { text: "MITM", correct: false, why: "MITM intercepts communications." }
    ]
},
{
    type: "mc",
    question: "Which authentication factor is something you are?",
    answers: [
        { text: "Password", correct: false, why: "Passwords are something you know." },
        { text: "Smart card", correct: false, why: "Smart cards are something you have." },
        { text: "Fingerprint", correct: true, why: "Biometrics are something you are." },
        { text: "PIN", correct: false, why: "PINs are knowledge-based." }
    ]
},
{
    type: "mc",
    question: "What does least privilege enforce?",
    answers: [
        { text: "Users get full access", correct: false, why: "This increases attack surface." },
        { text: "Minimum access required", correct: true, why: "Least privilege limits access to necessary resources only." },
        { text: "Admin-only access", correct: false, why: "Not all users need admin rights." },
        { text: "Temporary access", correct: false, why: "That is time-based access." }
    ]
}
];

// ADD MORE QUESTIONS UNTIL YOU REACH 90
// ===============================
// DOMAIN 1: GENERAL SECURITY CONCEPTS
// ===============================

{
type: "mc",
question: "Which principle ensures users are granted only the permissions required to perform their job duties?",
answers: [
{ text: "Separation of duties", correct: false, why: "Separation of duties divides responsibilities to prevent fraud." },
{ text: "Least privilege", correct: true, why: "Least privilege limits access to only what is necessary to perform a task." },
{ text: "Job rotation", correct: false, why: "Job rotation helps detect fraud but does not limit permissions." },
{ text: "Mandatory access control", correct: false, why: "MAC enforces access based on labels, not job needs." }
]
},

{
type: "mc",
question: "Which authentication factor is considered something you have?",
answers: [
{ text: "Password", correct: false, why: "Passwords are something you know." },
{ text: "Fingerprint", correct: false, why: "Fingerprints are something you are." },
{ text: "Smart card", correct: true, why: "Smart cards are physical objects you possess." },
{ text: "PIN", correct: false, why: "PINs are knowledge-based factors." }
]
},

{
type: "mc",
question: "Which security control type is a security guard?",
answers: [
{ text: "Preventive", correct: true, why: "Security guards deter and prevent unauthorized access." },
{ text: "Detective", correct: false, why: "Detective controls identify incidents after they occur." },
{ text: "Corrective", correct: false, why: "Corrective controls restore systems after incidents." },
{ text: "Technical", correct: false, why: "Security guards are an administrative/physical control." }
]
},

{
type: "mc",
question: "Which CIA triad principle is violated when data is altered without authorization?",
answers: [
{ text: "Confidentiality", correct: false, why: "Confidentiality protects data from unauthorized disclosure." },
{ text: "Availability", correct: false, why: "Availability ensures systems are accessible." },
{ text: "Integrity", correct: true, why: "Integrity ensures data is accurate and unaltered." },
{ text: "Authentication", correct: false, why: "Authentication verifies identity." }
]
},

{
type: "mc",
question: "Which access control model assigns permissions based on data classification labels?",
answers: [
{ text: "RBAC", correct: false, why: "RBAC assigns permissions based on roles." },
{ text: "DAC", correct: false, why: "DAC allows owners to control access." },
{ text: "MAC", correct: true, why: "MAC uses security labels and classifications." },
{ text: "ABAC", correct: false, why: "ABAC uses attributes rather than labels." }
]
},

{
type: "mc",
question: "What is the primary purpose of hashing?",
answers: [
{ text: "Encrypt data", correct: false, why: "Hashing does not allow data to be recovered." },
{ text: "Ensure integrity", correct: true, why: "Hashes verify data has not been altered." },
{ text: "Provide confidentiality", correct: false, why: "Confidentiality is achieved through encryption." },
{ text: "Authenticate users", correct: false, why: "Authentication requires credentials." }
]
},

{
type: "mc",
question: "Which type of malware demands payment to restore access to data?",
answers: [
{ text: "Spyware", correct: false, why: "Spyware monitors user activity." },
{<span class="ml-2" /><span class="inline-block w-3 h-3 rounded-full bg-neutral-a12 align-middle mb-[0.1rem]" />
