const decks = [
  {
    id: 'survival',
    name: 'Survival Italian',
    cards: [
      { front: 'ciao', back: 'hello / goodbye', note: 'Informal greeting.' },
      { front: 'buongiorno', back: 'good morning / good day' },
      { front: 'buonasera', back: 'good evening' },
      { front: 'per favore', back: 'please' },
      { front: 'grazie', back: 'thank you' },
      { front: 'prego', back: "you're welcome / go ahead" },
      { front: 'scusi', back: 'excuse me', note: 'Formal or polite.' },
      { front: 'mi dispiace', back: "I'm sorry" },
      { front: 'non capisco', back: "I don't understand" },
      { front: 'parla inglese?', back: 'do you speak English?' },
      { front: 'quanto costa?', back: 'how much does it cost?' },
      { front: 'dov\'e il bagno?', back: 'where is the bathroom?' }
    ]
  },
  {
    id: 'food',
    name: 'Food and Cafe',
    cards: [
      { front: 'un caffe', back: 'an espresso / coffee' },
      { front: 'un cappuccino', back: 'a cappuccino' },
      { front: 'acqua naturale', back: 'still water' },
      { front: 'acqua frizzante', back: 'sparkling water' },
      { front: 'il conto', back: 'the check / bill' },
      { front: 'vorrei...', back: 'I would like...' },
      { front: 'senza', back: 'without' },
      { front: 'con', back: 'with' },
      { front: 'pane', back: 'bread' },
      { front: 'vino', back: 'wine' },
      { front: 'gelato', back: 'ice cream / gelato' },
      { front: 'delizioso', back: 'delicious' }
    ]
  },
  {
    id: 'verbs',
    name: 'Core Verbs',
    cards: [
      { front: 'essere', back: 'to be' },
      { front: 'avere', back: 'to have' },
      { front: 'andare', back: 'to go' },
      { front: 'fare', back: 'to do / to make' },
      { front: 'volere', back: 'to want' },
      { front: 'potere', back: 'to be able to / can' },
      { front: 'sapere', back: 'to know' },
      { front: 'dire', back: 'to say / tell' },
      { front: 'vedere', back: 'to see' },
      { front: 'mangiare', back: 'to eat' },
      { front: 'bere', back: 'to drink' },
      { front: 'pagare', back: 'to pay' }
    ]
  }
];

const state = {
  deckId: decks[0].id,
  order: decks[0].cards.map((_, index) => index),
  position: 0,
  flipped: false
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
  reset: document.querySelector('#reset-button')
};

function currentDeck() {
  return decks.find((deck) => deck.id === state.deckId) ?? decks[0];
}

function currentCard() {
  const deck = currentDeck();
  return deck.cards[state.order[state.position]];
}

function setDeck(deckId) {
  const deck = decks.find((candidate) => candidate.id === deckId) ?? decks[0];
  state.deckId = deck.id;
  state.order = deck.cards.map((_, index) => index);
  state.position = 0;
  state.flipped = false;
  render();
}

function move(offset) {
  const deck = currentDeck();
  state.position = (state.position + offset + deck.cards.length) % deck.cards.length;
  state.flipped = false;
  render();
}

function shuffle() {
  for (let index = state.order.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [state.order[index], state.order[swapIndex]] = [state.order[swapIndex], state.order[index]];
  }
  state.position = 0;
  state.flipped = false;
  render();
}

function toggleFlip() {
  state.flipped = !state.flipped;
  render();
}

function render() {
  const deck = currentDeck();
  const card = currentCard();
  elements.count.textContent = `${state.position + 1} / ${deck.cards.length}`;
  elements.frontText.textContent = card.front;
  elements.frontNote.textContent = card.note ?? 'Tap the card to reveal the answer.';
  elements.backText.textContent = card.back;
  elements.backNote.textContent = card.note ?? deck.name;
  elements.card.classList.toggle('is-flipped', state.flipped);
  elements.card.setAttribute('aria-label', state.flipped ? `${card.back}. Tap to show Italian.` : `${card.front}. Tap to show English.`);
}

function boot() {
  elements.deckSelect.replaceChildren(
    ...decks.map((deck) => {
      const option = document.createElement('option');
      option.value = deck.id;
      option.textContent = deck.name;
      return option;
    })
  );

  elements.deckSelect.addEventListener('change', (event) => setDeck(event.target.value));
  elements.card.addEventListener('click', toggleFlip);
  elements.flip.addEventListener('click', toggleFlip);
  elements.previous.addEventListener('click', () => move(-1));
  elements.next.addEventListener('click', () => move(1));
  elements.shuffle.addEventListener('click', shuffle);
  elements.reset.addEventListener('click', () => setDeck(state.deckId));

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
