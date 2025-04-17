import { getLocalStorage, setLocalStorage } from '@/utils/localStorageHelper';

const STORAGE_KEY = 'diplomas';

export async function fetchDiplomas() {
  return getLocalStorage(STORAGE_KEY) || [];
}

export async function addDiploma(data: any) {
  const diplomas = getLocalStorage(STORAGE_KEY) || [];
  diplomas.push({ id: Date.now(), ...data });
  setLocalStorage(STORAGE_KEY, diplomas);
  return diplomas;
}