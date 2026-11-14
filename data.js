/* ---------------------------------------------------------------
   bayma — shared job data (used by index.html and jobs.html)

   These are PLACEHOLDER listings so the pages work. Replace JOBS
   with your real listings, or load them from your backend, e.g.
     const JOBS = await fetch('/api/jobs').then(r => r.json());
   Each job needs the fields shown in the first three entries.
---------------------------------------------------------------- */

/* Employers. `logo` is the square icon used on job cards; `wordmark` is used in the
   employer directory. `type` must match one of EMPLOYER_TYPES. Open-job counts,
   "actively hiring" and "hires entry level" are worked out from JOBS automatically. */
const EMPLOYERS = {
  kaiser:    { name: "Kaiser Permanente", logo: "img/kaiser-icon.png", wordmark: "img/kaiser-icon.png",
               type: "Hospital / health system", label: "Hospital / Health System",
               tags: ["Multi-specialty","Cardiology","ENT","GI"],
               specialties: ["Family / Primary Care","Pediatrics","Dermatology","Cardiology","OB/GYN","Orthopedics","Ophthalmology","ENT","GI"] },
  sutter:    { name: "Sutter Health", logo: "img/sutter-icon.png", wordmark: "img/sutter-icon.png",
               type: "Hospital / health system", label: "Hospital / Health System",
               tags: ["Multi-specialty","Cardiology","ENT","GI"],
               specialties: ["Family / Primary Care","Pediatrics","Dermatology","Cardiology","OB/GYN","Orthopedics","Ophthalmology","ENT","GI"] },
  stanford:  { name: "Stanford Medicine Partners", logo: "img/stanford.png", wordmark: "img/stanford.png",
               type: "Hospital / health system", label: "Hospital / Health System",
               tags: ["Multi-specialty","Cardiology","ENT","GI"],
               specialties: ["Family / Primary Care","Pediatrics","Dermatology","Cardiology","OB/GYN","Orthopedics","Ophthalmology","ENT","GI"] },
  johnmuir:  { name: "John Muir Health", logo: "img/logo-johnmuir.png", wordmark: "img/logo-johnmuir.png",
               type: "Hospital / health system", label: "Hospital / Health System",
               tags: ["Multi-specialty","Cardiology","ENT","GI"],
               specialties: ["Family / Primary Care","Pediatrics","Cardiology","OB/GYN","Orthopedics","ENT","GI"] },
  ucsf:      { name: "UCSF Health", logo: "img/logo-ucsf.png", wordmark: "img/logo-ucsf.png",
               type: "Hospital / health system", label: "Hospital / Health System",
               tags: ["Multi-specialty","Cardiology","ENT","GI"],
               specialties: ["Family / Primary Care","Pediatrics","Dermatology","Cardiology","OB/GYN","Orthopedics","Ophthalmology","ENT","GI"] },
  concentra: { name: "Concentra", directoryName: "Concentra Urgent Care", logo: "img/concentra-icon.png", wordmark: "img/concentra.png",
               type: "Urgent care", label: "Urgent Care", tags: ["Urgent Care"], specialties: ["Urgent Care"] },
  carbon:    { name: "Carbon Health", directoryName: "Carbon Health Urgent Care", logo: "img/logo-carbon.png", wordmark: "img/logo-carbon.png",
               type: "Urgent care", label: "Urgent Care", tags: ["Urgent Care"], specialties: ["Urgent Care","Family / Primary Care"] },
  bass:      { name: "BASS Medical Group", logo: "img/logo-bass.png", wordmark: "img/logo-bass.png",
               type: "Private practice", label: "Multispecialty", tags: ["Multi-specialty"],
               specialties: ["Family / Primary Care","Pediatrics","Dermatology","Cardiology","Orthopedics","ENT","GI"] },
  davita:    { name: "DaVita", logo: "img/logo-davita.png", wordmark: "img/logo-davita.png",
               type: "Private practice", label: "Dialysis", tags: ["Dialysis"], specialties: ["Dialysis"] },
  jiva:      { name: "Jiva Health", logo: "img/logo-jiva.png", wordmark: "img/logo-jiva.png",
               type: "Private practice", label: "Private Clinic", tags: ["Multi-specialty"],
               specialties: ["Family / Primary Care","Pediatrics"] },
  ahs:       { name: "Asian Health Services", logo: "img/logo-ahs.png", wordmark: "img/logo-ahs.png",
               type: "Federal qualified health center", label: "Community Health Center", tags: ["Multi-specialty"],
               specialties: ["Family / Primary Care","Pediatrics","OB/GYN"] }
};
const EMPLOYER_TYPES = ["Private practice","Hospital / health system","Urgent care","Federal qualified health center","Staffing agency"];
const EMPLOYER_SPECIALTIES = ["Family / Primary Care","Pediatrics","Dermatology","Urgent Care","Cardiology","OB/GYN","Orthopedics","Ophthalmology","ENT","GI","Dialysis"];

