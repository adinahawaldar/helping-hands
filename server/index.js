import express from 'express'
import cors from 'cors'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const DB_PATH = path.join(__dirname, 'db.json')

const app = express()
app.use(cors())
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))

// Initial data structure to seed database if not exists
const initialData = {
  ngos: [
    {
      id: 1,
      name: "ABC Foundation",
      focus: "Education & Rehabilitation",
      iconName: "GraduationCap",
      desc: "Providing textbooks, scholarship grants, and remote classroom infrastructure for children in underserved tribal settlements.",
      impactCount: "12,400+ Children",
      projectsCount: 3
    },
    {
      id: 2,
      name: "Feeding Hands NGO",
      focus: "Hunger & Disaster Relief",
      iconName: "HeartHandshake",
      desc: "Distributing warm, hygienic meals and emergency ration kits to flood-affected communities and remote rural settlements.",
      impactCount: "85,000+ Meals Served",
      projectsCount: 2
    },
    {
      id: 3,
      name: "Care & Cure Trust",
      focus: "Healthcare Services",
      iconName: "Activity",
      desc: "Mobilizing mobile medical vans, organizing rural clinics, and distributing pediatric medicines to combat malnutrition.",
      impactCount: "4,500+ Treatments",
      projectsCount: 1
    },
    {
      id: 4,
      name: "Disaster Response India",
      focus: "Emergency Disaster Relief",
      iconName: "ShieldAlert",
      desc: "A first-responder team deploying rescue boats, clean drinking water systems, and temporary shelters during monsoons.",
      impactCount: "18 Rescue Deployments",
      projectsCount: 2
    }
  ],
  causes: [
    {
      id: 1,
      title: "Sponsor Emergency Classroom Supplies & Textbooks for 150 Rural Kids",
      location: "BIHAR, INDIA",
      ngo: "ABC Foundation",
      urgency: "Urgent • Monsoons Ahead",
      category: "Education Support",
      detail: "Heavy rains threaten the temporary school shelter. We need to buy waterproof bags, textbooks, and drawing kits.",
      goal: 65000,
      raised: 42000,
      percentage: 64,
      image: "/hero_mud_hands.png",
      isVerified: true
    },
    {
      id: 2,
      title: "Emergency Medicine Kits & Diagnostic Support for Pediatric Malnutrition Camp",
      location: "MAHARASHTRA, INDIA",
      ngo: "Care & Cure Trust",
      urgency: "Critical • Immediate Need",
      category: "Medical",
      detail: "Sponsoring doctor consultations, health supplement kits, and basic diagnostics for rural children under five.",
      goal: 120000,
      raised: 85000,
      percentage: 70,
      image: "/hero_food_received.png",
      isVerified: true
    },
    {
      id: 3,
      title: "Assam Floods: Deploy Clean Water Filtration Units in Relief Camps",
      location: "ASSAM, INDIA",
      ngo: "Disaster Response India",
      urgency: "Critical • Flood Relocation",
      category: "Flood Relief",
      detail: "Clean drinking water is the most critical necessity to prevent cholera. Installing 5 community filtration plants.",
      goal: 220000,
      raised: 180000,
      percentage: 81,
      image: "/hero_stacked_hands.png",
      isVerified: true
    },
    {
      id: 101,
      title: "Urgent Treatment Support for 6-Year-Old Rohan's Brain Tumor Surgery",
      location: "HYDERABAD, INDIA",
      ngo: "Independent Beneficiary Account",
      urgency: "Critical • Immediate Aid Required",
      category: "Medical",
      detail: "Rohan is scheduled for emergency surgical resection at Apollo Hospital. We need help to clear the ICU deposit.",
      goal: 350000,
      raised: 145000,
      percentage: 41,
      image: "/hero_group_children.png",
      isVerified: true
    },
    {
      id: 102,
      title: "Rebuilding My Small Tea Shop and Home Destroyed in Assam Floods",
      location: "SILCHAR, ASSAM",
      ngo: "Independent Beneficiary Account",
      urgency: "Urgent • Active Rehabilitation",
      category: "Flood Relief",
      detail: "Severe monsoons washed away my tea shop, our family's only income. Need funds to purchase sheets and cups.",
      goal: 45000,
      raised: 28000,
      percentage: 62,
      image: "/hero_mud_hands.png",
      isVerified: true
    }
  ]
}

