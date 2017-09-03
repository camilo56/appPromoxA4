import { Country } from '../../interfaces/country.interface';
import { Injectable } from '@angular/core';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class LocationProvider {

  private departaments = new Subject<any>();
  public observerSubject$ = this.departaments.asObservable();

  constructor(private firebase: AngularFireDatabase) {
    console.log('Hello LocationProvider Provider');
  }

  get countrys(){  
    return this.firebase.object('/location/countrys', { preserveSnapshot: true })
      .map((snapshot)=>{
        const countrysArray: {name: string}[] = this.countryFA(snapshot.val());
        return countrysArray;
      })
  }
  /**
   * Retorna el observable que se activa cuando el usuario selecciona un pais
   */
  get departament$(): Observable<any>{
    return this.observerSubject$;
  }
  /**
   * Recorre el array de paises y retorna un nuevo array procesado
   */
  selected(country:string, countrysArray: object[]){
    return countrysArray.map((obj:any) => this.procesSelected(obj, country));
  }
  /**
   * Muestra o oculta los departamentos del pais selecionado
   */
  procesSelected(obj:any, country): object[]{
    switch(true){
      case obj.name === country && obj.hasLevel !== undefined:
      this.getDepartaments(`${obj.hasLevel}/${obj.name}`, obj.name);
      obj.selected = obj.showLevel = true;
      break;
      case obj.name === country && obj.hasLevel === undefined:
        obj.selected = true;
        obj.showLevel = false;
      break;
      default: 
        obj.selected = obj.showLevel = false;
      break;
    }
    return obj;
  }
  /**
   * Realiza la consulta de departamentos del pais seleccionado, 
   * Ejecuta el observable departament$ con los datos procesados
   */
  getDepartaments(url, name){
    this.firebase.object(url, { preserveSnapshot: true })
        .subscribe(snapshot => {
          this.departaments.next({name: name, 
                                  departaments: this.departamentsFA(snapshot.val())});
        });
  }
  /**
   * comvierte el array de paises al formato requerido
   */
  countryFA(infoObject = {}){
    return Object.keys(infoObject)
            .reduce((before, current, index, data) =>{
              return before.concat({name: current,
                                    selected: false,
                                    showLevel: false,
                                    departaments: [],
                                    url: infoObject[current].url,
                                    hasLevel: infoObject[current].hasLevel});
            }, []);

  }
  /**
   * comvierte el array de paises al formato requerido
   */
  departamentsFA(infoObject = {}){
    return Object.keys(infoObject)
            .reduce((before, current, index, data) =>{
              return before.concat({name: current,
                                    showLevel: false,
                                    selected: false,
                                    hasLevel: infoObject[current].hasLevel});
            }, []);

  }
    
}
