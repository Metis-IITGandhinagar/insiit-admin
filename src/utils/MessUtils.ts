import { fetchUsingGET } from "../api/APIController";
import APIRoutes from "../api/APIRoutes";
import Mess from "../types/Mess";

export const getAllMesses = async () => {
  return await fetchUsingGET<Mess[]>(APIRoutes.GET_ALL_MESS);
};
