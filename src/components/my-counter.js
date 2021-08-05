import { registerAsWebComponent } from "react-webcomponentify";
import { Counter } from './counter';

if (!customElements.get('zts-select-friend-component')) {
  registerAsWebComponent(Counter, 'my-counter', 'open');
}
