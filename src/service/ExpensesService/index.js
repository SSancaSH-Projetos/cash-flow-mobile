import travels from "../TravelService";

export async function AddExpensesMethod({ description, category, value, invoice, id_travel }) {
    const newExpenses = {
        id: generateId(),
        description,
        category,
        value,
        invoice,
        date: getdate(),
        hour: getHour(),
        location: 'My PC',
        travel: id_travel,
    }

   


    const foundTravel = travels.find(travel => travel.id === id_travel);
    if (foundTravel) {
        console.log(newExpenses)
        foundTravel.expenses.push(newExpenses);
    }

    console.log('DADOS DA DESPESA ADICIONADAS AO ARRAY DE DESPENSAS: ', travels);
    await new Promise(res => setTimeout(res, 1000));
    return true;
}


export async function FindExpensesMethod(id_expenses) {
    await new Promise(res => setTimeout(res, 1000));
    const foundExpenses = expenses.find(expenses => expenses.id === id_expenses);
    return foundExpenses || null;
}



export async function RemoveExpensesMethod(id_expenses, expenses) {
    await new Promise(res => setTimeout(res, 1000));
    const index = expenses.findIndex(expense => expense.id === id_expenses);
    if(index !== -1){
        expenses.splice(index, 1);
        return true;
    }
    return false;
}


export async function UpdateExpenses({id_expenses , description , category , value, invoice, id_travel}) {
    await new Promise(res => setTimeout(res, 1000));
    if(
        id_expenses.trim() === '' ||
        description.trim() === '' ||
        category.trim() === '' ||
        value.trim() === '' ||
        invoice.trim() === '' ||
        id_travel.trim() === ''
    ) {
        return false;
    }

    const index = expenses.findIndex(expenses => expenses.id === id_expenses);
    if(index !== -1){
        expenses[index] = {
            id: id_expenses,
            description,
            category,
            value,
            invoice,
            id_travel
        }
        return true;
    }

    return false;


}

function generateId() {
    return '$' + Math.random().toString(36).substr(2, 9);
}

function getdate() {
    var currentdate = new Date();
    var datetime = currentdate.getDay() + "/" + currentdate.getMonth() 
    + "/" + currentdate.getFullYear();
    return datetime;
}

function getHour() {
    var currenthour = new Date();
    var hour = + currenthour.getHours() + ":" + currenthour.getMinutes() + ":" + currenthour.getSeconds();
    return hour;
}
