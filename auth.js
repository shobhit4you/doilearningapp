async function loadUserProfile() {
  const response = await fetch("/api/profile");

  if (response.status === 401) {
    document.getElementById("userInfo").innerHTML =
      "<p><b>Unauthorized</b>. Please login.</p>";
    return;
  }

  const data = await response.json();

  document.getElementById("userInfo").innerHTML = `
    <p><b>User:</b> ${data.email}</p>
    <p><b>Roles:</b> ${data.roles.join(", ")}</p>
  `;
}

loadUserProfile();
