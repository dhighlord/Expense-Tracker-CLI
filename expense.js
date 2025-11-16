import fs from "fs";
import path from "path"

const filePath = path.resolve("./expenses.json");

function loadExpenses() {
    if (!fs.existsSync(filePath))
        return [];

    const data = fs.readFileSync(filePath, "utf-8");

    try {
        return JSON.parse(data);
    } catch {
        console.error(" Corrupted data file. Resetting...");
        fs.writeFileSync(filePath, "[]");
        return [];
    }
}

function saveExpenses(expenses) {
    fs.writeFileSync(filePath, JSON.stringify(expenses, null, 2));
}

function getNextId(expenses) {
    return expenses.length === 0 ? 1 : Math.max(...expenses.map(e => e.id)) + 1;
}

export function addExpense(description, amount) {
    const expenses = loadExpenses();
    const id = getNextId(expenses);
    const today = new Date();
    const entry = {
        id,
        description,
        amount,
        date: today.toISOString().split("T")[0],
        createdAt: today.toISOString(),
        updatedAt: today.toISOString()
    };
}

export function updateExpense(id, description, amount) {
    const expenses = loadExpenses();
    const idx = expenses.findIndex(e => e.id === id);

    if (idx === -1) {
        console.error("Expense not found.");
        return;
    }

    if (description)
        expenses[idx].description = description;

    if (!isNaN(amount))
        expenses[idx].amount = amount;

    expenses[idx].updatedAt = new Date().toISOString();
    saveExpenses(expenses);
    console.log(`Updated expense ${id}`);
}

export function deleteExpense(id) {
    let expense = loadExpenses();
    const len = expense.length;
    expenses = expenses.filter(e => e.id !== id);

    if (expenses === len) {
        console.error("Expense not found.");
        return;
    }

    saveExpenses(expenses);
    console.log(`Deleted expense ${id}`);
}

export function listExpense() {
    const expenses = loadExpenses();

    if (expenses.length === 0) {
        console.log("No expenses found.");
        return;
    }

    console.log("Expense List: ");
    expenses.forEach(e =>
        console.log(`[${e.id}] ${e.description} - $${e.amount} (${e.date})`)
    );
}

export function summary(month = null) {
    const expenses = loadExpenses();

    if (expenses.length === 0) {
        console.log("No expenses found.");
        return;
    }

    let filtered = expenses;

    if (month) {
        filtered = expenses.filter(e => new Date(e.date).getMonth() + 1 === month);
    }

    const total = filtered.reduce((sum, e) => sum + e.amount, 0);
    if (month)
        console.log(`Summary for month ${month}:`);
    else
        console.log("Overall summary:");
    console.log(`Total expenses: $${total}`);
    console.log(`Number of entries: ${filtered.length}`);
}