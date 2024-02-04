import { WFMComponent } from "framework";

class NotFoundPage extends WFMComponent{
    constructor(config){
        super(config)
    }
}


export const notFoundPage = new NotFoundPage({
    selector: 'app-404-page',
    template: ` 
        <div 
            class="content" 
            style="display: flex;align-items: center;justify-content: center;
                    width: 100vw;height: 100vh;
            "
        >
            <!-- Main content goes here -->
            <h1 class="amber-text text-lighten-5">404 Page Not Found</h1>
            <div
                style='padding:15px;'
            >
                <h5 class="amber-text text-lighten-5">Sorry, the page you are looking for does not exist.</h5>
                <h5 class="amber-text text-lighten-5">Go back to the -> 
                            <a href="#" class="deep-orange-text text-accent-1 text-large">Main page</a>
                </h5>
            </div>
        </div>
    `
})