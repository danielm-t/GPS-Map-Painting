import { Linking } from 'react-native';
import { AppInstalledChecker, CheckPackageInstallation } from 'react-native-check-app-install';
const playStoreLink = `market://details?id=com.example.someapp`;
function CheckAppInstall(){
    return(
    AppInstalledChecker
    .isAppInstalled('whatsapp')
    .then((isInstalled: any) => {
        if(!isInstalled){
            Linking.openURL(playStoreLink)
                .catch(err => console.error('An error occurred', err));
        }
    }));
};
export default CheckAppInstall