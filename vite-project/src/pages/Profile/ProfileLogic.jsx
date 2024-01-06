import { useQuery } from "react-query";
import { getOnePatient } from "../../api/FetchPatients";
import { getAllConditionsForPatient } from "../../api/FetchCondition";
import { getAllEncountersForPatient } from "../../api/FetchEncounter";
import { getAllObservationsForPatient } from "../../api/FetchObservation";

export function useProfileLogic(patientId) {
  const {
    data: patientData,
    isLoading: isPatientLoading,
    isError: isPatientError,
    error: patientError,
  } = useQuery(["patient", patientId], () => getOnePatient(patientId, localStorage.getItem("access_token")));

  const {
    data: conditionData,
    isLoading: isConditionLoading,
    isError: isConditionError,
    error: conditionError,
  } = useQuery(["condition", patientId], () =>
    getAllConditionsForPatient(patientId, localStorage.getItem("access_token"))
  );

  const {
    data: encounterData,
    isLoading: isEncounterLoading,
    isError: isEncounterError,
    error: encounterError,
  } = useQuery(["encounter", patientId], () =>
    getAllEncountersForPatient(patientId, localStorage.getItem("access_token"))
  );

  const {
    data: observationData,
    isLoading: isObservationLoading,
    isError: isObservationError,
    error: observationError,
  } = useQuery(["observation", patientId], () =>
    getAllObservationsForPatient(patientId, localStorage.getItem("access_token"))
  );

  return {
    patientData,
    isPatientLoading,
    isPatientError,
    patientError,
    conditionData,
    isConditionLoading,
    isConditionError,
    conditionError,
    encounterData,
    isEncounterLoading,
    isEncounterError,
    encounterError,
    isObservationLoading,
    isObservationError,
    observationError,
    observationData,
  };
}