import { getLocalStorage, setLocalStorage } from '@/utils/localStorageHelper';

const STORAGE_KEY = 'templateFields';

export async function fetchTemplateFields() {
  return getLocalStorage(STORAGE_KEY) || [];
}

export async function addTemplateField(data: { name: string; type: string }) {
  const fields = getLocalStorage(STORAGE_KEY) || [];
  fields.push({ id: Date.now(), ...data });
  setLocalStorage(STORAGE_KEY, fields);
  return fields;
}

export async function deleteTemplateField(id: string) {
  const fields = getLocalStorage(STORAGE_KEY) || [];
  const updatedFields = fields.filter((field: any) => field.id !== id);
  setLocalStorage(STORAGE_KEY, updatedFields);
  return updatedFields;
}