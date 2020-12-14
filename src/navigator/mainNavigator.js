import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen0185307Navigator from '../features/BlankScreen0185307/navigator';
import BlankScreen3185174Navigator from '../features/BlankScreen3185174/navigator';
import BlankScreen1185172Navigator from '../features/BlankScreen1185172/navigator';
import BlankScreen0185171Navigator from '../features/BlankScreen0185171/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen0185307: { screen: BlankScreen0185307Navigator },
BlankScreen3185174: { screen: BlankScreen3185174Navigator },
BlankScreen1185172: { screen: BlankScreen1185172Navigator },
BlankScreen0185171: { screen: BlankScreen0185171Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