/* Specialties: `slug` is used in links, e.g. jobs.html#pediatrics */
const SPECIALTIES = [
  { name: "Family / Primary Care", slug: "family-primary-care", pill: "Family Medicine" },
  { name: "Pediatrics",            slug: "pediatrics" },
  { name: "Dermatology",           slug: "dermatology" },
  { name: "Urgent Care",           slug: "urgent-care" },
  { name: "Cardiology",            slug: "cardiology" },
  { name: "OB/GYN",                slug: "ob-gyn" },
  { name: "Orthopedics",           slug: "orthopedics" },
  { name: "Ophthalmology",         slug: "ophthalmology" }
];

const CERTIFICATIONS = ["CMA (AAMA)", "RMA (AMT)", "CCMA (NHA)", "CACMA (CCBMA)"];
const SCHEDULES      = ["Full-Time", "Part-Time", "On-Call", "Limited Term", "Short Hour"];
const ROLE_TYPES     = ["Clinical", "Administrative", "Hybrid Clinical"];
const EXPERIENCE     = { entry: "Entry level / new grad", "1-3": "1-3 years", "3+": "3+ years" };

/* Bay Area cities (lat, lng) for the distance search */
const CITIES = {
  "Oakland":[37.8044,-122.2712], "Berkeley":[37.8716,-122.2727], "San Leandro":[37.7249,-122.1561],
  "Hayward":[37.6688,-122.0808], "Fremont":[37.5485,-121.9886], "Pleasanton":[37.6624,-121.8747],
  "San Francisco":[37.7749,-122.4194], "Daly City":[37.6879,-122.4702], "San Mateo":[37.5630,-122.3255],
  "Redwood City":[37.4852,-122.2364], "Palo Alto":[37.4419,-122.1430], "Mountain View":[37.3861,-122.0839],
  "Santa Clara":[37.3541,-121.9552], "San Jose":[37.3382,-121.8863], "Walnut Creek":[37.9101,-122.0652],
  "Concord":[37.9780,-122.0311], "Richmond":[37.9358,-122.3477], "San Rafael":[37.9735,-122.5311],
  "Los Altos":[37.3852,-122.1141], "Emeryville":[37.8313,-122.2852]
};
/* A few ZIP codes so ZIP searches work; add more as needed */
const ZIPS = {
  "94612":"Oakland","94607":"Oakland","94704":"Berkeley","94577":"San Leandro","94541":"Hayward",
  "94538":"Fremont","94102":"San Francisco","94110":"San Francisco","94115":"San Francisco",
  "94401":"San Mateo","94063":"Redwood City","94301":"Palo Alto","94041":"Mountain View",
  "95050":"Santa Clara","95112":"San Jose","95128":"San Jose","94596":"Walnut Creek",
  "94520":"Concord","94801":"Richmond","94901":"San Rafael","94022":"Los Altos","94608":"Emeryville"
};

/*  title, employer, city, schedule, specialty, role, accepted certs ([] = none required),
    experience, min pay, max pay, days since posted                                   */
