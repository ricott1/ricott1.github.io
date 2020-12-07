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
        xmlHttp.open('GET', `https://${window.location.host}/${path}?${p}`, true); // true for asynchronous 
    } else {
        xmlHttp.open('GET', `https://${window.location.host}/${path}`, true);
    }

    xmlHttp.send(null);
}

const saveData = collection => {
    const info = [...document.getElementsByClassName('exportable')].map(i => i.id);
    let data = {};
    for (var i = 0; i < info.length; i++) {
        let el = document.getElementById(info[i]);
        data[info[i]] = el.value || el.innerHTML;
    }

    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = () => {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            console.log(xmlHttp.responseText);
            document.getElementById('saveBtn').innerHTML = "Saved!";
            setTimeout(() => document.getElementById('saveBtn').innerHTML = "Save", 2000);
        }
    }

    xmlHttp.open('POST', `https://${window.location.host}/saveData/${collection}`, true);
    xmlHttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xmlHttp.send(JSON.stringify(data));
}

const displayMap = map => {
    let main = document.getElementById('main');
    main.innerHTML = `<img src="./imgs/map/${map}.png" alt="Map" style="max-width:80%;max-height:80%;">`
    main.className = "main_map";
};

const displaySheet = (pg, type='pg') => {
    // updateSheetBtns(type);
    let main = document.getElementById('main');
    main.innerHTML = pgTemplate(pg, type);
    main.className = "main_pg";
    pgListeners(pg);
};

const displayRandomPNG = () => {
    let l = document.getElementById('livello') ? document.getElementById('livello').value : 1;
    let c = document.getElementById('classe') ? document.getElementById('classe').value : 'random';
    getReq(`random/png/${l}/${c}`, {}, res => {
        let main = document.getElementById('main');
        let pg = JSON.parse(res);
        main.innerHTML = pgTemplate(pg, 'png');
        main.className = "main_pg";
        pgListeners(pg);
    });
};

const displayNotes = async n => {
    let main = document.getElementById('main');
    main.className = "main_appunti";
    main.innerHTML = await (await fetch(`./wiki/${n}.html`)).text();
};

const updateSheetBtns = type => {
    let pl = document.getElementById(type + '-btns');
    pl.innerHTML = '';
    let players = JSON.parse(pgData);
    for (var i = 0; i < players.length; i++) {
        let pg = players[i];
        let b = document.createElement("button");
        b.classList = "nav-btn";
        b.onclick = () => displaySheet(pg, type);
        b.innerHTML = pg.name;
        let li = document.createElement("li");
        li.appendChild(b);
        pl.appendChild(li);
    }

}

window.onload = () => {
    updateSheetBtns('pg');
    // updateSheetBtns('png');
}