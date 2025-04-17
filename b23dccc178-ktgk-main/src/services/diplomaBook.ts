import { getLocalStorage, setLocalStorage } from '@/utils/localStorageHelper';

const STORAGE_KEY = 'diplomaBooks';

export async function fetchDiplomaBooks() {
  return getLocalStorage(STORAGE_KEY) || [];
}

export async function addDiplomaBook(data: { number: number; year: number }) {
  const books = getLocalStorage(STORAGE_KEY) || [];
  books.push({ id: Date.now(), ...data });
  setLocalStorage(STORAGE_KEY, books);
  return books;
}