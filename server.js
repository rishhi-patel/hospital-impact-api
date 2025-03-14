import express from "express"
import bodyParser from "body-parser"

const app = express()
const PORT = 3000

// Enable CORS
app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.use(bodyParser.json())

app.post("/calculate-impact", (req, res) => {
  const { services } = req.body.parameters || []

  const generateRandomData = (caseVolume) => {
    const potentialCaseVolume = caseVolume + Math.floor(Math.random() * 100)
    const blocks = Math.floor(Math.random() * 400)
    const potentialBlocks = blocks - Math.floor(Math.random() * 20)
    const potentialCostSaved = parseFloat((Math.random() * 500000).toFixed(2))
    const potentialByBucket = [
      {
        bucketName: "Planning Accuracy",
        volumeIncreased: Math.floor(Math.random() * 20),
        blocksReduced: Math.floor(Math.random() * 5),
        costSaved: parseFloat((Math.random() * 100000).toFixed(2)),
      },
      {
        bucketName: "Flow Smoothing",
        volumeIncreased: Math.floor(Math.random() * 20),
        blocksReduced: Math.floor(Math.random() * 5),
        costSaved: parseFloat((Math.random() * 100000).toFixed(2)),
      },
      {
        bucketName: "Priority Planning",
        volumeIncreased: Math.floor(Math.random() * 60),
        blocksReduced: Math.floor(Math.random() * 15),
        costSaved: parseFloat((Math.random() * 300000).toFixed(2)),
      },
    ]

    return {
      caseVolume,
      potentialCaseVolume,
      blocks,
      potentialBlocks,
      potentialCostSaved,
      potentialByBucket,
    }
  }

  const data = {}
  services &&
    services.forEach((service) => {
      data[service.serviceName] = generateRandomData(service.caseVolume)
    })

  const response = {
    isSuccess: true,
    message: "success",
    data,
  }

  res.json(response)
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
