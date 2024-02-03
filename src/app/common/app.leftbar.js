import { WFMComponent } from "../../framework";

class AppLeftSideBar extends WFMComponent {
    constructor(config){
        super(config)
    }
}

export const appLeftSideBar = new AppLeftSideBar({
    selector: 'app-left-side-bar',
    template: `
            <div class="sidebar">
            <ul class="sidenav sidenav-fixed blue-grey darken-4 deep-orange-text" style='border-right: 2px solid #e99d85'>
            <!-- avatar frame -->
                    <li>
                        <div class="avatar center-align " style="margin-top: 20px;">
                            <img src="https://i.pinimg.com/474x/06/7e/e8/067ee8bb1534b811f9da66ed8d9b344a.jpg" alt="Avatar" class="circle avatar-image center" style='width:40%'>
                            <h5><b>Акакиев Акакий Акакиевич</b></h5>
                        </div>
                    </li>
            <!-- end avatar frame -->
            <li class="divider deep-orange accent-1" "></li>
            <!-- link frame -->
                <div style="margin-top: 50px;">
                    <li><a href="#" class="deep-orange-text text-accent-1 text-large"><h5>Главная</h5></a></li>
                    <li><a href="#" class="deep-orange-text text-accent-1 text-large"><h5>Доходы</h5></a></li>
                    <li><a href="#" class="deep-orange-text text-accent-1 text-large"><h5>Расходы</h5></a></li>
                    <li><a href="#" class="deep-orange-text text-accent-1 text-large"><h5>Транзакции</h5></a></li>
                    <li><a href="#" class="deep-orange-text text-accent-1 text-large"><h5>Аналитика</h5></a></li>
                    <li><a href="#" class="deep-orange-text text-accent-1 text-large"><h5>Подписки</h5></a></li>
                    <li><a href="#" class="deep-orange-text text-accent-1 text-large"><h5>Счета</h5></a></li>
                    <li><a href="#" class="deep-orange-text text-accent-1 text-large"><h5>Личный кабинет</h5></a></li>
                </div>
            <!-- end link frame -->
            
            </ul>
        </div>
        <div class="content">
            <!-- Main content goes here -->
        </div>
    `
})
//создать компонент ссылки и вызывать его, а так же посмотреть видос по роутингу в js 
//создать компоненты на диагарммы 
//создать хранилище