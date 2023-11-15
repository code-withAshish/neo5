import {create} from "zustand";
import type {CalculatedResultState} from "./types.ts"

export const useResultStore = create<CalculatedResultState>()((set) => ({
    name: null,
    gender: null,
    result: {
        "Agreeableness": {score: 0, remark: ""},
        "Conscientiousness": {score: 0, remark: ""},
        "Extraversion": {score: 0, remark: ""},
        "Neuroticism": {score: 0, remark: ""},
        "Openness": {score: 0, remark: ""}
    },
    setName: (name) => set(() => ({name})),
    setGender: (gender) => set(() => ({gender})),
    updateScore: (category, score) => set((state) => ({
        result: {
            ...state.result,
            [category]: {
                score: state.result[category].score + score,
            }
        }
    })),
    updateRemark: (category, remark) => set((state) => ({
        result: {
            ...state.result,
            [category]: {
                ...state.result[category],
                remark: remark
            }
        }
    })),
}))

