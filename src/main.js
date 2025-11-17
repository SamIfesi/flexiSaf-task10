import "./style.css";
const paragraph = [
  // 100 paragraphs
  "If a dog and cat had a baby together that grew up and worked a desk job he'd be a Cog in the machine",
  "I'm still upset that Tie Domi didn't name his child Tyson",
  "A tagline for a car company that prides itself on its morals and ethics: Take the High Road",
  'Logan Broger is "amazing" and a "wonderful boy" according to Logan\'s mom. Felinamiss',
  "You know the Grammys are a joke when Future doesn't win Best Everything",
  "If you were a member of the Bloods and became paralyzed do you then become a member of the Crips?",
  "Curling is the best sport named after something you do to your hair",
  "You say potatoe, I say starchy carbs",
  "If you work for an ad agency and getting paid for it aren't you the one who is being influenced by advertising?",
  "Are there Out-of-Stock photos? Gafuffle",
  "I think of a lot of good ideas when going to the bathroom - I guess I have a real stream of consciousness",
  "Most streets are two-way streets...why does that make love so special?",
  "A tagline for an airline: Take the High Road",
  "Rumour has it targeted online advertising was developed because the internet was upset that you could read it but it couldn't read you. Trepidelicious",
  "This is a true fact: I never had a fear of heights until I fell off a roof",
  "A tagline for a special highway that is easy to navigate while under the influence of drugs: Take the High Road",
  "I'm the only person in the world with my name",
  "We need more werkin and less twerkin if you ask me. Balooby",
  "If Fantasy Hockey actually lived up to its name, every team would have Henrik Lundqvist and Joffrey Lupul on it",
  "I'm in a band that does Metallica covers with our private parts - it's called Myphallica. Petrovache",
  "Smiling could easily be misinterpreted for showing your teeth to someone because they said something that made you happy",
  "We say we are walking the dog, but the dog always leads",
  "Tim Horton was a hockey player but is the name of a coffee chain, which means my dream of a goat sanctuary being my legacy is not unrealistic",
  "I started a sensory deprivation chamber business - it involves really dark curtains, ear plugs, and a sleeping mask",
  "Do we make money or does money make us? Chezwich",
  "Pantone is a colour but also the singular version of pants",
  "Logan Ipsum will loop at some point",
  "Thank you for using my words in your work",
  'You should "listen to my mixtape" (check out the rest of my portfolio)',
  "I have never known a Jack that was in good enough shape to name bodybuilding after him",
  "Twitter is the rice of social media",
  "INjuries always keep you OUT of things. Visticula",
  "For the name of an act as serious as killing someone, assassination literally translates to buttbuttination",
  "Why don't we call glasses duocles",
  "If you wake up with a giant zit, you are really facing your fears when you look in the mirror",
  "Cemeteries are just garbage dumps filled with humans",
  "I have a moral code, but I haven't figured out how to read it yet",
  "I bet most serial killers play the drums",
  "To Catch A Predator would have been a great name for a Steve Irwin show. Mintslavicia",
  "If the word kerning is kerned poorly, it kind of looks like learning - which is appropriate because both are important",
  "North America should be called Russia since people are always moving so fast. Gralitica",
  "I don't need a big house, just a two-floor condo - you could say I have lofty expectations",
  "If you microwave a salad, does it become a warm lie?",
  "The plural of moose should be meese, just to keep geese company",
  "If you dream in color, does that mean your brain has a graphics card?",
  "I tried to make a pun about construction, but I'm still working on it",
  "Why do we call it a building if it's already built?",
  "If you jog backward, are you running from your problems?",
  "My phone autocorrected 'existential crisis' to 'excellent crisis' and now I’m confused but optimistic",
  "If you eat a clock, it's time-consuming",
  "The word 'queue' is just a Q followed by four silent letters waiting in line",
  "If you spill coffee on your shirt, is that a brew stain?",
  "I named my Wi-Fi 'FBI Surveillance Van' and now my neighbors behave better",
  "If you put a chameleon on a mirror, what does it reflect?",
  "I tried to write a book on reverse psychology, but no one bought it",
  "If you clean a vacuum, do you become the vacuum cleaner?",
  "I once saw a cloud shaped like regret",
  "If you yell 'plot twist' during an argument, it becomes a drama",
  "My shadow has commitment issues—it only shows up when the sun does",
  "If you whisper to a plant, does it grow secrets?",
  "I tried to organize a hide-and-seek tournament, but good players are hard to find",
  "If you put a hat on a hat, is that a hat trick?",
  "I named my pet rock 'Rockefeller'—he’s rich in personality",
  "If you stare at a fridge long enough, it starts to look like a cold friend",
  "I once mistook a cactus for a hug—it was a prickly situation",
  "If you wear socks with sandals, are you rebelling or evolving?",
  "I tried to make a pun about elevators, but it had its ups and downs",
  "If you write a poem about silence, is it just a blank page?",
  "I once gave a motivational speech to my laundry—it still didn’t fold itself",
  "If you put a bookmark in a dictionary, is that a word trap?",
  "I tried to invent a new color, but it just looked like confusion",
  "If you name your car 'Responsibility', you can say you're taking responsibility everywhere",
  "I once asked Siri for life advice—she told me to update myself",
  "If you wear a cape to work, does that make you a professional hero?",
  "I tried to meditate but my thoughts had other plans",
  "If you put glitter on your problems, do they sparkle or just stick?",
  "I once gave my mirror a pep talk—it reflected well",
  "If you eat alphabet soup, do your words become stronger?",
  "I tried to make a playlist of silence—it was a hit at the mime convention",
  "If you name your plants after emotions, watering them becomes therapy",
  "I once mistook a metaphor for a real door—it was a poetic mistake",
  "If you dance like nobody’s watching, make sure nobody’s recording",
  "I tried to write a joke about time travel, but you’ve already heard it",
  "If you put a pun in a blender, does it become word soup?",
  "I once gave my GPS a compliment—it recalculated with pride",
  "If you wear pajamas to a meeting, are you dreaming professionally?",
  "I tried to build a bridge between ideas—it collapsed under overthinking",
  "If you name your fears, do they RSVP?",
  "I once asked my echo for advice—it repeated my mistakes",
  "If you put a comma in your life, does it pause or complicate?",
  "I tried to make a pun about punctuation, but it was too period-specific",
  "If you call your diary 'The Truth', does it become a confession booth?",
  "I once gave my calendar a hug—it felt like a scheduled breakdown",
  "If you put a pun in a poem, does it rhyme with irony?",
  "I tried to write a haiku about chaos—it turned into a novel",
  "If you name your inbox 'Pandora', opening it becomes mythological",
  "I once mistook a metaphor for a map—it led me to confusion",
  "If you wear irony like a jacket, does it keep you warm or misunderstood",
  "I tried to make a pun about mirrors, but it reflected poorly",
  "If you name your to-do list 'Adventure', procrastination becomes exploration",
];
const q = (id) => document.getElementById(id);
const selectAll = (cls) => document.querySelectorAll(cls);

