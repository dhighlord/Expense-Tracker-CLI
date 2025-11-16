import { addExpense, updateExpense, deleteExpense, listExpenses, summary } from "./expense.js";

const args = process.argv.slice(2);

if (args.length === 0) {
    console.log(`Usage:
        add --description "Lunch" --amount 20
        update --id 2 --description "Dinner" --amount 25
        delete --id 3
        summary
        summary --month 8`);
    process.exit(0);
}

const command = args[0];
const flags = {};

for (let i = 1; i < args.length; i += 2) {
    if (args[i].startsWith("--")) {
        const key = args[i].substring(2);
        flags[key] = args[i + 1];
    }
}

switch(command) {
    case "add":
    if (!flags.description || !flags.amount) {
        console.error("Please provide -- description and --amount");
        process.exit(1);
    }
    addExpense(flags.description, parseFloat(flags.amount));
    break;

    case "update":
        if (!flags.id) {
            console.error("Please provide --id");
            process.exit(1);
        }
        updateExpense(parseInt(flags.id), flags.description, parseFloat(flags.amount));
        break;

    case "delete":
        if (!flags.id) {
            console.error("Please provide --id");
            process.exit(1);
        }
        deleteExpense(parseInt(flags.id));
        break;
    
    case "list":
        listExpenses();
        break;
    
    case "summary":
        summary(flags.month ? parseInt(flags.month) : null);
        break;
    
    default:
        console.log("Unknown command.");
}