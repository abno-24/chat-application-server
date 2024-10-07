import { asyncHandler } from "../../utils/asyncHandler.js";
import { ApiResponse } from "../../utils/ApiResponse.js";

export const login = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
});