const JOBS = [
  ["Clinical Medical Assistant","sutter","Oakland","Full-Time","Family / Primary Care","Clinical",["CMA (AAMA)","RMA (AMT)","CCMA (NHA)"],"1-3",28,48,1],
  ["Clinical Medical Assistant","kaiser","Berkeley","On-Call","OB/GYN","Clinical",["CMA (AAMA)","CCMA (NHA)"],"1-3",32,48,2],
  ["Clinical Medical Assistant","concentra","San Leandro","Part-Time","Urgent Care","Clinical",[],"entry",25,48,2],
  ["Medical Assistant II","stanford","Palo Alto","Full-Time","Dermatology","Clinical",["CMA (AAMA)","RMA (AMT)"],"3+",30,42,3],
  ["Pediatric Medical Assistant","kaiser","San Francisco","Full-Time","Pediatrics","Clinical",["CMA (AAMA)","CCMA (NHA)","RMA (AMT)"],"1-3",31,45,3],
  ["Cardiology Medical Assistant","sutter","Walnut Creek","Full-Time","Cardiology","Clinical",["CMA (AAMA)","RMA (AMT)"],"3+",30,44,4],
  ["Orthopedic Medical Assistant","stanford","Redwood City","Part-Time","Orthopedics","Clinical",["CCMA (NHA)","CMA (AAMA)"],"1-3",29,41,5],
  ["Ophthalmic Technician / MA","kaiser","San Jose","Full-Time","Ophthalmology","Clinical",[],"entry",30,46,6],
  ["Back Office Medical Assistant","concentra","Hayward","Full-Time","Urgent Care","Clinical",["CCMA (NHA)","CACMA (CCBMA)"],"entry",26,38,6],
  ["Medical Assistant – Primary Care","stanford","Los Altos","Full-Time","Family / Primary Care","Clinical",["CMA (AAMA)","CCMA (NHA)"],"1-3",29,43,7],
  ["Float Medical Assistant","sutter","San Mateo","On-Call","Pediatrics","Clinical",["CMA (AAMA)","CCMA (NHA)","RMA (AMT)"],"1-3",30,44,8],
  ["Medical Assistant – Women's Health","sutter","Fremont","Part-Time","OB/GYN","Clinical",["CCMA (NHA)"],"1-3",28,40,9],
  ["Front Office Medical Assistant","kaiser","Oakland","Full-Time","Family / Primary Care","Administrative",[],"entry",24,34,2],
  ["Medical Assistant (Front & Back Office)","sutter","Berkeley","Full-Time","Pediatrics","Hybrid Clinical",["CCMA (NHA)","CACMA (CCBMA)"],"entry",27,39,2],
  ["Administrative Medical Assistant","stanford","Mountain View","Full-Time","Dermatology","Administrative",[],"1-3",26,36,4],
  ["Urgent Care Medical Assistant","concentra","Emeryville","Short Hour","Urgent Care","Clinical",[],"entry",25,35,2],
  ["Patient Care Coordinator / MA","kaiser","Richmond","Full-Time","Family / Primary Care","Hybrid Clinical",["CMA (AAMA)","CCMA (NHA)"],"3+",31,45,5],
  ["Dermatology Medical Assistant","sutter","San Francisco","Full-Time","Dermatology","Clinical",["CMA (AAMA)","RMA (AMT)","CCMA (NHA)"],"1-3",30,43,6],
  ["Medical Assistant – Cardiology Clinic","stanford","Palo Alto","Limited Term","Cardiology","Clinical",["CMA (AAMA)"],"1-3",32,46,8],
  ["Medical Receptionist","concentra","Concord","Part-Time","Urgent Care","Administrative",[],"entry",22,30,3],
  ["Clinical Medical Assistant","kaiser","Santa Clara","Full-Time","Orthopedics","Clinical",["CMA (AAMA)","CCMA (NHA)","RMA (AMT)"],"1-3",31,47,10],
  ["Medical Assistant – OB/GYN","stanford","San Jose","Full-Time","OB/GYN","Clinical",["CMA (AAMA)","RMA (AMT)"],"1-3",29,42,11],
  ["Medical Assistant Trainee","sutter","Concord","Full-Time","Family / Primary Care","Clinical",[],"entry",23,30,2],
  ["Ophthalmic Medical Assistant","stanford","Redwood City","Full-Time","Ophthalmology","Clinical",["CCMA (NHA)","CMA (AAMA)"],"1-3",28,40,12],
  ["Pediatric Front Desk / MA","kaiser","Daly City","Part-Time","Pediatrics","Hybrid Clinical",[],"entry",25,36,4],
  ["Occupational Health Medical Assistant","concentra","San Jose","Full-Time","Urgent Care","Clinical",["CCMA (NHA)","CACMA (CCBMA)","CMA (AAMA)"],"1-3",27,40,7],
  ["Lead Medical Assistant","sutter","San Rafael","Full-Time","Family / Primary Care","Clinical",["CMA (AAMA)","RMA (AMT)"],"3+",34,50,9],
  ["Orthopedic Clinic Medical Assistant","sutter","Pleasanton","Full-Time","Orthopedics","Clinical",[],"entry",27,39,13],
  ["Medical Assistant – Dermatology","kaiser","Walnut Creek","On-Call","Dermatology","Clinical",["CMA (AAMA)","CCMA (NHA)"],"1-3",31,46,15],
  ["Administrative MA – Specialty Clinic","stanford","Palo Alto","Full-Time","Cardiology","Administrative",[],"1-3",27,37,16],
  ["Clinical Medical Assistant","concentra","Fremont","Full-Time","Urgent Care","Clinical",["CCMA (NHA)"],"1-3",26,38,18],
  ["Medical Assistant – Family Medicine","kaiser","Hayward","Full-Time","Family / Primary Care","Clinical",["CMA (AAMA)","CCMA (NHA)","RMA (AMT)"],"1-3",31,45,20],
  ["Pediatric Medical Assistant","stanford","Mountain View","Part-Time","Pediatrics","Clinical",["CCMA (NHA)","CMA (AAMA)"],"entry",28,40,21],
  ["Medical Assistant – Eye Care","sutter","Oakland","Short Hour","Ophthalmology","Clinical",[],"entry",26,36,23],
  ["Hybrid Medical Assistant","concentra","Richmond","Full-Time","Urgent Care","Hybrid Clinical",["CACMA (CCBMA)","CCMA (NHA)"],"entry",25,37,25],
  ["Senior Medical Assistant – OB/GYN","kaiser","San Francisco","Full-Time","OB/GYN","Clinical",["CMA (AAMA)","RMA (AMT)"],"3+",35,52,27],
  ["Medical Assistant – Cardiac Rehab","sutter","San Leandro","Limited Term","Cardiology","Clinical",["CMA (AAMA)","CCMA (NHA)"],"1-3",29,41,29],
  ["Clinical Medical Assistant","johnmuir","Walnut Creek","Full-Time","Cardiology","Clinical",["CMA (AAMA)","CCMA (NHA)"],"1-3",32,46,3],
  ["Medical Assistant – Pediatrics","johnmuir","Concord","Part-Time","Pediatrics","Clinical",[],"entry",28,40,9],
  ["Medical Assistant – Primary Care","ucsf","San Francisco","Full-Time","Family / Primary Care","Clinical",["CMA (AAMA)","RMA (AMT)","CCMA (NHA)"],"1-3",33,49,4],
  ["Ophthalmology Medical Assistant","ucsf","San Francisco","Full-Time","Ophthalmology","Clinical",["CMA (AAMA)","CCMA (NHA)"],"3+",35,50,12],
  ["Urgent Care Medical Assistant","carbon","San Francisco","Full-Time","Urgent Care","Clinical",[],"entry",25,36,2],
  ["Medical Assistant / Front Desk","carbon","Oakland","Part-Time","Urgent Care","Hybrid Clinical",[],"entry",24,33,6],
  ["Medical Assistant – Dermatology","bass","Walnut Creek","Full-Time","Dermatology","Clinical",["CCMA (NHA)","CMA (AAMA)"],"1-3",27,39,8],
  ["Community Health Medical Assistant","ahs","Oakland","Full-Time","Family / Primary Care","Clinical",["CCMA (NHA)","CMA (AAMA)","RMA (AMT)"],"entry",26,37,5]
].map((r, i) => ({
  id: i + 1, title: r[0], emp: r[1], city: r[2], type: r[3], specialty: r[4],
  role: r[5], certs: r[6], exp: r[7], min: r[8], max: r[9], daysAgo: r[10]
}));
