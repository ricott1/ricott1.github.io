const pgTemplate = (pg, _new=false) => {
    console.log(pg, pg.classe === 'halfling');
    let html = `
<div class="tab">     
    <button class="tablinks active" onclick="changeTab(event, 'pg-info')">Caratteristiche</button>
    <button class="tablinks" onclick="changeTab(event, 'inventario')">Inventario</button>
    <button class="tablinks" onclick="changeTab(event, 'background')">Background</button>
    <button class="tablinks" onclick="changeTab(event, 'note')">Appunti</button>
    <button id="saveBtn" onclick="saveData('sheets')">Salva</button>
</div>

<div class="main-top">`
    if (_new) {
       html += `<h3><input style="width:240px;font-size: 1em; font-weight: bold;" type="text" class="exportable" id="name" value ="${pg.name||''}"></input></h3>`
    } else {
       html += `<h3 class="exportable" id="name">${pg.name||''}</h3>` 
    }

    html += `
    <label for="class">Classe</label>
    <select class="exportable" name="classe" id="classe">
        <option value="guerriero">Guerriero</option>
        <option ${pg.classe === 'mago' ? 'selected' : ''} value="mago">Mago</option>
        <option ${pg.classe === 'chierico' ? 'selected' : ''} value="chierico">Chierico</option>
        <option ${pg.classe === 'ladro' ? 'selected' : ''}" value="ladro">Ladro</option>
        <option ${pg.classe === 'paladino' ? 'selected' : ''} value="paladino">Paladino</option>
        <option ${pg.classe === 'elfo' ? 'selected' : ''} value="elfo">Elfo</option>
        <option ${pg.classe === 'nano' ? 'selected' : ''} value="nano">Nano</option>
        <option ${pg.classe === 'halfling' ? 'selected' : ''} value="halfling">Halfling</option>
    </select>
    <label for="livello">Livello</label>
    <input class="exportable" type="number" id="livello" name="livello" value="${pg.livello||1}" min="1" max="20">
    <label for="esperienza">Exp</label>
    <input class="exportable" type="number" id="esperienza" name="esperienza" value="${pg.esperienza||0}" min="0" style="width: 52px">/
    <input type="number" id="levelup_esperienza"  value="1000" style="width: 52px">
    <label for="allineamento">Allineamento</label>
    <select class="exportable" name="allineamento" id="allineamento">
        <option ${pg.allineamento === 'legale' ? 'selected' : ''} value="legale">Legale</option>
        <option ${pg.allineamento === 'neutrale' ? 'selected' : ''} value="neutrale">Neutrale</option>
        <option ${pg.allineamento === 'caotico' ? 'selected' : ''} value="caotico">Caotico</option>
    </select>
    <input type="checkbox" class="exportable checkbox" id="isPNG" name="isPNG" ${pg.isPNG ? 'checked' : ''}>
    <label for="isPNG">PNG</label>
    <input type="checkbox" class="exportable checkbox" id="isDead" name="isDead" ${pg.isDead ? 'checked' : ''}>
    <label for="isDead">Deceduto</label>
    <br>
    <label for="atk_mischia">Mischia</label>
    <input class="exportable" type="number" id="atk_mischia" name="atk_mischia" value="${pg['atk_mischia']||0}" min="-3" max="5">
    <label for="danno">Danno</label>
    <input class="exportable" type="number" value="${pg['danno']||'0'}" id="danno" name="danno">
    <label for="atk_distanza">Distanza</label>
    <input class="exportable" type="number" id="atk_distanza" name="atk_distanza" value="${pg['atk_distanza']||0}" min="-3" max="5">
    <label for="ca">CA</label>
    <input class="exportable" type="number" id="ca" name="ca" value="${pg['ca']||10}" min="5" max="25">
    <label for="punti_vita">Punti Vita</label>
    <input style="width: 40px" class="exportable" type="number" id="punti_vita" name="punti_vita" value="${pg['punti_vita']||''}" min="1" max="200">/
    <input style="width: 40px" class="exportable" type="number" id="punti_vita_massimi" value="${pg['punti_vita_massimi']||''}" min="1" max="200">
    <input style="width: 40px" type="text" id="dadi_vita" name="dadi_vita" disabled="true">
</div>
<div class="main-center">
    <div id="pg-info" class="tabcontent" style="display: block">
        <table>
            <tr>
                <th style="width: 100px;" colspan="2">Caratteristica</th>
                <th>Mod</th>
                <th>Tratti</th>
                <th>Extra</th>
                <th></th>
            </tr>`
    let cars = ['Forza', "Intelligenza", 'Saggezza', 'Costituzione', 'Destrezza', 'Carisma'];
    for (var i = 0; i < cars.length; i++) {
        let c = cars[i].toLowerCase();
        html += `
            <tr>
                <td><label for="${c}" style="width: 40px">${cars[i]}</label></td>
                <td><input class="exportable caratteristica" type="number" id="${c}" name="${c}" value="${pg[c]||10}" min="3" max="18" onkeydown="return false"></td>
                <td><input type="number" id="mod_${c}" value="${pg['mod_' + c]||0}" min="-3" max="3" disabled="true"></td>
                <td><input class="exportable" type="text" id="tratti_${c}" value="${pg['tratti_' + c]||''}"></td>
                <td><input class="exportable extra" type="text" id="extra_${c}" value="${pg['extra_' + c]||''}"></td>
            </tr>`
    }
    html += `
        </table>
        <br>
        <div class="saving-pic">
            <table>
                <tr>
                    <th columnspan="3">Tiri Salvezza</th>
                </tr>
                <tr>
                    <td><label for="morte_veleno" style="width: 25%">Morte</label></td>
                    <td><input class="exportable" type="number" id="morte_veleno" name="morte_veleno" value="${pg['morte_veleno']||16}" min="4" max="16"></td>
                    <td style="font-size: small;">(morte, veleno)</td>
                </tr>
                <tr>
                    <td><label for="bacchette_metamorfosi_paralisi">Bacchette</label></td>
                    <td><input class="exportable" type="number" id="bacchette_metamorfosi_paralisi" name="bacchette_metamorfosi_paralisi" value="${pg['bacchette_metamorfosi_paralisi']||16}" min="4" max="16"></td>
                    <td style="font-size: small;">(bacchette, metamorfosi, paralisi)</td>
                </tr>
                <tr>
                    <td> <label for="pietrificazione">Pietrificazione</label></td>
                    <td> <input class="exportable" type="number" id="pietrificazione" name="pietrificazione" value="${pg['pietrificazione']||16}" min="4" max="16"></td>
                    <td style="font-size: small;">(pietrificazione)</td>
                </tr>
                <tr>
                    <td><label for="soffio">Soffio</label></td>
                    <td><input class="exportable" type="number" id="soffio" name="soffio" value="${pg['soffio']||16}" min="4" max="16"></td>
                    <td style="font-size: small;">(soffio)</td>
                </tr>
                <tr>
                    <td><label for="bastoni_incantesimi">Bastoni</label></td>
                    <td> <input class="exportable" type="number" id="bastoni_incantesimi" name="bastoni_incantesimi" value="${pg['bastoni_incantesimi']||16}" min="4" max="16"></td>
                    <td style="font-size: small;">(bastoni, incantesimi)</td>
                </tr>
            </table>
            <img id="picture" src="./imgs/characters/${normalize(pg.name)}.png">
           
        </div>
    </div>
    <div id="inventario" class="tabcontent">
        <table>
            <tr>
                <th style="width: 100px;">Arma</th>
                <th style="font-size: x-small;">Attacco</th>
                <th style="font-size: x-small;">Danno</th>
                <th>Extra</th>
            </tr>`
    for (var i = 1; i <= 3; i++) {
        html += `
            <tr>
                <td><input class="exportable arma" type="text" id="arma_${i}" value="${pg['arma_'+i]||''}"></td>
                <td><input class="exportable" type="number" id="atk_arma_${i}" value="${pg['atk_arma_'+i]||0}" min="-3" max="3"></td>
                <td><input class="exportable" type="number" id="danno_arma_${i}" value="${pg['danno_arma_'+i]||0}" min="-3" max="3"></td>
                <td><input class="exportable extra" type="text" id="extra_arma_${i}" value="${pg['extra_arma_'+i]||''}"></td>
            </tr>`
    }
    html += `</table><br>
        <table>
            <tr>
                <th style="width: 100px;">Armatura</th>
                <th>CA</th>
                <th style="font-size: x-small;">Bonus</th>
                <th>Extra</th>
            </tr>`
    for (var i = 1; i <= 2; i++) {
        html += `
            <tr>
                <td><input class="exportable" type="text" id="armatura_${i}" value="${pg['armatura_'+i]||''}"></td>
                <td><input class="exportable" type="number" id="difesa_armatura_${i}" value="${pg['difesa_armatura_'+i]||10}" min="4" max="25" ></td>
                <td><input class="exportable" type="number" id="bonus_armatura_${i}" value="${pg['bonus_armatura_'+i]||0}" min="-3" max="3"></td>
                <td><input class="exportable extra" type="text" id="extra_armatura_${i}" value="${pg['extra_armatura_'+i]||''}"></td>
            </tr>`
    }
    html += `
        </table><br>
        <label for="monete_rame">Rame</label>
        <input class="exportable" style="width: 60px" type="number" id="monete_rame" name="monete_rame" value="${pg['monete_rame']||0}" min="0">
        <label for="monete_argento">Argento</label>
        <input class="exportable" style="width: 60px" type="number" id="monete_argento" name="monete_argento" value="${pg['monete_argento']||0}" min="0">
        <label for="monete_oro">Oro</label>
        <input class="exportable" style="width: 60px" type="number" id="monete_oro" name="monete_oro" value="${pg['monete_oro']||0}" min="0"><br>
        <label for="equipaggiamento">Equipaggiamento</label><br>
        <textarea id="equipaggiamento" class="exportable" style="width: 90%" rows="8">${pg.equipaggiamento||''}</textarea>
    </div>
    <div id="background" class="tabcontent">
        <textarea id="background_text" class="exportable" style="width: 90%;" rows="25">${pg['background_text']||''}</textarea>
    </div>
    <div id="note" class="tabcontent">
        <textarea id="note_text" class="exportable" style="width: 90%;" rows="25">${pg['note_text']||''}</textarea>
    </div>
</div>
`
    return html;
}

