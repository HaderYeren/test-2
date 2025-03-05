// Завдання 1
const delay = ms => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(ms);
      }, ms);
    });
  };
  
  const logger = time => console.log(`Resolved after ${time}ms`);
  
  document.getElementById('delayButton').addEventListener('click', () => {
    delay(2000).then(logger);
  });
  
  // Завдання 2
  const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
  ];
  
  const toggleUserState = (allUsers, userName) => {
    return new Promise(resolve => {
      const updatedUsers = allUsers.map(user =>
        user.name === userName ? { ...user, active: !user.active } : user
      );
      resolve(updatedUsers);
    });
  };
  
  const loggerToggle = updatedUsers => console.table(updatedUsers);
  
  document.getElementById('toggleButton').addEventListener('click', () => {
    toggleUserState(users, 'Mango').then(loggerToggle);
  });
  
  // Завдання 3
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  
  const makeTransaction = transaction => {
    return new Promise((resolve, reject) => {
      const delay = randomIntegerFromInterval(200, 500);
      
      setTimeout(() => {
        const canProcess = Math.random() > 0.3;
        
        if (canProcess) {
          resolve({ id: transaction.id, time: delay });
        } else {
          reject(transaction.id);
        }
      }, delay);
    });
  };
  
  const logSuccess = ({ id, time }) => {
    console.log(`Transaction ${id} processed in ${time}ms`);
  };
  
  const logError = id => {
    console.warn(`Error processing transaction ${id}. Please try again later.`);
  };
  
  document.getElementById('transactionButton').addEventListener('click', () => {
    makeTransaction({ id: 70, amount: 150 })
      .then(logSuccess)
      .catch(logError);
  });
  