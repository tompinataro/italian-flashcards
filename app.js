const decks = [
  {
    id: 'survival',
    name: 'Survival Italian',
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
      { front: 'dov\'è il bagno?', back: 'where is the bathroom?', note: 'doh-VEH eel BAHN-yoh' }
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
      { front: 'delizioso', back: 'delicious', note: 'deh-lee-TSYOH-zoh' }
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
      { front: 'posso dare un\'occhiata', back: 'I can take a look', note: 'POHS-soh DAH-reh oon ohk-KYAH-tah' },
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
];

const FAVORITES_DECK_ID = 'favorites';
const FAVORITES_STORAGE_KEY = 'italian-flashcards-favorites-v1';

const state = {
  deckId: decks[0].id,
  order: decks[0].cards.map((_, index) => index),
  position: 0,
  flipped: false,
  favoriteIds: loadFavoriteIds(),
  touchStartX: 0,
  touchStartY: 0,
  suppressNextClick: false
};

const elements = {
  deckSelect: document.querySelector('#deck-select'),
  card: document.querySelector('#card'),
  count: document.querySelector('#card-count'),
  frontText: document.querySelector('#front-text'),
  frontNote: document.querySelector('#front-note'),
  backText: document.querySelector('#back-text'),
  backNote: document.querySelector('#back-note'),
  previous: document.querySelector('#previous-button'),
  next: document.querySelector('#next-button'),
  flip: document.querySelector('#flip-button'),
  shuffle: document.querySelector('#shuffle-button'),
  reset: document.querySelector('#reset-button'),
  favorite: document.querySelector('#favorite-button')
};

function cardId(deckId, index) {
  return `${deckId}:${index}`;
}

function withCardMeta(deck, card, index) {
  return {
    ...card,
    sourceDeckId: deck.id,
    sourceDeckName: deck.name,
    sourceIndex: index,
    id: cardId(deck.id, index)
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
  const cardsById = new Map();

  decks.forEach((deck) => {
    deck.cards.forEach((card, index) => {
      cardsById.set(cardId(deck.id, index), withCardMeta(deck, card, index));
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
    ...decks
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

  return decks.find((deck) => deck.id === state.deckId) ?? decks[0];
}

function currentCard() {
  const deck = currentDeck();
  const card = deck.cards[state.order[state.position]];
  if (!card) return null;
  return card.id ? card : withCardMeta(deck, card, state.order[state.position]);
}

function setDeck(deckId) {
  const deck = deckOptions().find((candidate) => candidate.id === deckId) ?? decks[0];
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
  const deck = currentDeck();
  const card = currentCard();
  const isEmpty = deck.cards.length === 0;
  const isFavorite = card ? state.favoriteIds.includes(card.id) : false;

  refreshDeckSelect();

  elements.count.textContent = isEmpty ? '0 / 0' : `${state.position + 1} / ${deck.cards.length}`;
  elements.frontText.textContent = isEmpty ? 'No favorites yet' : card.front;
  elements.frontText.classList.toggle('is-empty', isEmpty);
  elements.frontNote.textContent = isEmpty ? 'Tap the star on any card to build this deck.' : card.note;
  elements.backText.textContent = isEmpty ? 'Favorite cards will appear here' : card.back;
  elements.backText.classList.toggle('is-empty', isEmpty);
  elements.backNote.textContent = isEmpty ? 'Choose another deck to keep studying.' : card.note;
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
        ? `${card.back}. Tap to show Italian.`
        : `${card.front}. Tap to show English.`
  );
}

function boot() {
  refreshDeckSelect();

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
