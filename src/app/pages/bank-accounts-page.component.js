import { WFMComponent } from "framework";

class BankAccountPage extends WFMComponent {
    constructor(config) {
        super(config)
    }
}

export const bankAccountPage = new BankAccountPage({
    selector: 'app-bank-account-page',
    template: `
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
                <li><a href="#operation" class="deep-orange-text text-accent-1 text-large"><h5>Операции</h5></a></li>
                <li><a href="#bank-accounts" class="deep-orange-text text-accent-1 text-large"><h5>Счета</h5></a></li>
                <li><a href="#" class="deep-orange-text text-accent-1 text-large"><h5>Подписки</h5></a></li>
                <li><a href="#" class="deep-orange-text text-accent-1 text-large"><h5>Аналитика</h5></a></li>
                <li><a href="#" class="deep-orange-text text-accent-1 text-large"><h5>Ачивки</h5></a></li>
                <li><a href="#settings" class="deep-orange-text text-accent-1 text-large"><h5>Настройки</h5></a></li>
                </div>
                <!-- end link frame -->
            </ul>
        </div>
    </div>
    <div style="margin-top:50px">
        <div class="col s4">
        <div class="card horizontal green lighten-1"style="min-height:300px;border-radius:20px">
                <div class="card-stacked">
                    <div class="card-content">
                        <h4>Сбербанк</h4>
                        <h5>Баланс: 60 000₽</h5>
                        <p>I am a Sber bank card.</p>
                    </div>
                <div class="card-action green" style="border-bottom-left-radius: 20px; border-bottom-right-radius: 20px;" >
                    <p>2200 **** **** **** **** **55</p>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div style="margin-top:50px">
    <div class="col s4" >
        <div class="card horizontal yellow"style="min-height:300px;border-radius:20px">
            <div class="card-stacked">
                <div class="card-content">
                    <h4>Тинькоф</h4>
                    <h5 class='red-text'>Баланс: -1 160 000 00 000₽</h5>
                    <p>I am a Tinkoff bank card.</p>
                </div>
                <div class="card-action">
                    <p>6999 **** **** **** **** **66</p>
                </div>
        </div>
        </div>
    </div>
  </div>
</div>
    `})