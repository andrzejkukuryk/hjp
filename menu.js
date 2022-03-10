/* menu */
const menu = document.getElementsByTagName('NAV');
const ikona = document.getElementsByClassName('menu_min');
const h_menu_mobile = ["250px", "667px", "635px", "564px", "285px", "190px"];
const lista = document.querySelectorAll('ul ul li');
const r = document.querySelector('html');

function sprawdz_w() {
    let w = innerWidth;
    if (w >= 1200) {
        menu[0].style.display='block';
        
        for (let i = 0; i < lista.length; i++) {
        lista[i].removeAttribute('onclick');
    }
    } else {
        menu_zamk();
    }
}

function menu_otw() { 
          let w = innerWidth;
          let delay = `r.style.setProperty('--from_menu_mobile', h_menu_mobile[5]);`
        if (w > 600) {  
          menu[0].style.animationName='rozwin_tab';
       } else {
           /*let delay = `r.style.setProperty('--from_menu_mobile', h_menu_mobile[5]);`*/
          menu[0].style.animationName='rozwin_mobile';
          /*setTimeout(delay, 500);*/  
       }
          setTimeout(delay, 500);
          menu[0].style.display='block';
          ikona[0].innerHTML = `<img src="grafika/zamk.png">`;
          ikona[0].setAttribute('onclick', 'menu_zamk()'); 
        if (w < 1200) {
            menu_li();
        }
}
function menu_zamk() {
    let w = innerWidth;
    let delay = ` r.style.setProperty('--from_menu_mobile', '0px');
                  r.style.setProperty('--to_menu_mobile', h_menu_mobile[5]);`
        if (w > 600) { 
          menu[0].style.animationName='zwin_tab';
        } else {
          /*let delay = ` r.style.setProperty('--from_menu_mobile', '0px');
                        r.style.setProperty('--to_menu_mobile', h_menu_mobile[5]);`*/
          menu[0].style.animationName='zwin_mobile';
          /*setTimeout(delay, 500);*/    
        }
          setTimeout(delay, 500);
          let delay_zamk = `menu[0].style.display='none'`;
          setTimeout(delay_zamk, 200);
          ikona[0].innerHTML = `<img src="grafika/menu.png">`;
          ikona[0].setAttribute('onclick', 'menu_otw()');
          setTimeout(zwin_wszystkie, 500);
}
function menu_li() {
    
    /*const lista = document.querySelectorAll('ul ul li');*/
    for (let i = 0; i < lista.length; i++) {
    lista[i].setAttribute('onclick', 'menu_zamk()');
    }
}


function rozwin(n){
                    zwin_wszystkie();
                    document.getElementById('d' + n).style.display='block';
                    document.getElementById('r_' + n).style.display='none';
                    document.getElementById('z_' + n).style.display='flex';
                    let rozw = document.getElementsByClassName('dzien_z');
                    rozw[n].style.display='none';
                    let zw = document.getElementsByClassName('dzien_r');
                    zw[n].style.display='inline';
                    zmien_h(n);
                    console.log(n);
                    }
function zwin(n) {                 
                  document.getElementById('d' + n).style.display='none';
                  document.getElementById('z_' + n).style.display='none';
                  document.getElementById('r_' + n).style.display='flex';
                    let rozw = document.getElementsByClassName('dzien_z');
                    rozw[n].style.display='inline';
                    let zw = document.getElementsByClassName('dzien_r');
                    zw[n].style.display='none';       
                }
function zwin_wszystkie() {
                    let dni = document.getElementsByClassName('dzien_z');
                    for (let i = 0; i < dni.length; i++) {
                        zwin(i);
                        }
}

function zmien_h(n) {
    const styl = window.getComputedStyle(menu[0]);
    let anim = styl.getPropertyValue('animation-name');
    r.style.setProperty('--to_menu_mobile', h_menu_mobile[n]);
    switch(anim) {
        case 'rozwin_mobile':
            menu[0].style.animationName='rozwinmobile';
            break;
        case 'rozwinmobile':
            menu[0].style.animationName='rozwin_mobile';
            break;
        default:
            menu[0].style.animationName='rozwin_mobile';
    }
    function to_from() {
       r.style.setProperty('--from_menu_mobile', h_menu_mobile[n]);
    }
    setTimeout(to_from, 500);
}



/* zdjecia w tekscie  */

function podswietl(z) {
                    document.getElementById('i' + z).style.backgroundImage='linear-gradient(to right, white 10%, red)';
                       }
function zgas(z) { 
                    document.getElementById('i' + z).style.backgroundImage='none';
                  }
function znajdz(z) {
                    document.getElementById('s' + z).style.color='red';
                    podswietl(z);
                    }
