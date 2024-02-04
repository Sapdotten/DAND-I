import { WFMComponent } from "framework";

class OperationPage extends WFMComponent {
    constructor(config) {
        super(config)
    }
}

export const operationPage = new OperationPage({
    selector: 'app-operation-page',
    template: `
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
            <li><a href="#non" class="deep-orange-text text-accent-1 text-large"><h5>Подписки</h5></a></li>
            <li><a href="#non" class="deep-orange-text text-accent-1 text-large"><h5>Аналитика</h5></a></li>
            <li><a href="#non" class="deep-orange-text text-accent-1 text-large"><h5>Ачивки</h5></a></li>
            <li><a href="#settings" class="deep-orange-text text-accent-1 text-large"><h5>Настройки</h5></a></li>
            </div>
            <!-- end link frame -->
        </ul>
        <table style="max-width:70%; margin-left:25%;font-size:20px">
        <thead class='deep-orange-text text-accent-1 text-large'>
        <tr>
          <th>Компания</th>
          <th>Operation</th>
          <th>Item Price</th>
      </tr>
    </thead>

    <tbody class='white-text'>
      <tr>
        <td>Мемы</td>
        <td>expenses</td>
        <td class='red-text'>$0.87</td>
      </tr>
      <tr>
        <td>Ракета</td>
        <td>Income</td>
        <td class='green-text'>$3.76</td>
        </tr>
        <tr>
        <td>Жена</td>
        <td>expenses</td>
        <td class='red-text'>$7.00</td>
        </tr>
        <tr>
        <td>Стим</td>
        <td>Income</td>
        <td class='green-text'>$0.87</td>
      </tr>
      <tr>
      <td>Кс го</td>
      <td>expenses</td>
      <td class='red-text'>$0.87</td>
        </tr>
        <tr>
        <td>Дота</td>
        <td>expenses</td>
        <td class='red-text'>$0.87</td>
    </tr>
    <tr>
    <td>Варкрафт</td>
    <td>Income</td>
    <td class='green-text'>$0.87</td>
    </tr>
    <tr>
    <td>Пятёрочка</td>
    <td>Income</td>
    <td class='green-text'>$0.87</td>
    </tr>
    <tr>
    <td>Магнит</td>
    <td>expenses</td>
    <td class='red-text'>$0.87</td>
    </tr>
</tbody>
</table>
</div>
</div>
        
        `
    })