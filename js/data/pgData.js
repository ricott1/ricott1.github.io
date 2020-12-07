var pngData = [];
var pgData = [
  {
    name: 'Solomon Fleming',
    classe: 'guerriero',
    livello: '1',
    esperienza: '36',
    allineamento: 'caotico',
    atk_mischia: '0',
    danno: '1',
    atk_distanza: '0',
    ca: '17',
    punti_vita: '2',
    punti_vita_massimi: '2',
    forza: '14',
    tratti_forza: 'Veterano',
    extra_forza: 'Sopravvissuto alla grande guerra.',
    intelligenza: '9',
    tratti_intelligenza: 'Dislessico',
    extra_intelligenza: 'Ho problemi a leggere.',
    saggezza: '10',
    tratti_saggezza: 'Cinico',
    extra_saggezza: 'Sarei nichilista se sapessi che vuol dire.',
    costituzione: '7',
    tratti_costituzione: 'Ho sofferto di lebbra',
    extra_costituzione: 'Durante la guerra mi son beccato la lebbra.',
    destrezza: '11',
    tratti_destrezza: 'Normalmente prestante',
    extra_destrezza: '',
    carisma: '4',
    tratti_carisma: 'Svitato e sfigurato',
    extra_carisma: "La lebbra mi ha sfregiato la faccia e causato un'infiammazione al cervello che mi ha cambiato il carattere.",
    morte_veleno: '12',
    bacchette_metamorfosi_paralisi: '13',
    pietrificazione: '14',
    soffio: '15',
    bastoni_incantesimi: '16',
    arma_1: 'Spada',
    atk_arma_1: '1',
    danno_arma_1: '0',
    extra_arma_1: 'danno 1d6',
    arma_2: '',
    atk_arma_2: '0',
    danno_arma_2: '0',
    extra_arma_2: '',
    arma_3: '',
    atk_arma_3: '0',
    danno_arma_3: '0',
    extra_arma_3: '',
    armatura_1: 'Armatura Completa e Scudo',
    difesa_armatura_1: '17',
    bonus_armatura_1: '0',
    extra_armatura_1: '',
    armatura_2: '',
    difesa_armatura_2: '0',
    bonus_armatura_2: '0',
    extra_armatura_2: '',
    monete_rame: '0',
    monete_argento: '3',
    monete_oro: '4',
    equipaggiamento: 'Spada\n' +
      'Scudo\n' +
      'Armatura Completa\n' +
      'Elmetto\n' +
      'Razioni da dungeon per 1 settimana per 1 persona\n' +
      'Zaino in cuoio\n' +
      '1 Torcia\n' +
      '1 spada corta\n' +
      '\n',
    background_text: "La guerra l'ho combattuta a sud-ovest. Durante la guerra ho preso la lebbra, la quale mi ha sfregiato e infiammato il cervello, motivo per il quale sono un po' svitato.",
    note_text: ''
  },
  {
    name: 'Amras Lossëhelin',
    classe: 'elfo',
    livello: '1',
    esperienza: '36',
    allineamento: 'legale',
    atk_mischia: '0',
    danno: '-2',
    atk_distanza: '0',
    ca: '12',
    punti_vita: '3',
    punti_vita_massimi: '3',
    forza: '5',
    tratti_forza: 'gracilino',
    extra_forza: 'Mangia solo bacche, a volte marce',
    intelligenza: '14',
    tratti_intelligenza: 'tassonomista',
    extra_intelligenza: 'Elfico, comune e Orchesco',
    saggezza: '8',
    tratti_saggezza: 'Ingenuo e boccalone',
    extra_saggezza: '',
    costituzione: '10',
    tratti_costituzione: 'vegano dalla nascita',
    extra_costituzione: '',
    destrezza: '11',
    tratti_destrezza: 'Arrampicatore di alberi',
    extra_destrezza: '',
    carisma: '10',
    tratti_carisma: 'Empatico ma schivo',
    extra_carisma: '',
    morte_veleno: '12',
    bacchette_metamorfosi_paralisi: '13',
    pietrificazione: '13',
    soffio: '15',
    bastoni_incantesimi: '16',
    arma_1: 'arco lungo',
    atk_arma_1: '0',
    danno_arma_1: '0',
    extra_arma_1: '',
    arma_2: '',
    atk_arma_2: '0',
    danno_arma_2: '0',
    extra_arma_2: '',
    arma_3: '',
    atk_arma_3: '0',
    danno_arma_3: '0',
    extra_arma_3: '',
    armatura_1: 'Radici intrecciate',
    difesa_armatura_1: '7',
    bonus_armatura_1: '0',
    extra_armatura_1: '',
    armatura_2: '',
    difesa_armatura_2: '10',
    bonus_armatura_2: '0',
    extra_armatura_2: '',
    monete_rame: '0',
    monete_argento: '5',
    monete_oro: '3',
    equipaggiamento: 'Mulo(Morlon)\n' +
      'sacche per mulo \n' +
      'faretra\n' +
      '1 fiasca olio\n' +
      '1pozione curaferite\n' +
      '20+17 frecce\n' +
      'armatura per mulo (CA=7)\n' +
      'razioni per una settimaa (solo bacche) \n' +
      'Copiati simboli sul libro',
    background_text: 'provenienza: un bosco lontano\n' +
      '\n' +
      'descrizione: mangia bacche dalla nascita e nutre profondo rispetto verso ogni forma di vita non ostile.Non porta un armatura di cuoio ma una di radici intrecciate molto resistenti, con caratteristiche simili a quella di cuoio. Ha abbandonato il suo villaggio perché a causa di una malattia detta xyellus che ha attaccato le piante da frutto di cui si cibavano, il consiglio degli anziani ha deciso di catturare dei tacchini selvaggi per cibarsi delle loro uova.Ha comprato un mulo al mercato solo perché lo ha visto sofferente e gli ha fatto pena, lo tiene senza briglie e non gli fa portare pesi eccessivi',
    note_text: 'Magie sul libro: Sleep, Charm Person\n\nMemorizzato: Sleep\n\n'
  },
  {
    name: 'Durance Talbaas',
    classe: 'chierico',
    livello: '1',
    esperienza: '36',
    allineamento: 'legale',
    atk_mischia: '0',
    danno: '-1',
    atk_distanza: '0',
    ca: '12',
    punti_vita: '2',
    punti_vita_massimi: '2',
    forza: '6',
    tratti_forza: 'senza massa muscolare',
    extra_forza: 'peso trasportabile ridotto',
    intelligenza: '6',
    tratti_intelligenza: 'analfabeta',
    extra_intelligenza: '',
    saggezza: '13',
    tratti_saggezza: 'empatico',
    extra_saggezza: 'capisce cosa pensano veramente le persone',
    costituzione: '11',
    tratti_costituzione: 'sopravvissuto al colera',
    extra_costituzione: 'può mangiare le cozze crude',
    destrezza: '7',
    tratti_destrezza: 'alcolizzato',
    extra_destrezza: 'gli tremano le mani per il delirium tremens',
    carisma: '10',
    tratti_carisma: 'predicatore',
    extra_carisma: 'stranamente la gente tende ad ascoltarlo quando parla',
    morte_veleno: '11',
    bacchette_metamorfosi_paralisi: '12',
    pietrificazione: '14',
    soffio: '16',
    bastoni_incantesimi: '16',
    arma_1: 'Mazza',
    atk_arma_1: '-1',
    danno_arma_1: '0',
    extra_arma_1: '1d6',
    arma_2: 'Fionda',
    atk_arma_2: '-1',
    danno_arma_2: '0',
    extra_arma_2: '1d4',
    arma_3: '',
    atk_arma_3: '0',
    danno_arma_3: '0',
    extra_arma_3: '',
    armatura_1: 'cuoio',
    difesa_armatura_1: '13',
    bonus_armatura_1: '-1',
    extra_armatura_1: '',
    armatura_2: '',
    difesa_armatura_2: '4',
    bonus_armatura_2: '0',
    extra_armatura_2: '',
    monete_rame: '0',
    monete_argento: '9',
    monete_oro: '10',
    equipaggiamento: 'mulo 30\n' +
      'otre 1\n' +
      'vino x4 4\n' +
      'zaino 5\n' +
      'razioni (1 sett) 5\n' +
      'bastone da viaggio (2m) 1\n' +
      'stivali 1 \n' +
      'mantello 1\n' +
      'vestiti semplici 0.5\n' +
      'simbolo sacro 25\n' +
      'fionda 2\n' +
      'proiettili (60) 2\n' +
      'scudo 10\n' +
      'armatura di cuoio 20\n' +
      'mazza 5\n' +
      'pozione di cura ferite',
    background_text: 'Predicatore di Heironeus: Durance era un prete di campagna di un piccolo villaggio. Alcune voci di presunte molestie nei confronti delle fedeli lo hanno costretto a lasciare la relativa tranquillità del paesino e cercare fortuna vagabondando per il mondo. Gli anni e il vino pesano sulle sue spalle ma le sue parole sono ancora in grado di convincere le persone a finanziare il suo alcolismo. Ultimamente si è convinto che la protezione di Heironeus gli permetta di guadagnarsi da vivere come avventuriero. \n' +
      '\n' +
      'Al momento vive ad Amorgoi, in una marca di confine del regno di Tauros\n' +
      '\n' +
      'Ha un mulo di nome Magran.',
    note_text: 'Oste Camillo Manomonca\n' +
      'Il bullo - Kurt Balazar\n' +
      'Il postino - Ireneus Script\n' +
      'Il marchese - Georg Corona\n'
  }
]