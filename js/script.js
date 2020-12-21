const normalize = s => {
    let n = s.toLowerCase().replace(' ', '-').replace(/[^a-zA-Z0-9\.\_\-]*/g, "");
    console.log(s, n)
    return n
}

const changeTab = (evt, tabName) => {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

const getReq = (path, params = {}, callback = null) => {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = () => {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200 && callback)
            callback(xmlHttp.responseText);
    }
    if (Object.keys(params).length !== 0) {
        let p = new URLSearchParams(params).toString();
        xmlHttp.open('GET', `http://${window.location.host}/${path}?${p}`, true); // true for asynchronous 
    } else {
        xmlHttp.open('GET', `http://${window.location.host}/${path}`, true);
    }

    xmlHttp.send(null);
}

const saveData = collection => {
    const info = [...document.getElementsByClassName('exportable')].map(i => i.id);
    let data = {};
    for (var i = 0; i < info.length; i++) {
        let el = document.getElementById(info[i]);
        if (el.nodeName === 'H3') data[info[i]] = el.innerHTML;
        else if (el.nodeName === 'INPUT' && el.type === 'checkbox') {
            data[info[i]] = el.checked ? true : false;
            console.log("checked", info[i])
        } else data[info[i]] = el.value;
    }

    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = () => {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            console.log(xmlHttp.responseText);
            document.getElementById('saveBtn').innerHTML = "Salvato!";
            setTimeout(() => document.getElementById('saveBtn').innerHTML = "Salva", 2000);
        }
    }

    xmlHttp.open('POST', `http://${window.location.host}/saveData/${collection}`, true);
    xmlHttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xmlHttp.send(JSON.stringify(data));
    updateSheetBtns();
}

const displayMap = map => {
    let main = document.getElementById('main');
    main.innerHTML = `<img src="./imgs/map/${map}.png" alt="Map" style="max-width:80%;max-height:80%;">`
    main.className = "main_map";
};

const displaySheet = pg => {
    updateSheetBtns();
    let main = document.getElementById('main');
    main.innerHTML = pgTemplate(pg);
    main.className = "main_pg";
    pgListeners(pg);
};

const displayRandomSheet = () => {
    let l = document.getElementById('livello') ? document.getElementById('livello').value : 1;
    let c = document.getElementById('classe') ? document.getElementById('classe').value : 'random';
    console.log(l, c)
    getReq(`random/sheet/${l}/${c}`, {}, res => {
        let main = document.getElementById('main');
        let pg = JSON.parse(res);
        main.innerHTML = pgTemplate(pg, true);
        main.className = "main_pg";
        pgListeners(pg);
    });
};

const displayNotes = async n => {
    let main = document.getElementById('main');
    main.className = "main_appunti";
    main.innerHTML = await (await fetch(`./wiki/${n}.html`)).text();
};

// const updateSheetBtns = type => {
//     let pl = document.getElementById(type + '-btns');
//     pl.innerHTML = '';
//     let players = pgData; //JSON.parse(pgData);
//     for (var i = 0; i < players.length; i++) {
//         let pg = players[i];
//         let b = document.createElement("button");
//         b.classList = "nav-btn";
//         b.onclick = () => displaySheet(pg, type);
//         b.innerHTML = pg.name;
//         let li = document.createElement("li");
//         li.appendChild(b);
//         pl.appendChild(li);
//     }

// }

const updateSheetBtns = () => {
    let players = pgData;
    let pgMenu = document.getElementById('pg-btns');
    pgMenu.innerHTML = '';
    let pngMenu = document.getElementById('png-btns');
    pngMenu.innerHTML = '';
    let deadPgMenu = document.getElementById('dead-pg-btns');
    deadPgMenu.innerHTML = '';
    for (var i = 0; i < players.length; i++) {
        let pg = players[i];
        let b = document.createElement("button");
        b.classList = "nav-btn";
        b.onclick = () => displaySheet(pg);
        b.innerHTML = pg.name;
        let li = document.createElement("li");
        li.appendChild(b);
        if (pg.isPNG) pngMenu.appendChild(li);
        else if (pg.isDead) deadPgMenu.appendChild(li);
        else pgMenu.appendChild(li);
    }

}

window.onload = () => {
    updateSheetBtns('pg');
    updateSheetBtns('png');
}