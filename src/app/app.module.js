import { WFMModule } from "../framework"; //проблемы могут быть
import { appComponent } from "./app.comopents";
import { appLeftSideBar } from "./common/app.leftbar";

class AppModule extends WFMModule{
    constructor(config){
        super(config)
    }
}

export const appModule = new AppModule({
    components: [
        appComponent,
        appLeftSideBar,
    ]
})