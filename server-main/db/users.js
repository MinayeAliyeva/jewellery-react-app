const registeredUsers = [];

function addUser(user) {
  registeredUsers.push(user);
}

function getUsers() {
  return registeredUsers;
}

module.exports = {
  addUser,
  getUsers,
  registeredUsers,
};
