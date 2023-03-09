import { configureStore } from "@reduxjs/toolkit";
import companies from "../features/companiesSlice";

export const store = configureStore({
  reducer: companies,
});