// Read database helper
const readDB = () => {
  try {
    if (!fs.existsSync(DB_PATH)) {
      fs.writeFileSync(DB_PATH, JSON.stringify(initialData, null, 2))
      return initialData
    }
    const data = fs.readFileSync(DB_PATH, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    console.error("Error reading database file", error)
    return initialData
  }
}

// Write database helper
const writeDB = (data) => {
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2))
  } catch (error) {
    console.error("Error writing database file", error)
  }
}

// GET list of verified NGOs
app.get('/api/ngos', (req, res) => {
  const db = readDB()
  res.json(db.ngos)
})

// GET verified causes (both NGO campaigns and verified community emergencies)
app.get('/api/causes', (req, res) => {
  const db = readDB()
  const verifiedCauses = db.causes.filter(c => c.isVerified === true)
  res.json(verifiedCauses)
})

// GET pending causes waiting for admin verification
app.get('/api/admin/pending', (req, res) => {
  const db = readDB()
  const pendingCauses = db.causes.filter(c => c.isVerified === false)
  res.json(pendingCauses)
})

app.post('/api/causes', (req, res) => {
  const { 
    title, 
    location, 
    postedBy, 
    category, 
    detail, 
    goal,
    longDescription,
    beneficiaryName,
    phone,
    email,
    image,
    supportingImages,
    verificationDocs
  } = req.body

  if (!title || !location || !postedBy || !detail || !goal) {
    return res.status(400).json({ error: "Missing required fields." })
  }

  const goalVal = parseInt(goal)
  if (isNaN(goalVal) || goalVal <= 0) {
    return res.status(400).json({ error: "Goal amount must be positive." })
  }

  const db = readDB()

  const newCause = {
    id: Date.now(),
    title,
    location: location.toUpperCase(),
    ngo: "Independent Beneficiary Account",
    urgency: "Immediate • Pending Verification",
    category: category || "General Relief",
    detail,
    longDescription: longDescription || detail,
    beneficiaryName: beneficiaryName || "Self / Family",
    goal: goalVal,
    raised: 0,
    percentage: 0,
    image: image || "/hero_stacked_hands.png", // base64 or default
    supportingImages: supportingImages || [],
    verificationDocs: verificationDocs || [],
    postedBy,
    phone: phone || "",
    email: email || "",
    donorsCount: 0,
    daysLeft: 30,
    isVerified: false // Needs admin check
  }

  db.causes.push(newCause)
  writeDB(db)

  res.status(201).json({
    message: "Emergency request submitted successfully. It will appear publicly once verified by our team.",
    cause: newCause
  })
})

// GET a single cause detail by ID (verified or pending)
app.get('/api/causes/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const db = readDB()
  const cause = db.causes.find(c => c.id === id)
  
  if (cause) {
    return res.json(cause)
  }
  
  res.status(404).json({ error: "Campaign not found." })
})

// POST: Record a donation to a cause
app.post('/api/donate', (req, res) => {
  const { causeId, amount } = req.body

  const donateAmt = parseInt(amount)
  if (!causeId || isNaN(donateAmt) || donateAmt <= 0) {
    return res.status(400).json({ error: "Invalid donation parameters." })
  }

  const db = readDB()
  const causeIndex = db.causes.findIndex(c => c.id === parseInt(causeId))

  if (causeIndex === -1) {
    return res.status(404).json({ error: "Cause or fundraiser not found." })
  }

  db.causes[causeIndex].raised += donateAmt
  db.causes[causeIndex].percentage = Math.round(
    (db.causes[causeIndex].raised / db.causes[causeIndex].goal) * 100
  )

  writeDB(db)

  res.json({
    success: true,
    message: `Thank you! Your donation of ₹${donateAmt} was recorded successfully.`,
    cause: db.causes[causeIndex]
  })
})

// POST: Admin verify a pending emergency campaign
app.post('/api/admin/verify/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const db = readDB()
  const causeIndex = db.causes.findIndex(c => c.id === id)

  if (causeIndex === -1) {
    return res.status(404).json({ error: "Campaign not found." })
  }

  db.causes[causeIndex].isVerified = true
  db.causes[causeIndex].urgency = "Verified • Live Support"
  writeDB(db)

  res.json({
    success: true,
    message: "Emergency campaign verified successfully and is now live!",
    cause: db.causes[causeIndex]
  })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Custom backend running on port ${PORT}`)
})
