export class Module {
    constructor(config){
        this.components = config.components
    }

    start(){
        this.initComponent() 
    }
    initComponent(){
        this.components.forEach(element => element.render())
    }
}