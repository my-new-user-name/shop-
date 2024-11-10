const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})


function logout() {
    // Show a confirmation dialog
    const confirmLogout = confirm("Are you sure you want to log out?");
    
    if (confirmLogout) {
        // Perform logout actions here, e.g., clearing user session data
        
        // Redirect to the login page (assuming login.html is your login page)
        window.location.href = "login.html";
    }
}




const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})

function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.style.display = "none";
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = "block";
    }

    // Update active state for sidebar links
    const sideMenuItems = document.querySelectorAll(".side-menu li");
    sideMenuItems.forEach(item => {
        item.classList.remove("active");
    });
    
    // Find the active menu item based on sectionId and add active class
    document.querySelector(a[onclick="showSection('${sectionId}')"]).parentNode.classList.add("active");
}

// Sample data for the revenue chart
const revenueData = [8200, 2000, 8300, 7000, 8500, 8600, 6000, 9000, 9530, 9470];
const revenueLabels = ['January','Febuary','March','April','June', 'July', 'August', 'September', 'October', 'November'];

// Sample data for Total Users chart
const totalUsersData = [450,1200, 1250, 700, 500, 1350, 1300, 1350, 1400, 1450];
const totalUsersLabels = ['January','Febuary','March','April','June', 'July', 'August', 'September', 'October', 'November'];

// Sample data for Active Sessions chart
const activeSessionsData = [50, 55, 60, 53, 60, 70, 58, 50, 62, 57, 45, 68];
const activeSessionsLabels = ['January','Febuary','March','April','June', 'July', 'August', 'September', 'October', 'November'];

// Initialize Revenue Chart
const ctxRevenue = document.getElementById('revenueChart').getContext('2d');
new Chart(ctxRevenue, {
  type: 'line',
  data: {
    labels: revenueLabels,
    datasets: [{
      label: 'Revenue ($)',
      data: revenueData,
      borderColor: '#3498db',
      backgroundColor: 'rgba(52, 152, 219, 0.2)',
      fill: true,
      tension: 0.2
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return '$' + value.toLocaleString();
          }
        }
      }
    }
  }
});

// Initialize Total Users Chart
const ctxTotalUsers = document.getElementById('totalUsersChart').getContext('2d');
new Chart(ctxTotalUsers, {
  type: 'bar',
  data: {
    labels: totalUsersLabels,
    datasets: [{
      label: 'Total Users',
      data: totalUsersData,
      backgroundColor: '#2ecc71'
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Initialize Active Sessions Chart
const ctxActiveSessions = document.getElementById('activeSessionsChart').getContext('2d');
new Chart(ctxActiveSessions, {
  type: 'line',
  data: {
    labels: activeSessionsLabels,
    datasets: [{
      label: 'Active Sessions',
      data: activeSessionsData,
      borderColor: '#e74c3c',
      backgroundColor: 'rgba(231, 76, 60, 0.2)',
      fill: true,
      tension: 0.2
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Initialize Analytics page link click event
document.getElementById("analytics-link").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("users-content").style.display = "none";
  document.getElementById("analytics-content").style.display = "block";
});

// Example data for charts (These can be dynamic, based on your actual data)
const userDemographicsData = {
  labels: ['18-24', '25-34', '35-44', '45-54', '55+'],
  datasets: [{
    label: 'Age Group Distribution',
    data: [120, 200, 150, 90, 60],
    backgroundColor: ['#ff9999', '#66b3ff', '#99ff99', '#ffcc99', '#c2c2f0'],
    borderColor: '#ffffff',
    borderWidth: 1
  }]
};

const revenueExpenseData = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [
    {
      label: 'Revenue',
      data: [50000, 60000, 70000, 80000],
      backgroundColor: '#4CAF50',
      borderColor: '#388E3C',
      fill: false
    },
    {
      label: 'Expenses',
      data: [40000, 45000, 55000, 65000],
      backgroundColor: '#FF6347',
      borderColor: '#E53935',
      fill: false
    }
  ]
};

const activeUsersData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [{
    label: 'Active Users',
    data: [1200, 1500, 1800, 2000, 2300],
    backgroundColor: '#FFEB3B',
    borderColor: '#FBC02D',
    fill: false
  }]
};

// Render Charts using Chart.js
window.onload = function() {
  // User Demographics Chart
  const ctx1 = document.getElementById('userDemographicsChart').getContext('2d');
  new Chart(ctx1, {
    type: 'pie',
    data: userDemographicsData,
  });

  // Revenue vs Expenses Chart
  const ctx2 = document.getElementById('revenueExpenseChart').getContext('2d');
  new Chart(ctx2, {
    type: 'line',
    data: revenueExpenseData,
  });

  // Active Users Over Time Chart
  const ctx3 = document.getElementById('activeUsersChart').getContext('2d');
  new Chart(ctx3, {
    type: 'line',
    data: activeUsersData,
  });
};




function saveSettings() {
    // Get input values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const emailNotifications = document.getElementById('emailNotifications').checked;
    const smsNotifications = document.getElementById('smsNotifications').checked;
    const pushNotifications = document.getElementById('pushNotifications').checked;

    // You could add logic here to send these settings to a server or store them locally
    console.log("Settings Saved:");
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Email Notifications:", emailNotifications);
    console.log("SMS Notifications:", smsNotifications);
    console.log("Push Notifications:", pushNotifications);

    alert("Settings saved successfully!");
}

function searchSettings() {
    const searchQuery = document.getElementById('settingsSearchInput').value;
    // Here you would add code to filter settings options based on the search query
    console.log("Search query:", searchQuery);
}