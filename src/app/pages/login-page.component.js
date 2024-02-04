import { WFMComponent } from "framework";

class LoginPage extends WFMComponent{
    constructor(config){
        super(config)
    }

    events() {
      return {
        'submit form': 'submitForm'
      }
    };
    submitForm(event) {
      event.preventDefault();
      
      // Получение значений полей формы
      const username = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      
      const data = {
        username: username,
        password: password
      };
      if(this.isValid(password, username)){
        fetch('http://127.0.0.1:5000/login', {
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
                router.navigate('#')
            } else {
                // Ошибка при отправке данных на бэкэнд
                console.error('Error: Sign in failed');
            }
            })
            .catch(error => {
            // Ошибка сети или сервера
            console.error('Error: Sign in failed:', error);
            });
      }
      else{console.log('Error: Sign in failed');}
    }
    isValid(password, username){
      if(username.trim() === '' || password.trim() === '') return false
      return true
    }

}


export const loginPage = new LoginPage({
    selector: 'app-login-page',
    template: `  <div class="container">
    <h2 class='deep-orange-text text-accent-1 text-large'>Sign in</h2>
    <form>
      <div class="input-field">
        <input type="email" id="email" class="validate amber-text text-lighten-5">
        <label for="email" class="validate amber-text text-lighten-5" style="font-size: 24px;">Email</label>
      </div>
      <div class="input-field">
        <input type="password" id="password" class="validate amber-text text-lighten-5">
        <label for="password" class="validate amber-text text-lighten-5" style="font-size: 24px;">password</label>
      </div>
      <button class="btn waves-effect waves-light deep-orange accent-2 amber-text text-lighten-5" type="submit" style="font-size: 18px;">Sign In</button>
      <h5 class="amber-text text-lighten-5">
        <a href="#sign-up" class="deep-orange-text text-accent-1 text-large">Sign up</a>
      </h5>
      </form>
  </div>`
})