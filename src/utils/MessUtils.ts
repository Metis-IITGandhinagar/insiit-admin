import { fetchUsingGET, fetchUsingPOST } from "../api/APIController";
import APIRoutes from "../api/APIRoutes";
import Mess from "../types/Mess";

export const getAllMesses = async () => await fetchUsingGET<Mess[]>(APIRoutes.MESS);

export const addMess = async (mess: Mess) => await fetchUsingPOST<Mess, Mess>(APIRoutes.MESS, mess);
