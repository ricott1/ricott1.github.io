const appuntiTemplate = notes => {
    if (notes.length === 0) {
        return `
        <div class="tab">
            <button class="tablinks active" onclick="changeTab(event, 'generale'">Generale</button>
            <button id="saveBtn" onclick="saveData('notes')">Salva</button>
            <button id="saveBtn" onclick="saveData('notes')">Salva</button>
        </div>

        <div id="main_top">
            <h3 class="exportable" id="name">Generale</h3>
        </div>
        <div id="main_center">
            <div id="generale" class="tabcontent" style="display: block">
            <div id="display" style = "width: 90%"></div>
            <textarea class="exportable" id="appunti" style = "width: 90%"
rows = "30"></textarea>
        </div>`
    }

    let html = '<div class="tab">'
    for (var i = 0; i < notes.length; i++) {
        let n = notes[i];
        html += `<button class="tablinks active" onclick="changeTab(event, '${normalize(n.name)}')">${n.name}</button>`
    };
    html += `
        <button id="saveBtn" onclick="saveData('notes')">Salva</button>
    </div>

    <div id="main_top">
        <h3 class="exportable" id="name">Generale</h3>
    </div>
    <div id="main_center">
`;
    for (var i = 0; i < notes.length; i++) {
        let n = notes[i];
        if (i == 0) {
            html += `<div id="${normalize(n.name)}" class="tabcontent" style="display: block">
        <div id="display" style = "width: 90%">${n.appunti}</div>
        <textarea class="exportable" id="appunti" style="width: 90%" rows="30">${n.appunti}</textarea>`
        } else {
            html += `<div id="${normalize(n.name)}" class="tabcontent">
        <div id="display" style = "width: 90%">${n.appunti}</div>
        <textarea class="exportable" id="appunti" style="width: 90%" rows="30">${n.appunti}</textarea>`
        }
    }
    html += '</div>';

    return html;
}

const newNotesTemplate = () => {
    `<div id="main_top">
        <input class="exportable" id="name">Nuovo Capitolo</input>
    </div>
    <div id="main_center">
        <div id="nuovo-capitolo" class="tabcontent" style="display: block">
        <div id="display" style = "width: 90%"></div>
        <textarea class="exportable" id="appunti" style = "width: 90%"
rows = "30"></textarea>
    </div>`
}