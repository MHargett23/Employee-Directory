import axios from "axios";

const RANDOMUSER_URL = "https://randomuser.me/api/?results=50&nat=us,dk,fr,gb"
export default {
  getMany: function(limit) {
    return axios.get(RANDOMUSER_URL);
  }
};
