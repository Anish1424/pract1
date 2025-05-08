// localStorage.clear();


document.getElementById('regForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Get user input
    const user = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value
    };
  
    // Simulate AJAX POST using setTimeout
    function fakeAjaxPost(data, callback) {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "server-endpoint", true); // 'server-endpoint' is a dummy
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          callback(xhr.responseText);
        }
      };
  
      // Store in localStorage
      let users = JSON.parse(localStorage.getItem("users")) || [];
      users.push(data);
      localStorage.setItem("users", JSON.stringify(users));
  
      // Simulate server response
      setTimeout(() => {
        xhr.status = 200;
        xhr.readyState = 4;
        xhr.responseText = JSON.stringify({ message: "User registered successfully" });
        xhr.onreadystatechange();
      }, 500);
    }
  
    fakeAjaxPost(user, function(response) {
      alert("Registration successful!");
      window.location.href = "display.html"; // Redirect to data display page
    });
  });
  