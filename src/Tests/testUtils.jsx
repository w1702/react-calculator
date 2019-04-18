export default class TestUtils{
    static assertEquals(testMessage, methodToBeTested, expectedOutput){
        console.log(testMessage + "(" + ((methodToBeTested === expectedOutput)? "Passed" : "Failed") + ")");
    }
}
