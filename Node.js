module.exports = async function (context, req) {
  const user = context.clientPrincipal;

  if (!user) {
    context.res = {
      status: 401,
      body: "Unauthorized"
    };
    return;
  }

  context.res = {
    body: {
      userId: user.userId,
      email: user.userDetails,
      roles: user.userRoles
    }
  };
};