const opts = selectAll("a");
const copy = q("copy");
const output = q("output");
const quantity = q("quantity");
const send = q("send");

opts.forEach((opt) => {
  opt.addEventListener("click", (e) => {
    e.preventDefault();
    opts.forEach((opt) => {
      opt.classList.remove("active");
    });
    opt.classList.add("active");
  });
});

copy.addEventListener("click", (e) => {
  e.preventDefault();
  try {
    navigator.clipboard.writeText(output.innerText);
    alert("Text copied to clipboard!");
  } catch (e) {
    console.error("Failed to copy text: ", e);
  }
});

function generateText() {
  const selected = document.querySelector("a.active");
  const type = selected.dataset.type;
  const value = parseInt(quantity.value);

  let result = "";
  if (type === "sentences") {
    for (let i = 0; i < value; i++) {
      result += paragraph[Math.floor(Math.random() * paragraph.length)] + " ";
    }
  } else if (type === "paragraphs") {
    for (let i = 0; i < value; i++) {
      let para = "";
      for (let j = 0; j < 5; j++) {
        para += paragraph[Math.floor(Math.random() * paragraph.length)] + " ";
      }
      result += para.trim() + "\n\n";
    }
  } else if (type === "words") {
    const wordsArray = paragraph.join(" ").split(" ");
    for (let i = 0; i < value; i++) {
      result += wordsArray[Math.floor(Math.random() * wordsArray.length)] + " ";
    }
  }
  output.innerText = result.trim();
}

send.addEventListener("click", (e) => {
  e.preventDefault();
  generateText();
});
