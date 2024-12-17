// CRUD Endpoints:
// Implement the following API endpoints:

//     GET /customers: Retrieve a list of all customers.
//     GET /customers/:id: Retrieve a specific customer by ID.
//     PUT /customers/:id: Update an existing customer's details.
//     DELETE /customers/:id: Remove a customer by ID.

const express = require("express");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

// GET /: Check that connection exists on homepage
app.get("/", (req, res) => {
  const welcomeMessage = {
    message: "Welcome to the Customer API",
  };
  res.status(200).send(welcomeMessage);
});

// GET /status: Check that status is running
app.get("/status", (req, res) => {
  const status = {
    status: "Running",
  };
  res.status(200).send(status);
});

// POST /customers: Add a new customer with fields like id, name, email, and phone.
app.post("/customers", (req, res) => {
  const { id, name, email, phone } = req.body;

  if (!id || !name || !email || !phone) {
    return res.status(400).send({
      error:
        "Missing required fields. Please provide id, name, email and phone",
    });
  }
  const newCustomer = { id, name, email, phone };

  res.status(201).send({
    message: "Customer created successfully",
    customer: newCustomer,
  });
});
