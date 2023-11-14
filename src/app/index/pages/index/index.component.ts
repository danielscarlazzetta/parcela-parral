import { Component, OnInit } from '@angular/core';
import { SharedServicesService } from '../../services/shared-services.service';
import { ImageServiceService } from '../../services/image-service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['../../../../styles.css'],

})
export class IndexComponent implements OnInit {


  constructor(private miVariableIndex: SharedServicesService, private imgService : ImageServiceService) { }


  ngOnInit() {
  }

  cambiarValorDeVariable(data: string) {
    if (data === 'data1') {
      this.miVariableIndex.setMiVariable('assets/json/el-bonito.json');
      this.imgService.setImagePaths('data1');
    }
    if (data === 'data2') {
      this.miVariableIndex.setMiVariable('assets/json/santa-teresa.json');
      this.imgService.setImagePaths('data2');
    }
    if (data === 'data3') {
      this.miVariableIndex.setMiVariable('assets/json/talhuenes.json');
      this.imgService.setImagePaths('data3');
    }
  }

}