const saves = (_class, level) => {
    let s;
    if (_class === 'chierico') {
        s = {
            4: [11, 12, 14, 16, 15],
            8: [9, 10, 12, 14, 13],
            12: [7, 8, 10, 12, 11],
            16: [6, 7, 8, 10, 9]
        }
    } else if (_class === 'nano') {
        s = {
            3: [8, 9, 10, 13, 12],
            6: [6, 7, 8, 10, 9],
            9: [4, 5, 6, 7, 6],
            12: [2, 3, 4, 4, 3]
        }
    } else if (_class === 'halfling') {
        s = {
            3: [8, 9, 10, 13, 12],
            6: [5, 6, 7, 9, 8],
            8: [2, 3, 4, 5, 4]
        }
    } else if (_class === 'elfo') {
        s = {
            3: [12, 13, 13, 15, 15],
            6: [8, 101, 10, 11, 11],
            9: [4, 7, 7, 7, 7],
            10: [2, 4, 4, 3, 3]
        }
    } else if (_class === 'guerriero' || _class === 'paladino') {
        s = {
            3: [12, 13, 14, 15, 16],
            6: [10, 11, 12, 13, 14],
            9: [8, 9, 10, 11, 12],
            12: [6, 7, 8, 9, 10]
        }
    } else if (_class === 'mago') {
        s = {
            5: [13, 14, 13, 16, 15],
            10: [11, 12, 11, 14, 12],
            15: [9, 10, 9, 12, 9]
        }
    } else if (_class === 'ladro') {
        s = {
            4: [13, 14, 13, 16, 15],
            8: [11, 12, 11, 14, 13],
            12: [9, 10, 9, 12, 11],
            16: [7, 8, 7, 10, 9]
        }
    }
    for (var [key, value] of Object.entries(s)) {
      if (level <= parseInt(key)) return value;
    }
    return value;
}

