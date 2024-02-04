import { WFMComponent } from "framework";
import { router } from "../../framework/core/routing/router";
import { _ } from "../../framework/tools/util";

class RegistrationPage extends WFMComponent{
    constructor(config) {
        super(config);
      }
    
      events() {
        return {
        //   'click .btn': 'goToTabs',
          'submit form': 'submitForm'
        };
      }
    
    //   goToTabs(event) {
    //     event.preventDefault();
    //     router.navigate('sign-in');
    //   }
    
    submitForm(event) {
        event.preventDefault();
        
        // Получение значений полей формы
        const username = document.getElementById('text').value;
        const email = document.getElementById('email').value;
        const password1 = document.getElementById('password1').value;
        const password2 = document.getElementById('password2').value;

        // Валидация данных
        if (this.isValid(username, password1, password2, email)) {
            // Данные прошли валидацию

            // Создание объекта с данными для отправки на бэкэнд
            const data = {
            username: username,
            email: email,
            password: password1
            };

            // Отправка данных на бэкэнд
            fetch('http://127.0.0.1:5000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            })
            .then(response => {
            if (response.ok) {
                // Данные успешно отправлены на бэкэнд
                console.log('Registration successful');
                router.navigate('sign-in')
            } else {
                // Ошибка при отправке данных на бэкэнд
                console.error('Registration failed');
            }
            })
            .catch(error => {
            // Ошибка сети или сервера
            console.error('Registration failed:', error);
            });
        } else {
            console.log('error');
        }
    }
    isValid(username, password1, password2, email) {
        console.log(username, password1, password2, email);
        if (username.trim() === '' || password1.trim() === '' || password2.trim() === '' || email.trim() === '' || password1 !== password2) {
            return false;
        } else {
            return true;
        }
    }
    
}


export const registrationPage = new RegistrationPage({
    selector: 'app-registration-page',
    template: `  
    <div class="container">
        <h2 class='deep-orange-text text-accent-1 text-large'>Sign up</h2>
        <form>

        <div class="input-field">
            <input type="text" id="text" class="amber-text text-lighten-5">
            <label for="text" class="amber-text text-lighten-5" style="font-size: 24px;">Username</label>
        </div>

        <div class="input-field">
            <input type="email" id="email" class="validate amber-text text-lighten-5">
            <label for="email" class="validate amber-text text-lighten-5" style="font-size: 24px;">Email</label>
        </div>

        <div class="input-field">
            <input type="password" id="password1" class="validate amber-text text-lighten-5">
            <label for="password1" class="validate amber-text text-lighten-5" style="font-size: 24px;">password</label>
        </div>

        <div class="input-field">
            <input type="password" id="password2" class="validate amber-text text-lighten-5">
            <label for="password2" class="validate amber-text text-lighten-5" style="font-size: 24px;">password</label>
        </div>

        <button 
            class="
                btn waves-effect 
                waves-light 
                deep-orange accent-2 amber-text text-lighten-5" type="submit" style="font-size: 18px;"
        >
            Sign up
        </button>
            <h5 class="amber-text text-lighten-5">
            <a href="#sign-in" class="deep-orange-text text-accent-1 text-large">Sign in</a>
        </h5>

        </form>
  </div>`
})