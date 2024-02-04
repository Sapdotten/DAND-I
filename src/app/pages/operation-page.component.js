import { WFMComponent } from "framework";

class OperationPage extends WFMComponent {
    constructor(config) {
        super(config)
    }
}

function tableBodyInit() {
  let json_api 
  fetch('http://http://127.0.0.1:5000/alltime_transactions', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({email:'mail@mail.com'})
    }).then(response => {
      if (response.ok) {
        // Данные успешно отправлены на бэкэнд
        json_api = response
        let str = ''
        for (var i = 0; i < json_api.length; i++) {
          var api_object = json_api[i];
          str +=`
          <tr>
            <td>${api_object['date_time_operation']}</td>
            <td>${api_object['type_operation']}</td>
            <td>${api_object['sum_operation']}</td>
          </tr>
          `
        }
      
        return str
    } else {
        // Ошибка при отправке данных на бэкэнд
        console.error('Error: Sign in failed');
    }
    })



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
          <th>Дата операции</th>
          <th>Транзакция</th>
          <th>сумма</th>
      </tr>
    </thead>

    <tbody class='white-text'>
      ${tableBodyInit()}
    </tbody>
</table>






</div>
</div>
        
        `
    })