const mod = value => {
    if (value <= 3) return -3;
    else if (value <= 5) return -2;
    else if (value <= 8) return -1;
    else if (value >= 18) return 3;
    else if (value >= 16) return 2;
    else if (value >= 13) return 1;
    return 0;
}

const updateMod = car => {
    document.getElementById(`mod_${car.id}`).value = mod(car.value);
}

const updateDadiVita = (classe, livello) => {
    const dv = document.getElementById('dadi_vita');
    let dvc = 4;
    if (['guerriero', 'paladino', 'nano'].includes(classe)) dvc = 8;
    else if (['chierico', 'elfo', 'halfling'].includes(classe)) dvc = 6;
    dv.value = `(${livello}d${dvc})`;
}

const updateEXpToLevelUp = (classe, livello, bonus = 0) => {
    document.getElementById('levelup_esperienza').value = livello * 1000;
}

const updateMelee = () => {
    let v = document.getElementById(`mod_forza`).value;
    document.getElementById(`atk_mischia`).value = v;
}

const updateDistance = () => {
    let v = document.getElementById(`mod_destrezza`).value;
    document.getElementById(`atk_distanza`).value = v;
}

const updateDmg = classe => {
    let v = document.getElementById(`mod_forza`).value;
    document.getElementById(`danno`).value = ['guerriero', 'paladino'].includes(classe) ? v : Math.min(0, v);
}

