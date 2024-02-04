import { WFMComponent } from "framework";

class HomePage extends WFMComponent{
    constructor(config){
        super(config)
    
    }
}


export const homePage = new HomePage({
    selector: 'app-home-page',
    template: `<h1>1</h1>`
})