import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import TravelList from "../pages/TravelList";
import addTravel from "../pages/AddTravel";
import AddExpenses from "../pages/AddExpenses";
import TravelDescription from "../pages/TravelDescription";


const Stack =  createNativeStackNavigator();

export default  function Routes(){
    return (
        
        <Stack.Navigator>
            <Stack.Screen 
            name="Welcome"
            component={Welcome}
            options={{headerShown: false}}
            />
             <Stack.Screen 
            name="SignIn"
            component={SignIn}
            options={{headerShown: false}}
            />
             <Stack.Screen
             name='TravelList'
             component={TravelList}
             options={{headerShown:false}}
             />
             <Stack.Screen
             name='AddTravel'
             component={addTravel}
             options={{headerShown:false}}
             />
             <Stack.Screen 
            name="TravelDescription"
            component={TravelDescription}
            options={{headerShown: false}}
            />
             <Stack.Screen 
            name="AddExpenses"
            component={AddExpenses}
            options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}
