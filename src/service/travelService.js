const travels = [];

export async function AddTravelMethod({ initDate, finalDate, origin, destination, description }) {
    const newTravel = {
        id: generateId(),
        initDate,
        finalDate,
        origin,
        destination,
        description
    };
    
    travels.push(newTravel);
    console.log(travels)
    await new Promise(res => setTimeout(res, 1000))
    return true;
}

export async function FindTravelMethod(id_travel) {
    await new Promise(res => setTimeout(res, 1000))
    const foundTravel = travels.find(travel => travel.id === id_travel);
    return foundTravel || null;
}

export async function ListTravelMethod() {
    await new Promise(res => setTimeout(res, 1000))
    return travels;
}

export async function RemoveTravelMethod(id_travel) {
    console.log(id_travel)
    await new Promise(res => setTimeout(res, 1000))
    const index = travels.findIndex(travel => travel.id === id_travel);
    if (index !== -1) {
        travels.splice(index, 1);
        return true;
    }
    return false;
}

export async function UpdateTravel(id_travel, initDate, finalDate, origin, destination, description) {
    await new Promise(res => setTimeout(res, 1000))
    if (
        initDate.trim() === '' ||
        finalDate.trim() === '' ||
        origin.trim() === '' ||
        destination.trim() === '' ||
        description.trim() === ''
    ) {
        return false;
    }
    
    const index = travels.findIndex(travel => travel.id === id_travel);
    if (index !== -1) {
        travels[index] = {
            id: id_travel,
            initDate,
            finalDate,
            origin,
            destination,
            description
        };
        return true;
    }
    return false;
}

function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}
