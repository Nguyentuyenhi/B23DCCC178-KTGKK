import { getLocalStorage } from '@/utils/localStorageHelper';

const STORAGE_KEY = 'diplomas';

export async function searchDiplomas(params: { degreeNumber?: string; fullName?: string }) {
  const diplomas = getLocalStorage(STORAGE_KEY) || [];
  return diplomas.filter((diploma: any) =>
    Object.keys(params).every((key) => diploma[key as keyof typeof params]?.includes(params[key as keyof typeof params]))
  );
}