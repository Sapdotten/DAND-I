import { WFMComponent } from "framework";

class SettingsPage extends WFMComponent{
    constructor(config) {
        super(config)
      }
    
      events() {
        return {
          'click .collapsible': 'onTabClick'
        }
      }
    
      onTabClick({target}) {
        console.log('mem');
      }
}


export const settingsPage = new SettingsPage({
    selector: 'app-settings-page',
    template: `
    <ul class="collapsible">
    <li>
      <div class="collapsible-header">filter_dramaFirst</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
    <li>
      <div class="collapsible-header">placeSecond</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
    <li>
      <div class="collapsible-header">whatshotThird</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
  </ul>
  `
})