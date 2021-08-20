// Get elements by ID
var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var seconds = document.getElementById("seconds");
var ampm = document.getElementById("ampm");

// Function expression
var clock = setInterval
(
  function time()
    {
      var date_now = new Date();
      var hrs = date_now.getHours();
      var mins = date_now.getMinutes();
      var secs = date_now.getSeconds();
      let ap;

      // Challenge
      // Create if statements to add a zero if hrs/mins/secs are single digit
      if (hrs < 12 || hrs === 24 )
        {
          ap = "AM"
        }
      if (12 <= hrs <= 23)
        {
          ap = "PM"
        }
      hrs = (hrs + 11) % 12 + 1;
      if (hrs < 10)
        {
          hrs = `0${hrs}`;
        }
      if (mins < 10)
        {
          mins = `0${mins}`;
        }
      if (secs < 10)
        {
          secs = `0${secs}`;
        }

      // Set the text content to these variables

      //hour.textContent = hrs;
      hour.textContent = hrs;
      minute.textContent = mins;
      seconds.textContent = secs;
      ampm.textContent = ap;
    }, 1000
)
