// import axios from "axios";

// const themeInstance = axios.create({
//   baseURL: "https://6"
// })

// export const updateTheme = (data) => {
//   return themeInstance.patch("/theme", data)
// };

import axios from "axios";

const themeInstance = axios.create({
  baseURL: "https://task-pro-backend-j82b.onrender.com"
})

export const updateTheme = async (data) => {
  return await themeInstance.patch("api/users/themes", data)
};



