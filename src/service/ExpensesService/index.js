import { Platform } from "react-native";

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export async function AddExpensesMethod({ description, category, amount,invoice, id_travel }) {
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

        console.log("invoice:" + JSON.stringify(response.headers.get("Location")))
        AddInvoiceAExpenses(invoice,response.headers.get("Location"));
        return true;
    } catch (error) {
        console.error('Error adding expenses:', error.message);
        return false;
    }

   
}

export async function AddInvoiceAExpenses(invoice,url){
    const formData = new FormData();
    formData.append('fiscalNote', {
        uri: Platform.OS === 'ios' ? invoice.uri.replace('file://', '') : invoice.uri,
        name: 'fiscalNote.png',
        type: 'image/png', 
    })

const response = await fetch(url+"/fiscalNote", {
    method: 'PUT',
    headers: {
        'Content-Type': 'multipart/form-data'
        },
    body: formData,
})
.then(response => {
    if (!response.ok) {
        throw new Error('File upload failed');
    }
    return true; 
})
.then(data => {
    console.log('Server response:', data);
})
.catch(error => {
    console.error('Error uploading file:', error);
});

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

export async function FindImageInvoiceExpenses(id_travel, id_expenses) {
    try{
        const response = await fetch(`${apiUrl}/api/travels/${id_travel}/expenses/${id_expenses}/fiscalNote`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if(!response.ok){
            throw new Error("response is not ok to get a Invoice Image")
        }
        const foundExpenses = await response.json();
        return foundExpenses;
    }catch{
        throw new Error("Failed to get a Invoice Image")
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
        const response = await fetch(`${apiUrl}/api/travels/${id_travel}/expenses/${id_expenses}/fiscalNote`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body:stringify(updatedExpenses)
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

export async function ListExpensesMethod(id_travel) {
    try {
        const response = await fetch(`${apiUrl}/api/travels/${id_travel}/expenses`);

        if (!response.ok) {
            throw new Error('Failed to list expenses.');
        }

        return await response.json();
    } catch (error) {
        console.error('Error listing expenses:', error.message);
        return null;
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

