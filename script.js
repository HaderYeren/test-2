const getUserNames = users => users.map(({ name }) => name);
console.log(getUserNames(users));

const getUsersWithEyeColor = (users, color) => users.filter(({ eyeColor }) => eyeColor === color);
console.log(getUsersWithEyeColor(users, 'blue'));

const getUserNamesByGender = (users, gender) => users
    .filter(user => user.gender === gender)
    .map(({ name }) => name);
console.log(getUserNamesByGender(users, 'female'));

const getInactiveUsers = users => users.filter(({ isActive }) => !isActive);
console.log(getInactiveUsers(users)); 

const getUserByEmail = (users, email) => users.find(user => user.email === email);
console.log(getUserByEmail(users, 'alice.johnson@example.com'));

const getUsersByAgeRange = (users, min, max) => users.filter(({ age }) => age >= min && age <= max);
console.log(getUsersByAgeRange(users, 26, 30));






