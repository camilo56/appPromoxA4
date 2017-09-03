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
  public oDepartament$ = this.departaments.asObservable();
  private citys = new Subject<any>();
  public oCity$ = this.citys.asObservable();

  constructor(private firebase: AngularFireDatabase) {}

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
    return this.oDepartament$;
  }
  /**
   * Retorna el observable que se activa cuando el usuario selecciona un departamento
   */
  get city$(): Observable<any>{
    return this.oCity$;
  }
  /**
   * Recorre el array de paises y retorna un nuevo array procesado
   */
  selectedCountry(country:string, countrysArray: object[]){
    return countrysArray.map((obj:any) => this.procesCountrys(obj, country));
  }
  /**
   * Muestra o oculta los departamentos del pais selecionado
   */
  procesCountrys(obj:any, country): object[]{
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
   * Ejecuta el observable oDepartament$ con los datos procesados
   * @param url direccion de la consulta
   * @param name nombre del pais selecionado
   */
  getDepartaments(url, name){
    this.firebase.object(url, { preserveSnapshot: true })
    .subscribe(snapshot => {
      this.departaments.next({name: name, 
        departaments: this.departamentsFA(snapshot.val())});
      });
    }
    /**
     * Realiza la consulta las ciudade  del pais y departamento seleccionado, 
     * Ejecuta el observable oCity$ con los datos procesados
     * @param url direccion de la consulta
     * @param name nombre del departamento selecionado
     */
    getCitys(url, name){
    this.firebase.object(url, { preserveSnapshot: true })
      .subscribe(snapshot => {
          this.citys.next({name: name,
            citys: this.citysFA(snapshot.val())
        })
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
  /**
   * comvierte el array de ciudades al formato requerido
   */
  citysFA(infoObject = {}){
    return Object.keys(infoObject)
            .reduce((before, current, index, data) =>{
              return before.concat({name: current});
            }, []);

  }
    
}
