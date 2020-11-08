import axios from "axios";

async function userInfoService() {
  return await axios
    .get("https://fms-mongodb-backend.herokuapp.com/feedback_summary")
    .then((res) => {
      console.log("successfully received ", res);
      return res.data;
    });
}

export default userInfoService;
