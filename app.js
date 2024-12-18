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

// array of customers in lieu of a databsse to connect to
let customers = [
  {
    id: "1",
    name: "Alice Smith",
    email: "alice@example.com",
    phone: "555-1234",
  },
  { id: "2", name: "Bob Johnson", email: "bob@example.com", phone: "555-5678" },
  {
    id: "3",
    name: "Charlie Brown",
    email: "charlie@example.com",
    phone: "555-8765",
  },
  {
    id: "4",
    name: "Diana Prince",
    email: "diana@example.com",
    phone: "555-4321",
  },
  {
    id: "5",
    name: "Ethan Hunt",
    email: "ethan@example.com",
    phone: "555-6789",
  },
  {
    id: "6",
    name: "Fiona Gallagher",
    email: "fiona@example.com",
    phone: "555-9876",
  },
];

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

  // respond with 400 (Bad Request) if at least one of the required fields is missing
  if (!id || !name || !email || !phone) {
    return res.status(400).send({
      error:
        "Missing required fields. Please provide id, name, email, and phone",
    });
  }

  // respond with 400 (Bad Request) if customer ID already exists
  const existingCustomer = customers.find((cust) => cust.id === id);
  if (existingCustomer) {
    return res.status(400).send({
      error: `Customer with ID ${id} already exists.`,
    });
  }

  const customerToAdd = { id, name, email, phone };
  customers.push(customerToAdd);

  // respond with 201 (Created) if customer created successfully
  res.status(201).send({
    message: "Customer created successfully.",
    customer: customerToAdd,
  });
});
