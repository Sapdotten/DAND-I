import { WFMComponent } from 'framework'

class AppComponent extends WFMComponent {
  constructor(config) {
    super(config)
  }
}


export const appComponent = new AppComponent({
  selector: 'app-root',
  template: `<router-outlet /><app-left-side-bar />`,
})