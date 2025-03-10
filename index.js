// 1. Non-destructive update function
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  
  // 2. Destructive update function
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // 3. Non-destructive delete function
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // 4. Destructive delete function
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Example employee object
  let employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  
  // Testing the functions
  console.log(updateEmployeeWithKeyAndValue(employee, "name", "Jane Doe"));
  console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Elm St"));
  console.log(deleteFromEmployeeByKey(employee, "streetAddress"));
  console.log(destructivelyDeleteFromEmployeeByKey(employee, "name"));
  