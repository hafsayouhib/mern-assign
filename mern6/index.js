// Scenario: Workers in a company

// Array of worker objects
const workers = [
    { id: 1, name: 'Alice', salary: 50000, department: 'HR' },
    { id: 2, name: 'Bob', salary: 60000, department: 'Engineering' },
    { id: 3, name: 'Charlie', salary: 55000, department: 'Marketing' },
    { id: 4, name: 'David', salary: 70000, department: 'Engineering' },
    { id: 5, name: 'Eva', salary: 48000, department: 'HR' },
  ];
  
  // Example using .map() to get an array of worker names
  const workerNames = workers.map(worker => worker.name);
  console.log('Worker Names:', workerNames);
  
  // Example using .filter() to get workers from the Engineering department
  const engineeringWorkers = workers.filter(worker => worker.department === 'Engineering');
  console.log('Engineering Workers:', engineeringWorkers);
  
  // Example using .find() to get a worker with a specific id
  const workerWithId3 = workers.find(worker => worker.id === 3);
  console.log('Worker with ID 3:', workerWithId3);
  
  // Example using .reduce() to calculate the total salary of all workers
  const totalSalary = workers.reduce((accumulator, worker) => accumulator + worker.salary, 0);
  console.log('Total Salary of All Workers:', totalSalary);
  
  // Example using .some() to check if there is any worker with a salary over 60000
  const hasHighSalary = workers.some(worker => worker.salary > 60000);
  console.log('Any worker with a salary over 60000?', hasHighSalary);
  
  // Example using .every() to check if all workers are from the HR department
  const allAreHR = workers.every(worker => worker.department === 'HR');
  console.log('Are all workers from the HR department?', allAreHR);
  
  // Example using .push() to add a new worker to the array
  const newWorker = { id: 6, name: 'Frank', salary: 58000, department: 'Marketing' };
  workers.push(newWorker);
  console.log('Workers after adding a new worker:', workers);
  