const updateSaves = (classe, livello, saggezza) => {
    let _saves = saves(classe, livello);
    document.getElementById('morte_veleno').value = _saves[0];
    document.getElementById('bacchette_metamorfosi_paralisi').value = _saves[1];
    document.getElementById('pietrificazione').value = _saves[2];
    document.getElementById('soffio').value = _saves[3];
    document.getElementById('bastoni_incantesimi').value = _saves[4] - mod(saggezza);
}

const pgListeners = pg => {
    const classe = document.getElementById('classe');
    const livello = document.getElementById('livello');
    const saggezza = document.getElementById('saggezza');

    classe.addEventListener('change', e => updateDadiVita(e.target.value, livello.value));
    livello.addEventListener('input', e => updateDadiVita(classe.value, e.target.value));
    classe.addEventListener('change', e => updateEXpToLevelUp(e.target.value, livello.value));
    livello.addEventListener('input', e => updateEXpToLevelUp(classe.value, e.target.value));
    classe.addEventListener('change', e => updateDmg(e.target.value));
    

    let cars = document.getElementsByClassName('caratteristica');
    for (var i = 0; i < cars.length; i++) {
        cars[i].addEventListener('change', e => updateEXpToLevelUp(classe.value, livello.value));
        cars[i].addEventListener('change', e => updateEXpToLevelUp(classe.value, livello.value));
        cars[i].addEventListener('change', e => updateMod(e.target));
        updateMod(cars[i]);
        if (cars[i].id === 'forza') {
            cars[i].addEventListener('change', e => updateMelee());
            cars[i].addEventListener('change', e => updateDmg(classe.value));
        } else if (cars[i].id === 'destrezza') {
            cars[i].addEventListener('change', e => updateDistance());
        } else if (cars[i].id === 'saggezza') {
            cars[i].addEventListener('input', e => updateSaves(classe.value, livello.value, e.target.value));
            classe.addEventListener('change', e => updateSaves(e.target.value, livello.value, saggezza.value));
            livello.addEventListener('input', e => updateSaves(classe.value, e.target.value, saggezza.value));
        }
    }

    updateDadiVita(pg.classe, pg.livello);
    updateEXpToLevelUp(pg.classe, pg.livello);
    updateDmg(pg.classe);
}