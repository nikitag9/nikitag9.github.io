    // Your JavaScript code here
    const locations = [
      {
        name: 'Tech Tower',
        description: 'Georgia Tech\'s administration building',
        // latitude: 33.7756,
        // longitude: -84.3963,
      },
      // Add more locations as needed...
    ];

    const displayMessage = (message) => {
      // Display the message on the screen
      const messageElement = document.createElement('p');
      messageElement.textContent = message;
      messageElement.classList.add('tour-guide-message');
      document.body.appendChild(messageElement);
    };

    // const checkUserLocation = () => {
    //   // Check if the user is within the specified location(s) using GPS coordinates
    //   navigator.geolocation.getCurrentPosition((position) => {
    //     const userLatitude = position.coords.latitude;
    //     const userLongitude = position.coords.longitude;

    //     // Define the bounding box for the specific area (replace with your desired area)
    //     const areaLatitudeMin = 33.7740;
    //     const areaLatitudeMax = 33.7760;
    //     const areaLongitudeMin = -84.3970;
    //     const areaLongitudeMax = -84.3950;

    //     // Check if the user is within the specified area
    //     if (
    //       userLatitude >= areaLatitudeMin &&
    //       userLatitude <= areaLatitudeMax &&
    //       userLongitude >= areaLongitudeMin &&
    //       userLongitude <= areaLongitudeMax
    //     ) {
    //       // User is within the specified area, show the tour guide messages
    //       showTourGuideMessages();
    //     }
    //   });
    // };

    const getTourGuideMessages = () => {
      // Return an array of tour guide messages for the specific location
      // You can customize the messages for each location in the `locations` array
      return [
        'Welcome to the virtual tour guide app!',
        'Explore this virtual location and enjoy the experience!',
      ];
    };

    const showTourGuideMessages = () => {
      const tourGuideMessages = getTourGuideMessages();

      // Display each tour guide message with a delay
      let delay = 5000; // 5 seconds
      tourGuideMessages.forEach((message) => {
        setTimeout(() => {
          displayMessage(message);
        }, delay);
        delay += 2000; // 2 seconds delay between each message
      });
    };

    // Call the function to check the user's location and show the tour guide messages if within the area
    checkUserLocation();
