const express = require("express")
const bodyParser = require("body-parser")

const app = express()
const PORT = 3000

// Enable CORS
app.use((req, res, next) => {
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
  const response = {
    isSuccess: true,
    message: "success",
    data: {
      Cardiac: {
        caseVolume: 1800,
        potentialCaseVolume: 1881,
        blocks: 356,
        potentialBlocks: 341,
        potentialCostSaved: 234273.54,
        potentialByBucket: [
          {
            bucketName: "Planning Accuracy",
            volumeIncreased: 11,
            blocksReduced: 2,
            costSaved: 32440.65,
          },
          {
            bucketName: "Flow Smoothing",
            volumeIncreased: 15,
            blocksReduced: 3,
            costSaved: 42218.86,
          },
          {
            bucketName: "Priority Planning",
            volumeIncreased: 55,
            blocksReduced: 11,
            costSaved: 159614.02,
          },
        ],
      },
      General: {
        caseVolume: 1500,
        potentialCaseVolume: 1573,
        blocks: 328,
        potentialBlocks: 312,
        potentialCostSaved: 242883.89,
        potentialByBucket: [
          {
            bucketName: "Planning Accuracy",
            volumeIncreased: 6,
            blocksReduced: 1,
            costSaved: 18775.57,
          },
          {
            bucketName: "Flow Smoothing",
            volumeIncreased: 20,
            blocksReduced: 4,
            costSaved: 67702.05,
          },
          {
            bucketName: "Priority Planning",
            volumeIncreased: 47,
            blocksReduced: 10,
            costSaved: 156406.27,
          },
        ],
      },
    },
  }

  res.json(response)
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
