const languages = [
  {
    id: 'italian',
    name: 'Italian',
    country: 'Italy',
    flagClass: 'flag-italy',
    frontLabel: 'Italian',
    directionForward: 'Italian -> English',
    directionReverse: 'English -> Italian',
    revealForward: 'Tap to return to Italian.',
    revealReverse: 'Tap to reveal the Italian.',
    decks: [
      {
        id: 'survival',
        name: 'Survival Phrases',
        cards: [
          { front: 'ciao', back: 'hello / goodbye', note: 'CHOW. Informal greeting.' },
          { front: 'buongiorno', back: 'good morning / good day', note: 'bwon-JOR-noh' },
          { front: 'buonasera', back: 'good evening', note: 'bwon-ah-SEH-rah' },
          { front: 'come stai?', back: 'how are you?', note: 'KOH-meh stai. Informal.' },
          { front: 'sto bene, grazie', back: "I'm well, thanks", note: 'stoh BEH-neh GRAHT-tsyeh' },
          { front: 'va bene', back: 'all right / okay', note: 'vah BEH-neh' },
          { front: 'perfetto', back: 'perfect', note: 'pehr-FEHT-toh' },
          { front: 'andiamo', back: "let's go", note: 'ahn-DYAH-moh' },
          { front: 'piano piano', back: 'little by little / slowly', note: 'PYAH-noh PYAH-noh' },
          { front: 'capito', back: 'understood / got it', note: 'kah-PEE-toh' },
          { front: 'per favore', back: 'please', note: 'pehr fah-VOH-reh' },
          { front: 'grazie', back: 'thank you', note: 'GRAHT-tsyeh' },
          { front: 'grazie mille', back: 'thanks a lot', note: 'GRAHT-tsyeh MEEL-leh' },
          { front: 'prego', back: "you're welcome / go ahead", note: 'PREH-goh' },
          { front: 'scusi', back: 'excuse me', note: 'SKOO-zee. Formal or polite.' },
          { front: 'mi scusi', back: 'excuse me / sorry', note: 'mee SKOO-zee. More complete polite form.' },
          { front: 'mi dispiace', back: "I'm sorry", note: 'mee dees-PYAH-cheh' },
          { front: 'non capisco', back: "I don't understand", note: 'nohn kah-PEES-koh' },
          { front: 'parla inglese?', back: 'do you speak English?', note: 'PAR-lah een-GLEH-zeh' },
          { front: 'quanto costa?', back: 'how much does it cost?', note: 'KWAHN-toh KOH-stah' },
          { front: "dov'è il bagno?", back: 'where is the bathroom?', note: 'doh-VEH eel BAHN-yoh' },
          { front: 'ho bisogno di aiuto', back: 'I need help', note: 'oh bee-ZOH-nyoh dee eye-YOO-toh' },
          { front: 'può ripetere?', back: 'can you repeat?', note: 'pwoh ree-PEH-teh-reh' },
          { front: 'più lentamente, per favore', back: 'more slowly, please', note: 'pyoo lehn-tah-MEN-teh' }
        ]
      },
      {
        id: 'food',
        name: 'Food and Cafe',
        cards: [
          { front: 'un caffè', back: 'an espresso / coffee', note: 'oon kahf-FEH' },
          { front: 'un cappuccino', back: 'a cappuccino', note: 'oon kahp-poo-CHEE-noh' },
          { front: 'acqua naturale', back: 'still water', note: 'AHK-kwah nah-too-RAH-leh' },
          { front: 'acqua frizzante', back: 'sparkling water', note: 'AHK-kwah freet-TSAHN-teh' },
          { front: 'il conto', back: 'the check / bill', note: 'eel KOHN-toh' },
          { front: 'vorrei...', back: 'I would like...', note: 'vohr-RAY' },
          { front: 'senza', back: 'without', note: 'SEHN-tsah' },
          { front: 'con', back: 'with', note: 'kohn' },
          { front: 'pane', back: 'bread', note: 'PAH-neh' },
          { front: 'vino', back: 'wine', note: 'VEE-noh' },
          { front: 'gelato', back: 'ice cream / gelato', note: 'jeh-LAH-toh' },
          { front: 'delizioso', back: 'delicious', note: 'deh-lee-TSYOH-zoh' },
          { front: 'possiamo ordinare?', back: 'can we order?', note: 'POHS-syah-moh or-dee-NAH-reh' },
          { front: 'sono vegetariano', back: 'I am vegetarian', note: 'SOH-noh veh-jeh-tah-RYAH-noh' },
          { front: 'da portare via', back: 'to go / takeaway', note: 'dah por-TAH-reh VEE-ah' }
        ]
      },
      {
        id: 'movement',
        name: 'Getting Around',
        cards: [
          { front: 'dove siamo?', back: 'where are we?', note: 'DOH-veh SYAH-moh' },
          { front: 'a sinistra', back: 'to the left', note: 'ah see-NEES-trah' },
          { front: 'a destra', back: 'to the right', note: 'ah DEHS-trah' },
          { front: 'sempre dritto', back: 'straight ahead', note: 'SEHM-preh DREET-toh' },
          { front: 'quanto tempo ci vuole?', back: 'how long does it take?', note: 'KWAHN-toh TEHM-poh chee VWOH-leh' },
          { front: 'vorrei andare a...', back: 'I would like to go to...', note: 'vohr-RAY ahn-DAH-reh ah' },
          { front: "dov'è la stazione?", back: 'where is the station?', note: 'doh-VEH lah stahts-YOH-neh' },
          { front: 'un biglietto, per favore', back: 'one ticket, please', note: 'oon beel-YEHT-toh' },
          { front: 'mi sono perso', back: 'I am lost', note: 'mee SOH-noh PEHR-soh' },
          { front: 'è vicino?', back: 'is it nearby?', note: 'eh vee-CHEE-noh' }
        ]
      },
      {
        id: 'verbs',
        name: 'Core Verbs',
        cards: [
          { front: 'essere', back: 'to be', note: 'EHS-seh-reh' },
          { front: 'avere', back: 'to have', note: 'ah-VEH-reh' },
          { front: 'andare', back: 'to go', note: 'ahn-DAH-reh' },
          { front: 'fare', back: 'to do / to make', note: 'FAH-reh' },
          { front: 'volere', back: 'to want', note: 'voh-LEH-reh' },
          { front: 'potere', back: 'to be able to / can', note: 'poh-TEH-reh' },
          { front: 'sapere', back: 'to know', note: 'sah-PEH-reh' },
          { front: 'dire', back: 'to say / tell', note: 'DEE-reh' },
          { front: 'vedere', back: 'to see', note: 'veh-DEH-reh' },
          { front: 'mangiare', back: 'to eat', note: 'mahn-JAH-reh' },
          { front: 'bere', back: 'to drink', note: 'BEH-reh' },
          { front: 'pagare', back: 'to pay', note: 'pah-GAH-reh' }
        ]
      },
      {
        id: 'conversation',
        name: 'Conversation Phrases',
        cards: [
          { front: 'riprendiamo il filo', back: "let's pick up the thread again", note: 'ree-prehn-DYAH-moh eel FEE-loh' },
          { front: "posso dare un'occhiata", back: 'I can take a look', note: 'POHS-soh DAH-reh oon ohk-KYAH-tah' },
          { front: 'ora è più chiaro', back: "now it's clearer", note: 'OH-rah eh pyoo KYAH-roh' },
          { front: 'non è automatico', back: "it isn't automatic", note: 'nohn eh ow-toh-MAH-tee-koh' },
          { front: 'meglio leggero che pesante', back: 'better light than heavy', note: 'MEH-lyoh lehd-JEH-roh keh peh-ZAHN-teh' },
          { front: 'punto di riferimento', back: 'point of reference', note: 'POON-toh dee ree-feh-ree-MEN-toh' },
          { front: 'è scritto nero su bianco', back: "it's written in black and white", note: 'eh SKREET-toh NEH-roh soo BYAHN-koh' },
          { front: 'eccolo qui', back: 'here it is', note: 'EHK-koh-loh kwee' },
          { front: 'tutto qui', back: "that's all", note: 'TOOT-toh kwee' },
          { front: 'facciamo ordine', back: "let's get things organized", note: 'fah-CHAH-moh OR-dee-neh' }
        ]
      }
    ]
  },
  {
    id: 'french',
    name: 'French',
    country: 'France',
    flagClass: 'flag-france',
    frontLabel: 'French',
    directionForward: 'French -> English',
    directionReverse: 'English -> French',
    revealForward: 'Tap to return to French.',
    revealReverse: 'Tap to reveal the French.',
    decks: [
      {
        id: 'survival',
        name: 'Survival Phrases',
        cards: [
          { front: 'bonjour', back: 'hello / good morning', note: 'bohn-ZHOOR' },
          { front: 'bonsoir', back: 'good evening', note: 'bohn-SWAHR' },
          { front: 'salut', back: 'hi / bye', note: 'sah-LOO. Informal.' },
          { front: 'comment ça va ?', back: 'how are you?', note: 'koh-MAHN sah vah' },
          { front: 'ça va bien, merci', back: "I'm well, thanks", note: 'sah vah byan mehr-SEE' },
          { front: "d'accord", back: 'all right / okay', note: 'dah-KOR' },
          { front: 'parfait', back: 'perfect', note: 'par-FEH' },
          { front: 'allons-y', back: "let's go", note: 'ah-lohn-ZEE' },
          { front: 'petit à petit', back: 'little by little', note: 'puh-TEE ah puh-TEE' },
          { front: 'compris', back: 'understood / got it', note: 'kohm-PREE' },
          { front: "s'il vous plaît", back: 'please', note: 'seel voo PLEH. Polite or plural.' },
          { front: 'merci', back: 'thank you', note: 'mehr-SEE' },
          { front: 'merci beaucoup', back: 'thanks a lot', note: 'mehr-SEE boh-KOO' },
          { front: 'de rien', back: "you're welcome", note: 'duh RYAN' },
          { front: 'excusez-moi', back: 'excuse me / sorry', note: 'ehk-skew-zay MWAH. Polite.' },
          { front: 'pardon', back: 'sorry / pardon me', note: 'par-DOHN' },
          { front: 'je suis désolé', back: "I'm sorry", note: 'zhuh swee day-zoh-LAY. Masculine speaker.' },
          { front: 'je ne comprends pas', back: "I don't understand", note: 'zhuh nuh kohm-PRAHN pah' },
          { front: 'parlez-vous anglais ?', back: 'do you speak English?', note: 'par-lay VOO ahn-GLEH' },
          { front: 'combien ça coûte ?', back: 'how much does it cost?', note: 'kohm-BYAN sah koot' },
          { front: 'où sont les toilettes ?', back: 'where is the bathroom?', note: 'oo sohn lay twa-LET' },
          { front: "j'ai besoin d'aide", back: 'I need help', note: 'zhay buh-ZWAN ded' },
          { front: 'vous pouvez répéter ?', back: 'can you repeat?', note: 'voo poo-vay ray-pay-TAY' },
          { front: "plus lentement, s'il vous plaît", back: 'more slowly, please', note: 'ploo lahn-tuh-MAHN' }
        ]
      },
      {
        id: 'food',
        name: 'Food and Cafe',
        cards: [
          { front: 'un café', back: 'a coffee / espresso', note: 'uhn kah-FAY' },
          { front: 'un café crème', back: 'coffee with milk', note: 'uhn kah-FAY krem' },
          { front: "de l'eau plate", back: 'still water', note: 'duh loh plaht' },
          { front: "de l'eau gazeuse", back: 'sparkling water', note: 'duh loh gah-ZUHZ' },
          { front: "l'addition", back: 'the check / bill', note: 'lah-dee-SYOHN' },
          { front: 'je voudrais...', back: 'I would like...', note: 'zhuh voo-DREH' },
          { front: 'sans', back: 'without', note: 'sahn' },
          { front: 'avec', back: 'with', note: 'ah-VEK' },
          { front: 'du pain', back: 'bread', note: 'doo PAN' },
          { front: 'du vin', back: 'wine', note: 'doo VAN' },
          { front: 'une glace', back: 'ice cream', note: 'oon glahs' },
          { front: 'délicieux', back: 'delicious', note: 'day-lee-SYUH' },
          { front: 'on peut commander ?', back: 'can we order?', note: 'ohn puh koh-mahn-DAY' },
          { front: 'je suis végétarien', back: 'I am vegetarian', note: 'zhuh swee vay-zhay-tah-RYAN' },
          { front: 'à emporter', back: 'to go / takeaway', note: 'ah ahm-por-TAY' }
        ]
      },
      {
        id: 'movement',
        name: 'Getting Around',
        cards: [
          { front: 'où sommes-nous ?', back: 'where are we?', note: 'oo sohm noo' },
          { front: 'à gauche', back: 'to the left', note: 'ah gohsh' },
          { front: 'à droite', back: 'to the right', note: 'ah drwaht' },
          { front: 'tout droit', back: 'straight ahead', note: 'too drwah' },
          { front: 'combien de temps ça prend ?', back: 'how long does it take?', note: 'kohm-BYAN duh tahn sah prahn' },
          { front: 'je voudrais aller à...', back: 'I would like to go to...', note: 'zhuh voo-DREH ah-lay ah' },
          { front: 'où est la gare ?', back: 'where is the station?', note: 'oo ay lah gahr' },
          { front: 'un billet, s’il vous plaît', back: 'one ticket, please', note: 'uhn bee-YAY' },
          { front: 'je suis perdu', back: 'I am lost', note: 'zhuh swee pehr-DOO' },
          { front: "c'est près ?", back: 'is it nearby?', note: 'say preh' }
        ]
      },
      {
        id: 'verbs',
        name: 'Core Verbs',
        cards: [
          { front: 'être', back: 'to be', note: 'EH-truh' },
          { front: 'avoir', back: 'to have', note: 'ah-VWAHR' },
          { front: 'aller', back: 'to go', note: 'ah-LAY' },
          { front: 'faire', back: 'to do / to make', note: 'fehr' },
          { front: 'vouloir', back: 'to want', note: 'voo-LWAHR' },
          { front: 'pouvoir', back: 'to be able to / can', note: 'poo-VWAHR' },
          { front: 'savoir', back: 'to know', note: 'sah-VWAHR. Facts or how-to knowledge.' },
          { front: 'dire', back: 'to say / tell', note: 'deer' },
          { front: 'voir', back: 'to see', note: 'vwahr' },
          { front: 'manger', back: 'to eat', note: 'mahn-ZHAY' },
          { front: 'boire', back: 'to drink', note: 'bwahr' },
          { front: 'payer', back: 'to pay', note: 'pay-YAY' }
        ]
      },
      {
        id: 'conversation',
        name: 'Conversation Phrases',
        cards: [
          { front: 'reprenons le fil', back: "let's pick up the thread again", note: 'ruh-pruh-NOHN luh feel' },
          { front: 'je peux jeter un œil', back: 'I can take a look', note: 'zhuh puh zhuh-TAY uhn uhy' },
          { front: "maintenant, c'est plus clair", back: "now it's clearer", note: 'man-tuh-NAHN say ploo klehr' },
          { front: "ce n'est pas automatique", back: "it isn't automatic", note: 'suh nay pah oh-toh-mah-TEEK' },
          { front: 'mieux vaut léger que lourd', back: 'better light than heavy', note: 'myuh voh lay-ZHAY kuh loor' },
          { front: 'point de repère', back: 'point of reference / landmark', note: 'pwan duh ruh-PEHR' },
          { front: "c'est écrit noir sur blanc", back: "it's written in black and white", note: 'say zay-KREE nwahr soor blahn' },
          { front: 'le voici', back: 'here it is', note: 'luh vwah-SEE' },
          { front: "c'est tout", back: "that's all", note: 'say too' },
          { front: "mettons de l'ordre", back: "let's get things organized", note: 'meh-TOHN duh LOR-druh' }
        ]
      }
    ]
  },
  {
    id: 'spanish',
    name: 'Spanish',
    country: 'Spain',
    flagClass: 'flag-spain',
    frontLabel: 'Spanish',
    directionForward: 'Spanish -> English',
    directionReverse: 'English -> Spanish',
    revealForward: 'Tap to return to Spanish.',
    revealReverse: 'Tap to reveal the Spanish.',
    decks: [
      {
        id: 'survival',
        name: 'Survival Phrases',
        cards: [
          { front: 'hola', back: 'hello', note: 'OH-lah' },
          { front: 'buenos dias', back: 'good morning / good day', note: 'BWEH-nohs DEE-ahs' },
          { front: 'buenas tardes', back: 'good afternoon / good evening', note: 'BWEH-nahs TAR-dehs' },
          { front: '¿cómo estás?', back: 'how are you?', note: 'KOH-moh ehs-TAHS. Informal.' },
          { front: 'estoy bien, gracias', back: "I'm well, thanks", note: 'eh-STOY byen GRAH-syahs' },
          { front: 'está bien', back: 'all right / okay', note: 'eh-STAH byen' },
          { front: 'perfecto', back: 'perfect', note: 'pehr-FEHK-toh' },
          { front: 'vamos', back: "let's go", note: 'BAH-mohs' },
          { front: 'poco a poco', back: 'little by little', note: 'POH-koh ah POH-koh' },
          { front: 'entendido', back: 'understood / got it', note: 'ehn-tehn-DEE-doh' },
          { front: 'por favor', back: 'please', note: 'por fah-BOR' },
          { front: 'gracias', back: 'thank you', note: 'GRAH-syahs' },
          { front: 'muchas gracias', back: 'thanks a lot', note: 'MOO-chahs GRAH-syahs' },
          { front: 'de nada', back: "you're welcome", note: 'deh NAH-dah' },
          { front: 'disculpe', back: 'excuse me', note: 'dees-KOOL-peh. Formal or polite.' },
          { front: 'perdón', back: 'excuse me / sorry', note: 'pehr-DOHN' },
          { front: 'lo siento', back: "I'm sorry", note: 'loh SYEN-toh' },
          { front: 'no entiendo', back: "I don't understand", note: 'noh ehn-TYEN-doh' },
          { front: '¿habla inglés?', back: 'do you speak English?', note: 'AH-blah een-GLES' },
          { front: '¿cuánto cuesta?', back: 'how much does it cost?', note: 'KWAHN-toh KWEHS-tah' },
          { front: '¿dónde está el baño?', back: 'where is the bathroom?', note: 'DOHN-deh ehs-TAH el BAH-nyoh' },
          { front: 'necesito ayuda', back: 'I need help', note: 'neh-seh-SEE-toh ah-YOO-dah' },
          { front: '¿puede repetir?', back: 'can you repeat?', note: 'PWEH-deh reh-peh-TEER' },
          { front: 'más despacio, por favor', back: 'more slowly, please', note: 'mahs dehs-PAH-syoh' }
        ]
      },
      {
        id: 'food',
        name: 'Food and Cafe',
        cards: [
          { front: 'un café', back: 'a coffee', note: 'oon kah-FEH' },
          { front: 'un capuchino', back: 'a cappuccino', note: 'oon kah-poo-CHEE-noh' },
          { front: 'agua sin gas', back: 'still water', note: 'AH-gwah seen gahs' },
          { front: 'agua con gas', back: 'sparkling water', note: 'AH-gwah kohn gahs' },
          { front: 'la cuenta', back: 'the check / bill', note: 'lah KWEHN-tah' },
          { front: 'quisiera...', back: 'I would like...', note: 'kee-SYEH-rah' },
          { front: 'sin', back: 'without', note: 'seen' },
          { front: 'con', back: 'with', note: 'kohn' },
          { front: 'pan', back: 'bread', note: 'pahn' },
          { front: 'vino', back: 'wine', note: 'BEE-noh' },
          { front: 'helado', back: 'ice cream', note: 'eh-LAH-doh' },
          { front: 'delicioso', back: 'delicious', note: 'deh-lee-SYOH-soh' },
          { front: '¿podemos pedir?', back: 'can we order?', note: 'poh-DEH-mohs peh-DEER' },
          { front: 'soy vegetariano', back: 'I am vegetarian', note: 'soy beh-heh-tah-RYAH-noh' },
          { front: 'para llevar', back: 'to go / takeaway', note: 'PAH-rah yeh-BAR' }
        ]
      },
      {
        id: 'movement',
        name: 'Getting Around',
        cards: [
          { front: '¿dónde estamos?', back: 'where are we?', note: 'DOHN-deh ehs-TAH-mohs' },
          { front: 'a la izquierda', back: 'to the left', note: 'ah lah ees-KYEHR-dah' },
          { front: 'a la derecha', back: 'to the right', note: 'ah lah deh-REH-chah' },
          { front: 'todo recto', back: 'straight ahead', note: 'TOH-doh REHK-toh' },
          { front: '¿cuánto tiempo tarda?', back: 'how long does it take?', note: 'KWAHN-toh TYEM-poh TAR-dah' },
          { front: 'quisiera ir a...', back: 'I would like to go to...', note: 'kee-SYEH-rah eer ah' },
          { front: '¿dónde está la estación?', back: 'where is the station?', note: 'ehs-tah-SYOHN' },
          { front: 'un billete, por favor', back: 'one ticket, please', note: 'oon bee-YEH-teh' },
          { front: 'estoy perdido', back: 'I am lost', note: 'eh-STOY pehr-DEE-doh' },
          { front: '¿está cerca?', back: 'is it nearby?', note: 'eh-STAH SEHR-kah' }
        ]
      },
      {
        id: 'verbs',
        name: 'Core Verbs',
        cards: [
          { front: 'ser / estar', back: 'to be', note: 'sehr / ehs-TAR' },
          { front: 'tener', back: 'to have', note: 'teh-NEHR' },
          { front: 'ir', back: 'to go', note: 'eer' },
          { front: 'hacer', back: 'to do / to make', note: 'ah-SEHR' },
          { front: 'querer', back: 'to want', note: 'keh-REHR' },
          { front: 'poder', back: 'to be able to / can', note: 'poh-DEHR' },
          { front: 'saber', back: 'to know', note: 'sah-BEHR' },
          { front: 'decir', back: 'to say / tell', note: 'deh-SEER' },
          { front: 'ver', back: 'to see', note: 'behr' },
          { front: 'comer', back: 'to eat', note: 'koh-MEHR' },
          { front: 'beber', back: 'to drink', note: 'beh-BEHR' },
          { front: 'pagar', back: 'to pay', note: 'pah-GAR' }
        ]
      },
      {
        id: 'conversation',
        name: 'Conversation Phrases',
        cards: [
          { front: 'retomemos el hilo', back: "let's pick up the thread again", note: 'reh-toh-MEH-mohs el EE-loh' },
          { front: 'puedo echar un vistazo', back: 'I can take a look', note: 'PWEH-doh eh-CHAR oon bees-TAH-soh' },
          { front: 'ahora está más claro', back: "now it's clearer", note: 'ah-OH-rah ehs-TAH mahs KLAH-roh' },
          { front: 'no es automático', back: "it isn't automatic", note: 'noh es ow-toh-MAH-tee-koh' },
          { front: 'mejor ligero que pesado', back: 'better light than heavy', note: 'meh-HOR lee-HEH-roh keh peh-SAH-doh' },
          { front: 'punto de referencia', back: 'point of reference', note: 'POON-toh deh reh-feh-REHN-syah' },
          { front: 'está escrito en blanco y negro', back: "it's written in black and white", note: 'ehs-TAH ehs-KREE-toh' },
          { front: 'aquí está', back: 'here it is', note: 'ah-KEE ehs-TAH' },
          { front: 'eso es todo', back: "that's all", note: 'EH-soh es TOH-doh' },
          { front: 'pongamos orden', back: "let's get things organized", note: 'pohn-GAH-mohs OR-dehn' }
        ]
      }
    ]
  },
  {
    id: 'german',
    name: 'German',
    country: 'Germany',
    flagClass: 'flag-germany',
    frontLabel: 'German',
    directionForward: 'German -> English',
    directionReverse: 'English -> German',
    revealForward: 'Tap to return to German.',
    revealReverse: 'Tap to reveal the German.',
    decks: [
      {
        id: 'survival',
        name: 'Survival Phrases',
        cards: [
          { front: 'hallo', back: 'hello', note: 'HAH-loh' },
          { front: 'guten Morgen', back: 'good morning', note: 'GOO-ten MOR-gen' },
          { front: 'guten Abend', back: 'good evening', note: 'GOO-ten AH-bent' },
          { front: 'wie geht es dir?', back: 'how are you?', note: 'vee gayt es deer. Informal.' },
          { front: 'mir geht es gut, danke', back: "I'm well, thanks", note: 'meer gayt es goot DAHN-kuh' },
          { front: 'in Ordnung', back: 'all right / okay', note: 'in ORT-noong' },
          { front: 'perfekt', back: 'perfect', note: 'pehr-FEKT' },
          { front: 'gehen wir', back: "let's go", note: 'GAY-en veer' },
          { front: 'Schritt für Schritt', back: 'little by little / step by step', note: 'shrit foor shrit' },
          { front: 'verstanden', back: 'understood / got it', note: 'fer-SHTAHN-den' },
          { front: 'bitte', back: 'please', note: 'BIT-tuh' },
          { front: 'danke', back: 'thank you', note: 'DAHN-kuh' },
          { front: 'vielen Dank', back: 'thanks a lot', note: 'FEE-len dahnk' },
          { front: 'gern geschehen', back: "you're welcome", note: 'gehrn guh-SHAY-en' },
          { front: 'Entschuldigung', back: 'excuse me / sorry', note: 'ent-SHOOL-dee-goong' },
          { front: 'es tut mir leid', back: "I'm sorry", note: 'es toot meer lite' },
          { front: 'ich verstehe nicht', back: "I don't understand", note: 'ikh fer-SHTAY-uh nikht' },
          { front: 'sprechen Sie Englisch?', back: 'do you speak English?', note: 'SHPREH-khen zee ENG-lish' },
          { front: 'wie viel kostet das?', back: 'how much does that cost?', note: 'vee feel KOS-tet dahs' },
          { front: 'wo ist die Toilette?', back: 'where is the bathroom?', note: 'voh ist dee toy-LET-tuh' },
          { front: 'ich brauche Hilfe', back: 'I need help', note: 'ikh BROW-khuh HIL-fuh' },
          { front: 'können Sie das wiederholen?', back: 'can you repeat that?', note: 'KERN-en zee dahs VEE-der-hoh-len' },
          { front: 'langsamer, bitte', back: 'more slowly, please', note: 'LAHNG-zah-mer BIT-tuh' }
        ]
      },
      {
        id: 'food',
        name: 'Food and Cafe',
        cards: [
          { front: 'ein Kaffee', back: 'a coffee', note: 'ine KAH-fay' },
          { front: 'ein Cappuccino', back: 'a cappuccino', note: 'ine kah-poo-CHEE-noh' },
          { front: 'stilles Wasser', back: 'still water', note: 'SHTIL-es VAH-ser' },
          { front: 'Sprudelwasser', back: 'sparkling water', note: 'SHPROO-del-vah-ser' },
          { front: 'die Rechnung', back: 'the check / bill', note: 'dee REKH-noong' },
          { front: 'ich hätte gern...', back: 'I would like...', note: 'ikh HET-tuh gehrn' },
          { front: 'ohne', back: 'without', note: 'OH-nuh' },
          { front: 'mit', back: 'with', note: 'mit' },
          { front: 'Brot', back: 'bread', note: 'broht' },
          { front: 'Wein', back: 'wine', note: 'vine' },
          { front: 'Eis', back: 'ice cream', note: 'ice' },
          { front: 'lecker', back: 'delicious', note: 'LEK-er' },
          { front: 'können wir bestellen?', back: 'can we order?', note: 'KERN-en veer buh-SHTEL-en' },
          { front: 'ich bin Vegetarier', back: 'I am vegetarian', note: 'ikh bin veh-geh-TAH-ree-er' },
          { front: 'zum Mitnehmen', back: 'to go / takeaway', note: 'tsoom MIT-nay-men' }
        ]
      },
      {
        id: 'movement',
        name: 'Getting Around',
        cards: [
          { front: 'wo sind wir?', back: 'where are we?', note: 'voh zint veer' },
          { front: 'nach links', back: 'to the left', note: 'nahkh links' },
          { front: 'nach rechts', back: 'to the right', note: 'nahkh rekhts' },
          { front: 'geradeaus', back: 'straight ahead', note: 'guh-RAH-duh-ows' },
          { front: 'wie lange dauert es?', back: 'how long does it take?', note: 'vee LAHNG-uh DOW-ert es' },
          { front: 'ich möchte nach...', back: 'I would like to go to...', note: 'ikh MERKH-tuh nahkh' },
          { front: 'wo ist der Bahnhof?', back: 'where is the train station?', note: 'voh ist dehr BAHN-hohf' },
          { front: 'eine Fahrkarte, bitte', back: 'one ticket, please', note: 'INE-uh FAHR-kar-tuh BIT-tuh' },
          { front: 'ich habe mich verlaufen', back: 'I am lost', note: 'ikh HAH-buh mikh fer-LOW-fen' },
          { front: 'ist es in der Nähe?', back: 'is it nearby?', note: 'ist es in dehr NAY-uh' }
        ]
      },
      {
        id: 'verbs',
        name: 'Core Verbs',
        cards: [
          { front: 'sein', back: 'to be', note: 'zine' },
          { front: 'haben', back: 'to have', note: 'HAH-ben' },
          { front: 'gehen', back: 'to go', note: 'GAY-en' },
          { front: 'machen', back: 'to do / to make', note: 'MAH-khen' },
          { front: 'wollen', back: 'to want', note: 'VOL-en' },
          { front: 'können', back: 'to be able to / can', note: 'KERN-en' },
          { front: 'wissen', back: 'to know', note: 'VIS-en' },
          { front: 'sagen', back: 'to say / tell', note: 'ZAH-gen' },
          { front: 'sehen', back: 'to see', note: 'ZAY-en' },
          { front: 'essen', back: 'to eat', note: 'ES-en' },
          { front: 'trinken', back: 'to drink', note: 'TRINK-en' },
          { front: 'bezahlen', back: 'to pay', note: 'buh-TSAH-len' }
        ]
      },
      {
        id: 'conversation',
        name: 'Conversation Phrases',
        cards: [
          { front: 'greifen wir den Faden wieder auf', back: "let's pick up the thread again", note: 'GRY-fen veer dayn FAH-den VEE-der owf' },
          { front: 'ich kann einen Blick darauf werfen', back: 'I can take a look', note: 'ikh kahn IN-en blik dah-ROWF vehr-fen' },
          { front: 'jetzt ist es klarer', back: "now it's clearer", note: 'yetst ist es KLAH-rer' },
          { front: 'es ist nicht automatisch', back: "it isn't automatic", note: 'es ist nikht ow-toh-MAH-tish' },
          { front: 'lieber leicht als schwer', back: 'better light than heavy', note: 'LEE-ber likht ahls shvair' },
          { front: 'Bezugspunkt', back: 'point of reference', note: 'buh-TSOOKS-poonkt' },
          { front: 'es steht schwarz auf weiß', back: "it's written in black and white", note: 'es shtayt shvarts owf vice' },
          { front: 'hier ist es', back: 'here it is', note: 'heer ist es' },
          { front: 'das ist alles', back: "that's all", note: 'dahs ist AH-les' },
          { front: 'bringen wir Ordnung rein', back: "let's get things organized", note: 'BRING-en veer ORT-noong rine' }
        ]
      }
    ]
  },
  {
    id: 'greek',
    name: 'Greek',
    country: 'Greece',
    flagClass: 'flag-greece',
    frontLabel: 'Greek',
    directionForward: 'Greek -> English',
    directionReverse: 'English -> Greek',
    revealForward: 'Tap to return to Greek.',
    revealReverse: 'Tap to reveal the Greek.',
    decks: [
      {
        id: 'survival',
        name: 'Survival Phrases',
        cards: [
          { front: 'γεια σας', back: 'hello', note: 'yah sahs. Polite or plural.' },
          { front: 'καλημέρα', back: 'good morning / good day', note: 'kah-lee-MEH-rah' },
          { front: 'καλησπέρα', back: 'good evening', note: 'kah-lee-SPEH-rah' },
          { front: 'τι κάνεις;', back: 'how are you?', note: 'tee KAH-nees. Informal.' },
          { front: 'είμαι καλά, ευχαριστώ', back: "I'm well, thanks", note: 'EE-meh kah-LAH ef-khah-rees-TOH' },
          { front: 'εντάξει', back: 'all right / okay', note: 'en-DAHK-see' },
          { front: 'τέλεια', back: 'perfect', note: 'TEH-lee-ah' },
          { front: 'πάμε', back: "let's go", note: 'PAH-meh' },
          { front: 'σιγά σιγά', back: 'little by little / slowly', note: 'see-GAH see-GAH' },
          { front: 'κατάλαβα', back: 'understood / got it', note: 'kah-TAH-lah-vah' },
          { front: 'παρακαλώ', back: 'please', note: 'pah-rah-kah-LOH' },
          { front: 'ευχαριστώ', back: 'thank you', note: 'ef-khah-rees-TOH' },
          { front: 'ευχαριστώ πολύ', back: 'thanks a lot', note: 'ef-khah-rees-TOH poh-LEE' },
          { front: 'τίποτα', back: "you're welcome", note: 'TEE-poh-tah' },
          { front: 'συγγνώμη', back: 'excuse me / sorry', note: 'see-GHNOH-mee' },
          { front: 'λυπάμαι', back: "I'm sorry", note: 'lee-PAH-meh' },
          { front: 'δεν καταλαβαίνω', back: "I don't understand", note: 'then kah-tah-lah-VEH-noh' },
          { front: 'μιλάτε αγγλικά;', back: 'do you speak English?', note: 'mee-LAH-teh ahn-glee-KAH' },
          { front: 'πόσο κοστίζει;', back: 'how much does it cost?', note: 'POH-soh koh-STEE-zee' },
          { front: 'πού είναι η τουαλέτα;', back: 'where is the bathroom?', note: 'poo EE-neh ee too-ah-LEH-tah' },
          { front: 'χρειάζομαι βοήθεια', back: 'I need help', note: 'khree-AH-zoh-meh voh-EE-thee-ah' },
          { front: 'μπορείτε να το επαναλάβετε;', back: 'can you repeat that?', note: 'boh-REE-teh nah toh eh-pah-nah-LAH-veh-teh' },
          { front: 'πιο αργά, παρακαλώ', back: 'more slowly, please', note: 'pyo ar-GAH pah-rah-kah-LOH' }
        ]
      },
      {
        id: 'food',
        name: 'Food and Cafe',
        cards: [
          { front: 'έναν καφέ', back: 'a coffee', note: 'EH-nan kah-FEH' },
          { front: 'έναν καπουτσίνο', back: 'a cappuccino', note: 'EH-nan kah-poo-TSEE-noh' },
          { front: 'νερό χωρίς ανθρακικό', back: 'still water', note: 'neh-ROH khoh-REES ahn-thrah-kee-KOH' },
          { front: 'ανθρακούχο νερό', back: 'sparkling water', note: 'ahn-thrah-KOO-khoh neh-ROH' },
          { front: 'ο λογαριασμός', back: 'the check / bill', note: 'oh loh-ghah-ree-ah-SMOHS' },
          { front: 'θα ήθελα...', back: 'I would like...', note: 'thah EE-theh-lah' },
          { front: 'χωρίς', back: 'without', note: 'khoh-REES' },
          { front: 'με', back: 'with', note: 'meh' },
          { front: 'ψωμί', back: 'bread', note: 'psoh-MEE' },
          { front: 'κρασί', back: 'wine', note: 'krah-SEE' },
          { front: 'παγωτό', back: 'ice cream', note: 'pah-ghoh-TOH' },
          { front: 'νόστιμο', back: 'delicious', note: 'NOH-stee-moh' },
          { front: 'μπορούμε να παραγγείλουμε;', back: 'can we order?', note: 'boh-ROO-meh nah pah-rah-NGEEL-oo-meh' },
          { front: 'είμαι χορτοφάγος', back: 'I am vegetarian', note: 'EE-meh hor-toh-FAH-ghos' },
          { front: 'για έξω', back: 'to go / takeaway', note: 'yah EH-ksoh' }
        ]
      },
      {
        id: 'movement',
        name: 'Getting Around',
        cards: [
          { front: 'πού είμαστε;', back: 'where are we?', note: 'poo EE-mah-steh' },
          { front: 'αριστερά', back: 'to the left', note: 'ah-ree-steh-RAH' },
          { front: 'δεξιά', back: 'to the right', note: 'theh-ksee-AH' },
          { front: 'ευθεία', back: 'straight ahead', note: 'ef-THEE-ah' },
          { front: 'πόση ώρα παίρνει;', back: 'how long does it take?', note: 'POH-see OH-rah PEHR-nee' },
          { front: 'θα ήθελα να πάω...', back: 'I would like to go to...', note: 'thah EE-theh-lah nah PAH-oh' },
          { front: 'πού είναι ο σταθμός;', back: 'where is the station?', note: 'poo EE-neh oh stahth-MOHS' },
          { front: 'ένα εισιτήριο, παρακαλώ', back: 'one ticket, please', note: 'EH-nah ee-see-TEE-ree-oh' },
          { front: 'χάθηκα', back: 'I am lost', note: 'HAH-thee-kah' },
          { front: 'είναι κοντά;', back: 'is it nearby?', note: 'EE-neh kohn-DAH' }
        ]
      },
      {
        id: 'verbs',
        name: 'Core Verbs',
        cards: [
          { front: 'είμαι', back: 'to be', note: 'EE-meh' },
          { front: 'έχω', back: 'to have', note: 'EH-khoh' },
          { front: 'πηγαίνω', back: 'to go', note: 'pee-GHEH-noh' },
          { front: 'κάνω', back: 'to do / to make', note: 'KAH-noh' },
          { front: 'θέλω', back: 'to want', note: 'THEH-loh' },
          { front: 'μπορώ', back: 'to be able to / can', note: 'boh-ROH' },
          { front: 'ξέρω', back: 'to know', note: 'KSEH-roh' },
          { front: 'λέω', back: 'to say / tell', note: 'LEH-oh' },
          { front: 'βλέπω', back: 'to see', note: 'VLEH-poh' },
          { front: 'τρώω', back: 'to eat', note: 'TROH-oh' },
          { front: 'πίνω', back: 'to drink', note: 'PEE-noh' },
          { front: 'πληρώνω', back: 'to pay', note: 'plee-ROH-noh' }
        ]
      },
      {
        id: 'conversation',
        name: 'Conversation Phrases',
        cards: [
          { front: 'ας ξαναπιάσουμε το νήμα', back: "let's pick up the thread again", note: 'ahs ksee-nah-PYAH-soo-meh toh NEE-mah' },
          { front: 'μπορώ να ρίξω μια ματιά', back: 'I can take a look', note: 'boh-ROH nah REE-ksoh mee-AH mah-TYAH' },
          { front: 'τώρα είναι πιο ξεκάθαρο', back: "now it's clearer", note: 'TOH-rah EE-neh pyo kseh-KAH-thah-roh' },
          { front: 'δεν είναι αυτόματο', back: "it isn't automatic", note: 'then EE-neh af-TOH-mah-toh' },
          { front: 'καλύτερα ελαφρύ παρά βαρύ', back: 'better light than heavy', note: 'kah-LEE-teh-rah eh-lah-FREE pah-RAH vah-REE' },
          { front: 'σημείο αναφοράς', back: 'point of reference', note: 'see-MEE-oh ah-nah-foh-RAHS' },
          { front: 'είναι γραμμένο μαύρο σε άσπρο', back: "it's written in black and white", note: 'EE-neh ghrah-MEH-noh MAV-roh seh AHS-proh' },
          { front: 'ορίστε', back: 'here it is', note: 'oh-REE-steh' },
          { front: 'αυτό είναι όλο', back: "that's all", note: 'af-TOH EE-neh OH-loh' },
          { front: 'ας βάλουμε τα πράγματα σε τάξη', back: "let's get things organized", note: 'ahs VAH-loo-meh tah PRAHGH-mah-tah seh TAH-ksee' }
        ]
      }
    ]
  },
  {
    id: 'moroccan',
    name: 'Moroccan Arabic',
    country: 'Morocco',
    flagClass: 'flag-morocco',
    frontLabel: 'Moroccan Arabic',
    directionForward: 'Moroccan -> English',
    directionReverse: 'English -> Moroccan',
    revealForward: 'Tap to return to Moroccan Arabic.',
    revealReverse: 'Tap to reveal the Moroccan Arabic.',
    decks: [
      {
        id: 'survival',
        name: 'Survival Phrases',
        cards: [
          { front: 'السلام', back: 'hello', note: 's-salam' },
          { front: 'صباح الخير', back: 'good morning', note: 'sbah l-khir' },
          { front: 'مسا الخير', back: 'good evening', note: 'msa l-khir' },
          { front: 'كيف داير؟', back: 'how are you?', note: 'kif dayr? Informal masculine.' },
          { front: 'لاباس، شكرا', back: "I'm well, thanks", note: 'labas, shukran' },
          { front: 'واخا', back: 'all right / okay', note: 'wakha' },
          { front: 'زوين', back: 'great / nice', note: 'zwin' },
          { front: 'يلا نمشيو', back: "let's go", note: 'yallah nmshiw' },
          { front: 'بشوية بشوية', back: 'little by little / slowly', note: 'b-shwiya b-shwiya' },
          { front: 'فهمت', back: 'understood / got it', note: 'fhemt' },
          { front: 'عافاك', back: 'please', note: 'afak' },
          { front: 'شكرا', back: 'thank you', note: 'shukran' },
          { front: 'شكرا بزاف', back: 'thanks a lot', note: 'shukran bzzaf' },
          { front: 'بلا جميل', back: "you're welcome", note: 'bla jmil' },
          { front: 'سمح ليا', back: 'excuse me / sorry', note: 'smeh liya' },
          { front: 'ما فهمتش', back: "I don't understand", note: 'ma fhemtsh' },
          { front: 'كتكلم الإنجليزية؟', back: 'do you speak English?', note: 'katkellem l-ingliziya?' },
          { front: 'بشحال هادا؟', back: 'how much does this cost?', note: 'b-shhal hada?' },
          { front: 'فين الحمام؟', back: 'where is the bathroom?', note: 'fin l-hammam?' },
          { front: 'محتاج مساعدة', back: 'I need help', note: 'mhtaj msaada' },
          { front: 'عاود، عافاك', back: 'repeat, please', note: 'awed, afak' },
          { front: 'بشوية، عافاك', back: 'more slowly, please', note: 'b-shwiya, afak' }
        ]
      },
      {
        id: 'food',
        name: 'Food and Cafe',
        cards: [
          { front: 'قهوة', back: 'a coffee', note: 'qahwa' },
          { front: 'نص نص', back: 'coffee with milk', note: 'nus nus' },
          { front: 'ما عادي', back: 'still water', note: 'ma adi' },
          { front: 'ما غازي', back: 'sparkling water', note: 'ma ghazi' },
          { front: 'الحساب', back: 'the check / bill', note: 'l-hsab' },
          { front: 'بغيت...', back: 'I would like...', note: 'bghit' },
          { front: 'بلا', back: 'without', note: 'bla' },
          { front: 'مع', back: 'with', note: 'ma' },
          { front: 'خبز', back: 'bread', note: 'khobz' },
          { front: 'شراب', back: 'drink', note: 'shrab' },
          { front: 'مْثلج', back: 'ice cream', note: 'm-tellej' },
          { front: 'بنين', back: 'delicious', note: 'bnin' },
          { front: 'نقدرو نطلبو؟', back: 'can we order?', note: 'nqdro ntelbo?' },
          { front: 'ما كنكلش اللحم', back: 'I do not eat meat', note: 'ma kanakolsh l-lhem' },
          { front: 'ناخدو معانا', back: 'to go / takeaway', note: 'nakhdo maana' }
        ]
      },
      {
        id: 'movement',
        name: 'Getting Around',
        cards: [
          { front: 'فين حنا؟', back: 'where are we?', note: 'fin hna?' },
          { front: 'على اليسر', back: 'to the left', note: 'ala l-yser' },
          { front: 'على اليمين', back: 'to the right', note: 'ala l-ymin' },
          { front: 'نيشان', back: 'straight ahead', note: 'nishan' },
          { front: 'شحال ديال الوقت؟', back: 'how long does it take?', note: 'shhal dyal l-waqt?' },
          { front: 'بغيت نمشي ل...', back: 'I would like to go to...', note: 'bghit nmshi l...' },
          { front: 'فين لاگار؟', back: 'where is the station?', note: 'fin la gar?' },
          { front: 'تذكرة وحدة، عافاك', back: 'one ticket, please', note: 'tadkira wahda, afak' },
          { front: 'ضيعت الطريق', back: 'I am lost', note: 'dyeet t-triq' },
          { front: 'قريب؟', back: 'is it nearby?', note: 'qrib?' }
        ]
      },
      {
        id: 'verbs',
        name: 'Core Verbs',
        cards: [
          { front: 'كان', back: 'to be', note: 'kan' },
          { front: 'عند', back: 'to have', note: 'and' },
          { front: 'مشى', back: 'to go', note: 'msha' },
          { front: 'دار', back: 'to do / to make', note: 'dar' },
          { front: 'بغا', back: 'to want', note: 'bgha' },
          { front: 'قدر', back: 'to be able to / can', note: 'qder' },
          { front: 'عرف', back: 'to know', note: 'aref' },
          { front: 'قال', back: 'to say / tell', note: 'qal' },
          { front: 'شاف', back: 'to see', note: 'shaf' },
          { front: 'كل', back: 'to eat', note: 'kel' },
          { front: 'شرب', back: 'to drink', note: 'shreb' },
          { front: 'خلص', back: 'to pay', note: 'khlles' }
        ]
      },
      {
        id: 'conversation',
        name: 'Conversation Phrases',
        cards: [
          { front: 'نرجعو للموضوع', back: "let's pick up the thread again", note: 'nrjoo l-lmawdoo' },
          { front: 'نقدر نشوف؟', back: 'I can take a look', note: 'nqder nshof?' },
          { front: 'دابا ولات واضحة', back: "now it's clearer", note: 'daba wllat wadha' },
          { front: 'ماشي أوتوماتيك', back: "it isn't automatic", note: 'mashi otomatik' },
          { front: 'خفيف حسن من ثقيل', back: 'better light than heavy', note: 'khfif hsen men tqil' },
          { front: 'نقطة مرجعية', back: 'point of reference', note: 'noqta marjiiya' },
          { front: 'مكتوب بالواضح', back: "it's written clearly", note: 'mktob b-l-wadeh' },
          { front: 'ها هو', back: 'here it is', note: 'ha howa' },
          { front: 'غير هادا', back: "that's all", note: 'ghir hada' },
          { front: 'نرتبو الأمور', back: "let's get things organized", note: 'nrettebo l-omor' }
        ]
      }
    ]
  }
];

