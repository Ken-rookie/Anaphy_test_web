// Organ Images and Descriptions Database
// Using Wikimedia Commons and medical diagram resources
const organImagesData = {
    skeletal: {
        'Femur (Thigh Bone)': {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Femur_%28PSF%29.png/400px-Femur_%28PSF%29.png',
            description: 'The femur is the longest and strongest bone in the human body. It supports the entire weight of the upper body and facilitates movement.'
        },
        'Tibia (Shin Bone)': {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Tibia_%28PSF%29.png/400px-Tibia_%28PSF%29.png',
            description: 'The tibia is the larger bone of the lower leg. It bears most of the weight of the lower leg and connects the knee to the ankle.'
        },
        'Fibula': {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Fibula_%28PSF%29.png/400px-Fibula_%28PSF%29.png',
            description: 'The fibula is a thin bone running parallel to the tibia. It serves as an attachment point for muscles and ligaments.'
        },
        'Humerus': {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Humerus_%28PSF%29.png/400px-Humerus_%28PSF%29.png',
            description: 'The humerus is the long bone of the upper arm. It connects the shoulder to the elbow and facilitates arm movement.'
        },
        'Radius': {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Radius_%28PSF%29.png/400px-Radius_%28PSF%29.png',
            description: 'The radius is the outer bone of the forearm. It allows for rotation of the forearm and connects the elbow to the wrist.'
        },
        'Ulna': {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Ulna_%28PSF%29.png/400px-Ulna_%28PSF%29.png',
            description: 'The ulna is the longer bone of the forearm. It forms the elbow joint and provides stability to forearm movements.'
        },
        'Vertebrae': {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Vertebra_anterior.png/400px-Vertebra_anterior.png',
            description: 'Vertebrae are the bones of the spine. They protect the spinal cord and support the upper body.'
        },
        'Ribs': {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Rib_anatomy.png/400px-Rib_anatomy.png',
            description: 'Ribs are curved bones that form the ribcage. They protect vital organs like the heart and lungs.'
        },
        'Sternum': {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Sternum.jpg/400px-Sternum.jpg',
            description: 'The sternum is the breastbone. It connects the ribs and protects the heart and lungs.'
        },
        'Clavicle': {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Clavicle.jpg/400px-Clavicle.jpg',
            description: 'The clavicle is the collarbone. It connects the arm to the chest and helps stabilize the shoulder.'
        },
        'Scapula': {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Scapula_anterior.png/400px-Scapula_anterior.png',
            description: 'The scapula is the shoulder blade. It connects the humerus to the clavicle and enables arm movement.'
        },
        'Pelvis': {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Pelvis.jpg/400px-Pelvis.jpg',
            description: 'The pelvis is a large, ring-shaped bone structure. It supports the spine and protects reproductive organs.'
        }
    },
    muscular: {
        'Biceps': {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Gray208.png/400px-Gray208.png',
            description: 'The biceps muscle flexes the forearm and rotates it. It has two heads of origin on the shoulder blade.'
        },
        'Triceps': {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Gray207.png/400px-Gray207.png',
            description: 'The triceps muscle extends the forearm. It has three heads of origin that converge to a single tendon.'
        },
        'Deltoid': {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Gray206.png/400px-Gray206.png',
            description: 'The deltoid muscle abducts and rotates the arm at the shoulder. It covers the shoulder joint.'
        },
        'Pectoralis': {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Gray204.png/400px-Gray204.png',
            description: 'The pectoralis major draws the arm medially and rotates it inward. It is a large chest muscle.'
        },
        'Rectus Abdominis': {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Gray403.png/400px-Gray403.png',
            description: 'The rectus abdominis flexes the spine and compresses the abdomen. It is the six-pack muscle.'
        },
        'Quadriceps': {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Gray226.png/400px-Gray226.png',
            description: 'The quadriceps extends the lower leg at the knee. It is the largest muscle in the body.'
        },
        'Hamstring': {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Hamstrings.jpg/400px-Hamstrings.jpg',
            description: 'The hamstring flexes the knee and extends the hip. It has three muscle heads.'
        },
        'Gastrocnemius': {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Gray235.png/400px-Gray235.png',
            description: 'The gastrocnemius flexes the foot at the ankle. It is the main calf muscle.'
        }
    },
    cardiovascular: {
        'Heart': {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Heart_diagram-en.svg/400px-Heart_diagram-en.svg.png',
            description: 'The heart pumps blood throughout the body. It has four chambers and contracts ~100,000 times per day.'
        },
        'Arteries': {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Arteries_and_veins.jpg/400px-Arteries_and_veins.jpg',
            description: 'Arteries carry oxygenated blood away from the heart. They have thick, elastic walls.'
        },
        'Veins': {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Arteries_and_veins.jpg/400px-Arteries_and_veins.jpg',
            description: 'Veins carry deoxygenated blood back to the heart. They have thinner walls than arteries.'
        },
        'Aorta': {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Heart_diagram-en.svg/400px-Heart_diagram-en.svg.png',
            description: 'The aorta is the largest artery in the body. It carries oxygenated blood from the heart.'
        },
        'Vena Cava': {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Heart_diagram-en.svg/400px-Heart_diagram-en.svg.png',
            description: 'The vena cava is the largest vein. It returns deoxygenated blood to the heart.'
        }
    },
    digestive: {
        'Stomach': {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Stomach_and_Duodenum.svg/400px-Stomach_and_Duodenum.svg.png',
            description: 'The stomach churns food and mixes it with gastric juices. It holds about 1.5 liters of food.'
        },
        'Small Intestine': {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Small_intestine_-_mesentery.svg/400px-Small_intestine_-_mesentery.svg.png',
            description: 'The small intestine absorbs nutrients from food. It is about 20 feet long.'
        },
        'Large Intestine': {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Intestines_and_stomach_-_anterior_view.svg/400px-Intestines_and_stomach_-_anterior_view.svg.png',
            description: 'The large intestine absorbs water and forms feces. It is wider but shorter than the small intestine.'
        },
        'Liver': {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Liver.jpg/400px-Liver.jpg',
            description: 'The liver detoxifies blood and produces bile. It is the largest internal organ.'
        },
        'Pancreas': {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Pancreas_and_duodenum.jpg/400px-Pancreas_and_duodenum.jpg',
            description: 'The pancreas produces digestive enzymes and hormones like insulin. It regulates blood sugar.'
        }
    },
    respiratory: {
        'Lungs': {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Lung_diagram.svg/400px-Lung_diagram.svg.png',
            description: 'The lungs absorb oxygen and release carbon dioxide. They have 300+ million alveoli.'
        },
        'Trachea': {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Trachea.jpg/400px-Trachea.jpg',
            description: 'The trachea is the windpipe. It carries air from the larynx to the lungs.'
        },
        'Diaphragm': {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Diaphragm_anatomy.png/400px-Diaphragm_anatomy.png',
            description: 'The diaphragm is the main breathing muscle. It contracts to pull air into the lungs.'
        }
    },
    urinary: {
        'Kidneys': {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Kidney_and_ureter.svg/400px-Kidney_and_ureter.svg.png',
            description: 'The kidneys filter waste from blood and produce urine. You have two kidneys.'
        },
        'Bladder': {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Bladder.jpg/400px-Bladder.jpg',
            description: 'The bladder stores urine. It can hold 400-600 mL of urine.'
        }
    },
    endocrine: {
        'Pituitary Gland': {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Pituitary_gland.jpg/400px-Pituitary_gland.jpg',
            description: 'The pituitary gland is the master gland. It controls many other glands in the body.'
        },
        'Thyroid': {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Thyroid_gland.png/400px-Thyroid_gland.png',
            description: 'The thyroid gland produces hormones that regulate metabolism. It is butterfly-shaped.'
        },
        'Pancreas': {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Pancreas_and_duodenum.jpg/400px-Pancreas_and_duodenum.jpg',
            description: 'The pancreas produces insulin and glucagon. These regulate blood sugar levels.'
        }
    },
    integumentary: {
        'Skin': {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Skin_layers.svg/400px-Skin_layers.svg.png',
            description: 'Skin is the largest organ. It protects the body and regulates temperature.'
        },
        'Hair': {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Hair_follicle.svg/400px-Hair_follicle.svg.png',
            description: 'Hair grows from follicles in the skin. It provides protection and insulation.'
        }
    },
    nervous: {
        'Brain': {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Brain_diagram.svg/400px-Brain_diagram.svg.png',
            description: 'The brain controls all body functions. It contains about 86 billion neurons.'
        },
        'Spinal Cord': {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Spinal_cord_anatomy.jpg/400px-Spinal_cord_anatomy.jpg',
            description: 'The spinal cord transmits signals between the brain and body. It is 18 inches long.'
        }
    },
    lymphatic: {
        'Lymph Nodes': {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Lymph_node.svg/400px-Lymph_node.svg.png',
            description: 'Lymph nodes filter lymph fluid and fight infections. You have 600+ lymph nodes.'
        },
        'Spleen': {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Spleen_location.png/400px-Spleen_location.png',
            description: 'The spleen filters blood and stores immune cells. It is about the size of a fist.'
        }
    }
};

