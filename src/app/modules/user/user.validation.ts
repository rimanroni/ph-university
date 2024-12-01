import { z } from "zod";

const userValidationSchema = z.object({
 
    password : z.string({
        invalid_type_error : "password type must be string"
    }).max(20,{message:"password can't be 20 character"}).optional()

 
});


export const userValidation =  {
    userValidationSchema
}