const FAVORITES_DECK_ID = 'favorites';
const FAVORITES_STORAGE_KEY = 'polyglot-flashcards-favorites-v1';

const state = {
  languageId: languages[0].id,
  deckId: languages[0].decks[0].id,
  order: languages[0].decks[0].cards.map((_, index) => index),
  position: 0,
  flipped: false,
  targetFirst: true,
  favoriteIds: loadFavoriteIds(),
  touchStartX: 0,
  touchStartY: 0,
  suppressNextClick: false
};

const elements = {
  languageSwitch: document.querySelector('#language-switch'),
  deckSelect: document.querySelector('#deck-select'),
  card: document.querySelector('#card'),
  count: document.querySelector('#card-count'),
  frontLabel: document.querySelector('#front-label'),
  backLabel: document.querySelector('#back-label'),
  frontText: document.querySelector('#front-text'),
  frontNote: document.querySelector('#front-note'),
  backText: document.querySelector('#back-text'),
  backNote: document.querySelector('#back-note'),
  previous: document.querySelector('#previous-button'),
  next: document.querySelector('#next-button'),
  flip: document.querySelector('#flip-button'),
  direction: document.querySelector('#direction-button'),
  shuffle: document.querySelector('#shuffle-button'),
  reset: document.querySelector('#reset-button'),
  favorite: document.querySelector('#favorite-button')
};

