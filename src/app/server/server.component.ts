import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  template: `<li>{{'Server'}} id: {{ serverId }} status: {{ getServerStatus() }}</li>`
})
export class ServerComponent {
  serverId = 1;
  serverStatus = 'online';

  getServerStatus() {
    return this.serverStatus;
  }
}
