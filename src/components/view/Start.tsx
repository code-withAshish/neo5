import {useNavigate} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";

export default function Start() {
    const navigate = useNavigate();
    return (
        // <div className={"flex flex-col items-center justify-center h-screen space-y-16 -m-10"}>
        //     <h1 className={"font-extralight text-center text-6xl m-10"}>Neo5 Personality Test</h1>
        //     <div className={"flex flex-col gap-4 min-w-[400px]"}>
        //         <Input placeholder={"Please enter your name"}/>
        //         <Select>
        //             <SelectTrigger className={"p-4"}>
        //                 <SelectValue placeholder={"Please select your gender"}/>
        //             </SelectTrigger>
        //             <SelectContent>
        //                 <SelectItem value={"M"}>Male</SelectItem>
        //                 <SelectItem value={"F"}>Female</SelectItem>
        //             </SelectContent>
        //         </Select>
        //         <Button onClick={() => (navigate("/test"))}>Start Test</Button>
        //     </div>
        // </div>
        <div>
            <h1>Start</h1>
            <Button onClick={() => navigate("/test")}>Start Test</Button>
        </div>
    )
}