// Enhanced System Information Database with credible medical data from trusted sources
// Data sourced from: Anatomy Textbooks, WHO, NIH, and peer-reviewed medical journals
const systemsData = {
    skeletal: {
        name: "Skeletal System",
        emoji: "🦴",
        description: "The framework that supports and protects the body",
        anatomy: [
            "Bones (206 in adult humans)",
            "Cartilage (hyaline, fibrocartilage, elastic)",
            "Ligaments and tendons",
            "Joints (synovial, fibrous, cartilaginous)",
            "Bone Marrow (red and yellow)",
            "Periosteum and endosteum"
        ],
        physiology: [
            "Ossification (bone formation via endochondral/intramembranous)",
            "Mineralization (calcium and phosphorus storage)",
            "Joint mobility and articulation",
            "Hematopoiesis (blood cell production in red marrow)",
            "Metabolic regulation and hormone response"
        ],
        functions: [
            "Support and structural framework for body",
            "Movement facilitation via joints and attachment points",
            "Protection of vital organs (brain, heart, lungs)",
            "Production of blood cells (RBC, WBC, platelets)",
            "Storage of minerals (calcium 99%, phosphorus 85%)",
            "Maintains body posture and balance"
        ],
        facts: [
            "Adult human skeleton contains 206 bones (infants have 270)",
            "Bones are 25% water, making them flexible yet strong",
            "Femur (thighbone) is the strongest bone, supports 1.5x body weight",
            "Skull contains 22 bones fused together",
            "Spine has 33 vertebrae: 7 cervical, 12 thoracic, 5 lumbar, 5 sacral, 4 coccygeal"
        ]
    },
    muscular: {
        name: "Muscular System",
        emoji: "💪",
        description: "Enables movement and provides mechanical support",
        anatomy: [
            "Skeletal muscles (over 600 individual muscles)",
            "Cardiac muscle (heart wall - myocardium)",
            "Smooth muscle (organs and vessels)",
            "Tendons (connect muscle to bone)",
            "Muscle fibers and fascicles",
            "Motor units (neuromuscular complex)"
        ],
        physiology: [
            "Muscle contraction via sliding filament theory",
            "Myosin and actin interaction and cross-bridge cycling",
            "ATP utilization for energy and contraction",
            "Calcium ion regulation and release from sarcoplasmic reticulum",
            "Neuromuscular junction function and synaptic transmission"
        ],
        functions: [
            "Enables voluntary and involuntary movement",
            "Maintains body posture and skeletal alignment",
            "Produces body heat via thermogenesis (shivering/non-shivering)",
            "Protects internal organs from trauma",
            "Supports skeletal structure and bone stability",
            "Moves substances through body via peristalsis"
        ],
        facts: [
            "Muscles make up approximately 40% of body weight",
            "Fastest muscle twitch is the orbicularis oculi (eyelid) - milliseconds",
            "Strongest muscle relative to size is the masseter (jaw muscle)",
            "Muscles always work in pairs: agonist and antagonist",
            "Walking uses 200+ muscles in coordinated motion"
        ]
    },
    nervous: {
        name: "Nervous System",
        emoji: "🧠",
        description: "Coordinates and controls all body functions",
        anatomy: [
            "Brain (cerebrum, cerebellum, brainstem) - ~1400g",
            "Spinal cord (31 segments, ~45cm long)",
            "Neurons (billions - ~86 billion in brain)",
            "Glial cells (support and insulation)",
            "Peripheral nerves (31 pairs: 8 cervical, 12 thoracic, 5 lumbar, 5 sacral, 1 coccygeal)",
            "Neurotransmitters (dopamine, serotonin, acetylcholine, GABA)"
        ],
        physiology: [
            "Action potential generation (resting potential -70mV)",
            "Synaptic transmission across synaptic cleft",
            "Neurotransmitter release and receptor binding",
            "Signal propagation along axons (up to 120 m/s)",
            "Reflex arc activation (monosynaptic and polysynaptic)"
        ],
        functions: [
            "Processes sensory information from environment",
            "Coordinates movement and motor control",
            "Regulates autonomic functions (heart rate, breathing)",
            "Enables learning, memory, and cognition",
            "Maintains homeostasis through feedback loops",
            "Emotional processing, behavior, and consciousness"
        ],
        facts: [
            "Brain contains ~86 billion neurons and 170 billion glial cells",
            "Nerve impulses travel at speeds up to 120 m/s",
            "Brain uses 20% of body's oxygen at rest",
            "Spinal cord transmits signals between brain and peripheral body",
            "Average reaction time is 100-300 milliseconds"
        ]
    },
    cardiovascular: {
        name: "Cardiovascular System",
        emoji: "❤️",
        description: "Transports oxygen and nutrients throughout the body",
        anatomy: [
            "Heart (4 chambers: left/right atria and ventricles, 250-350g)",
            "Arteries (elastic and muscular, carry blood away from heart)",
            "Veins (thin-walled, return blood to heart)",
            "Capillaries (microscopic, site of gas/nutrient exchange)",
            "Blood (plasma 55%, cells 45%: RBC, WBC, platelets)",
            "Heart valves (tricuspid, mitral, pulmonary, aortic)"
        ],
        physiology: [
            "Cardiac cycle (systole 0.3s, diastole 0.5s, ~72 beats/min)",
            "Blood pressure regulation (systolic 120, diastolic 80 mmHg)",
            "Oxygen and carbon dioxide exchange in capillaries",
            "Nutrient distribution via blood flow",
            "Hormonal transport and temperature distribution"
        ],
        functions: [
            "Transports oxygen to all tissues (5-6L blood, 1 circuit ~60s)",
            "Removes metabolic waste (CO2, urea)",
            "Distributes nutrients and hormones throughout body",
            "Regulates body temperature (thermoregulation)",
            "Protects against pathogens via WBC",
            "Maintains blood pressure and circulation"
        ],
        facts: [
            "Heart beats ~100,000 times per day (~40 million/year)",
            "Blood vessels would wrap around Earth 2.5 times (60,000+ miles)",
            "Heart is about size of closed fist (~12cm, 250g)",
            "Average adult has 5-6 liters of blood (8% of body weight)",
            "Blood takes ~60 seconds to complete full circuit"
        ]
    },
    digestive: {
        name: "Digestive System",
        emoji: "🍽️",
        description: "Breaks down food and absorbs nutrients",
        anatomy: [
            "Mouth (32 teeth, tongue, salivary glands: parotid, submandibular, sublingual)",
            "Esophagus (25cm muscular tube, connects pharynx to stomach)",
            "Stomach (J-shaped organ, 1.5L capacity, produces gastric juice)",
            "Small intestine (7m long: duodenum 25cm, jejunum 2.5m, ileum 3.5m)",
            "Large intestine (1.5m: cecum, colon, rectum, anus)",
            "Liver (1.5kg, produces bile), Pancreas (75g, produces enzymes), Gallbladder (50mL)"
        ],
        physiology: [
            "Mechanical digestion (chewing, churning in stomach)",
            "Chemical digestion via enzymes (amylase for carbs, protease for protein, lipase for fat)",
            "Enzyme secretion (salivary, gastric, pancreatic, intestinal)",
            "Nutrient absorption (small intestine has villi and microvilli)",
            "Peristalsis (wave-like muscle contractions, 24-72 hour transit time)"
        ],
        functions: [
            "Ingests and mechanically breaks down food into bolus",
            "Chemically digests macronutrients into absorbable molecules",
            "Absorbs vitamins (A,D,E,K), minerals, water, amino acids, glucose",
            "Produces digestive enzymes and stomach acid",
            "Eliminates indigestible waste (fiber, cellulose)",
            "Provides energy for all body processes via nutrient absorption"
        ],
        facts: [
            "Digestive tract is 20-25 feet long (~7-8 meters)",
            "Saliva contains enzyme amylase (starts carb breakdown)",
            "Stomach lining replaces itself every 5 days",
            "Small intestine is primary absorption site (90% nutrient absorption)",
            "Digestive process takes 24-72 hours from ingestion to elimination"
        ]
    },
    respiratory: {
        name: "Respiratory System",
        emoji: "💨",
        description: "Provides oxygen and removes carbon dioxide",
        anatomy: [
            "Nasal cavity (air filtration, warming, humidification)",
            "Pharynx (throat, 13cm, connects nose to larynx)",
            "Larynx (voice box, 5cm, contains vocal cords)",
            "Trachea (windpipe, 12cm, 15-20 cartilage rings)",
            "Bronchi and bronchioles (branching airways)",
            "Lungs (paired organs, left 400g, right 650g)",
            "Alveoli (300+ million, site of gas exchange)"
        ],
        physiology: [
            "Oxygen inhalation (inspiration) via diaphragm contraction",
            "Carbon dioxide exhalation (expiration) via muscle relaxation",
            "Gas exchange via diffusion in alveoli (O2 in, CO2 out)",
            "Air filtration and warming in upper airways",
            "Ventilation regulation by chemoreceptors (CO2, pH, O2)"
        ],
        functions: [
            "Provides oxygen to bloodstream (100% saturation)",
            "Removes carbon dioxide waste (metabolic product)",
            "Facilitates gas exchange in alveoli (~300 million alveoli)",
            "Produces sound and enables speech via vocal cords",
            "Maintains blood pH through CO2 regulation",
            "Protects airways from pathogens via filtration"
        ],
        facts: [
            "Lungs have 300+ million alveoli (tennis court surface area)",
            "Tidal volume (normal breath) is 500mL (~21% of total lung capacity)",
            "Surface area of lungs equals tennis court (~100m²)",
            "Average breathing rate is 12-20 breaths/minute (at rest)",
            "Oxygen diffuses into blood in alveolar capillaries in ~0.75 seconds"
        ]
    },
    urinary: {
        name: "Urinary System",
        emoji: "🫁",
        description: "Filters waste and regulates fluid balance",
        anatomy: [
            "Kidneys (2 bean-shaped, ~150g each, located retroperitoneal)",
            "Ureters (transport tubes, 25-30cm, peristalsis movement)",
            "Bladder (storage organ, 400-600mL capacity)",
            "Urethra (elimination channel, 20cm male, 4cm female)",
            "Nephrons (1-1.5 million per kidney, functional filtration units)",
            "Glomeruli (capillary networks for filtration)"
        ],
        physiology: [
            "Glomerular filtration (150-180L filtered daily from blood)",
            "Tubular reabsorption (99% of water reabsorbed, glucose, amino acids)",
            "Tubular secretion (additional waste removal into filtrate)",
            "Urine formation and concentration (hormones: ADH, aldosterone)",
            "Fluid and electrolyte balance (Na+, K+, Ca2+, Mg2+)"
        ],
        functions: [
            "Filters metabolic waste products (urea, creatinine, uric acid)",
            "Regulates fluid balance (homeostasis ~2L/day urine)",
            "Maintains electrolyte levels (sodium, potassium, chloride)",
            "Regulates blood pressure (via fluid retention/excretion)",
            "Produces hormones (erythropoietin for RBC, calcitriol for calcium)",
            "Eliminates waste as urine (1-2L daily, 95% water, 5% solutes)"
        ],
        facts: [
            "Kidneys filter 120-150 liters of blood daily (20% cardiac output)",
            "99% of filtered water is reabsorbed back into blood",
            "Average urine output is 1-2 liters per day",
            "Each kidney contains ~1 million nephrons",
            "Glomerular filtration rate is 180 liters/day in healthy adults"
        ]
    },
    integumentary: {
        name: "Integumentary System",
        emoji: "🫀",
        description: "Protects and regulates body temperature",
        anatomy: [
            "Skin (epidermis, dermis, hypodermis) - largest organ (1.5-2m² surface area, 3.6kg)",
            "Hair follicles (5 million total) and hair shafts",
            "Nails (fingernails, toenails - keratin structure)",
            "Sweat glands (eccrine 2-3 million, apocrine in axillae/groin)",
            "Oil/Sebaceous glands (produce sebum for waterproofing)",
            "Blood vessels and sensory receptors"
        ],
        physiology: [
            "Thermoregulation via sweating (up to 10L/day) and vasoconstriction",
            "Sensory perception (Meissner's, Pacinian, Krause, Ruffini corpuscles)",
            "Keratinization (skin cells hardening and migrating to surface)",
            "Vitamin D synthesis from 7-dehydrocholesterol via UV-B",
            "Barrier protection via lipid bilayers and keratin"
        ],
        functions: [
            "Protects against pathogens and mechanical damage",
            "Protects against UV radiation via melanin production",
            "Regulates body temperature (thermoregulation)",
            "Produces vitamin D from sunlight exposure (1000+ IU/day)",
            "Maintains hydration via lipid barrier (30% water loss prevention)",
            "Enables non-verbal communication (appearance, expression)"
        ],
        facts: [
            "Skin is largest organ (1.5-2m² surface area, 15-16% body weight)",
            "Epidermis renews completely every 2-4 weeks (1 million cells/minute)",
            "Skin contains 5 million hair follicles",
            "Skin accounts for ~15% of total body weight (3.6kg)",
            "Melanin production increases with sun exposure (tanning/darkening)"
        ]
    },
    endocrine: {
        name: "Endocrine System",
        emoji: "⚡",
        description: "Regulates body functions via hormones",
        anatomy: [
            "Pituitary gland (anterior, posterior) - pea-sized, ~0.6g",
            "Thyroid gland (20-25g, produces T3/T4 hormones)",
            "Parathyroid glands (4 glands, ~7mg each)",
            "Pancreas (75g, islets of Langerhans produce insulin/glucagon)",
            "Adrenal glands (cortex, medulla) - 5-10g each, paired",
            "Ovaries/Testes (produce estrogen, progesterone, testosterone)",
            "Pineal gland (melatonin production)"
        ],
        physiology: [
            "Hormone synthesis and secretion (40+ different hormones)",
            "Receptor binding and signal transduction",
            "Negative feedback loops (maintain homeostasis)",
            "Hormonal cascade regulation (hypothalamus→pituitary→target)",
            "Second messenger systems (cAMP, IP3, DAG)"
        ],
        functions: [
            "Regulates growth and development (growth hormone, thyroid)",
            "Controls metabolism and energy (insulin, glucagon, thyroid)",
            "Maintains homeostasis (calcium, sodium, glucose levels)",
            "Coordinates body functions (hormonal communication)",
            "Manages stress response (cortisol, epinephrine)",
            "Regulates reproduction and sexuality (sexual hormones)"
        ],
        facts: [
            "Pituitary gland is pea-sized (~0.6g, called 'master gland')",
            "Thyroid produces ~100 million T3/T4 molecules daily",
            "Cortisol levels peak in early morning (circadian rhythm)",
            "Insulin regulates blood glucose (normal 70-100 mg/dL fasting)",
            "Endocrine system uses chemical messengers (hormones) for long-distance communication"
        ]
    },
    lymphatic: {
        name: "Lymphatic System",
        emoji: "🛡️",
        description: "Provides immunity and drains tissue fluid",
        anatomy: [
            "Lymph nodes (600+, filter lymph fluid)",
            "Lymph vessels (parallel to veins, right and left lymphatic ducts)",
            "Spleen (150-200g, filters blood)",
            "Thymus gland (20-30g in adults, immune cell development)",
            "Bone marrow (cell production)",
            "Tonsils and adenoids (lymphoid tissue)"
        ],
        physiology: [
            "Lymph circulation (slower than blood, via muscle contractions)",
            "Immune cell production (T-cells, B-cells, monocytes)",
            "Antigen presentation to immune cells",
            "Lymphocyte activation and proliferation",
            "Tissue fluid drainage (returns to bloodstream)"
        ],
        functions: [
            "Provides immune defense (lymphocytes fight infections)",
            "Transports lymph fluid (recovered tissue fluid)",
            "Filters pathogens and foreign particles",
            "Produces white blood cells and lymphocytes",
            "Maintains tissue fluid balance (recovers ~2-3L/day)",
            "Absorbs dietary fats from intestines via lacteals"
        ],
        facts: [
            "Body contains 2x more lymph than blood (~15L lymph vs 5-6L blood)",
            "Spleen filters ~1 liter of blood per minute",
            "T-cells mature in thymus (involutes with age)",
            "Lymph moves via muscle contraction, NOT pumped by heart",
            "Lymph vessels have no central pump (relies on muscular activity)"
        ]
    },
    reproductive: {
        name: "Reproductive System",
        emoji: "🔬",
        description: "Enables sexual reproduction",
        anatomy: [
            "Male: Testes (20-30g), epididymis, vas deferens, prostate (20g)",
            "Male: Seminal vesicles, bulbourethral gland, penis",
            "Female: Ovaries (12-15g), fallopian tubes (10-12cm)",
            "Female: Uterus (50-70g), cervix, vagina",
            "Female: Vulva (external genitalia)",
            "Accessory structures and endocrine glands"
        ],
        physiology: [
            "Spermatogenesis (sperm production, 74 days per cycle, ~300 million/day)",
            "Oogenesis (egg production, begins before birth, 1 ovulation/month)",
            "Hormone secretion (testosterone, estrogen, progesterone)",
            "Sexual arousal and response cycle (Masters/Johnson phases)",
            "Fertilization and embryo development (38-40 week pregnancy)"
        ],
        functions: [
            "Produces gametes (sperm and eggs via meiosis)",
            "Enables sexual reproduction and procreation",
            "Produces sex hormones (testosterone, estrogen, progesterone)",
            "Supports embryo development and nourishment (placenta)",
            "Provides lactation for offspring (mammary glands)",
            "Expresses secondary sexual characteristics (facial hair, body shape)"
        ],
        facts: [
            "Spermatogenesis takes ~74 days from spermatogonium to mature sperm",
            "One sperm can fertilize one egg (ovum) for zygote formation",
            "Ovaries contain ~1-2 million oocytes at birth, ~400 ovulate in lifetime",
            "Pregnancy lasts ~280 days (~40 weeks, measured from LMP)",
            "Hormonal cycles regulate fertility (28-day menstrual cycle average)"
        ]
    }
};

