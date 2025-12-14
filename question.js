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
},

// ===============================
// DOMAIN 3: SECURITY ARCHITECTURE & DESIGN
// ===============================

{
type: "mc",
question: "Which network design places public-facing servers in a separate subnet to reduce risk to internal systems?",
answers: [
{ text: "Intranet", correct: false, why: "An intranet is an internal private network." },
{ text: "DMZ", correct: true, why: "A DMZ isolates public-facing services from the internal network." },
{ text: "Extranet", correct: false, why: "An extranet provides limited access to external partners." },
{ text: "VLAN", correct: false, why: "VLANs logically segment networks but do not isolate internet-facing systems alone." }
]
}

];
