import fs from "fs";
import { get } from "http";
import path from "path"

const filePath = path.resolve("./expenses.json");

function loadExpenses() {

}

function saveExpenses(expenses) {

}

function getNextId(expenses) {

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

}

export function deleteExpense(id) {

}

export function listExpense() {

}

export function summary(month = null) {
    
}