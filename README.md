# Expense-Tracker-CLI
A simple command-line expense tracker built in Node.js.
It lets you add, update, delete, and view your expenses, and see summaries.

---

### Features
- Add new expenses with description and amount
- Update or delete existing expenses
- View all expenses
- View total summary
- View monthly summary
- Data stored locally in `expenses.json`

---

## Setup
1. Clone this repository.
2. Make sure you have Node.js ≥ 16.
3. Run the app using:

```bash
node index.js [command] [flags]
```

### Usage

**Add an expense**
```bash
node index.js add --description "Lunch" --amount 12.5
```

**Update an expense**
```bash
node index.js update --id 1 --amount 15
```

**Delete an expense**
```bash
node index.js delete --id 2
```

**List all expenses**
```bash
node index.js list
```

**Summary of all expenses**
```bash
node index.js summary
```

**Summary for a specific month (e.g., August)**
```bash
node index.js summary --month 8
```

### Data Format

Example expenses.json entry:
```json
[
  {
    "id": 1,
    "description": "Lunch",
    "amount": 20,
    "date": "2025-11-08",
    "createdAt": "2025-11-08T10:00:00Z",
    "updatedAt": "2025-11-08T10:00:00Z"
  }
]
```

### Author

Made by Sardar Moktadir Ibna Mohsin

### Inspired By
This project is based on the [Expense Tracker](https://roadmap.sh/projects/expense-tracker) challenge on roadmap.sh — a great resource for hands-on developer projects.