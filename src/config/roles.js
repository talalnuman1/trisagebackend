const allRoles = {
  user: ['getViews', 'manageViews', 'deleteViews', 'getorder', 'deleteorder'],
  admin: ['getUsers', 'manageUsers'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
