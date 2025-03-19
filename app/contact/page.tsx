// import { Moon, Sun } from "lucide-react";
// import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function contact() {
    return (
        <div className="p-5 pb-10">
            <h1 className="text-center text-[24px] hidden sm:flex">contact us</h1>
            <form action="" className="mx-auto mt-10 sm:w-[50%] w-full h-auto">
                <div className="grid grid-cols-2 gap-x-10 sm:gap-x-0">
                    <div className="flex flex-col ">
                        <label htmlFor="" className="font-bold">First Name</label>
                        <input type="text" placeholder="First Name" className="border p-1 outline-none bg-[#F4F4F4] rounded-[10px] sm:w-[250px] placeholder:p-1 placeholder:text-[#A9A9A9] " />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="" className="font-bold">Last Name</label>
                        <input type="text" placeholder="Last Name"  className="border p-1 outline-none bg-[#F4F4F4] rounded-[10px] sm:w-[250px] placeholder:p-1 placeholder:text-[#A9A9A9] "/>
                    </div>
                </div>

                <div className="pt-5  flex flex-col">
                    <label htmlFor="" className="font-bold">Email Address</label>
                    <input type="text" placeholder="Email Address" className="border p-1 outline-none bg-[#F4F4F4] rounded-[10px] sm:w-[565px] placeholder:p-1 placeholder:text-[#A9A9A9] "/>
                </div>
               
                <div className="flex flex-col pt-5">
                    <label htmlFor="" className="font-bold">Your Message</label>
                    <textarea name="" id=""  className="border p-1 outline-none bg-[#F4F4F4] rounded-[10px] sm:w-[565px] placeholder:p-1 placeholder:text-[#A9A9A9] "  placeholder="Textarea"></textarea>
                </div>

                <div className="flex items-center space-x-2 mt-5">
                     <Switch id="airplane-mode" />
                     <label htmlFor="airplane-mode">I agree to the T&C</label>
                </div>
                <button className="border sm:w-[565px] w-[350px] rounded-[10px] mt-5 cursor-pointer bg-[#555555] text-white p-1 uppercase">send message</button>
            </form>
        </div>
    )
}
// #A9A9A9