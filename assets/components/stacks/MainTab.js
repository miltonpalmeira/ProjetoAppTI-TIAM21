import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import Search from '../screens/Search/Search';
import Appointments from '../screens/Appointments/Appointments';
import Favorites from '../screens/Favorites/Favorites';
import Profile from '../screens/Profile/Profile';
import CustomTabBar from '../CustomTabBar';

export default function MainTab() {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator tabBar={props => <CustomTabBar {...props}/>} >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Appointments" component={Appointments} />
            <Tab.Screen name="Favorites" component={Favorites} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}