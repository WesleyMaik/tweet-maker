//Modules
import { useSelector } from "react-redux";
import { getSliceData } from "../store/slice";

export const useTranslated = () => useSelector(getSliceData).translated;