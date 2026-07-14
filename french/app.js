const decks = [
  {
    id: 'survival',
    name: 'Survival French',
    cards: [
      { front: 'bonjour', back: 'hello / good morning', note: 'bohn-ZHOOR' },
      { front: 'bonsoir', back: 'good evening', note: 'bohn-SWAHR' },
      { front: 'salut', back: 'hi / bye', note: 'sah-LOO. Informal.' },
      { front: 'comment ça va ?', back: 'how are you?', note: 'koh-MAHN sah vah' },
      { front: 'ça va bien, merci', back: "I'm well, thanks", note: 'sah vah byan mehr-SEE' },
      { front: 'd\'accord', back: 'all right / okay', note: 'dah-KOR' },
      { front: 'parfait', back: 'perfect', note: 'par-FEH' },
      { front: 'allons-y', back: "let's go", note: 'ah-lohn-ZEE' },
      { front: 'petit à petit', back: 'little by little', note: 'puh-TEE ah puh-TEE' },
      { front: 'compris', back: 'understood / got it', note: 'kohm-PREE' },
      { front: 's\'il vous plaît', back: 'please', note: 'seel voo PLEH. Polite or plural.' },
      { front: 'merci', back: 'thank you', note: 'mehr-SEE' },
      { front: 'merci beaucoup', back: 'thanks a lot', note: 'mehr-SEE boh-KOO' },
      { front: 'de rien', back: "you're welcome", note: 'duh RYAN' },
      { front: 'excusez-moi', back: 'excuse me / sorry', note: 'ehk-skew-zay MWAH. Polite.' },
      { front: 'pardon', back: 'sorry / pardon me', note: 'par-DOHN' },
      { front: 'je suis désolé', back: "I'm sorry", note: 'zhuh swee day-zoh-LAY. Masculine speaker.' },
      { front: 'je ne comprends pas', back: "I don't understand", note: 'zhuh nuh kohm-PRAHN pah' },
      { front: 'parlez-vous anglais ?', back: 'do you speak English?', note: 'par-lay VOO ahn-GLEH' },
      { front: 'combien ça coûte ?', back: 'how much does it cost?', note: 'kohm-BYAN sah koot' },
      { front: 'où sont les toilettes ?', back: 'where is the bathroom?', note: 'oo sohn lay twa-LET' }
    ]
  },
  {
    id: 'food',
    name: 'Food and Cafe',
    cards: [
      { front: 'un café', back: 'a coffee / espresso', note: 'uhn kah-FAY' },
      { front: 'un café crème', back: 'coffee with milk', note: 'uhn kah-FAY krem' },
      { front: 'de l\'eau plate', back: 'still water', note: 'duh loh plaht' },
      { front: 'de l\'eau gazeuse', back: 'sparkling water', note: 'duh loh gah-ZUHZ' },
      { front: 'l\'addition', back: 'the check / bill', note: 'lah-dee-SYOHN' },
      { front: 'je voudrais...', back: 'I would like...', note: 'zhuh voo-DREH' },
      { front: 'sans', back: 'without', note: 'sahn' },
      { front: 'avec', back: 'with', note: 'ah-VEK' },
      { front: 'du pain', back: 'bread', note: 'doo PAN' },
      { front: 'du vin', back: 'wine', note: 'doo VAN' },
      { front: 'une glace', back: 'ice cream', note: 'oon glahs' },
      { front: 'délicieux', back: 'delicious', note: 'day-lee-SYUH' }
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
      { front: 'maintenant, c\'est plus clair', back: "now it's clearer", note: 'man-tuh-NAHN say ploo klehr' },
      { front: 'ce n\'est pas automatique', back: "it isn't automatic", note: 'suh nay pah oh-toh-mah-TEEK' },
      { front: 'mieux vaut léger que lourd', back: 'better light than heavy', note: 'myuh voh lay-ZHAY kuh loor' },
      { front: 'point de repère', back: 'point of reference / landmark', note: 'pwan duh ruh-PEHR' },
      { front: 'c\'est écrit noir sur blanc', back: "it's written in black and white", note: 'say zay-KREE nwahr soor blahn' },
      { front: 'le voici', back: 'here it is', note: 'luh vwah-SEE' },
      { front: 'c\'est tout', back: "that's all", note: 'say too' },
      { front: 'mettons de l\'ordre', back: "let's get things organized", note: 'meh-TOHN duh LOR-druh' }
    ]
  }
];

const FAVORITES_DECK_ID = 'favorites';
const FAVORITES_STORAGE_KEY = 'french-flashcards-favorites-v1';
const PRONUNCIATION_VOLUME = 0.6;
const PRONUNCIATION_RATE = 0.9;

const state = {
  deckId: decks[0].id,
  order: decks[0].cards.map((_, index) => index),
  position: 0,
  flipped: false,
  audioEnabled: false,
  lastPronouncedCardId: '',
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
  favorite: document.querySelector('#favorite-button'),
  audioToggle: document.querySelector('#audio-toggle')
};

function canSpeak() {
  return 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
}

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

function speakCurrentCard({ force = false } = {}) {
  const card = currentCard();

  if (!state.audioEnabled || !card || !canSpeak()) return;
  if (!force && state.lastPronouncedCardId === card.id) return;

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(card.front);
  utterance.lang = 'fr-FR';
  utterance.volume = PRONUNCIATION_VOLUME;
  utterance.rate = PRONUNCIATION_RATE;
  utterance.pitch = 1;

  state.lastPronouncedCardId = card.id;
  window.speechSynthesis.speak(utterance);
}

function toggleAudio() {
  if (!canSpeak()) return;

  state.audioEnabled = !state.audioEnabled;

  if (!state.audioEnabled) {
    state.lastPronouncedCardId = '';
    window.speechSynthesis.cancel();
  }

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
  elements.audioToggle.classList.toggle('is-on', state.audioEnabled);
  elements.audioToggle.disabled = isEmpty || !canSpeak();
  elements.audioToggle.setAttribute('aria-checked', String(state.audioEnabled));
  elements.audioToggle.setAttribute('aria-label', state.audioEnabled ? 'Turn pronunciation off' : 'Turn pronunciation on');
  elements.card.classList.toggle('is-flipped', state.flipped);
  elements.card.setAttribute(
    'aria-label',
    isEmpty
      ? 'No favorite cards yet.'
      : state.flipped
        ? `${card.back}. Tap to show French.`
        : `${card.front}. Tap to show English.`
  );

  speakCurrentCard();
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
  elements.audioToggle.addEventListener('click', toggleAudio);

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
