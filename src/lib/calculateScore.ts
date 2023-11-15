import qjson from "../questions.json";
import {useResultStore} from "@/lib/store.ts";
import {Categories} from "@/lib/types.ts";

export default function Calculate(res: { [p: string]: FormDataEntryValue }) {

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const questionsjson: { question: string, type: "N" | "P", category: Categories }[] = qjson
    const {updateScore, result, updateRemark} = useResultStore()

    const scoreMappings = {
        "Strongly Disagree": {P: 1, N: 5},
        "Disagree": {P: 2, N: 4},
        "Neutral": {P: 3, N: 3},
        "Agree": {P: 4, N: 2},
        "Strongly Agree": {P: 5, N: 1},
    };

    Object.keys(res).forEach((key) => {
        const score = scoreMappings[res[key]];
        if (score) {
            const {type, category} = questionsjson[+key];
            updateScore(category, score[type]);
        }
    });

    // give remarks based on the score
    const levelsMap: Record<Categories, Record<"M" | "F", Array<Array<number>>>> =
        {
            Neuroticism: {
                M: [[0, 6], [7, 13], [14, 21], [22, 29], [30, Infinity]],
                F: [[0, 8], [9, 16], [17, 25], [26, 32], [33, Infinity]]
            },
            Extraversion: {
                M: [[0, 18], [19, 24], [25, 30], [31, 36], [37, Infinity]],
                F: [[0, 19], [20, 25], [26, 30], [31, 36], [37, Infinity]]
            },
            Openness: {
                M: [[0, 18], [19, 23], [24, 30], [31, 36], [37, Infinity]],
                F: [[0, 18], [19, 23], [24, 30], [31, 36], [37, Infinity]]
            },
            Agreeableness: {
                M: [[0, 24], [25, 29], [30, 35], [36, 40], [41, Infinity]],
                F: [[0, 26], [27, 31], [32, 36], [37, 41], [42, Infinity]]
            },
            Conscientiousness: {
                M: [[0, 25], [26, 30], [31, 37], [38, 43], [44, Infinity]],
                F: [[0, 26], [27, 32], [33, 38], [39, 44], [45, Infinity]]
            }
        }

    const remarksMap: Record<Categories, { "Below Average": string, "Average": string, "Above Average": string }> = {
        Neuroticism: {
            "Below Average": "Tends to be secure,hardy and generally relaxed even under stressful conditions.",
            "Average": "Tends to be generally calm and able to deal with stress,but sometimes experiences feelings of guilt,anger and sadness.",
            "Above Average": "Tends to be sensitive, emotional and prone to experience feelings.",
        },
        Extraversion: {
            "Below Average": "Tends to be introverted,reserved,serious; prefers to be alone or with a few close friends.",
            "Average": "Tends to be moderate in activity and enthusiasm.Enjoy the company of others but also value privacy.",
            "Above Average": "Tends to be extraverted,outgoing,active, and high-spirited; prefer to be around people most of the time.",
        },
        Openness: {
            "Below Average": "Tends to be down-to-earth,practical,traditional and pretty much set in your ways.",
            "Average": "Tends to be practical but willing to consider new ways of doing things; seek balance between the old and new.",
            "Above Average": "Tends to be open to new experiences; have broad interests and very imaginative.",
        },
        Agreeableness: {
            "Below Average": "Tends to be hardheaded,skeptical,proud and competitive; tend to express anger directly.",
            "Average": "Tends to be generally warm, trusting, and agreeable, but you can sometimes be stubborn and competitive.",
            "Above Average": "Tends to be compassionate, good natured,and eager to cooperate and avoid conflict.",
        },
        Conscientiousness: {
            "Below Average": "Tends to be easygoing, not very well organized,sometimes careless; prefer not to make plans.",
            "Average": "Tends to be dependable,moderately well-organized; generally have clear goals but are able to set you work aside.",
            "Above Average": "Tends to be conscientious and well-organized; have high standards and always strive to achieve your goals.",
        }
    }

    
}