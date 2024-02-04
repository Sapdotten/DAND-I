import { WFMModule } from 'framework'
import { appComponent } from './app.component'
import { appRoutes } from './app.routes'
import { appHoverDirective } from './shared/directives/hover.directive'
import { appMultiPipe } from './shared/pipes/multi.pipe'
import { homePage } from './pages/home-page.component'
import { appLeftSideBar } from './main/app.left-side-bar'

class AppModule extends WFMModule {
  constructor(config) {
    super(config)
  }
}



export const appModule = new AppModule({
  components: [
      appLeftSideBar,
  ],
  bootstrap:appComponent,
  routes:appRoutes,
})