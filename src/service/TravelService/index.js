const travels = [];
const url = process.env.EXPO_PUBLIC_API_URL;

export async function AddTravelMethod({ startDate, endDate, origin, destination, description }) {
    const newTravel = {
        startDate,
        endDate,
        origin,
        destination,
        description,
        expenses: [],
        itinerary:[
            "São Carlos",
            "Campinas",
            "São Paulo",
            "Nova York"
        ]
        // Orçamento e Itinerario
    };

    try {
        const response = await fetch(url+"/api/travels", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTravel)
        });

        if (!response.ok) {
            throw new Error('Failed to add travel');
        }
        return true;
    } catch (error) {
        console.error('Error adding travel:', error);
        return false;
    }
}


export async function FindTravelMethod(id_travel) {
    try {
        const response = await fetch(`${url}/${id_travel}`);

        if (!response.ok) {
            throw new Error('Travel not found');
        }

        const foundTravel = await response.json();
        const { id, destination, description, startDate } = foundTravel;
        return { id, destination, description, startDate };
    } catch (error) {
        console.error('Error finding travel:', error);
        return null;
    }
}

export async function ListTravelMethod() {
    try {
        const response = await fetch(url+"/api/travels");

        if (!response.ok) {
            throw new Error('Failed to fetch travels');
        }

        const travelList = await response.json();
        await new Promise(res => setTimeout(res, 1000));
        console.log(travelList);
        return travelList;
    } catch (error) {
        console.error('Error listing travels:', error);
        return [];
    }
}

export async function RemoveTravelMethod(id_travel) {
    try {
        const response = await fetch(`${url}/api/travels/${id_travel}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error('Failed to remove travel');
        }

        const index = travels.findIndex(travel => travel.id === id_travel);
        if (index !== -1) {
            travels.splice(index, 1);
            return true;
        }
        return false;
    } catch (error) {
        console.error('Error removing travel:', error);
        return false;
    }
}

export async function UpdateTravel(id_travel, startDate, endDate, origin, destination, description) {
    try {
        const response = await fetch(`${url}/${id_travel}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                startDate,
                endDate,
                origin,
                destination,
                description
            })
        });

        if (!response.ok) {
            throw new Error('Failed to update travel');
        }

        const updatedTravel = {
            id: id_travel,
            startDate,
            endDate,
            origin,
            destination,
            description
        };

        const index = travels.findIndex(travel => travel.id === id_travel);
        if (index !== -1) {
            travels[index] = updatedTravel;
            return true;
        }
        return false;
    } catch (error) {
        console.error('Error updating travel:', error);
        return false;
    }
}

export async function ListAllDescriptionMethod(id_travel) {
    try {
        const response = await fetch(`${url}/api/travels${id_travel}`);


        if (!response.ok) {
            throw new Error('Failed to fetch travel description');
        }

        const foundTravel = await response.json();
        return foundTravel || null;
    } catch (error) {
        console.error('Error listing travel description:', error);
        return null;
    }
}

export default travels;
