import { CalculateSum } from "./f1";
import { loadFeature,defineFeature } from "jest-cucumber"

const feature = loadFeature('/home/adsministrator/Myfolder/jestcucumber/src/features/f1.feature');

defineFeature(feature,test=>{
    test("Make Sum",({given,when,then})=>{

        let calsum = new CalculateSum();
        given("Define two number",()=>{
            calsum.setNumber(1,2);
        })

        when("Calculate two number of sum",()=>{
            calsum.calSum();
        })

        then("it should return sum of two number",()=>{
            expect(calsum.getCalSum()).toBe(3);
        })
    })
})