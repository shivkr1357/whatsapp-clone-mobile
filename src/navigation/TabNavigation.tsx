import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Updates from '../screens/Updates/Updates';
import Communities from '../screens/Communities/Communities';
import Calls from '../screens/Calls/Calls';
import ChatStackNavigator from './ChatStack';
import {Platform} from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 100 : 80,
          alignItems: 'center',
          justifyContent: 'center',
        },
        tabBarIconStyle: {
          marginTop: 10,
          color: '#222',
        },
        tabBarLabelStyle: {
          fontSize: 14,
          marginBottom: 10,
          color: '#222',
        },
      }}>
      <Tab.Screen
        name="Chat"
        component={ChatStackNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="chat" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Updates"
        component={Updates}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="refresh" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Communities"
        component={Communities}
        options={{
          tabBarIcon: ({color, size}) =>
            Platform.OS === 'ios' ? (
              <MaterialIcons name="people-alt" color={color} size={size} />
            ) : (
              <FontAwesome6 name="people-group" color={color} size={size} />
            ),
        }}
      />
      <Tab.Screen
        name="Calls"
        component={Calls}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="phone" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
