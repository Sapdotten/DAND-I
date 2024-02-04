import { WFMComponent } from "framework";

class AppLeftSideBar extends WFMComponent {
    constructor(config){
        super(config)
    }
}

export const appLeftSideBar = new AppLeftSideBar({
    selector: 'app-left-side-bar',
    template: `
    <style>
    .sidebar {
        width: 25%;
        height: 100vh;
        position: fixed;
        z-index: 1;
        background-color: blue-grey darken-4;
        border-right: 2px solid #e99d85;
      }
      
      .sidebar ul {
        margin-top: 20px;
      }
      
      .avatar {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
      }
      
      .avatar-image {
        width: 40%;
      }
      
      .card {
        margin: 20px;
        padding: 20px;
        background-color: blue-grey darken-2;
        color: white;
      }
      
      .card h3 {
        margin-bottom: 20px;
      }
      
      .card .row {
        margin-left: 20px;
      }
      
      .card a {
        border-radius: 15px;
      }
      
      .card h5 {
        margin: 0;
        color: white;
      }
      
      .row {
        margin: 0;
      }
      
      .white-text {
        color: white;
      }
      
      .blue-grey {
        background-color: blue-grey;
      }
      
      .deep-orange-text {
        color: deep-orange;
      }
      
      .deep-orange {
        background-color: deep-orange;
      }
      
      .text-accent-1 {
        color: accent-1;
      }
      
      .text-large {
        font-size: large;
      }
    </style>

<div class="row">
    <div class="col s3">
        <div class="sidebar">
            <ul class="sidenav sidenav-fixed blue-grey darken-4 deep-orange-text" style="border-right: 2px solid #e99d85">
                <!-- avatar frame -->
                <li>
                <div class="avatar center-align" style="margin-top: 20px;">
                    <img src="https://i.pinimg.com/474x/06/7e/e8/067ee8bb1534b811f9da66ed8d9b344a.jpg" alt="Avatar" class="circle avatar-image center" style="width:40%">
                    <h5><b>Акакиев Акакий Акакиевич</b></h5>
                </div>
                </li>
                <!-- end avatar frame -->
                
                <li class="divider deep-orange accent-1"></li>
                
                <!-- link frame -->
                <div style="margin-top: 50px;">
                <li><a href="#" class="deep-orange-text text-accent-1 text-large"><h5>Главная</h5></a></li>
                <li><a href="#login" class="deep-orange-text text-accent-1 text-large"><h5>Операции</h5></a></li>
                <li><a href="#" class="deep-orange-text text-accent-1 text-large"><h5>Счета</h5></a></li>
                <li><a href="#" class="deep-orange-text text-accent-1 text-large"><h5>Подписки</h5></a></li>
                <li><a href="#" class="deep-orange-text text-accent-1 text-large"><h5>Аналитика</h5></a></li>
                <li><a href="#" class="deep-orange-text text-accent-1 text-large"><h5>Ачивки</h5></a></li>
                <li><a href="#settings" class="deep-orange-text text-accent-1 text-large"><h5>Настройки</h5></a></li>
                </div>
                <!-- end link frame -->
            </ul>
        </div>
    </div>
</div>
    `
})
//создать компонент ссылки и вызывать его, а так же посмотреть видос по роутингу в js 
//создать компоненты на диагарммы 
//создать хранилище