function currentLanguage() {
  return languages.find((language) => language.id === state.languageId) ?? languages[0];
}

function cardId(languageId, deckId, index) {
  return `${languageId}:${deckId}:${index}`;
}

function withCardMeta(language, deck, card, index) {
  return {
    ...card,
    languageId: language.id,
    languageName: language.name,
    sourceDeckId: deck.id,
    sourceDeckName: deck.name,
    sourceIndex: index,
    id: cardId(language.id, deck.id, index)
  };
}

function loadFavoriteIds() {
  try {
    const saved = JSON.parse(localStorage.getItem(FAVORITES_STORAGE_KEY));
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function saveFavoriteIds() {
  try {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(state.favoriteIds));
  } catch {
    // Favorites still work for this session if persistent storage is unavailable.
  }
}

function favoriteCards() {
  const language = currentLanguage();
  const cardsById = new Map();

  language.decks.forEach((deck) => {
    deck.cards.forEach((card, index) => {
      cardsById.set(cardId(language.id, deck.id, index), withCardMeta(language, deck, card, index));
    });
  });

  return state.favoriteIds.map((id) => cardsById.get(id)).filter(Boolean);
}

function deckOptions() {
  return [
    {
      id: FAVORITES_DECK_ID,
      name: `Favorites (${favoriteCards().length})`,
      cards: favoriteCards()
    },
    ...currentLanguage().decks
  ];
}

function currentDeck() {
  if (state.deckId === FAVORITES_DECK_ID) {
    return {
      id: FAVORITES_DECK_ID,
      name: 'Favorites',
      cards: favoriteCards()
    };
  }

  return currentLanguage().decks.find((deck) => deck.id === state.deckId) ?? currentLanguage().decks[0];
}

function currentCard() {
  const language = currentLanguage();
  const deck = currentDeck();
  const card = deck.cards[state.order[state.position]];
  if (!card) return null;
  return card.id ? card : withCardMeta(language, deck, card, state.order[state.position]);
}

function setLanguage(languageId) {
  const language = languages.find((candidate) => candidate.id === languageId) ?? languages[0];
  state.languageId = language.id;
  state.deckId = language.decks[0].id;
  state.order = language.decks[0].cards.map((_, index) => index);
  state.position = 0;
  state.flipped = false;
  state.targetFirst = true;
  render();
}

function setDeck(deckId) {
  const deck = deckOptions().find((candidate) => candidate.id === deckId) ?? currentLanguage().decks[0];
  state.deckId = deck.id;
  state.order = deck.cards.map((_, index) => index);
  state.position = 0;
  state.flipped = false;
  render();
}

function move(offset) {
  const deck = currentDeck();
  if (deck.cards.length === 0) return;
  state.position = (state.position + offset + deck.cards.length) % deck.cards.length;
  state.flipped = false;
  render();
}

function shuffle() {
  if (state.order.length === 0) return;

  for (let index = state.order.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [state.order[index], state.order[swapIndex]] = [state.order[swapIndex], state.order[index]];
  }
  state.position = 0;
  state.flipped = false;
  render();
}

function toggleFlip() {
  if (currentDeck().cards.length === 0) return;

  state.flipped = !state.flipped;
  render();
}

function toggleDirection() {
  state.targetFirst = !state.targetFirst;
  state.flipped = false;
  render();
}

function refreshLanguageSwitch() {
  elements.languageSwitch.replaceChildren(
    ...languages.map((language) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = `language-option ${language.flagClass}`;
      button.dataset.languageId = language.id;
      button.setAttribute('aria-label', `Study ${language.name} phrase cards`);
      button.setAttribute('aria-pressed', String(language.id === state.languageId));
      button.classList.toggle('is-active', language.id === state.languageId);
      return button;
    })
  );
}

