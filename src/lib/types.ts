export type Categories = "Neuroticism" | "Extraversion" | "Openness" | "Agreeableness" | "Conscientiousness"

export interface CalculatedResultState {
    name: string | null,
    gender: "M" | "F" | null,
    result: Record<Categories, { score: number, remark: string }>,
    setName: (name: CalculatedResultState["name"]) => void,
    setGender: (gender: CalculatedResultState["gender"]) => void,
    updateScore: (category: Categories, score: number) => void,
    updateRemark: (category: Categories, remark: string) => void,
}