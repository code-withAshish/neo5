import quesJson from "../../questions.json";
import {Label} from "@/components/ui/label.tsx";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group.tsx";
import {Button} from "@/components/ui/button.tsx";
import Calculate from "@/lib/calculateScore.ts";
import React from "react";

export default function Question() {
    const optionsValue = ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const data = Object.fromEntries(formData.entries())
        console.log(Calculate(data))
    }
    return (
        <>
            <div className={"container space-y-16 p-4"}>
                <h1 className={"font-extralight text-center text-6xl"}>Neo5 Personality Test</h1>
                <form className={"space-y-4"} onSubmit={handleSubmit}>
                    {quesJson.map((q, index) => (
                        <div className={"flex flex-col gap-4 p-4 bg-slate-200 shadow-md rounded-md"} key={index}>
                            <h2 className={"text-3xl font-medium p-2"}>{index + 1}. {q.question}</h2>
                            <RadioGroup className={"flex flex-col gap-6 mx-10"} name={String(index)}>
                                {optionsValue.map((option, i) => (
                                    <div className={"flex items-center space-x-2"} key={i}>
                                        <RadioGroupItem value={option} id={option} className={"h-5 w-5"}/>
                                        <Label htmlFor={option}>{option}</Label>
                                    </div>
                                ))}
                            </RadioGroup>
                        </div>
                    ))}
                    <Button className={"w-full"} type={"submit"}>Submit</Button>
                </form>
            </div>
        </>
    )
}