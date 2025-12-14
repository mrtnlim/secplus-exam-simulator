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
// ===============================
// DOMAIN 3: SECURITY ARCHITECTURE & DESIGN
// QUESTIONS 41–60
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
},

{
type: "mc",
question: "Which principle assumes no implicit trust for any user or device?",
answers: [
{ text: "Defense in depth", correct: false, why: "Defense in depth layers security controls." },
{ text: "Zero Trust", correct: true, why: "Zero Trust requires verification for every access request." },
{ text: "Least privilege", correct: false, why: "Least privilege limits access but does not remove trust assumptions." },
{ text: "Implicit deny", correct: false, why: "Implicit deny blocks traffic by default but is not a full trust model." }
]
},

{
type: "mc",
question: "Which technology encrypts data to protect it from unauthorized viewing if a device is lost?",
answers: [
{ text: "Data masking", correct: false, why: "Data masking hides data but does not encrypt it." },
{ text: "Full disk encryption", correct: true, why: "Full disk encryption protects data at rest." },
{ text: "Tokenization", correct: false, why: "Tokenization replaces data with tokens." },
{ text: "Hashing", correct: false, why: "Hashing is one-way and not reversible." }
]
},

{
type: "mc",
question: "Which architecture provides computing resources over the internet on demand?",
answers: [
{ text: "On-premises", correct: false, why: "On-premises systems are locally hosted." },
{ text: "Cloud computing", correct: true, why: "Cloud computing delivers resources on demand." },
{ text: "Edge computing", correct: false, why: "Edge computing processes data near the source." },
{ text: "Client-server", correct: false, why: "Client-server is a general network model." }
]
},

{
type: "mc",
question: "Which cloud service model provides the MOST customer control over the operating system?",
answers: [
{ text: "SaaS", correct: false, why: "SaaS provides minimal customer control." },
{ text: "PaaS", correct: false, why: "PaaS abstracts the OS from customers." },
{ text: "IaaS", correct: true, why: "IaaS allows customers to manage the OS and applications." },
{ text: "FaaS", correct: false, why: "FaaS abstracts infrastructure entirely." }
]
},

{
type: "mc",
question: "Which concept ensures multiple security controls protect a system?",
answers: [
{ text: "Least privilege", correct: false, why: "Least privilege limits access rights." },
{ text: "Defense in depth", correct: true, why: "Defense in depth layers multiple controls." },
{ text: "Zero Trust", correct: false, why: "Zero Trust verifies every access." },
{ text: "Fail secure", correct: false, why: "Fail secure ensures safe failure states." }
]
},

{
type: "mc",
question: "Which type of firewall filters traffic based on application-level data?",
answers: [
{ text: "Packet-filtering firewall", correct: false, why: "Packet filtering examines headers only." },
{ text: "Stateful firewall", correct: false, why: "Stateful firewalls track connections." },
{ text: "Next-generation firewall", correct: true, why: "NGFWs inspect application-layer traffic." },
{ text: "Proxy firewall", correct: false, why: "Proxy firewalls act as intermediaries." }
]
},

{
type: "mc",
question: "Which technology uses a secure tunnel over an untrusted network?",
answers: [
{ text: "SSL", correct: false, why: "SSL secures sessions, not tunnels." },
{ text: "VPN", correct: true, why: "VPNs create encrypted tunnels over public networks." },
{ text: "TLS", correct: false, why: "TLS secures communications." },
{ text: "SSH", correct: false, why: "SSH secures remote access sessions." }
]
},

{
type: "mc",
question: "Which architecture component is responsible for directing traffic to multiple servers?",
answers: [
{ text: "Firewall", correct: false, why: "Firewalls filter traffic." },
{ text: "Load balancer", correct: true, why: "Load balancers distribute traffic across servers." },
{ text: "Router", correct: false, why: "Routers forward packets between networks." },
{ text: "IDS", correct: false, why: "IDS detects suspicious activity." }
]
},

{
type: "mc",
question: "Which concept ensures a system defaults to a secure state when it fails?",
answers: [
{ text: "Fail open", correct: false, why: "Fail open allows access during failure." },
{ text: "Fail secure", correct: true, why: "Fail secure denies access when systems fail." },
{ text: "High availability", correct: false, why: "High availability ensures uptime." },
{ text: "Redundancy", correct: false, why: "Redundancy provides backup components." }
]
},

