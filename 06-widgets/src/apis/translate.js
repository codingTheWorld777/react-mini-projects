import axios from "axios";

export default axios.create({
  baseURL: "https://translation.googleapis.com/language/translate/v2",
  params: {
    key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM" // this is a paid key API, you need to pay it yourself and copy it in key's value in order to run this app
  },
});
