export interface Employee {
    id: string;
    name: string;
    position: string;
    department: string;
    salary: number;
    status: string;
  }
  
  const STORAGE_KEY = "employees";
  
  // Lấy danh sách nhân viên từ localStorage
  export const getEmployees = (): Employee[] => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  };
  
  // Lưu danh sách nhân viên vào localStorage
  export const saveEmployees = (employees: Employee[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
  };
  
  // Thêm nhân viên mới
  export const addEmployee = (employee: Employee) => {
    const employees = getEmployees();
    employees.push(employee);
    saveEmployees(employees);
  };
  
  // Cập nhật nhân viên
  export const updateEmployee = (employee: Employee) => {
    const employees = getEmployees().map(e => e.id === employee.id ? employee : e);
    saveEmployees(employees);
  };
  
  // Xóa nhân viên (chỉ cho phép nếu chưa ký hợp đồng)
  export const deleteEmployee = (id: string): boolean => {
    const employees = getEmployees();
    const employee = employees.find(e => e.id === id);
  
    if (employee?.status === "Đã ký hợp đồng") {
      return false; // Không thể xóa nhân viên đã ký hợp đồng
    }
  
    saveEmployees(employees.filter(e => e.id !== id));
    return true;
  };
  