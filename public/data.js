const DEFAULT_DATA = {
  _schemaVersion: 4,
  restaurant: {
    name: "C?X MAKARNA",
    tagline: "Sosunu se?, keyfini ??kar",
    phone: "+90 535 742 22 02",
    whatsapp: "905357422202",
    instagram: "https://instagram.com/cix.makarna",
    maps: "https://www.google.com/maps/search/?api=1&query=Cix+Makarna+Oru%C3%A7reis+Esenler",
    reviewLink: "https://www.google.com/search?q=Cix+Makarna+Esenler+yorum",
    address: "Oru?reis Mah. 543. Sok. 1BB B1 Blok, 34235 Esenler / ?stanbul",
    hours: "Her g?n 12:00 ? 23:59",
    currency: "?",
    cover: "images/cix-hero.jpg",
    logo: "images/cix-logo-brosur.webp",
    promises: ["Lezzetli", "S?cak", "Doyurucu"],
    theme: { primary: "#c96545", secondary: "#d3a34f", ink: "#3d302a", cream: "#fff6e9", card: "#fffdf8", green: "#557b52", footer: "#e2eadb" }
  },
  categories: [
    { id: "menu", name: "Cix Men?ler" },
    { id: "ikili", name: "?kili Men?ler" },
    { id: "makarna", name: "Makarnalar" },
    { id: "pilav", name: "Tavuklu Pilav" },
    { id: "tatli", name: "Tatl?lar" },
    { id: "icecek", name: "??ecekler" }
  ],
  items: [
    {id:"cm1",cat:"menu",name:"Cix Mega Combo Makarna Men?",desc:"Se?ece?in makarna ?e?idi ve malzemeleriyle haz?rlanan b?y?k boy kase makarna, diledi?in so?uk i?ecek ve Spoonful tatl?.",price:519,img:"images/menu-mega-makarna.jpg",tags:["B?y?k Boy","Tatl? Dahil"],popular:true,hidden:false},
    {id:"cm2",cat:"menu",name:"Cix Combo Makarna Men?",desc:"Se?ece?in makarna ?e?idi ve malzemeleriyle haz?rlanan makarna, diledi?in so?uk i?ecek ve Spoonful tatl?.",price:469,img:"images/menu-combo-makarna.jpg",tags:["Tatl? Dahil"],popular:true,hidden:false},
    {id:"cm3",cat:"menu",name:"Cix Duo Mega Makarna Men?",desc:"Se?ece?in makarna ?e?idi ve malzemeleriyle haz?rlanan b?y?k boy kase makarna ve diledi?in so?uk i?ecek.",price:379,img:"images/menu-duo-mega-makarna.jpg",tags:["B?y?k Boy"],popular:true,hidden:false},
    {id:"cm4",cat:"menu",name:"Cix Duo Makarna Men?",desc:"Se?ece?in makarna ?e?idi ve malzemeleriyle haz?rlanan makarna ve diledi?in so?uk i?ecek.",price:329,img:"images/menu-duo-makarna.jpg",tags:[],popular:false,hidden:false},
    {id:"cp1",cat:"menu",name:"Cix Mega Combo Tavuk Pilav Men?",desc:"Tepeleme dolu b?y?k boy tavuklu pilav, diledi?in so?uk i?ecek ve Spoonful tatl?.",price:439,img:"images/menu-mega-pilav.jpg",tags:["B?y?k Boy","Tatl? Dahil"],popular:true,hidden:false},
    {id:"cp2",cat:"menu",name:"Cix Combo Tavuk Pilav Men?",desc:"Bol tavuklu tereya?l? pilav, diledi?in so?uk i?ecek ve Spoonful tatl?.",price:399,img:"images/menu-combo-pilav.jpg",tags:["Tatl? Dahil"],popular:false,hidden:false},
    {id:"cp3",cat:"menu",name:"Cix Duo Mega Tavuklu Pilav Men?",desc:"B?y?k boy tepeleme tereya?l? tavuklu pilav ve diledi?in so?uk i?ecek.",price:299,img:"images/menu-duo-mega-pilav.jpg",tags:["B?y?k Boy"],popular:false,hidden:false},
    {id:"cp4",cat:"menu",name:"Cix Duo Tavuklu Pilav Men?",desc:"Standart boy bol tavuklu tereya?l? pilav ve diledi?in so?uk i?ecek.",price:239,img:"images/menu-duo-pilav.jpg",tags:[],popular:false,hidden:false},
    {id:"ik1",cat:"ikili",name:"?kili Doyuran Men?",desc:"Kendi se?ece?iniz makarna tipi, ?zel sosu ve 2 adet so?uk i?ecek ile 2 porsiyon Cix Makarna.",price:649,img:"images/ikili-doyuran.jpg",tags:["2 Ki?ilik"],popular:true,hidden:false},
    {id:"ik2",cat:"ikili",name:"Tatl? ?kili Doyuran Men?",desc:"2 porsiyon Cix Makarna, 2 so?uk i?ecek ve 2 adet enfes Spoonful tatl?.",price:929,img:"images/ikili-tatli-doyuran.jpg",tags:["2 Ki?ilik","2 Tatl?"],popular:false,hidden:false},
    {id:"ik3",cat:"ikili",name:"Karars?z Kanka Men?",desc:"1 porsiyon Cix Makarna, 1 porsiyon tiftik tavuklu pilav ve 2 so?uk i?ecek.",price:569,img:"images/kararsiz-kanka.jpg",tags:["2 Ki?ilik"],popular:true,hidden:false},
    {id:"ik4",cat:"ikili",name:"Tatl? Karars?z Kanka Men?",desc:"1 porsiyon Cix Makarna, 1 porsiyon tavuklu pilav, 2 so?uk i?ecek ve 2 Spoonful tatl?.",price:869,img:"images/kararsiz-kanka-tatli.jpg",tags:["2 Ki?ilik","2 Tatl?"],popular:false,hidden:false},
    { id:"m1",cat:"makarna",name:"Penne Makarna",desc:"Se?ece?iniz malzemeler ve imza soslar?m?zla haz?rlanan taze penne makarna.",price:299,img:"images/penne.jpg",tags:["Sosunu Se?"],popular:true,hidden:false },
    { id:"m2",cat:"makarna",name:"Penne Makarna (B?y?k Boy)",desc:"B?y?k porsiyon penne; se?ece?iniz malzemeler ve soslarla haz?rlan?r.",price:349,img:"images/penne-buyuk.jpg",tags:["B?y?k Boy","Pop?ler"],popular:true,hidden:false },
    { id:"m3",cat:"makarna",name:"Dirsek Makarna",desc:"Taze ha?lanm?? dirsek makarna, diledi?iniz ?zel ana soslar ve nefis ?st malzemeler ile.",price:299,img:"images/dirsek.jpg",tags:["Sosunu Se?"],popular:false,hidden:false },
    { id:"m4",cat:"makarna",name:"Dirsek Makarna (B?y?k Boy)",desc:"B?y?k porsiyon dirsek makarna; se?ti?iniz malzemeler ve soslarla.",price:349,img:"images/dirsek-buyuk.jpg",tags:["B?y?k Boy"],popular:false,hidden:false },
    { id:"m5",cat:"makarna",name:"Spagetti Makarna",desc:"Spagetti, se?ece?iniz malzemeler ve imza soslar?m?zla haz?rlan?r.",price:299,img:"images/spagetti.jpg",tags:["Sosunu Se?"],popular:false,hidden:false },
    { id:"m6",cat:"makarna",name:"Spagetti Makarna (B?y?k Boy)",desc:"B?y?k porsiyon spagetti; se?ti?iniz malzemeler ve soslarla.",price:349,img:"images/spagetti-buyuk.jpg",tags:["B?y?k Boy"],popular:false,hidden:false },
    { id:"p1",cat:"pilav",name:"Tereya?l? Pilav",desc:"Tane tane, tereya?l? g?nl?k pirin? pilav?.",price:119,img:"images/pilav.jpg",tags:[],popular:false,hidden:false },
    { id:"p2",cat:"pilav",name:"Tereya?l? Tavuklu Pilav (B?y?k Boy)",desc:"B?y?k boy tane tane tereya?l? tavuklu pirin? pilav?.",price:149,img:"images/tavuklu-pilav.jpg",tags:["B?y?k Boy","Bol Tavuk"],popular:false,hidden:false },
    { id:"p3",cat:"pilav",name:"Tiftik Tavuklu Pilav",desc:"Tereya?l? pirin? pilav? ?zerinde tiftik tavuk.",price:189,img:"images/pilav-buyuk.jpg",tags:["Tiftik Tavuk"],popular:true,hidden:false },
    { id:"t1",cat:"tatli",name:"Spoonful",desc:"Yo?un ?ikolatal? krema ve yumu?ac?k kekiyle ka??k ka??k mutluluk veren ?zel tatl?m?z.",price:149,img:"images/spoonful.jpg",tags:["Pop?ler"],popular:true,hidden:false },
    { id:"i1",cat:"icecek",name:"Ev Yap?m? Limonata (30 cl.)",desc:"Katk?s?z, konsantresiz; taptaze ger?ek limonlardan g?nl?k s?k?l?r.",price:75,img:"images/limonata.jpg",tags:["Ev Yap?m?"],popular:false,hidden:false },
    { id:"i2",cat:"icecek",name:"A??k Ayran (30 cl.)",desc:"Bol k?p?kl?, ev yap?m? taze a??k ayran.",price:59,img:"images/acik-ayran.jpg",tags:["Pop?ler"],popular:true,hidden:false },
    { id:"i3",cat:"icecek",name:"Sar?yer Kola (33 cl.)",desc:"So?uk kutu i?ecek.",price:59,img:"images/sariyer-kola.jpg",tags:[],popular:false,hidden:false },
    { id:"i4",cat:"icecek",name:"Coca-Cola (33 cl.)",desc:"So?uk kutu i?ecek.",price:89,img:"images/coca-cola.jpg",tags:[],popular:false,hidden:false },
    { id:"i5",cat:"icecek",name:"Sar?yer Portakal (33 cl.)",desc:"So?uk kutu i?ecek.",price:59,img:"images/sariyer-portakal.jpg",tags:[],popular:false,hidden:false },
    { id:"i6",cat:"icecek",name:"Fanta (33 cl.)",desc:"So?uk kutu i?ecek.",price:89,img:"images/fanta.jpg",tags:[],popular:false,hidden:false },
    { id:"i7",cat:"icecek",name:"Didi Limon (25 cl.)",desc:"So?uk kutu i?ecek.",price:59,img:"images/didi-limon.jpg",tags:[],popular:false,hidden:false },
    { id:"i8",cat:"icecek",name:"Didi ?eftali (25 cl.)",desc:"So?uk kutu i?ecek.",price:59,img:"images/didi-seftali.jpg",tags:[],popular:false,hidden:false },
    { id:"i9",cat:"icecek",name:"Ayran (20 cl.)",desc:"K???k boy kapal? ayran.",price:29,img:"images/ayran.jpg",tags:[],popular:false,hidden:false },
    { id:"i10",cat:"icecek",name:"?aml?ca Gazozu (20 cl.)",desc:"So?uk cam ?i?e.",price:39,img:"images/gazoz.jpg",tags:[],popular:false,hidden:false },
    { id:"i11",cat:"icecek",name:"S?rma Limon (20 cl.)",desc:"Limon aromal? maden suyu, cam ?i?e.",price:29,img:"images/sirma-limon.jpg",tags:[],popular:false,hidden:false },
    { id:"i12",cat:"icecek",name:"Sade Soda (20 cl.)",desc:"Do?al maden suyu, cam ?i?e.",price:29,img:"images/soda.jpg",tags:[],popular:false,hidden:false },
    { id:"i13",cat:"icecek",name:"Su (50 cl.)",desc:"Pet ?i?e i?me suyu.",price:29,img:"images/su.jpg",tags:[],popular:false,hidden:false }
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
function migrateData(data){
  const schemaVersion=data._schemaVersion||1;
  const defaults=DEFAULT_DATA.restaurant;
  data.restaurant={...defaults,...(data.restaurant||{})};
  data.restaurant.theme={...defaults.theme,...(data.restaurant.theme||{})};
  if(["#b56f59","#b46f59"].includes(data.restaurant.theme.footer))data.restaurant.theme.footer=defaults.theme.footer;
  if(!data.restaurant.logo||["images/cix-logo.jpg","images/cix-logo-brosur.png"].includes(data.restaurant.logo))data.restaurant.logo=defaults.logo;
  if(!Array.isArray(data.restaurant.promises))data.restaurant.promises=[...defaults.promises];
  data.categories=Array.isArray(data.categories)?data.categories:structuredClone(DEFAULT_DATA.categories);
  data.items=Array.isArray(data.items)?data.items:structuredClone(DEFAULT_DATA.items);
  if((data._schemaVersion||1)<2){
    const bigPilav=data.items.find(x=>x.id==="p2"),tiftikPilav=data.items.find(x=>x.id==="p3");
    if(bigPilav)Object.assign(bigPilav,{name:"Tereya?l? Tavuklu Pilav (B?y?k Boy)",desc:"B?y?k boy tane tane tereya?l? tavuklu pirin? pilav?.",img:"images/tavuklu-pilav.jpg",tags:["B?y?k Boy","Bol Tavuk"]});
    if(tiftikPilav)Object.assign(tiftikPilav,{name:"Tiftik Tavuklu Pilav",desc:"Tereya?l? pirin? pilav? ?zerinde tiftik tavuk.",img:"images/pilav-buyuk.jpg",tags:["Tiftik Tavuk"]});
  }
  data.items.forEach(item=>{
    ensureItemPrices(item);
    if(schemaVersion<4&&Object.hasOwn(DEFAULT_PACKAGE_PRICES,item.id))item.prices.package=DEFAULT_PACKAGE_PRICES[item.id];
  });
  data._schemaVersion=4;
  return data;
}
function loadLocal(){try{const data=migrateData(JSON.parse(localStorage.getItem(STORAGE_KEY))||structuredClone(DEFAULT_DATA));saveLocal(data);return data}catch{return structuredClone(DEFAULT_DATA)}}
function saveLocal(data){localStorage.setItem(STORAGE_KEY,JSON.stringify(data))}
async function loadData(){
  let data=loadLocal();
  if(location.protocol.startsWith("http")){try{const r=await fetch("/api/menu",{cache:"no-store"});const remote=await r.json();if(remote?.restaurant&&remote?.items){data=migrateData(remote);saveLocal(data)}}catch{}}
  return migrateData(data);
}
