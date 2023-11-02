import { Component } from '@angular/core';
import { SharedServicesService } from '../../services/shared-services.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  
})
export class IndexComponent {

  constructor( private miVariableIndex : SharedServicesService){}

  cambiarValorDeVariable(data : string) {
    if(data === 'data1'){
      this.miVariableIndex.setMiVariable('assets/json/el-bonito.json') ;
    }
    if(data === 'data2'){
      this.miVariableIndex.setMiVariable('assets/json/santa-teresa.json') ;
    }
    if(data === 'data3'){
      this.miVariableIndex.setMiVariable('assets/json/talhuenes.json') ;
    }
  }

}
