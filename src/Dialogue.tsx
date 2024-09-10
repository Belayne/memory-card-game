import rickFace from "/src/assets/rick_face.png";
import mortyFace from "/src/assets/morty_face.png"

interface Dialogue {
    name: string,
    lines: Array<string>,
    image: string
}

const startDialogue: Dialogue[] = [
    {
        name: "Rick",
        lines: [
            `Alright, Morty, pay attention—this game’s as simple as it gets.`,
            `You see those cards?`,
            `Your job is to click on ‘em.`,
            `But only the ones you haven’t clicked before.`
        ],
        image: rickFace
    },
    {
        name: "Morty",
        lines: [
            "Wait, Rick, that’s it? Just click the cards?"
        ],
        image: mortyFace
    },
    {
        name: "Rick",
        lines: [
            `Exactly!`,
            `Each new card you click boosts your score.`,
            `But if you click one twice, it’s all over, Morty.`,
            `No second chances, no retries.`,
            'Just kaboom—world’s done for.'
        ],
        image: rickFace
    },
    {
        name: "Morty",
        lines: [
            `Why does it always have to be so stressful, Rick?!`,
        ],
        image: mortyFace
    },
    {
        name: "Rick",
        lines: [
            'Just click the damn cards and stop whining Morty.'
        ],
        image: rickFace
    }
  ]

  export {
    startDialogue,
  }