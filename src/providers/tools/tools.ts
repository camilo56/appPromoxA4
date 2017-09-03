import { Injectable } from '@angular/core';


@Injectable()
export class ToolsProvider {

  constructor() {}

  formatArray(data = {}){
    return Object.keys(data)
                  .reduce((before, current) =>{
                    return before.concat({name: current});
                  }, []);

  }

}
