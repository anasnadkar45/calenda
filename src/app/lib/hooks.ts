import { redirect } from "next/navigation";
import { auth } from "./auth";

export const requireUser = async () => {
    const session = await auth();
    if(!session?.user){
        return redirect('/')
    }

    return session;
}