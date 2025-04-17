import { getLocalStorage, setLocalStorage } from '@/utils/localStorageHelper';

const STORAGE_KEY = 'graduationDecisions';

export async function fetchDecisions() {
  return getLocalStorage(STORAGE_KEY) || [];
}

export async function addDecision(data: { number: string; date: string; summary: string }) {
  const decisions = getLocalStorage(STORAGE_KEY) || [];
  decisions.push({ id: Date.now(), ...data });
  setLocalStorage(STORAGE_KEY, decisions);
  return decisions;
}