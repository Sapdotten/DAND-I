import { WFMComponent } from "framework";

class HomePage extends WFMComponent {
    constructor(config) {
        super(config)
    }
}

export const homePage = new HomePage({
    selector: 'app-home-page',
    template: `<div class="row">
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
        </div>
    </div>
    <div>
    </div>
    <style>
    .stats-container {
      background-color: #2a3f54;
      color: white;
      padding: 20px;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      max-width: 800px;
      margin: auto;
    }
    .stats-title {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
    }
    .stats-content {
      display: flex;
      align-items: center;
      justify-content: space-evenly;

    }
    .stats-cards {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .stats-card {
      background-color: #34495e;
      margin: 10px 0;
      padding: 10px;
      border-radius: 4px;
    }
    .stats-value {
      align-items:center;
      font-size: 1.5em;
      font-weight: bold;
    }
    .bar-chart {
      display: flex;
      justify-content: space-around;
      align-items: flex-end;
      height: 150px;
    }
    .bar {
      width: 10px;
      margin: 0 2px;
      border-radius: 5px;
      background-color: white;
    }
    .income-bar {
      background-color: #8bc34a;
    }
    .expense-bar {
      background-color: #9c27b0;
    }
    .label-section {
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
    .label {
      display: inline-block;
      padding:  20px;
      border-radius: 5px;
      background-color: #16a085;
      color: white;
    }
    .income-label {
      background-color: #8bc34a;
    }
    .expense-label {
      background-color: #9c27b0;
    }
    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap");

* {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
}

.month-group {
	cursor: pointer;
	max-width: 400px;
	height: 110px;
	margin: 10px;
	display: inline-block;
}

.bar {
	background-color: #abafc6;
	width: 20px;
	border-radius: 5px;
	margin-bottom: 10px;
}

.month-group:hover .bar,
.selected .bar {
	background: #5397d6;
}

.month-group:hover p,
.selected p {
	color: #fff;
}

.h-25 {
	height: 25%;
}
.h-50 {
	height: 50%;
}
.h-75 {
	height: 75%;
}
.h-100 {
	height: 100%;
}

.stats-info {
	margin-top: 15px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	position: relative;
}

.graph-container {
	position: relative;
}

.percent {
	display: block;
	width: 120px;
	height: 120px;
}

.circle {
	stroke: #915db1;
	fill: none;
	stroke-width: 3;
}

.circle:nth-child(2) {
	stroke: #e59f3c;
}

.circle:nth-child(3) {
	stroke: #5397d6;
}

.circle:nth-child(4) {
	stroke: #4cc790;
}

.graph-container p {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 12px;
	color: #fff;
	text-align: center;
}

.info p {
	margin-bottom: 10px;
}

.info span {
	color: #fff;
}
@import url("https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

:root {
	--c-gray-900: #000000;
	--c-gray-800: #1f1f1f;
	--c-gray-700: #2e2e2e;
	--c-gray-600: #313131;
	--c-gray-500: #969593;
	--c-gray-400: #a6a6a6;
	--c-gray-300: #bdbbb7;
	--c-gray-200: #f1f1f1;
	--c-gray-100: #ffffff;

	--c-green-500: #45ffbc;
	--c-olive-500: #e3ffa8;

	--c-white: var(--c-gray-100);

	--c-text-primary: var(--c-gray-100);
	--c-text-secondary: var(--c-gray-200);
	--c-text-tertiary: var(--c-gray-500);
}
.icon-button {
    color: inherit;
    border-color: inherit;
    &:hover,
    &:focus {
        background-color: transparent;
        i {
            transform: none;
        }
    }
}

.search-field {
	display: flex;
	flex-grow: 1;
	position: relative;
	input {
		width: 100%;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		border: 0;
		border-bottom: 1px solid var(--c-gray-600);
		background-color: transparent;
		padding-left: 1.5rem;
	}

	i {
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
	}
}


.transfer-section {
	margin-top: 2.5rem;
}

.transfer-section-header {
	display: flex;
	align-items: center;
	width: 100%;
	padding-bottom: 0.75rem;
	border-bottom: 1px solid var(--c-gray-600);
	h2 {
		font-size: 1.5rem;
	}
}


.filter-options {
    display: flex;
    flex-direction: row;
    margin-top: 1.5rem;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    align-items: flex-end;
    min-width: 70%;
    border-radius: 10px;
    margin-right: 5%;
    margin-left: 16%;
    background: aliceblue;
    color:black;
	p {
		& + * {
			margin-left: auto;
			margin-right: 0.75rem;
		}
		color: var(--c-text-tertiary);
		font-size: 0.875rem;
		@media (max-width: 1000px) {
			display: none;
		}
	}
}

.transfers {
    display: flex;
    flex-direction: row;
    margin-top: 1.5rem;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    align-items: flex-end;
    min-width: 50%;
    border-radius: 10px;
    margin-right: 5%;
    margin-left: 25%;
    background: aliceblue;
}

.transfer {
	display: flex;
	align-items: center;
	width: 100%;
	font-size: 0.875rem;
	@media (max-width: 1000px) {
		align-items: flex-start;
		flex-direction: column;
	}
	& + * {
		margin-top: 2rem;
	}
}

.transfer-logo {
	background-color: var(--c-gray-200);
	border-radius: 4px;
	width: 42px;
	height: 42px;
	display: flex;
	align-items: center;
	justify-content: center;
	img {
		width: 45%;
	}
}

.transfer-details {
	margin-left: 2rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex: 1;
	@media (max-width: 1000px) {
		flex-wrap: wrap;
		margin-left: 0;
		margin-top: 1rem;
	}
	div {
		width: calc(100% / 3 - 1rem);
		@media (max-width: 1000px) {
			width: 100%;
		}
		& + div {
			margin-left: 1rem;
			@media (max-width: 1000px) {
				margin-left: 0;
				margin-top: 1rem;
			}
		}
	}

	dd {
		color: var(--c-text-tertiary);
		margin-top: 2px;
	}
}

.transfer-number {
	margin-left: 2rem;
	font-size: 1.125rem;
	flex-shrink: 0;
	width: 15%;
	display: flex;
	justify-content: flex-end;
	@media (max-width: 1000px) {
		margin-left: 0;
		margin-top: 1.25rem;
		width: 100%;
		justify-content: flex-start;
	}
}


  </style>

  <div class="stats-container" style='margin-top:1%; min-width:70%; margin-right:50%'>
    <div class="stats-title">
      <h5>Статистика</h5>
    </div>
    <div class="stats-content">
      <div class="stats-cards">
        <div class="stats-card">
          <div class="stats-value">Доходы</div>
          <div class="stats-value">250 000₽</div>
        </div>
        <div class="stats-card">
          <div class="stats-value">Расходы</div>
          <div class="stats-value">500 000₽</div>
        </div>
      </div>
      <div class="year-stats">
          <div class="month-group">
              <div class="bar h-100"></div>
              <p class="month">Jan</p>
          </div>
          <div class="month-group">
              <div class="bar h-50"></div>
              <p class="month">Feb</p>
          </div>
          <div class="month-group">
              <div class="bar h-75"></div>
              <p class="month">Mar</p>
          </div>
          <div class="month-group">
              <div class="bar h-25"></div>
              <p class="month">Apr</p>
          </div>
          <div class="month-group selected">
              <div class="bar h-100"></div>
              <p class="month">May</p>
          </div>
          <div class="month-group">
              <div class="bar h-50"></div>
              <p class="month">Jun</p>
          </div>
          <div class="month-group">
              <div class="bar h-75"></div>
              <p class="month">Jul</p>
          </div>
          <div class="month-group">
              <div class="bar h-25"></div>
              <p class="month">Aug</p>
          </div>
          <div class="month-group">
              <div class="bar h-50"></div>
              <p class="month">Sep</p>
          </div>
          <div class="month-group">
              <div class="bar h-75"></div>
              <p class="month">Oct</p>
          </div>
          <div class="month-group">
              <div class="bar h-25"></div>
              <p class="month">Nov</p>
          </div>
          <div class="month-group">
              <div class="bar h-100"></div>
              <p class="month">Dez</p>
          </div>
      </div>
        </div>

        <!-- ... -->
      </div>
      <style>


</style>
    <section class="transfer-section">
    <div class="transfer-section-header">
        <h2>Latest transfers</h2>
        <div class="filter-options">
            <p style='color:black;padding:10px;font-size:16px'>Filter selected: more than 100 $</p>
            <button class="icon-button">
                <i class="ph-funnel"></i>
            </button>
            <button class="icon-button">
                <i class="ph-plus"></i>
            </button>
        </div>
    </div>
    <div class="transfers">
        <div class="transfer">
            <div class="transfer-logo">
                <img src="https://assets.codepen.io/285131/apple.svg" />
            </div>
            <dl class="transfer-details">
                <div>
                    <dt>Apple Inc.</dt>
                    <dd>Apple ID Payment</dd>
                </div>
                <div>
                    <dt>4012</dt>
                    <dd>Last four digits</dd>
                </div>
                <div>
                    <dt>28 Oct. 21</dt>
                    <dd>Date payment</dd>
                </div>
            </dl>
            <div class="transfer-number">
                - $ 550
            </div>
        </div>
        <div class="transfer">
            <div class="transfer-logo">
                <img src="https://assets.codepen.io/285131/pinterest.svg" />
            </div>
            <dl class="transfer-details">
                <div>
                    <dt>Pinterest</dt>
                    <dd>2 year subscription</dd>
                </div>
                <div>
                    <dt>5214</dt>
                    <dd>Last four digits</dd>
                </div>
                <div>
                    <dt>26 Oct. 21</dt>
                    <dd>Date payment</dd>
                </div>
            </dl>
            <div class="transfer-number">
                - $ 120
            </div>
        </div>
        <div class="transfer">
            <div class="transfer-logo">
                <img src="https://assets.codepen.io/285131/warner-bros.svg" />
            </div>
            <dl class="transfer-details">
                <div>
                    <dt>Warner Bros.</dt>
                    <dd>Cinema</dd>
                </div>
                <div>
                    <dt>2228</dt>
                    <dd>Last four digits</dd>
                </div>
                <div>
                    <dt>22 Oct. 21</dt>
                    <dd>Date payment</dd>
                </div>
            </dl>
            <div class="transfer-number">
                - $ 70
            </div>
        </div>
    </div>
</section>
    </div>
  
  </div>
`
})