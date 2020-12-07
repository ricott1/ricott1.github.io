const main_pg_template = `
<div class="tab">     
    <button class="tablinks active" onclick="changeTab(event, 'pg_info')">Caratteristiche</button>
    <button class="tablinks" onclick="changeTab(event, 'inventario')">Inventario</button>
    <button class="tablinks" onclick="changeTab(event, 'background')">Background</button>
    <button class="tablinks" onclick="changeTab(event, 'note')">Appunti</button>
    <button id="saveBtn" onclick="saveCharacter()">Salva</button>
</div>

<div id="main_top">
    <label for="name">Nome</label>
    <input class="exportable" type="text" id="name" name="name">
    
    <label for="class">Classe</label>
    <select class="exportable" name="classe" id="classe">
        <option value="guerriero">Guerriero</option>
        <option value="mago">Mago</option>
        <option value="chierico">Chierico</option>
        <option value="ladro">Ladro</option>
        <option value="paladino">Paladino</option>
        <option value="elfo">Elfo</option>
        <option value="nano">Nano</option>
        <option value="halfling">Halfling</option>
    </select>
    <label for="livello">Livello</label>
    <input class="exportable" type="number" id="livello" name="livello" value="1" min="1" max="20">
    <label for="esperienza">Exp</label>
    <input class="exportable" type="number" id="esperienza" name="esperienza" value="0" min="0" style="width: 52px">/
    <input type="number" id="levelup_esperienza"  value="1000" style="width: 52px" disabled="true">
    <label for="allineamento">Allineamento</label>
    <select class="exportable" name="allineamento" id="allineamento">
        <option value="legale">Legale</option>
        <option value="neutrale">Neutrale</option>
        <option value="caotico">Caotico</option>
    </select><br>
    <label for="atk">Attacco</label>
    <input class="exportable" type="number" id="atk" name="atk" value="0" min="-3" max="5">
    <label for="danno">Danno</label>
    <input class="exportable" type="text" id="danno" name="danno" style="width: 52px;">
    <label for="ca">CA</label>
    <input class="exportable" type="number" id="ca" name="ca" value="10" min="5" max="25">
    <label for="punti_vita">Punti Vita</label>
    <input class="exportable" type="number" id="punti_vita" name="punti_vita" value="1" min="1" max="120">/
    <input class="exportable" type="number" id="punti_vita_massimi" value="1" min="1" max="120">
    <input style="width: 36px" type="text" id="dadi_vita" name="dadi_vita" disabled="true">
</div>
<div id="main_center">
    <div id="pg_info" class="tabcontent" style="display: block">
        <table>
            <tr>
                <th style="width: 100px;" colspan="2">Caratteristica</th>
                <th>Mod</th>
                <th>Tratti</th>
                <th>Extra</th>
                <th></th>
            </tr>
            <tr>
                <td><label for="forza" style="width: 40px">Forza</label></td>
                <td><input class="exportable caratteristica" type="number" id="forza" name="forza" value="10" min="3" max="18" onkeydown="return false"></td>
                <td><input type="number" id="mod_forza" value="0" min="-3" max="3" disabled="true"></td>
                <td><input class="exportable" type="text" id="tratti_forza" name="tratti_forza" value=""></td>
                <td><input class="exportable extra" type="text" id="extra_forza" name="extra_forza" value=""></td>
            </tr>
            <tr>
                <td><label for="intelligenza" style="width: 40px">Intelligenza</label></td>
                <td><input class="exportable caratteristica" type="number" id="intelligenza" name="intelligenza" value="10" min="3" max="18" onkeydown="return false"></td>
                <td><input type="number" id="mod_intelligenza" value="0" min="-3" max="3" disabled="true"></td>
                <td><input class="exportable" type="text" id="tratti_intelligenza" name="tratti_intelligenza" value=""></td>
                <td><input class="exportable extra" type="text" id="extra_intelligenza" name="extra_intelligenza" value=""></td>
            </tr>
            <tr>
                <td><label for="saggezza" style="width: 40px">Saggezza</label></td>
                <td><input class="exportable caratteristica" type="number" id="saggezza" name="saggezza" value="10" min="3" max="18" onkeydown="return false"></td>
                <td><input type="number" id="mod_saggezza" value="0" min="-3" max="3" disabled="true"></td>
                <td><input class="exportable" type="text" id="tratti_saggezza" name="tratti_saggezza" value=""></td>
                <td><input class="exportable extra" type="text" id="extra_saggezza" name="extra_saggezza" value=""></td>
            </tr>
            <tr>
                <td><label for="costituzione" style="width: 40px">Costituzione</label></td>
                <td><input class="exportable caratteristica" type="number" id="costituzione" name="costituzione" value="10" min="3" max="18" onkeydown="return false"></td>
                <td><input type="number" id="mod_costituzione" value="0" min="-3" max="3" disabled="true"></td>
                <td><input class="exportable" type="text" id="tratti_costituzione" name="tratti_costituzione" value=""></td>
                <td><input class="exportable extra" type="text" id="extra_costituzione" name="extra_costituzione" value=""></td>
            </tr>
            <tr>
                <td><label for="destrezza" style="width: 40px">Destrezza</label></td>
                <td><input class="exportable caratteristica" type="number" id="destrezza" name="destrezza" value="10" min="3" max="18" onkeydown="return false"></td>
                <td><input type="number" id="mod_destrezza" value="0" min="-3" max="3" disabled="true"></td>
                <td><input class="exportable" type="text" id="tratti_destrezza" name="tratti_destrezza" value=""></td>
                <td><input class="exportable extra" type="text" id="extra_destrezza" name="extra_destrezza" value=""></td>
            </tr>
            <tr>
                <td><label for="carisma" style="width: 40px">Carisma</label></td>
                <td><input class="exportable caratteristica" type="number" id="carisma" name="carisma" value="10" min="3" max="18" onkeydown="return false"></td>
                <td><input type="number" id="mod_carisma" value="0" min="-3" max="3" disabled="true"></td>
                <td><input class="exportable" type="text" id="tratti_carisma" name="tratti_carisma" value=""></td>
                <td><input class="exportable extra" type="text" id="extra_carisma" name="extra_carisma" value=""></td>
            </tr>
        </table>
        <br>
        <table>
            <tr>
                <th columnspan="3">Tiri Salvezza</th>
            </tr>
            <tr>
                <td><label for="morte_veleno" style="width: 25%">Morte</label></td>
                <td><input class="exportable" type="number" id="morte_veleno" name="morte_veleno" value="16" min="4" max="16"></td>
                <td style="font-size: small;">(morte, veleno)</td>
            </tr>
            <tr>
                <td><label for="bacchette_metamorfosi_paralisi">Bacchette</label></td>
                <td><input class="exportable" type="number" id="bacchette_metamorfosi_paralisi" name="bacchette_metamorfosi_paralisi" value="16" min="4" max="16"></td>
                <td style="font-size: small;">(bacchette, metamorfosi, paralisi)</td>
            </tr>
            <tr>
                <td> <label for="pietrificazione">Pietrificazione</label></td>
                <td> <input class="exportable" type="number" id="pietrificazione" name="pietrificazione" value="16" min="4" max="16"></td>
                <td style="font-size: small;">(pietrificazione)</td>
            </tr>
            <tr>
                <td><label for="soffio">Soffio</label></td>
                <td><input class="exportable" type="number" id="soffio" name="soffio" value="16" min="4" max="16"></td>
                <td style="font-size: small;">(soffio)</td>
            </tr>
            <tr>
                <td><label for="bastoni_incantesimi">Bastoni</label></td>
                <td> <input class="exportable" type="number" id="bastoni_incantesimi" name="bastoni_incantesimi" value="16" min="4" max="16"></td>
                <td style="font-size: small;">(bastoni, incantesimi)</td>
            </tr>
        </table>
    </div>
    <div id="inventario" class="tabcontent">
        <table>
            <tr>
                <th style="width: 100px;">Arma</th>
                <th style="font-size: x-small;">Attacco</th>
                <th style="font-size: x-small;">Danno</th>
                <th>Extra</th>
            </tr>
            <tr>
                <td><input class="exportable arma" type="text" id="arma_1" name="arma_1" value=""></td>
                <td><input class="exportable" type="number" id="atk_arma_1" name="atk_arma_1" value="0" min="-3" max="3"></td>
                <td><input class="exportable" type="number" id="danno_arma_1" name="danno_arma_1" value="0" min="-3" max="3"></td>
                <td><input class="exportable extra" type="text" id="extra_arma_1" name="extra_arma_1" value=""></td>
            </tr>
            <tr>
                <td><input class="exportable arma" type="text" id="arma_2" name="arma_2" value=""></td>
                <td><input class="exportable" type="number" id="atk_arma_2" name="atk_arma_2" value="0" min="-3" max="3"></td>
                <td><input class="exportable" type="number" id="danno_arma_2" name="danno_arma_2" value="0" min="-3" max="3"></td>
                <td><input class="exportable extra" type="text" id="extra_arma_2" name="extra_arma_2" value=""></td>
            </tr>
            <tr>
                <td><input class="exportable arma" type="text" id="arma_3" name="arma_3" value=""></td>
                <td><input class="exportable" type="number" id="atk_arma_3" name="atk_arma_3" value="0" min="-3" max="3"></td>
                <td><input class="exportable" type="number" id="danno_arma_3" name="danno_arma_3" value="0" min="-3" max="3"></td>
                <td><input class="exportable extra" type="text" id="extra_arma_3" name="extra_arma_3" value=""></td>
            </tr>
        </table><br>
        <table>
            <tr>
                <th style="width: 100px;">Armatura</th>
                <th>CA</th>
                <th style="font-size: x-small;">Bonus</th>
                <th>Extra</th>
            </tr>
            <tr>
                <td><input class="exportable" type="text" id="armatura_1" name="armatura_1" value=""></td>
                <td><input class="exportable" type="number" id="difesa_armatura_1" name="difesa_armatura_1" value="10" min="4" max="25" onkeydown="return false"></td>
                <td><input class="exportable" type="number" id="bonus_armatura_1" name="bonus_armatura_1" value="0" min="-3" max="3" onkeydown="return false"></td>
                <td><input class="exportable extra" type="text" id="extra_armatura_1" name="extra_armatura_1" value=""></td>
            </tr>
            <tr>
                <td><input class="exportable" type="text" id="armatura_2" name="armatura_2" value=""></td>
                <td><input class="exportable" type="number" id="difesa_armatura_2" name="difesa_armatura_2" value="10" min="4" max="25" onkeydown="return false"></td>
                <td><input class="exportable" type="number" id="bonus_armatura_2" name="bonus_armatura_2" value="0" min="-3" max="3" onkeydown="return false"></td>
                <td><input class="exportable extra" type="text" id="extra_armatura_2" name="extra_armatura_2" value=""></td>
            </tr>
        </table><br>
        <label for="monete_rame">Rame</label>
        <input class="exportable" style="width: 60px" type="number" id="monete_rame" name="monete_rame" value="0" min="0">
        <label for="monete_argento">Argento</label>
        <input class="exportable" style="width: 60px" type="number" id="monete_argento" name="monete_argento" value="0" min="0">
        <label for="monete_oro">Oro</label>
        <input class="exportable" style="width: 60px" type="number" id="monete_oro" name="monete_oro" value="0" min="0"><br>
        <label for="equipaggiamento">Equipaggiamento</label><br>
        <textarea id="equipaggiamento" class="exportable" style="width: 100%" rows="8"></textarea>
    </div>
    <div id="background" class="tabcontent">
        <textarea id="background_text" class="exportable" style="width: 100%;" rows="25"></textarea>
    </div>
    <div id="note" class="tabcontent">
        <textarea id="note_text" class="exportable" style="width: 100%;" rows="25"></textarea>
    </div>
</div>
<div class="sidepic">
    <img src="./imgs/characters/andrea.png" id='picture'>
</div>

<script type="text/javascript">
    const classe = document.getElementById('classe');
    const livello = document.getElementById('livello');
    const dv = document.getElementById('dadi_vita');

    classe.addEventListener('change', updateDadiVita);
    classe.addEventListener('change', changePicture);
    livello.addEventListener('input', updateDadiVita);

    updateDadiVita(null);

    let cars = document.getElementsByClassName('caratteristica');

    for (var i = 0; i < cars.length; i++) {
        cars[i].addEventListener('change', e => updateMod(e.target));
    }
</script>
`