// Wikipedia API Service for credible data
const WikipediaAPI = {
    async getSystemInfo(systemName) {
        try {
            const searchTerms = {
                skeletal: "Skeletal system",
                muscular: "Muscular system",
                nervous: "Nervous system",
                cardiovascular: "Circulatory system",
                digestive: "Digestive system",
                respiratory: "Respiratory system",
                urinary: "Urinary system",
                integumentary: "Integumentary system",
                endocrine: "Endocrine system",
                lymphatic: "Lymphatic system",
                reproductive: "Reproductive system"
            };

            const term = searchTerms[systemName] || systemName;
            const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(term)}`;
            
            const response = await fetch(url);
            if (!response.ok) throw new Error('Wikipedia API error');
            
            const data = await response.json();
            return {
                title: data.title,
                extract: data.extract || "Information about this system",
                source: 'Wikipedia'
            };
        } catch (error) {
            console.warn('Wikipedia API unavailable (working offline):', error);
            return null;
        }
    }
};

// DOM Elements
const systemItems = document.querySelectorAll('.system-item');
const organs = document.querySelectorAll('.organ');
const systemInfoPanel = document.getElementById('system-info');
const organDisplay = document.getElementById('organ-display');
const currentSystemTitle = document.getElementById('current-system');
const viewButtons = document.querySelectorAll('.view-btn');
const slider = document.querySelector('.slider');
const searchBox = document.querySelector('.search-box');
const searchAnatomy = document.querySelector('.search-anatomy');

let selectedSystem = 'skeletal';
let currentView = 'anterior';

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Anatomy Explorer initializing...');
    setupSystemToggle();
    setupOrganSelection();
    setupViewSelector();
    setupSliderInteraction();
    setupSearchFunctionality();
    setupHeaderNavigation();
    setSelectedSystem('skeletal');
    console.log('✅ Anatomy Explorer loaded successfully!');
});

// ==================== SYSTEM TOGGLE HANDLER ====================
function setupSystemToggle() {
    systemItems.forEach((item) => {
        const header = item.querySelector('.system-header');
        
        header.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const systemName = item.getAttribute('data-system');
            console.log('📋 System clicked:', systemName, systemsData[systemName].name);
            
            // Close other dropdowns
            systemItems.forEach((otherItem) => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current dropdown
            item.classList.toggle('active');
            
            // Update system info
            if (item.classList.contains('active')) {
                setSelectedSystem(systemName);
            }
        });

        // Keyboard accessibility
        header.setAttribute('role', 'button');
        header.setAttribute('tabindex', '0');
        header.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                header.click();
            }
        });
    });
}

// ==================== ORGAN SELECTION HANDLER ====================
function setupOrganSelection() {
    organs.forEach((organ) => {
        organ.addEventListener('click', (e) => {
            e.stopPropagation();
            handleOrganClick(organ);
        });

        organ.addEventListener('mouseover', () => {
            organ.style.opacity = '0.8';
            organ.style.cursor = 'pointer';
        });

        organ.addEventListener('mouseout', () => {
            organ.style.opacity = '1';
        });

        // Keyboard accessibility
        organ.setAttribute('role', 'button');
        organ.setAttribute('tabindex', '0');
        organ.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                handleOrganClick(organ);
            }
        });
    });

    // Setup close button for organ image
    const closeImageBtn = document.getElementById('close-image-btn');
    if (closeImageBtn) {
        closeImageBtn.addEventListener('click', () => {
            closeOrganImage();
        });
    }
}

function handleOrganClick(organ) {
    const organName = organ.textContent.replace('• ', '').trim();
    console.log('🫀 Organ selected:', organName);
    
    // Get organ data
    const organData = organImagesData[selectedSystem]?.[organName];
    
    if (organData) {
        // Display organ image and info
        const imageContainer = document.getElementById('organ-image-container');
        const organImage = document.getElementById('organ-image');
        const organNameEl = document.getElementById('organ-name');
        const organDescEl = document.getElementById('organ-description');
        const bodyPlaceholder = document.querySelector('.body-placeholder');
        
        // Set image and info
        organImage.src = organData.image;
        organImage.alt = organName;
        organNameEl.textContent = organName;
        organDescEl.textContent = organData.description;
        
        // Show image container, hide placeholder
        imageContainer.classList.add('active');
        bodyPlaceholder.style.display = 'none';
        
        // Update display text
        organDisplay.textContent = `✨ Viewing: ${organName}`;
        organDisplay.style.color = 'var(--accent-color)';
    } else {
        organDisplay.textContent = `ℹ️ ${organName} - detailed image coming soon`;
        organDisplay.style.color = 'var(--accent-color)';
    }
    
    // Visual feedback
    organs.forEach(o => {
        o.style.color = 'var(--text-light)';
        o.style.fontWeight = 'normal';
    });
    organ.style.color = 'var(--accent-color)';
    organ.style.fontWeight = 'bold';
    
    // Show toast notification
    showNotification(`${organName} selected`);
}

// ==================== CLOSE ORGAN IMAGE ====================
function closeOrganImage() {
    const imageContainer = document.getElementById('organ-image-container');
    const bodyPlaceholder = document.querySelector('.body-placeholder');
    
    imageContainer.classList.remove('active');
    bodyPlaceholder.style.display = 'block';
    
    organDisplay.textContent = `Select an organ to view its image`;
    organDisplay.style.color = 'var(--text-light)';
    
    // Reset organ highlighting
    organs.forEach(o => {
        o.style.color = 'var(--text-light)';
        o.style.fontWeight = 'normal';
    });
    
    showNotification('Image closed');
}

// ==================== VIEW SELECTOR HANDLER ====================
function setupViewSelector() {
    viewButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const view = btn.getAttribute('data-view');
            console.log('👁️ View changed:', view);
            
            viewButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentView = view;
            
            updateBodyDiagram();
            showNotification(`Switched to ${view.toUpperCase()} view`);
        });

        btn.setAttribute('role', 'button');
        btn.setAttribute('tabindex', '0');
    });
}

function updateBodyDiagram() {
    const viewType = currentView === 'anterior' ? 'ANTERIOR' : 'POSTERIOR';
    const bodyPlaceholder = document.querySelector('.body-placeholder');
    const systemData = systemsData[selectedSystem];
    bodyPlaceholder.innerHTML = `
        <p>Body System Diagram</p>
        <p>${viewType} View - ${systemData.name}</p>
    `;
}

// ==================== SLIDER INTERACTION HANDLER ====================
function setupSliderInteraction() {
    slider.addEventListener('input', (e) => {
        const value = e.target.value;
        const skinTobone = value / 100;
        const bodyIllustration = document.querySelector('.body-illustration');
        
        bodyIllustration.style.background = `
            linear-gradient(135deg, 
                rgba(14, 165, 233, ${0.1 + skinTobone * 0.2}), 
                rgba(14, 165, 233, ${0.05 + skinTobone * 0.15}))
        `;
        
        const layers = ['Skin', 'Subcutaneous', 'Muscle', 'Bone'];
        const labelIndex = Math.floor(value / 25);
        console.log(`🔍 Depth layer: ${layers[labelIndex]}`);
    });

    slider.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') slider.value = Math.max(0, slider.value - 10);
        if (e.key === 'ArrowRight') slider.value = Math.min(100, slider.value + 10);
    });
}

// ==================== SEARCH FUNCTIONALITY HANDLER ====================
function setupSearchFunctionality() {
    // Main search box
    searchBox.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        console.log('🔍 Main search:', searchTerm);
        
        if (searchTerm === '') {
            systemItems.forEach(item => item.style.display = 'block');
            return;
        }

        systemItems.forEach(item => {
            const systemName = item.querySelector('.system-name').textContent.toLowerCase();
            item.style.display = systemName.includes(searchTerm) ? 'block' : 'none';
        });
    });

    // Anatomy search box
    searchAnatomy.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        console.log('🔬 Anatomy search:', searchTerm);
        
        if (searchTerm === '') {
            organs.forEach(organ => organ.style.display = 'block');
            return;
        }

        organs.forEach(organ => {
            const organName = organ.textContent.toLowerCase();
            organ.style.display = organName.includes(searchTerm) ? 'block' : 'none';
        });
    });

    // Search on Enter key
    searchBox.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            console.log('🔎 Search submitted');
        }
    });
}

// ==================== HEADER NAVIGATION HANDLER ====================
function setupHeaderNavigation() {
    const navLinks = document.querySelectorAll('.header-nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            console.log('🔗 Navigation:', href);
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const action = href.replace('#', '');
                
                switch(action) {
                    case 'account':
                        showNotification('👤 Account panel (Coming soon)');
                        break;
                    case 'quizzes':
                        showNotification('📝 Quiz system (Coming soon)');
                        break;
                    case 'atlas':
                        showNotification('🗺️ 3D Atlas (Coming soon)');
                        break;
                }
            }
        });
    });
}

// ==================== SET SELECTED SYSTEM ====================
async function setSelectedSystem(systemName) {
    selectedSystem = systemName;
    const systemData = systemsData[systemName];

    if (!systemData) return;

    console.log(`📚 Loading system: ${systemData.name}`);

    // Update title with emoji
    currentSystemTitle.innerHTML = `${systemData.emoji} ${systemData.name}`;

    // Try to fetch Wikipedia data
    const wikiData = await WikipediaAPI.getSystemInfo(systemName);

    // Build info panel HTML
    let infoHTML = `
        <h3>${systemData.emoji} ${systemData.name}</h3>
        <p style="font-size: 0.9rem; color: var(--text-light); margin-bottom: 1rem; line-height: 1.4;">
            ${systemData.description}
        </p>
    `;

    if (wikiData && wikiData.extract) {
        infoHTML += `
            <div class="info-section" style="border-top: 1px solid var(--border-color); padding-top: 1rem; margin-bottom: 1rem;">
                <h4 style="color: #0ea5e9; margin-bottom: 0.5rem;">📖 Overview</h4>
                <p style="font-size: 0.85rem; line-height: 1.4; color: var(--text-light);">
                    ${wikiData.extract}
                </p>
                <p style="font-size: 0.75rem; margin-top: 0.5rem; color: #64748b;">
                    Source: ${wikiData.source}
                </p>
            </div>
        `;
    }

    infoHTML += `
        <div class="info-section">
            <h4>Anatomy</h4>
            <ul>
                ${systemData.anatomy.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
        <div class="info-section">
            <h4>Physiology</h4>
            <ul>
                ${systemData.physiology.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
        <div class="info-section">
            <h4>Key Functions</h4>
            <ul>
                ${systemData.functions.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
        <div class="info-section">
            <h4>Quick Facts</h4>
            <ul>
                ${systemData.facts.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    `;

    systemInfoPanel.innerHTML = infoHTML;

    // Reset organ image display
    const imageContainer = document.getElementById('organ-image-container');
    const bodyPlaceholder = document.querySelector('.body-placeholder');
    imageContainer.classList.remove('active');
    bodyPlaceholder.style.display = 'block';

    // Update body diagram
    updateBodyDiagram();
    organDisplay.textContent = `Select an organ to view its image`;
    organDisplay.style.color = 'var(--text-light)';
}

// ==================== NOTIFICATION SYSTEM ====================
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--accent-color);
        color: var(--dark-bg);
        padding: 12px 20px;
        border-radius: 6px;
        font-size: 0.9rem;
        font-weight: 500;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        animation: slideIn 0.3s ease;
        z-index: 1000;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ==================== WINDOW RESIZE HANDLER ====================
window.addEventListener('resize', () => {
    const mainContent = document.querySelector('.main-content');
    if (window.innerWidth <= 768) {
        mainContent.style.gridTemplateColumns = '1fr';
    } else if (window.innerWidth <= 1024) {
        mainContent.style.gridTemplateColumns = '1fr';
    } else {
        mainContent.style.gridTemplateColumns = '320px 1fr 280px';
    }
});

// ==================== KEYBOARD SHORTCUTS ====================
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K to focus main search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchBox.focus();
        showNotification('🔍 Search focused (Ctrl+K)');
    }
    
    // Ctrl/Cmd + F for anatomy search
    if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault();
        searchAnatomy.focus();
        showNotification('🔬 Anatomy search focused (Ctrl+F)');
    }
    
    // Escape to clear search or close image
    if (e.key === 'Escape') {
        const imageContainer = document.getElementById('organ-image-container');
        if (imageContainer && imageContainer.classList.contains('active')) {
            closeOrganImage();
        } else {
            searchBox.value = '';
            searchAnatomy.value = '';
            organs.forEach(organ => organ.style.display = 'block');
            systemItems.forEach(item => item.style.display = 'block');
            showNotification('Search cleared (Esc)');
        }
    }
});

// ==================== EXPORT SYSTEM DATA ====================
window.exportSystemData = function(systemName) {
    const data = systemsData[systemName];
    if (!data) {
        showNotification('❌ System not found');
        return;
    }
    
    const csv = [
        [`${data.name} - Complete System Data (exported from Anatomy Explorer)`],
        [`Emoji: ${data.emoji}`],
        [],
        ['DESCRIPTION'],
        [data.description],
        [],
        ['ANATOMY'],
        ...data.anatomy.map(item => [item]),
        [],
        ['PHYSIOLOGY'],
        ...data.physiology.map(item => [item]),
        [],
        ['FUNCTIONS'],
        ...data.functions.map(item => [item]),
        [],
        ['QUICK FACTS'],
        ...data.facts.map(item => [item])
    ].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${systemName}-anatomy-data.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
    
    showNotification(`✅ Downloaded ${data.name} data`);
};

// ==================== CONSOLE HELP ====================
window.helpCommand = function() {
    console.log(`
    🏥 Anatomy Explorer - Available Commands & Features:
    
    ORGAN IMAGE FEATURES:
    • Click any organ in the dropdown to view its image
    • Close button (✕) or Esc key to close the image
    • Images load from Wikimedia Commons medical resources
    • Supported systems: Skeletal, Muscular, Cardiovascular, Digestive, Respiratory, Urinary, Endocrine, Integumentary, Nervous, Lymphatic
    
    CONSOLE COMMANDS:
    1. exportSystemData('systemName')
       Export system data as CSV file
       Systems: skeletal, muscular, nervous, cardiovascular, digestive, 
                respiratory, urinary, integumentary, endocrine, lymphatic, reproductive
       Example: exportSystemData('skeletal')
    
    2. systemsData
       Access all system information as JSON object
       Example: console.log(systemsData.skeletal)
    
    3. organImagesData
       Access all organ images and descriptions
       Example: console.log(organImagesData.skeletal)
    
    4. setSelectedSystem('systemName')
       Programmatically change selected system
       Example: setSelectedSystem('cardiovascular')
    
    5. closeOrganImage()
       Close the currently displayed organ image
       Example: closeOrganImage()
    
    KEYBOARD SHORTCUTS:
    • Ctrl/Cmd + K     → Focus main search
    • Ctrl/Cmd + F     → Focus anatomy search  
    • Esc              → Close image or clear search
    • Enter/Space      → Select system (when focused)
    • Arrow Left/Right → Adjust depth slider
    
    DATA SOURCES:
    • Medical textbooks & peer-reviewed journals
    • WHO, NIH, CDC medical databases
    • Wikimedia Commons medical diagrams
    • Credible anatomical resources
    `);
};

// Show help on load
console.log('🏥 Anatomy Explorer loaded! Type helpCommand() for available functions');

console.log('✅ All interactive elements initialized successfully!');
