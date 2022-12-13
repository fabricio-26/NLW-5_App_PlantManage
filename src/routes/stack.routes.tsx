import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import colors from "../../styles/colors";
import { Welcome } from "../pages/Welcome";
import { UserIdentification } from "../pages/UserIdentification";
import { Confirmation } from "../pages/Confirmation";
import { PlantSelect } from "../pages/PlantSelect";

const stackRoutes = createNativeStackNavigator();



const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator initialRouteName="Welcome">

        <stackRoutes.Screen name="Welcome" component={Welcome} options={{ headerShown: false }}/>
        <stackRoutes.Screen name="UserIdentification" component={UserIdentification} options={{ headerShown: false }}/>
        <stackRoutes.Screen name="Confirmation" component={Confirmation} options={{ headerShown: false }}/>
        <stackRoutes.Screen name="PlantSelect" component={PlantSelect} options={{ headerShown: false }}/>

    </stackRoutes.Navigator>
)

export default AppRoutes;