function wylacz(z) {
                    document.getElementById('s' + z).style.color='black';
                    zgas(z);
                    }
/* galeria */

function zdjecie(z) {
    let foto = document.getElementById('i' + z);
    let kopia = foto.cloneNode(true);
    document.getElementById('gal_zdjecie').appendChild(kopia);
    kopia.style='none';
    kopia.className='duze';
}


function rozdzial(z) {
    let tytul = document.getElementById('i' + z).getAttribute('title');
    let podroz;
    switch(z) {
        case 1:
            podroz = "#centrale";
            break;
        case 2:
            podroz = "#metro";
            break;
        case 3:
        case 4:
            podroz = "#monumentale";
            break;
        case 5:
            podroz = "#arco";
            break;
        case 6:
        case 7:
            podroz = "#sempione";
            break;
        case 8:
        case 9: 
            podroz = "#cenacolo";
            break;
        case 10:
        case 11:
        case 12:
        case 13:
            podroz = "#zgubic";
            break;
        case 14:
        case 15:
            podroz = "#scala";
            break;
        case 16:
        case 17:
            podroz = "#kolacja";
            break;
        case 18:
        case 19:
            podroz = "#navigli";
            break;
        case 20:
            podroz = "#casa";
            break;
        case 21:
        case 22:
        case 23: 
            podroz = "#mondo";
            break;
        case 24:
            podroz = "#store";
            break;
        case 25: 
        case 26:
            podroz = "#margherita";
            break;
        case 27:
            podroz = "#machiny";
            break;
        case 28:
        case 29:
            podroz = "#muzeum";
            break;
        case 30:
            podroz = "#ambrogio";
            break;
        case 31:
            podroz = "#circo";
            break;
        case 32:
            podroz = "#ponownie";
            break;
        case 33:
            podroz = "#poszukiwania";
            break;
        case 34:
            podroz = "#las";
            break;
        case 35:
        case 36:
        case 37:
            podroz = "#brera";
            break;
        case 38:
            podroz = "#doro";
            break;
        case 39:
            podroz = "#spacer";
            break;
        case 40:
        case 41: 
            podroz = "#trasa";
            break;
        case 42:
            podroz = "#stadion";
            break;
        case 43:
            podroz = "#spektakl";
            break;
        case 44:
            podroz = "#mecz";
            break;
        case 45:
        case 46:
            podroz = "#pizza";
            break;
        case 47:
        case 48:    
            podroz = "#duomo";
            break;
        case 49:    
            podroz = "#samolot";
            break;    
        default:
            podroz = "#top";
            break;
               }
    document.getElementById('gal_podpis').innerHTML = tytul + "<a href=" + podroz + ` onclick="zamknij()"><img src="grafika/art.png" title="Przejdź do rozdziału"></a>`;
}

function dodaj_x() {
        let foto = document.getElementById('gal_zdjecie').innerHTML;
        let x = `<div class="gal_zamknij" onclick="zamknij()" title="Zamknij"><img src="grafika/zamk.png"></div>`;
        document.getElementById('gal_zdjecie').innerHTML = foto + x;

}
function galeria(z) {
    const tlo = `   <div id="gal_zdjecie"></div>
                    <div class="gal_naw">
                    <div id="gal_pop" onclick="poprzednie()"><img class="pop" src="grafika/poprz.png"></div>
                    <div id="gal_podpis" id="podpis"></div>
                    <div id="gal_nas" onclick="nastepne()"><img class="nast" src="grafika/nast.png"></div>  
                    </div>`; 
    let ilosc = document.getElementsByClassName('miniatura');
    let blok = document.getElementsByTagName('BODY');
       
    if (z == 1) {
        document.getElementById('gal_tlo').style.display='flex';
        document.getElementById('gal_tlo').innerHTML = tlo;
        document.getElementById('gal_pop').style.visibility='hidden';
        blok[0].style.overflow = 'hidden';
        zdjecie(z);
        dodaj_x();
        rozdzial(z);     
        zgas(z);  
    }
    else if (z == ilosc.length) {
        document.getElementById('gal_tlo').style.display='flex';
        document.getElementById('gal_tlo').innerHTML = tlo;
        document.getElementById('gal_nas').style.visibility='hidden';
        blok[0].style.overflow = 'hidden';
        zdjecie(z);
        dodaj_x();
        rozdzial(z);
        zgas(z);
    }
    else {
        document.getElementById('gal_tlo').style.display='flex';
        document.getElementById('gal_tlo').innerHTML = tlo;
        blok[0].style.overflow = 'hidden';
        zdjecie(z);
        dodaj_x();
        rozdzial(z);
        zgas(z);  
    }
}
function nastepne() {
    let spr_foto = document.getElementById('gal_zdjecie');
    let spr_id = spr_foto.getElementsByTagName('IMG');
    let id = spr_id[0].getAttribute('id');
    let z = id.slice(1);
        z++;
        galeria(z);
}

