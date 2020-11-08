import axios from "axios";

async function userInfoService() {
  return await axios
    .get("https://secure-shelf-01993.herokuapp.com/feedback_summary")
    .then((res) => {
      console.log("successfully received ", res);
      return res.data;
    });
}

export default userInfoService;
