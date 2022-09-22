import {jest} from "@jest/globals"

import voucherRepository from "../../src/repositories/voucherRepository";


describe("Testes do voucherService",()=>{

    it("Deveria criar um voucher ", async ()=>{
        
        const code = "AEtr532"
        const discount = 50

    
        jest
        .spyOn(voucherRepository,"getVouvherByCode").mockResolvedValue({
            code : code,
            discount:discount
        })
       

        
    });





})