function refreshDeckSelect() {
  const selectedDeckId = state.deckId;

  elements.deckSelect.replaceChildren(
    ...deckOptions().map((deck) => {
      const option = document.createElement('option');
      option.value = deck.id;
      option.textContent = deck.name;
      return option;
    })
  );

  elements.deckSelect.value = selectedDeckId;
}

function syncFavoritesDeckPosition() {
  const deck = currentDeck();

  if (state.deckId === FAVORITES_DECK_ID) {
    state.order = deck.cards.map((_, index) => index);
    state.position = Math.min(state.position, Math.max(deck.cards.length - 1, 0));
    state.flipped = false;
  }
}

function toggleFavorite() {
  const card = currentCard();
  if (!card) return;

  const isFavorite = state.favoriteIds.includes(card.id);
  state.favoriteIds = isFavorite
    ? state.favoriteIds.filter((id) => id !== card.id)
    : [...state.favoriteIds, card.id];

  saveFavoriteIds();
  syncFavoritesDeckPosition();
  render();
}

function handleTouchStart(event) {
  const touch = event.changedTouches[0];
  state.touchStartX = touch.clientX;
  state.touchStartY = touch.clientY;
  state.suppressNextClick = false;
}

function handleTouchEnd(event) {
  const touch = event.changedTouches[0];
  const deltaX = touch.clientX - state.touchStartX;
  const deltaY = touch.clientY - state.touchStartY;

  if (Math.abs(deltaX) < 55 || Math.abs(deltaX) < Math.abs(deltaY) * 1.25) return;

  state.suppressNextClick = true;
  move(deltaX < 0 ? 1 : -1);
}