{
type: "mc",
question: "Which storage concept keeps copies of data in multiple locations?",
answers: [
{ text: "RAID", correct: false, why: "RAID provides disk redundancy locally." },
{ text: "Replication", correct: true, why: "Replication copies data across systems or locations." },
{ text: "Snapshots", correct: false, why: "Snapshots capture point-in-time data." },
{ text: "Archiving", correct: false, why: "Archiving stores infrequently accessed data." }
]
},

{
type: "mc",
question: "Which security design principle minimizes the attack surface?",
answers: [
{ text: "Least functionality", correct: true, why: "Least functionality removes unnecessary services." },
{ text: "Defense in depth", correct: false, why: "Defense in depth adds layers of controls." },
{ text: "Segmentation", correct: false, why: "Segmentation isolates networks." },
{ text: "Redundancy", correct: false, why: "Redundancy improves availability." }
]
},

{
type: "mc",
question: "Which solution provides authentication and accounting for network access?",
answers: [
{ text: "LDAP", correct: false, why: "LDAP provides directory services." },
{ text: "RADIUS", correct: true, why: "RADIUS supports AAA for network access." },
{ text: "Kerberos", correct: false, why: "Kerberos provides authentication." },
{ text: "TACACS+", correct: false, why: "TACACS+ is used for device administration." }
]
},

{
type: "mc",
question: "Which network segmentation method uses software-defined boundaries?",
answers: [
{ text: "VLAN", correct: false, why: "VLANs use logical segmentation at Layer 2." },
{ text: "Subnetting", correct: false, why: "Subnetting segments IP networks." },
{ text: "Microsegmentation", correct: true, why: "Microsegmentation uses software-defined controls." },
{ text: "DMZ", correct: false, why: "DMZs isolate public-facing services." }
]
},

{
type: "mc",
question: "Which cloud deployment model is shared by multiple organizations?",
answers: [
{ text: "Private cloud", correct: false, why: "Private clouds are dedicated to one organization." },
{ text: "Public cloud", correct: false, why: "Public clouds are shared by the general public." },
{ text: "Community cloud", correct: true, why: "Community clouds are shared by organizations with similar needs." },
{ text: "Hybrid cloud", correct: false, why: "Hybrid clouds combine multiple models." }
]
},

{
type: "mc",
question: "Which technology isolates applications to prevent conflicts?",
answers: [
{ text: "Virtual machines", correct: false, why: "VMs isolate entire operating systems." },
{ text: "Containers", correct: true, why: "Containers isolate applications using shared OS resources." },
{ text: "Hypervisors", correct: false, why: "Hypervisors manage VMs." },
{ text: "Sandboxing", correct: false, why: "Sandboxing limits application permissions." }
]
},

{
type: "mc",
question: "Which security concept prevents a single failure from disrupting operations?",
answers: [
{ text: "Redundancy", correct: true, why: "Redundancy provides backup components." },
{ text: "Least privilege", correct: false, why: "Least privilege limits access." },
{ text: "Zero Trust", correct: false, why: "Zero Trust verifies identity." },
{ text: "Hardening", correct: false, why: "Hardening reduces vulnerabilities." }
]
},

{
type: "mc",
question: "Which control type includes biometric scanners and mantraps?",
answers: [
{ text: "Administrative", correct: false, why: "Administrative controls include policies." },
{ text: "Technical", correct: false, why: "Technical controls include firewalls." },
{ text: "Physical", correct: true, why: "Physical controls protect facilities." },
{ text: "Detective", correct: false, why: "Detective controls identify incidents." }
]
},

{
type: "mc",
question: "Which solution ensures encrypted communication for web traffic?",
answers: [
{ text: "HTTP", correct: false, why: "HTTP sends data in cleartext." },
{ text: "HTTPS", correct: true, why: "HTTPS uses TLS to encrypt web traffic." },
{ text: "FTP", correct: false, why: "FTP is unencrypted." },
{ text: "SMTP", correct: false, why: "SMTP sends email." }
]
},

{
type: "mc",
question: "Which architecture best supports scalability and fault tolerance?",
answers: [
{ text: "Single-server design", correct: false, why: "Single servers are single points of failure." },
{ text: "Load-balanced architecture", correct: true, why: "Load balancing distributes traffic and improves resilience." },
{ text: "Peer-to-peer", correct: false, why: "P2P lacks centralized control." },
{ text: "Monolithic design", correct: false, why: "Monolithic systems are harder to scale." }
]
},
