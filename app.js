// CRUD Endpoints:
// Implement the following API endpoints:

//     POST /customers: Add a new customer with fields like id, name, email, and phone.
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

app.get("/status", (req, res) => {
  const status = {
    Status: "Running",
  };
  res.send(status);
});