function render() {
  const language = currentLanguage();
  const deck = currentDeck();
  const card = currentCard();
  const isEmpty = deck.cards.length === 0;
  const isFavorite = card ? state.favoriteIds.includes(card.id) : false;
  const frontLabel = state.targetFirst ? language.frontLabel : 'English';
  const backLabel = state.targetFirst ? 'English' : language.frontLabel;
  const frontText = state.targetFirst ? card?.front : card?.back;
  const backText = state.targetFirst ? card?.back : card?.front;
  const frontNote = state.targetFirst ? card?.note : language.revealReverse;
  const backNote = state.targetFirst ? language.revealForward : card?.note;

  document.documentElement.dataset.language = language.id;
  document.title = `Phrase Passport - ${language.name}`;
  refreshLanguageSwitch();
  refreshDeckSelect();

  elements.count.textContent = isEmpty ? '0 / 0' : `${state.position + 1} / ${deck.cards.length}`;
  elements.frontLabel.textContent = frontLabel;
  elements.backLabel.textContent = backLabel;
  elements.frontText.textContent = isEmpty ? 'No favorites yet' : frontText;
  elements.frontText.classList.toggle('is-empty', isEmpty);
  elements.frontNote.textContent = isEmpty ? 'Tap the star on any card to build this deck.' : frontNote;
  elements.backText.textContent = isEmpty ? 'Favorite cards will appear here' : backText;
  elements.backText.classList.toggle('is-empty', isEmpty);
  elements.backNote.textContent = isEmpty ? 'Choose another deck to keep studying.' : backNote;
  elements.direction.textContent = state.targetFirst ? language.directionForward : language.directionReverse;
  elements.direction.setAttribute('aria-pressed', String(!state.targetFirst));
  elements.favorite.textContent = isFavorite ? '★' : '☆';
  elements.favorite.classList.toggle('is-favorite', isFavorite);
  elements.favorite.disabled = isEmpty;
  elements.favorite.setAttribute('aria-pressed', String(isFavorite));
  elements.favorite.setAttribute('aria-label', isFavorite ? 'Remove current card from favorites' : 'Add current card to favorites');
  elements.card.classList.toggle('is-flipped', state.flipped);
  elements.card.setAttribute(
    'aria-label',
    isEmpty
      ? 'No favorite cards yet.'
      : state.flipped
        ? `${backText}. Tap to show ${frontLabel}.`
        : `${frontText}. Tap to show ${backLabel}.`
  );
}

function boot() {
  refreshLanguageSwitch();
  refreshDeckSelect();

  elements.languageSwitch.addEventListener('click', (event) => {
    const button = event.target.closest('[data-language-id]');
    if (!button) return;
    setLanguage(button.dataset.languageId);
  });
  elements.deckSelect.addEventListener('change', (event) => setDeck(event.target.value));
  elements.card.addEventListener('click', () => {
    if (state.suppressNextClick) {
      state.suppressNextClick = false;
      return;
    }

    toggleFlip();
  });
  elements.card.addEventListener('touchstart', handleTouchStart, { passive: true });
  elements.card.addEventListener('touchend', handleTouchEnd, { passive: true });
  elements.flip.addEventListener('click', toggleFlip);
  elements.direction.addEventListener('click', toggleDirection);
  elements.previous.addEventListener('click', () => move(-1));
  elements.next.addEventListener('click', () => move(1));
  elements.shuffle.addEventListener('click', shuffle);
  elements.reset.addEventListener('click', () => setDeck(state.deckId));
  elements.favorite.addEventListener('click', toggleFavorite);

  window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') move(-1);
    if (event.key === 'ArrowRight') move(1);
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      toggleFlip();
    }
  });

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
  }

  render();
}

boot();
