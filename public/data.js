const DEFAULT_PASTA_OPTIONS=Object.freeze({
  pastaTypes:["Penne","Dirsek","Spagetti"],
  sauces:["Körili Tavuk","Acılı Tavuk","Napoliten Sos","Kremalı Mantar Sos","Cheddar Peynirli Sos","Sosisli Sos","Kremalı Tavuk"],
  toppings:["Mısır","Kıtır Cips","Baharatlı Yoğurt","Zeytin","Parmesan"]
});
const DEFAULT_PASTA_ORDERS=Object.freeze({
  cm1:{portions:1},cm2:{portions:1},cm3:{portions:1},cm4:{portions:1},
  ik1:{portions:2},ik2:{portions:2},ik3:{portions:1},ik4:{portions:1},
  m1:{portions:1,fixedType:"Penne"},m2:{portions:1,fixedType:"Penne"},
  m3:{portions:1,fixedType:"Dirsek"},m4:{portions:1,fixedType:"Dirsek"},
  m5:{portions:1,fixedType:"Spagetti"},m6:{portions:1,fixedType:"Spagetti"}
});
const DEFAULT_DATA = {
  _schemaVersion: 5,
  restaurant: {
    name: "CİX MAKARNA",
    tagline: "Sosunu seç, keyfini çıkar",
    phone: "+90 535 742 22 02",
    whatsapp: "905357422202",
    instagram: "https://instagram.com/cix.makarna",
    maps: "https://www.google.com/maps/search/?api=1&query=Cix+Makarna+Oru%C3%A7reis+Esenler",
    reviewLink: "https://www.google.com/search?q=Cix+Makarna+Esenler+yorum",
    address: "Oruçreis Mah. 543. Sok. 1BB B1 Blok, 34235 Esenler / İstanbul",
    hours: "Her gün 12:00 – 23:59",
    currency: "₺",
    cover: "images/cix-hero.jpg",
    logo: "images/cix-logo-brosur.webp",
    promises: ["Lezzetli", "Sıcak", "Doyurucu"],
    orderOptions: structuredClone(DEFAULT_PASTA_OPTIONS),
    theme: { primary: "#c96545", secondary: "#d3a34f", ink: "#3d302a", cream: "#fff6e9", card: "#fffdf8", green: "#557b52", footer: "#e2eadb" }
  },
  categories: [
    { id: "menu", name: "Cix Menüler" },
    { id: "ikili", name: "İkili Menüler" },
    { id: "makarna", name: "Makarnalar" },
    { id: "pilav", name: "Tavuklu Pilav" },
    { id: "tatli", name: "Tatlılar" },
    { id: "icecek", name: "İçecekler" }
  ],
  items: [
    {id:"cm1",cat:"menu",name:"Cix Mega Combo Makarna Menü",desc:"Seçeceğin makarna çeşidi ve malzemeleriyle hazırlanan büyük boy kase makarna, dilediğin soğuk içecek ve Spoonful tatlı.",price:519,img:"images/menu-mega-makarna.jpg",tags:["Büyük Boy","Tatlı Dahil"],popular:true,hidden:false},
    {id:"cm2",cat:"menu",name:"Cix Combo Makarna Menü",desc:"Seçeceğin makarna çeşidi ve malzemeleriyle hazırlanan makarna, dilediğin soğuk içecek ve Spoonful tatlı.",price:469,img:"images/menu-combo-makarna.jpg",tags:["Tatlı Dahil"],popular:true,hidden:false},
    {id:"cm3",cat:"menu",name:"Cix Duo Mega Makarna Menü",desc:"Seçeceğin makarna çeşidi ve malzemeleriyle hazırlanan büyük boy kase makarna ve dilediğin soğuk içecek.",price:379,img:"images/menu-duo-mega-makarna.jpg",tags:["Büyük Boy"],popular:true,hidden:false},
    {id:"cm4",cat:"menu",name:"Cix Duo Makarna Menü",desc:"Seçeceğin makarna çeşidi ve malzemeleriyle hazırlanan makarna ve dilediğin soğuk içecek.",price:329,img:"images/menu-duo-makarna.jpg",tags:[],popular:false,hidden:false},
    {id:"cp1",cat:"menu",name:"Cix Mega Combo Tavuk Pilav Menü",desc:"Tepeleme dolu büyük boy tavuklu pilav, dilediğin soğuk içecek ve Spoonful tatlı.",price:439,img:"images/menu-mega-pilav.jpg",tags:["Büyük Boy","Tatlı Dahil"],popular:true,hidden:false},
    {id:"cp2",cat:"menu",name:"Cix Combo Tavuk Pilav Menü",desc:"Bol tavuklu tereyağlı pilav, dilediğin soğuk içecek ve Spoonful tatlı.",price:399,img:"images/menu-combo-pilav.jpg",tags:["Tatlı Dahil"],popular:false,hidden:false},
    {id:"cp3",cat:"menu",name:"Cix Duo Mega Tavuklu Pilav Menü",desc:"Büyük boy tepeleme tereyağlı tavuklu pilav ve dilediğin soğuk içecek.",price:299,img:"images/menu-duo-mega-pilav.jpg",tags:["Büyük Boy"],popular:false,hidden:false},
    {id:"cp4",cat:"menu",name:"Cix Duo Tavuklu Pilav Menü",desc:"Standart boy bol tavuklu tereyağlı pilav ve dilediğin soğuk içecek.",price:239,img:"images/menu-duo-pilav.jpg",tags:[],popular:false,hidden:false},
    {id:"ik1",cat:"ikili",name:"İkili Doyuran Menü",desc:"Kendi seçeceğiniz makarna tipi, özel sosu ve 2 adet soğuk içecek ile 2 porsiyon Cix Makarna.",price:649,img:"images/ikili-doyuran.jpg",tags:["2 Kişilik"],popular:true,hidden:false},
    {id:"ik2",cat:"ikili",name:"Tatlı İkili Doyuran Menü",desc:"2 porsiyon Cix Makarna, 2 soğuk içecek ve 2 adet enfes Spoonful tatlı.",price:929,img:"images/ikili-tatli-doyuran.jpg",tags:["2 Kişilik","2 Tatlı"],popular:false,hidden:false},
    {id:"ik3",cat:"ikili",name:"Kararsız Kanka Menü",desc:"1 porsiyon Cix Makarna, 1 porsiyon tiftik tavuklu pilav ve 2 soğuk içecek.",price:569,img:"images/kararsiz-kanka.jpg",tags:["2 Kişilik"],popular:true,hidden:false},
    {id:"ik4",cat:"ikili",name:"Tatlı Kararsız Kanka Menü",desc:"1 porsiyon Cix Makarna, 1 porsiyon tavuklu pilav, 2 soğuk içecek ve 2 Spoonful tatlı.",price:869,img:"images/kararsiz-kanka-tatli.jpg",tags:["2 Kişilik","2 Tatlı"],popular:false,hidden:false},
    { id:"m1",cat:"makarna",name:"Penne Makarna",desc:"Seçeceğiniz malzemeler ve imza soslarımızla hazırlanan taze penne makarna.",price:299,img:"images/penne.jpg",tags:["Sosunu Seç"],popular:true,hidden:false },
    { id:"m2",cat:"makarna",name:"Penne Makarna (Büyük Boy)",desc:"Büyük porsiyon penne; seçeceğiniz malzemeler ve soslarla hazırlanır.",price:349,img:"images/penne-buyuk.jpg",tags:["Büyük Boy","Popüler"],popular:true,hidden:false },
    { id:"m3",cat:"makarna",name:"Dirsek Makarna",desc:"Taze haşlanmış dirsek makarna, dilediğiniz özel ana soslar ve nefis üst malzemeler ile.",price:299,img:"images/dirsek.jpg",tags:["Sosunu Seç"],popular:false,hidden:false },
    { id:"m4",cat:"makarna",name:"Dirsek Makarna (Büyük Boy)",desc:"Büyük porsiyon dirsek makarna; seçtiğiniz malzemeler ve soslarla.",price:349,img:"images/dirsek-buyuk.jpg",tags:["Büyük Boy"],popular:false,hidden:false },
    { id:"m5",cat:"makarna",name:"Spagetti Makarna",desc:"Spagetti, seçeceğiniz malzemeler ve imza soslarımızla hazırlanır.",price:299,img:"images/spagetti.jpg",tags:["Sosunu Seç"],popular:false,hidden:false },
    { id:"m6",cat:"makarna",name:"Spagetti Makarna (Büyük Boy)",desc:"Büyük porsiyon spagetti; seçtiğiniz malzemeler ve soslarla.",price:349,img:"images/spagetti-buyuk.jpg",tags:["Büyük Boy"],popular:false,hidden:false },
    { id:"p1",cat:"pilav",name:"Tereyağlı Pilav",desc:"Tane tane, tereyağlı günlük pirinç pilavı.",price:119,img:"images/pilav.jpg",tags:[],popular:false,hidden:false },
    { id:"p2",cat:"pilav",name:"Tereyağlı Tavuklu Pilav (Büyük Boy)",desc:"Büyük boy tane tane tereyağlı tavuklu pirinç pilavı.",price:149,img:"images/tavuklu-pilav.jpg",tags:["Büyük Boy","Bol Tavuk"],popular:false,hidden:false },
    { id:"p3",cat:"pilav",name:"Tiftik Tavuklu Pilav",desc:"Tereyağlı pirinç pilavı üzerinde tiftik tavuk.",price:189,img:"images/pilav-buyuk.jpg",tags:["Tiftik Tavuk"],popular:true,hidden:false },
    { id:"t1",cat:"tatli",name:"Spoonful",desc:"Yoğun çikolatalı krema ve yumuşacık kekiyle kaşık kaşık mutluluk veren özel tatlımız.",price:149,img:"images/spoonful.jpg",tags:["Popüler"],popular:true,hidden:false },
    { id:"i1",cat:"icecek",name:"Ev Yapımı Limonata (30 cl.)",desc:"Katkısız, konsantresiz; taptaze gerçek limonlardan günlük sıkılır.",price:75,img:"images/limonata.jpg",tags:["Ev Yapımı"],popular:false,hidden:false },
    { id:"i2",cat:"icecek",name:"Açık Ayran (30 cl.)",desc:"Bol köpüklü, ev yapımı taze açık ayran.",price:59,img:"images/acik-ayran.jpg",tags:["Popüler"],popular:true,hidden:false },
    { id:"i3",cat:"icecek",name:"Sarıyer Kola (33 cl.)",desc:"Soğuk kutu içecek.",price:59,img:"images/sariyer-kola.jpg",tags:[],popular:false,hidden:false },
    { id:"i4",cat:"icecek",name:"Coca-Cola (33 cl.)",desc:"Soğuk kutu içecek.",price:89,img:"images/coca-cola.jpg",tags:[],popular:false,hidden:false },
    { id:"i5",cat:"icecek",name:"Sarıyer Portakal (33 cl.)",desc:"Soğuk kutu içecek.",price:59,img:"images/sariyer-portakal.jpg",tags:[],popular:false,hidden:false },
    { id:"i6",cat:"icecek",name:"Fanta (33 cl.)",desc:"Soğuk kutu içecek.",price:89,img:"images/fanta.jpg",tags:[],popular:false,hidden:false },
    { id:"i7",cat:"icecek",name:"Didi Limon (25 cl.)",desc:"Soğuk kutu içecek.",price:59,img:"images/didi-limon.jpg",tags:[],popular:false,hidden:false },
    { id:"i8",cat:"icecek",name:"Didi Şeftali (25 cl.)",desc:"Soğuk kutu içecek.",price:59,img:"images/didi-seftali.jpg",tags:[],popular:false,hidden:false },
    { id:"i9",cat:"icecek",name:"Ayran (20 cl.)",desc:"Küçük boy kapalı ayran.",price:29,img:"images/ayran.jpg",tags:[],popular:false,hidden:false },
    { id:"i10",cat:"icecek",name:"Çamlıca Gazozu (20 cl.)",desc:"Soğuk cam şişe.",price:39,img:"images/gazoz.jpg",tags:[],popular:false,hidden:false },
    { id:"i11",cat:"icecek",name:"Sırma Limon (20 cl.)",desc:"Limon aromalı maden suyu, cam şişe.",price:29,img:"images/sirma-limon.jpg",tags:[],popular:false,hidden:false },
    { id:"i12",cat:"icecek",name:"Sade Soda (20 cl.)",desc:"Doğal maden suyu, cam şişe.",price:29,img:"images/soda.jpg",tags:[],popular:false,hidden:false },
    { id:"i13",cat:"icecek",name:"Su (50 cl.)",desc:"Pet şişe içme suyu.",price:29,img:"images/su.jpg",tags:[],popular:false,hidden:false }
  ]
};
const DEFAULT_PACKAGE_PRICES=Object.freeze({
  cm1:429,cm2:379,cm3:280,cm4:230,
  cp1:359,cp2:329,cp3:210,cp4:180,
  ik1:460,ik2:758,ik3:410,ik4:708,
  m1:200,m2:250,m3:200,m4:250,m5:200,m6:250,
  p1:120,p2:180,p3:150,t1:149,
  i1:60,i2:50,i3:50,i4:70,i5:50,i6:70,i7:50,i8:50,i9:30,i10:40,i11:25,i12:25,i13:15
});
const STORAGE_KEY="cix_menu_v1";
function normalizePrice(value,fallback=0){const price=Number(value);return Number.isFinite(price)&&price>=0?price:Number(fallback)||0}
function ensureItemPrices(item){
  const legacy=normalizePrice(item.price);
  const prices=item.prices&&typeof item.prices==="object"?item.prices:{};
  item.prices={table:normalizePrice(prices.table,legacy),package:normalizePrice(prices.package,DEFAULT_PACKAGE_PRICES[item.id]??legacy)};
  item.price=item.prices.table;
  return item;
}
function itemPrice(item,mode="table"){ensureItemPrices(item);return item.prices[mode]??item.prices.table}
function normalizeOptionList(value,fallback){return Array.isArray(value)&&value.some(option=>String(option).trim())?[...new Set(value.map(option=>String(option).trim()).filter(Boolean))]:[...fallback]}
function migrateData(data){
  const schemaVersion=data._schemaVersion||1;
  const defaults=DEFAULT_DATA.restaurant;
  data.restaurant={...defaults,...(data.restaurant||{})};
  data.restaurant.theme={...defaults.theme,...(data.restaurant.theme||{})};
  if(["#b56f59","#b46f59"].includes(data.restaurant.theme.footer))data.restaurant.theme.footer=defaults.theme.footer;
  if(!data.restaurant.logo||["images/cix-logo.jpg","images/cix-logo-brosur.png"].includes(data.restaurant.logo))data.restaurant.logo=defaults.logo;
  if(!Array.isArray(data.restaurant.promises))data.restaurant.promises=[...defaults.promises];
  const orderOptions=data.restaurant.orderOptions&&typeof data.restaurant.orderOptions==="object"?data.restaurant.orderOptions:{};
  data.restaurant.orderOptions={
    pastaTypes:normalizeOptionList(orderOptions.pastaTypes,DEFAULT_PASTA_OPTIONS.pastaTypes),
    sauces:normalizeOptionList(orderOptions.sauces,DEFAULT_PASTA_OPTIONS.sauces),
    toppings:normalizeOptionList(orderOptions.toppings,DEFAULT_PASTA_OPTIONS.toppings)
  };
  data.categories=Array.isArray(data.categories)?data.categories:structuredClone(DEFAULT_DATA.categories);
  data.items=Array.isArray(data.items)?data.items:structuredClone(DEFAULT_DATA.items);
  if((data._schemaVersion||1)<2){
    const bigPilav=data.items.find(x=>x.id==="p2"),tiftikPilav=data.items.find(x=>x.id==="p3");
    if(bigPilav)Object.assign(bigPilav,{name:"Tereyağlı Tavuklu Pilav (Büyük Boy)",desc:"Büyük boy tane tane tereyağlı tavuklu pirinç pilavı.",img:"images/tavuklu-pilav.jpg",tags:["Büyük Boy","Bol Tavuk"]});
    if(tiftikPilav)Object.assign(tiftikPilav,{name:"Tiftik Tavuklu Pilav",desc:"Tereyağlı pirinç pilavı üzerinde tiftik tavuk.",img:"images/pilav-buyuk.jpg",tags:["Tiftik Tavuk"]});
  }
  data.items.forEach(item=>{
    ensureItemPrices(item);
    if(schemaVersion<4&&Object.hasOwn(DEFAULT_PACKAGE_PRICES,item.id))item.prices.package=DEFAULT_PACKAGE_PRICES[item.id];
    const savedOrder=item.pastaOrder&&typeof item.pastaOrder==="object"?item.pastaOrder:null;
    const defaultOrder=DEFAULT_PASTA_ORDERS[item.id];
    if(savedOrder||defaultOrder){
      const source=savedOrder||defaultOrder;
      item.pastaOrder={
        portions:Math.max(0,Math.min(3,Math.trunc(Number(source.portions) || 0))),
        fixedType:String(source.fixedType||defaultOrder?.fixedType||"").trim()
      };
    }
  });
  data._schemaVersion=5;
  return data;
}
function loadLocal(){try{const data=migrateData(JSON.parse(localStorage.getItem(STORAGE_KEY))||structuredClone(DEFAULT_DATA));saveLocal(data);return data}catch{return structuredClone(DEFAULT_DATA)}}
function saveLocal(data){localStorage.setItem(STORAGE_KEY,JSON.stringify(data))}
async function loadData(){
  let data=loadLocal();
  if(location.protocol.startsWith("http")){try{const r=await fetch("/api/menu",{cache:"no-store"});const remote=await r.json();if(remote?.restaurant&&remote?.items){data=migrateData(remote);saveLocal(data)}}catch{}}
  return migrateData(data);
}
