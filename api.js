const express = require("express");
const router = express.Router();
const Video = require("./models/video");

const {
    SUCCESS_CODE,
    SERVER_ERROR_CODE,
    SERVER_ERROR_MSG,
    SUCCESS_MSG,
  } = require("./utils/response");


router.get("/get", async (req, res) => {
  res.status(200).json("hello world!");
});

router.post("/name", async (req, res) => {
  res.status(200).json("Hello world!");
});

router.get("/getTotalVideoSize", async (req, res) => {
  try {
    const { CreatedBy } = req.body;
    var totalSize = 0;
    const item = await Video.find({ CreatedBy: CreatedBy }).exec();
    item.forEach((video) => {
      totalSize += video.videoSize;
    });
    console.log("totalSize: ", totalSize);
    return res.status(SUCCESS_CODE).send({ result: "success", data: totalSize });
  } catch (error) {
    return res
      .status(SERVER_ERROR_CODE)
      .send({ result: "false", messages: SERVER_ERROR_MSG });
  }
});

router.get("/getVideoMetadata", async (req, res) => {
  try {
    const { id } = req.body;
    const item = (await Video.find({ id: id }).exec())[0];
    console.log("item: ", item.videoSize, item.viewerCount);
    return res.status(SUCCESS_CODE).send({ result: "success", data: item });
  } catch (error) {
    return res
      .status(SERVER_ERROR_CODE)
      .send({ result: "false", messages: SERVER_ERROR_MSG });
  }
});

router.patch("/updateVideoData", async (req, res) => {
  try {
    const { id, videoSize, viewerCount } = req.body;
    const item = (await Video.find({ id }).exec())[0];
    console.log("before update: ", item);
    item.videoSize = videoSize;
    item.viewerCount = viewerCount;
    item.save();
    const item_updated = await Video.find({ id }).exec();
    console.log(item_updated);
    return res.status(SUCCESS_CODE).send({ result: "success", data: {} });
  } catch (error) {
    return res
      .status(SERVER_ERROR_CODE)
      .send({ result: "false", messages: SERVER_ERROR_MSG });
  }
});
module.exports = router;