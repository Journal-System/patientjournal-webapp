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
  } = useQuery(["doctors", access_token], () => getAllDoctors(access_token));

  const {
    data: staffData,
    isLoading: isLoadingStaffs,
    isError: isErrorStaffs,
    error: errorStaffs,
  } = useQuery(["staffs", access_token], () => getAllStaffs(access_token));

  const {
    data: patientData,
    isLoading: isLoadingPatients,
    isError: isErrorPatients,
    error: errorPatients,
  } = useQuery(["patients", access_token], () => getAllPatients(access_token));

  return {
    isLoadingDoctors: isLoadingDoctors,
    isLoadingStaffs: isLoadingStaffs,
    isLoadingPatients: isLoadingPatients,
    doctorData: doctorData,
    staffData: staffData,
    patientData: patientData,
    isErrorDoctors: isErrorDoctors,
    isErrorStaffs: isErrorStaffs, 
    isErrorPatients: isErrorPatients,
    errorDoctors: errorDoctors,
    errorStaffs: errorStaffs,
    errorPatients: errorPatients,
  };
}