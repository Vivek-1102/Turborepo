import { Button } from "@repo/ui/button";
import {BACKEND_URL} from "@repo/common/config";

export const LoadButton = ()=>{
    return <>
    <Button appName="react-app" className="Hello" >

     hi there
     {BACKEND_URL}
     </Button>
    </>
}