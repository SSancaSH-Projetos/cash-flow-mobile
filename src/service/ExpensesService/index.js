const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export async function AddExpensesMethod({ description, category, amount, id_travel }) {
    const newExpenses = {
        description,
        category,
        amount,
        location: 'MyPC',
    };

    try {
        const response = await fetch(`${apiUrl}/api/travels/${id_travel}/expenses`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newExpenses)
        });

        if (!response.ok) {
            throw new Error('Failed to add expenses.');
        }

        console.log('add despesas: ', response);
        return true;
    } catch (error) {
        console.error('Error adding expenses:', error.message);
        return false;
    }
}

export async function FindExpensesMethod(id_travel , id_expenses) {
    try {
        const response = await fetch(`${apiUrl}/api/travels/${id_travel}/expenses/${id_expenses}`);

        if (!response.ok) {
            throw new Error('Failed to find expenses.');
        }

        return await response.json();
    } catch (error) {
        console.error('Error finding expenses:', error.message);
        return null;
    }
}

export async function RemoveExpensesMethod(id_travel , id_expenses) {
    try {
        const response = await fetch(`${apiUrl}/api/travels/${id_travel}/expenses/${id_expenses}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error('Failed to remove expenses.');
        }

        return true;
    } catch (error) {
        console.error('Error removing expenses:', error.message);
        return false;
    }
}

export async function UpdateExpenses({ id_expenses, description, category, value, invoice, id_travel }) {
    const updatedExpenses = {
        description,
        category,
        value,
        invoice,
        id_travel
    };

    try {
        const response = await fetch(`${apiUrl}/api/travels/${id_travel}/expenses/${id_expenses}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedExpenses)
        });

        if (!response.ok) {
            throw new Error('Failed to update expenses.');
        }

        return true;
    } catch (error) {
        console.error('Error updating expenses:', error.message);
        return false;
    }
}

// function getDate() {
//     const currentDate = new Date();
//     const datetime = currentDate.getDate() + "/" + (currentDate.getMonth() + 1) + "/" + currentDate.getFullYear();
//     return datetime;
// }

// function getHour() {
//     const currentHour = new Date();
//     const hour = currentHour.getHours() + ":" + currentHour.getMinutes() + ":" + currentHour.getSeconds();
//     return hour;
// }

