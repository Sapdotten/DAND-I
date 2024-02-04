import { notFoundPage } from "./pages/404-page.component"
import { bankAccountPage } from "./pages/bank-accounts-page.component"
import { homePage } from "./pages/home-page.component"
import { loginPage } from "./pages/login-page.component"
import { operationPage } from "./pages/operation-page.component"
import { registrationPage } from "./pages/registration-page.component"
import { settingsPage } from "./pages/settings-page.component"



const appRoutes = [
    
    {path: 'sign-up', component:registrationPage},
    {path: 'sign-in', component:loginPage},
    
    {path: '**', component:notFoundPage},

    {path: '', component: homePage,},
    {path: 'operation', component: operationPage,},
    {path: 'bank-accounts', component: bankAccountPage,},
    {path: 'settings', component: settingsPage,},
]

export {appRoutes}