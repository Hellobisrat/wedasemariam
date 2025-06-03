import express from 'express';
import dotenv from 'dotenv';
import db from './config/db.js';
import Expense from './models/Expense.js'; // Import the Expense model

dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());

// ✅ GET all expenses directly in `index.js`
app.get('/', async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving expenses', error });
  }
});

// ✅ POST an expense directly in `index.js`
app.post('/', async (req, res) => {
  try {
    const newExpense = await Expense.create(req.body);
    res.status(201).json({ message: 'Expense added successfully', expense: newExpense });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add expense', error: error.message });
  }
});

// ✅ Start the server
app.listen(PORT, async () => {
  try {
    await db();
    console.log(`✅ Server running at http://localhost:${PORT}`);
  } catch (error) {
    console.log('❌ Connection error:', error);
  }
});