function poprzednie() {
    let spr_foto = document.getElementById('gal_zdjecie');
    let spr_id = spr_foto.getElementsByTagName('IMG');
    let id = spr_id[0].getAttribute('id');
    let z = id.slice(1);
        z--;
        galeria(z);
}

function zamknij() {
    let blok = document.getElementsByTagName('BODY');
    
    document.getElementById('gal_tlo').style.display='none';
    blok[0].style.overflow = 'visible';
    
}

/*lista atrakcji*/

const atr = document.querySelectorAll('STRONG');
const lista_atr = document.querySelector('#atrakcje UL');
const element_atr = document.getElementsByClassName('element_atrakcje');

const atrakcje = [];

for (i = 0; i < atr.length; i++) {
    let id = atr[i].setAttribute('id', 'a'+i);
    let item = atr[i].innerHTML.toString();
    atrakcje.push(item);
}
atrakcje[1] = 'Cmentarz Monumentale';
atrakcje[2] = 'Chińska dzielnica';
atrakcje[3] = 'Łuk Pokoju';
atrakcje[6] = 'Pomnik Napoleona III na koniu';
atrakcje[9] = 'Ostatnia Wieczerza';
atrakcje[10] = 'Wagon Typ 1500';
atrakcje[15] = 'Pomnik Leonarda';
atrakcje[16] = 'Kolumny San Lorenzo';
atrakcje[21] = 'Narodowe Muzeum Nauki i Technologii';
atrakcje[22] = 'Człowiek Witruwiański';
atrakcje[25] = 'Bazylika św. Wawrzyńca';
atrakcje[27] = 'Najwyższy budynek Italii';
atrakcje[30] = 'Kościół św. Marka';
atrakcje[31] = 'Pinakoteka Brera';
atrakcje[32] = 'Ogród botaniczny';
atrakcje[33] = 'Dzielnica mody';
atrakcje[34] = 'Pomnik Camillo Cavour';
atrakcje[37] = 'Najważniejsze punkty miasta';
atrakcje[38] = 'Jajka byka';
atrakcje[39] = 'Pomnik konny Giuseppe Garibaldiego';
atrakcje[40] = 'Zamek Sforzów';


atrakcje.forEach(function(elem, index){              /*tworzy listę atrakcji*/
    let li = document.createElement('LI');
    let a = document.createElement('A');
    lista_atr.appendChild(li);
    li.appendChild(a);
    a.setAttribute('href', '#a'+index);
    a.setAttribute('onclick', 'zamknij_atr()');
    a.innerHTML = elem;
    li.className='element_atrakcje';
    a.className='href_atrakcje';
});


const baza_atr = [];                                /*[[nazwa, href]....[nazwa, href]]*/
for (let i = 0; i < element_atr.length; i++) {
    let item = [];
    let nazwa = element_atr[i].innerText;
    item.push(nazwa);
    const href = document.getElementsByClassName('href_atrakcje');
    item.push(href[i].getAttribute('href'));
    baza_atr.push(item);
};

const domyslnie_atr = atrakcje;
const az_atr = [...atrakcje].sort((a,b) => a.localeCompare(b));
const za_atr = [...az_atr].reverse();

function sortuj_atr(sposob) {
    lista_atr.innerHTML='';
    sposob.forEach(function(nazwa){
       for (let i = 0; i < baza_atr.length; i++) {
          if (baza_atr[i].indexOf(nazwa) == 0){
              let index = i;
              let text = '';
              text += (baza_atr[index][0] + " " + baza_atr[index][1]);
            
    let li = document.createElement('LI');
    let a = document.createElement('A');
    lista_atr.appendChild(li);
    li.appendChild(a);
    a.setAttribute('href', baza_atr[index][1]);
    a.setAttribute('onclick', 'zamknij_atr()');
    a.innerHTML = baza_atr[index][0];
    li.className='element_atrakcje';
    a.className='href_atrakcje';
            
          }
              
       } 
    })
    
};
function sortuj(){                                           /*dropdown*/
   let wybor = document.getElementById('sort_atr').value;
   switch(wybor){
       case 'domyslnie_atr':
           sortuj_atr(domyslnie_atr);
           break;
       case 'az_atr':
           sortuj_atr(az_atr);
           break;
       case 'za_atr':
           sortuj_atr(za_atr);
           break;
       default:  
           sortuj_atr(domyslnie_atr);
   }
}


function zamknij_atr(){
document.getElementById('atrakcje').style.display='none';
};