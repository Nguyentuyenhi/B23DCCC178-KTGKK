import { Employee } from "@/models/nhanvien/employee";

const STORAGE_KEY = "employees";

export const getEmployees = (): Employee[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveEmployees = (employees: Employee[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
};

export const addEmployee = (employee: Employee) => {
  const employees = getEmployees();
  employees.push(employee);
  saveEmployees(employees);
};

export const updateEmployee = (employee: Employee) => {
  const employees = getEmployees().map(e => e.id === employee.id ? employee : e);
  saveEmployees(employees);
};

export const deleteEmployee = (id: string) => {
  const employees = getEmployees().filter(e => e.id !== id);
  saveEmployees(employees);
};