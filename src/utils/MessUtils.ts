import { fetchUsingGET, fetchUsingPOST } from "../api/APIController";
import APIRoutes from "../api/APIRoutes";
import Mess from "../types/Mess";
import { GetAllMessResponse } from "../types/Response";

export const getAllMesses = async () => await fetchUsingGET<GetAllMessResponse>(APIRoutes.MESS);

export const addMess = async (mess: Mess) => await fetchUsingPOST<Mess, Mess>(APIRoutes.MESS, mess);
