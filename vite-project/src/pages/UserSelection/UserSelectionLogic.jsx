import { getAllDoctors } from "../../api/FetchDoctors";
import { useQuery } from "react-query";
import { getAllStaffs } from "../../api/FetchStaffs";
import { getAllPatients } from "../../api/FetchPatients";

export function useDoctorLogic(access_token) {
  const {
    data: doctorData,
    isLoading: isLoadingDoctors,
    isError: isErrorDoctors,
    error: errorDoctors,
  } = useQuery("doctors", getAllDoctors(access_token));

  const {
    data: staffData,
    isLoading: isLoadingStaffs,
    isError: isErrorStaffs,
    error: errorStaffs,
  } = useQuery("staffs", getAllStaffs(access_token));

  const {
    data: patientData,
    isLoading: isLoadingPatients,
    isError: isErrorPatients,
    error: errorPatients,
  } = useQuery("patients", getAllPatients(access_token));

  return {
    isLoading: isLoadingDoctors || isLoadingStaffs || isLoadingPatients,
    doctorData: doctorData,
    staffData: staffData,
    patientData: patientData,
    isError: isErrorDoctors || isErrorStaffs || isErrorPatients,
    error: errorDoctors || errorStaffs || errorPatients,
  };
}