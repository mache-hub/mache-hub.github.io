import React, { useState } from "react";
import CustomSelect from "./CustomSelect";
import { Form, Button, Container, Toast, Row, Col } from "react-bootstrap";
import "./AdapterStatus.css";

const AdaptorStatusForm: React.FC = () => {
  const [region, setRegion] = useState<string | null>(null); // Store selected region
  const [vin, setVin] = useState<string>(""); // VIN state
  const [showToast, setShowToast] = useState<boolean>(false); // Control toast visibility
  const [toastMessage, setToastMessage] = useState<string>(""); // Toast message

  const handleRegionSelect = (selectedOption: string) => {
    setRegion(selectedOption);
  };

  const handleVinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVin(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // VIN validation: must be exactly 17 characters long
    if (vin.length !== 17) {
      setToastMessage("VIN must be exactly 17 characters long.");
      setShowToast(true); // Show toast with the error message
      return;
    }

    // Determine region-based domain
    const regionDomain =
      region === "US" ? "com" : region === "Canada" ? "ca" : null;

    // If region is not selected, show error toast
    if (!regionDomain) {
      setToastMessage("Please select a valid region.");
      setShowToast(true);
      return;
    }

    // Construct URL
    const url = `https://www.ford.${regionDomain}/myaccount/connected-services?vin=${vin}&keyName=chargeradapterstatus`;

    // Clear the input field immediately after submit
    setVin(""); // Clear the VIN input field

    // Redirect to the constructed URL in the same window
    window.location.href = url;

    // Open the constructed URL in a new tab
    // window.open(url, '_blank');
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "80vh" }}
    >
      <Form className="p-4 bg-light rounded" onSubmit={handleSubmit}>
        <div className="circle circle-quill">
        <img
            src="https://awsdatabase.s3.us-east-2.amazonaws.com/mustang_logo.png"
            alt="Mustang Logo"
            className="quill"
          />
        </div>
        <h2 className="text-center mb-4">Check your Adapter Status</h2>

        {/* Custom Select Dropdown */}
        <CustomSelect
          options={["US", "Canada"]}
          placeholder="Select your region"
          onSelect={handleRegionSelect}
        />

        {/* VIN Input */}
        <Form.Group controlId="vin">
          <Form.Control
            type="text"
            placeholder="Enter your VIN number"
            value={vin} // Bind input value to state
            onChange={handleVinChange}
            required
          />
        </Form.Group>

        <p className="form-disclaimer">Disclaimer: We do not store your VIN.</p>

        {/* Submit Button */}
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>

      {/* Toast with animation and custom styles */}
      <Row className="justify-content-center mt-4">
        <Col md={6}>
          <Toast
            show={showToast}
            onClose={() => setShowToast(false)}
            delay={3000}
            autohide
            animation={true}
            className="custom-toast" // Add class to style the toast
          >
            <Toast.Header></Toast.Header>
            <Toast.Body className="custom-toast-body">
              {toastMessage}
            </Toast.Body>
          </Toast>
        </Col>
      </Row>

      <footer>
        {/* <p>For any feedback: <a className="email-us" href="mailto:mymachehub@gmail.com?subject=Question&body=Hello,%20I%20have%20a%20question%20about...">mymachehub@gmail.com</a> */}
        <p>Mach-E Hub is not affliated in anyway with <a href="https://www.ford.com/" className="email-us">Ford Motor Company</a>.
        <br/>© 2024 Mach-E Hub. All rights reserved.</p>
      </footer>
    </Container>
  );
};

export default AdaptorStatusForm;

