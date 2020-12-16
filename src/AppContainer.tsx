import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { SideMenu } from './components/SideMenu';
import { MasterScreen } from './screens/MasterScreen';
import { createStackNavigator } from 'react-navigation-stack';

const stackConfig = {
    defaultNavigationOptions:
    {
        headerShown: false
    },

}


const InnerStack = createStackNavigator({
    Stack1: {
        screen: MasterScreen
    }
}, stackConfig)

const RootStack = createDrawerNavigator({
    Home: {
        screen: InnerStack
    },
}, {
    contentComponent: SideMenu,
    backBehavior: "initialRoute"
});
const AppContainer = createAppContainer(RootStack);

// Now AppContainer is the main component for React to render
export { AppContainer };