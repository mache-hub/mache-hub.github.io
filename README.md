## MACH-E/F150 Lightning NACS Adapter Status Checker
A simple web application built with React and Bootstrap to check the status of the NACS adapter offered by Ford.

### Background
New Mach-E and F150 Lightning owners had the opportunity to request a free NACS Adapter from Ford. After placing an order, owners received an email with the expected delivery date. Previously, the status of the adapter could be checked via the FordPass app or through the confirmation email. However, the option to check within the app is no longer available, and many users have lost their confirmation emails.

This application was created to fill that gap, allowing users to easily check the status of their adapter.

### Features
Check NACS adapter status: Simple and user-friendly interface for querying your adapter status.
Region-based support: Users can select between US and Canada to get the appropriate results.
VIN validation: Ensures the Vehicle Identification Number (VIN) is correctly formatted.
Responsive design: Works across mobile and desktop devices.

### Usage
To use the application:
* Select your region (US or Canada).
* Enter your 17-character VIN.
* Submit the form to check the status of your adapter.

### Development Setup
To run this application locally:
* Clone the repository: `git clone https://github.com/mache-hub/nacs-adapter.git`
* Navigate into the project directory: `cd nacs-adapter`
* Install the dependencies: `npm install`
* Run the development server: `npm run dev`
* The application will be accessible at http://localhost:5173/nacs-adapter/

### Contributing
We welcome contributions! If you'd like to report a bug, request a feature, or submit a pull request, feel free to do so. Please ensure your contributions align with the project's goals and maintain code quality.

### Feedback
We welcome any feedback! If you encounter issues or have suggestions for improvements, please reach out to us at mymachehub@gmail.com.
