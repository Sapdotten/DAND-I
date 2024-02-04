import { notFoundPage } from "./pages/404-page.component"
import { homePage } from "./pages/home-page.component"
import { loginPage } from "./pages/login-page.component"
import { registrationPage } from "./pages/registration-page.component"
import { settingsPage } from "./pages/settings-page.component"



const appRoutes = [
    
    {path: 'sign-up', component:registrationPage},
    {path: 'sign-in', component:loginPage},
    
    {path: '**', component:notFoundPage},

    {path: '', component: homePage,},
    {path: 'settings', component: settingsPage,},
]

export {appRoutes}