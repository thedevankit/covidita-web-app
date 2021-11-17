import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private apiendpoint:string = "https://api.rootnet.in/covid19-in/stats/latest";
  private apiendpointState:string = "https://api.covid19india.org/v3/min/data.min.json"
  public products = new Array(10);
  public regional = [];
  public lastUpdated: string;
  public sourceOfInfo:string;
  public showButton: boolean;
  public selectedState = null;
  public deferredPrompt: any = true;
  public stateName;

  public stateWithCode = [
      {"code":"AN","name":"Andaman and Nicobar Islands"}
    , {"code":"AP","name":"Andhra Pradesh"}
    , {"code":"AR","name":"Arunachal Pradesh"}
    , {"code":"AS","name":"Assam"}
    , {"code":"BR","name":"Bihar"}
    , {"code":"CT","name":"Chhattisgarh"}
    , {"code":"CH","name":"Chandigarh"}
    , {"code":"DN","name":"Dadra and Nagar Haveli"}
    , {"code":"DL","name":"Delhi"}
    , {"code":"GA","name":"Goa"}
    , {"code":"GJ","name":"Gujarat"}
    , {"code":"HP","name":"Himachal Pradesh"}
    , {"code":"HR","name":"Haryana"}
    , {"code":"JH","name":"Jharkhand"}
    , {"code":"JK","name":"Jammu and Kashmir"}
    , {"code":"KA","name":"Karnataka"}
    , {"code":"KL","name":"Kerala"}
    , {"code":"LA","name":"Ladakh"}
    , {"code":"LD","name":"Lakshadweep"}
    , {"code":"MH","name":"Maharashtra"}
    , {"code":"ML","name":"Meghalaya"}
    , {"code":"MN","name":"Manipur"}
    , {"code":"MP","name":"Madhya Pradesh"}
    , {"code":"MZ","name":"Mizoram"}
    , {"code":"NL","name":"Nagaland"}
    , {"code":"OR","name":"Orissa"}
    , {"code":"PB","name":"Punjab"}
    , {"code":"PY","name":"Pondicherry"}
    , {"code":"RJ","name":"Rajasthan"}
    , {"code":"SK","name":"Sikkim"}
    , {"code":"TG","name":"Telangana"}
    , {"code":"TN","name":"Tamil Nadu"}
    , {"code":"TR","name":"Tripura"}
    , {"code":"UT","name":"Uttarakhand"}
    , {"code":"UP","name":"Uttar Pradesh"}
    , {"code":"WB","name":"West Bengal"}
  ]

  public allStateData = {
    AN: { delta:{ },
    districts:{ },
    meta:{ last_updated:null,
      tested:{
      last_updated:null,
      source:null
    } },
    total:{
      migrated:null,
      confirmed:null,
      deceased:null,
      recovered: null,
      tested:null
     }},
    AP: { delta:{ },
    districts:{ },
    meta:{   last_updated:null, tested:{
      last_updated:null,
      source:null
    } },
    total:{
      migrated:null,
      confirmed:null,
      deceased:null,
      recovered: null,
      tested:null
     }},
    AR: { delta:{ },
    districts:{ },
    meta:{ last_updated:null,
      tested:{
      last_updated:null,
      source:null
    } },
    total:{
      migrated:null,
      confirmed:null,
      deceased:null,
      recovered: null,
      tested:null
     }},
    AS: { delta:{ },
    districts:{ },
    meta:{
      last_updated:null,
      tested:{
      last_updated:null,
      source:null
    } },
    total:{
      migrated:null,
      confirmed:null,
      deceased:null,
      recovered: null,
      tested:null
     }},
    BR: { delta:{ },
    districts:{ },
    meta:{   last_updated:null, tested:{
      last_updated:null,
      source:null
    } },
    total:{
      migrated:null,
      confirmed:null,
      deceased:null,
      recovered: null,
      tested:null
     }},
    CH: { delta:{ },
    districts:{ },
    meta:{   last_updated:null, tested:{
      last_updated:null,
      source:null
    } },
    total:{
      migrated:null,
      confirmed:null,
      deceased:null,
      recovered: null,
      tested:null
     }},
    CT: { delta:{ },
    districts:{ },
    meta:{   last_updated:null, tested:{
      last_updated:null,
      source:null
    } },
    total:{
      migrated:null,
      confirmed:null,
      deceased:null,
      recovered: null,
      tested:null
     }},
    DL: { delta:{ },
    districts:{ },
    meta:{   last_updated:null, tested:{
      last_updated:null,
      source:null
    } },
    total:{
      migrated:null,
      confirmed:null,
      deceased:null,
      recovered: null,
      tested:null
     }},
    DN: { delta:{ },
    districts:{ },
    meta:{   last_updated:null, tested:{
      last_updated:null,
      source:null
    } },
    total:{
      migrated:null,
      confirmed:null,
      deceased:null,
      recovered: null,
      tested:null
     }},
    GA: { delta:{ },
    districts:{ },
    meta:{   last_updated:null, tested:{
      last_updated:null,
      source:null
    } },
    total:{
      migrated:null,
      confirmed:null,
      deceased:null,
      recovered: null,
      tested:null
     }},
    GJ: { delta:{ },
    districts:{ },
    meta:{   last_updated:null, tested:{
      last_updated:null,
      source:null
    } },
    total:{
      migrated:null,
      confirmed:null,
      deceased:null,
      recovered: null,
      tested:null
     }},
    HP: { delta:{ },
    districts:{ },
    meta:{   last_updated:null, tested:{
      last_updated:null,
      source:null
    } },
    total:{
      migrated:null,
      confirmed:null,
      deceased:null,
      recovered: null,
      tested:null
     }},
    HR: { delta:{ },
    districts:{ },
    meta:{   last_updated:null, tested:{
      last_updated:null,
      source:null
    } },
    total:{
      migrated:null,
      confirmed:null,
      deceased:null,
      recovered: null,
      tested:null
     }},
    JH: { delta:{ },
    districts:{ },
    meta:{   last_updated:null, tested:{
      last_updated:null,
      source:null
    } },
    total:{
      migrated:null,
      confirmed:null,
      deceased:null,
      recovered: null,
      tested:null
     }},
    JK: { delta:{ },
    districts:{ },
    meta:{   last_updated:null, tested:{
      last_updated:null,
      source:null
    } },
    total:{
      migrated:null,
      confirmed:null,
      deceased:null,
      recovered: null,
      tested:null
     }},
    KA: { delta:{ },
    districts:{ },
    meta:{   last_updated:null, tested:{
      last_updated:null,
      source:null
    } },
    total:{
      migrated:null,
      confirmed:null,
      deceased:null,
      recovered: null,
      tested:null
     }},
    KL: { delta:{ },
    districts:{ },
    meta:{   last_updated:null, tested:{
      last_updated:null,
      source:null
    } },
    total:{
      migrated:null,
      confirmed:null,
      deceased:null,
      recovered: null,
      tested:null
     }},
    LA: { delta:{ },
    districts:{ },
    meta:{   last_updated:null, tested:{
      last_updated:null,
      source:null
    } },
    total:{
      migrated:null,
      confirmed:null,
      deceased:null,
      recovered: null,
      tested:null
     }},
    LD: { delta:{ },
    districts:{ },
    meta:{   last_updated:null, tested:{
      last_updated:null,
      source:null
    } },
    total:{
      migrated:null,
      confirmed:null,
      deceased:null,
      recovered: null,
      tested:null
     }},
    MH: { delta:{ },
    districts:{ },
    meta:{   last_updated:null, tested:{
      last_updated:null,
      source:null
    } },
    total:{
      migrated:null,
      confirmed:null,
      deceased:null,
      recovered: null,
      tested:null
     }},
    ML: { delta:{ },
    districts:{ },
    meta:{   last_updated:null, tested:{
      last_updated:null,
      source:null
    } },
    total:{
      migrated:null,
      confirmed:null,
      deceased:null,
      recovered: null,
      tested:null
     }},
    MN: { delta:{ },
    districts:{ },
    meta:{   last_updated:null, tested:{
      last_updated:null,
      source:null
    } },
    total:{
      migrated:null,
      confirmed:null,
      deceased:null,
      recovered: null,
      tested:null
     }},
    MP: { delta:{ },
    districts:{ },
    meta:{   last_updated:null, tested:{
      last_updated:null,
      source:null
    } },
    total:{
      migrated:null,
      confirmed:null,
      deceased:null,
      recovered: null,
      tested:null
     }},
    MZ: { delta:{ },
    districts:{ },
    meta:{   last_updated:null, tested:{
      last_updated:null,
      source:null
    } },
    total:{
      migrated:null,
      confirmed:null,
      deceased:null,
      recovered: null,
      tested:null
     }},
    NL: { delta:{ },
    districts:{ },
    meta:{   last_updated:null, tested:{
      last_updated:null,
      source:null
    } },
    total:{
      migrated:null,
      confirmed:null,
      deceased:null,
      recovered: null,
      tested:null
     }},
    OR: { delta:{ },
    districts:{ },
    meta:{   last_updated:null, tested:{
      last_updated:null,
      source:null
    } },
    total:{
      migrated:null,
      confirmed:null,
      deceased:null,
      recovered: null,
      tested:null
     }},
    PB: { delta:{ },
    districts:{ },
    meta:{   last_updated:null, tested:{
      last_updated:null,
      source:null
    } },
    total:{
      migrated:null,
      confirmed:null,
      deceased:null,
      recovered: null,
      tested:null
     }},
    PY: { delta:{ },
    districts:{ },
    meta:{   last_updated:null, tested:{
      last_updated:null,
      source:null
    } },
    total:{
      migrated:null,
      confirmed:null,
      deceased:null,
      recovered: null,
      tested:null
     }},
    RJ: { delta:{ },
    districts:{ },
    meta:{   last_updated:null, tested:{
      last_updated:null,
      source:null
    } },
    total:{
      migrated:null,
      confirmed:null,
      deceased:null,
      recovered: null,
      tested:null
     }},
    SK: { delta:{ },
    districts:{ },
    meta:{   last_updated:null, tested:{
      last_updated:null,
      source:null
    } },
    total:{
      migrated:null,
      confirmed:null,
      deceased:null,
      recovered: null,
      tested:null
     }},
    TG: { delta:{ },
    districts:{ },
    meta:{   last_updated:null, tested:{
      last_updated:null,
      source:null
    } },
    total:{
      migrated:null,
      confirmed:null,
      deceased:null,
      recovered: null,
      tested:null
     }},
    TN: { delta:{ },
    districts:{ },
    meta:{   last_updated:null, tested:{
      last_updated:null,
      source:null
    } },
    total:{
      migrated:null,
      confirmed:null,
      deceased:null,
      recovered: null,
      tested:null
     }},
    TR: { delta:{ },
    districts:{ },
    meta:{   last_updated:null, tested:{
      last_updated:null,
      source:null
    } },
    total:{
      migrated:null,
      confirmed:null,
      deceased:null,
      recovered: null,
      tested:null
     }},
    TT: { delta:{ },
    districts:{ },
    meta:{   last_updated:null, tested:{
      last_updated:null,
      source:null
    } },
    total:{
      migrated:null,
      confirmed:null,
      deceased:null,
      recovered: null,
      tested:null
     }},
    UN: { delta:{ },
    districts:{ },
    meta:{   last_updated:null, tested:{
      last_updated:null,
      source:null
    } },
    total:{
      migrated:null,
      confirmed:null,
      deceased:null,
      recovered: null,
      tested:null
     }},
    UP: { delta:{ },
    districts:{ },
    meta:{   last_updated:null, tested:{
      last_updated:null,
      source:null
    } },
    total:{
      migrated:null,
      confirmed:null,
      deceased:null,
      recovered: null,
      tested:null
     }},
    UT: { delta:{ },
    districts:{ },
    meta:{   last_updated:null, tested:{
      last_updated:null,
      source:null
    } },
    total:{
      migrated:null,
      confirmed:null,
      deceased:null,
      recovered: null,
      tested:null
     }},
    WB: { delta:{ },
    districts:{ },
    meta:{   last_updated:null, tested:{
      last_updated:null,
      source:null
    } },
    total:{
      migrated:null,
      confirmed:null,
      deceased:null,
      recovered: null,
      tested:null
     }
    },
  };

  public alldata = new State();

  // searchFunction(searchKey){
  //   console.log(searchKey,'search key');

  //   Object.keys(this.alldata.MH.districts).filter(function(row) {
  //     console.log(this.alldata.MH.districts);

  //     return this.alldata.MH.districts[row]===searchKey;
  //   });
  // }


  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getDataFromServer().subscribe((serverData: any)=>{
      if(serverData){
        this.allStateData = serverData;
        this.defultSelectedState()
      }
    })

  }

  public defultSelectedState(){
    this.alldata = this.allStateData.MH;
    this.selectedState = "MH";
    this.selectedStateName(this.selectedState)
  }

  public selectedStateName(stateCode) {
    console.log(stateCode);
    if (stateCode!= undefined) {
      for(let o of this.stateWithCode){
        if (stateCode == o.code) {
          console.log(o.name);
          this.stateName = o.name;
        }
     }
    }
  }

  onStateChange(event){
    if (event.value != null || event.value != undefined || event.value !='' ) {
      this.selectedStateName(event.value)
      switch (event.value) {
          case "AN":
            this.alldata = this.allStateData.AN;
            console.log( this.alldata.meta);
              break;
          case "AP":
              this.alldata = this.allStateData.AP;
              console.log( this.alldata );
              break;
          case "AR":
              this.alldata = this.allStateData.AR;
              console.log( this.alldata );
              break;
          case "AS":
              this.alldata = this.allStateData.AS;
              console.log( this.alldata );
              break;
          case "BR":
              this.alldata = this.allStateData.BR;
              console.log( this.alldata );
              break;
          case "CH":
            this.alldata = this.allStateData.CH;
            console.log( this.alldata );
              break;
          case "CT":
            this.alldata = this.allStateData.CT;
            console.log( this.alldata );
              break;
          case "DL":
            this.alldata = this.allStateData.DL;
            console.log( this.alldata );
              break;
          case "DN":
              this.alldata = this.allStateData.DN;
              console.log( this.alldata );
              break;
          case "GA":
              this.alldata = this.allStateData.GA;
              console.log( this.alldata );
              break;
          case "GJ":
              this.alldata = this.allStateData.GJ;
              console.log( this.alldata );
              break;
          case "HP":
              this.alldata = this.allStateData.HP;
              console.log( this.alldata );
              break;
          case "HR":
            this.alldata = this.allStateData.HR;
            console.log( this.alldata );
              break;
          case "JH":
            this.alldata = this.allStateData.JH;
            console.log( this.alldata );
              break;
        case "JK":
          this.alldata = this.allStateData.JK;
          console.log( this.alldata );
            break;
        case "KA":
            this.alldata = this.allStateData.KA;
            console.log( this.alldata );
            break;
        case "KL":
            this.alldata = this.allStateData.KL;
            console.log( this.alldata );
            break;
        case "LA":
            this.alldata = this.allStateData.LA;
            console.log( this.alldata );
            break;
        case "LD":
            this.alldata = this.allStateData.LD;
            console.log( this.alldata );
            break;
        case "MH":
            this.alldata = this.allStateData.MH;
            console.log( this.alldata );
              break;
        case "MN":
            this.alldata = this.allStateData.MN;
            console.log( this.alldata );
              break;
        case "ML":
            this.alldata = this.allStateData.ML;
            console.log( this.alldata );
              break;
        case "MP":
            this.alldata = this.allStateData.MP;
            console.log( this.alldata );
            break;
        case "MZ":
            this.alldata = this.allStateData.MZ;
            console.log( this.alldata );
            break;
        case "NL":
            this.alldata = this.allStateData.NL;
            console.log( this.alldata );
            break;
        case "OR":
            this.alldata = this.allStateData.OR;
            console.log( this.alldata );
            break;
        case "PB":
          this.alldata = this.allStateData.PB;
          console.log( this.alldata );
            break;
        case "PY":
            this.alldata = this.allStateData.PY;
            console.log( this.alldata );
            break;
        case "RJ":
            this.alldata = this.allStateData.RJ;
            console.log( this.alldata );
            break;
        case "SK":
            this.alldata = this.allStateData.SK;
            console.log( this.alldata );
            break;
        case "TG":
            this.alldata = this.allStateData.TG;
            console.log( this.alldata );
            break;
        case "TN":
            this.alldata = this.allStateData.TN;
            console.log( this.alldata );
            break;
        case "TR":
            this.alldata = this.allStateData.TR;
            console.log( this.alldata );
            break;
        case "UP":
            this.alldata = this.allStateData.UP;
            console.log( this.alldata );
            break;
        case "UT":
            this.alldata = this.allStateData.UT;
            console.log( this.alldata );
            break;
        case "WB":
            this.alldata = this.allStateData.WB;
            console.log( this.alldata );
            break;
        default:
            console.log("No such day exists!");
            break;
      }
    }


  }
  public cancelScreen(){
    this.showButton = false;
  }
  public getDataFromServer(){
    return this.http.get<any>(this.apiendpointState)
  }

  @HostListener('window:beforeinstallprompt', ['$event'])
  onbeforeinstallprompt(e) {
    e.preventDefault();
    this.deferredPrompt = e;
    this.showButton = true;
   }

  addToHomeScreen() {
    if (this.deferredPrompt) {
      this.showButton = false;
       this.deferredPrompt.prompt();
      this.deferredPrompt.userChoice
        .then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
          } else {
            console.log('User dismissed the A2HS prompt');
          }
          this.deferredPrompt = null;
        });
    }
  }

}

export class State{
  delta:{
  };
  districts:{ };
  meta:{
    last_updated:null,
        tested:{
            last_updated:null,
            source:null
          }
    };
  total:{
    migrated:null,
    confirmed:null,
    deceased:null,
    recovered: null,
    tested:null
   }
}
