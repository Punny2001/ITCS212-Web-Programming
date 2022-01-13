function doIt()
{
    // Variables for HTML element DOM references.
    var num1Ref, num2Ref, num3Ref, answerRef; 
    
    // Variables declarations.
    var num1, num2, num3, answer; 
    
    // Get references to DOM elements.
    num1Ref = document.getElementById("num1");
    num2Ref = document.getElementById("num2");
    num3Ref = document.getElementById("num3");
    answerRef = document.getElementById("answer");

    // Convert strings to numbers, e.g., "21" to 21.
    num1 = Number(num1Ref.value);
    num2 = Number(num2Ref.value);
    num3 = Number(num3Ref.value);
    
    // Perform addition operation then assignment operation
    answer = num1 + num2 + num3; 

    // Update "answer" label DOM to show result using "innerText" property. innerText is a property of label tag.
    answerRef.innerText = answer;
    
    if (answer >= 0)
    {
        // Value of answer is positive.
        // Set the class of the answer label to "positive".
        answerRef.className = "positive";
    }
    else
    {
        // Value of answer is not positive, i.e., negative.
        // Set the class of the answer label to "negative".
        answerRef.className = "negative";
    }
    var oe = document.getElementById("OE1");
    if(answer%2==0){
        oe.innerHTML = "(even)";
        oe.className = "even";
    }
    else{
        oe.innerHTML = "(odd)";
        oe.className = "odd";
    }
}
    
function doItSub()
{
    // Variables for HTML element DOM references.
    var num4Ref, num5Ref, num6Ref, answerRef; 
    
    // Variables declarations.
    var num4, num5, num6, answer; 
    
    // Get references to DOM elements.
    num4Ref = document.getElementById("num4");
    num5Ref = document.getElementById("num5");
    num6Ref = document.getElementById("num6");
    answerRef = document.getElementById("answersub");

    // Convert strings to numbers, e.g., "21" to 21.
    num4 = Number(num4Ref.value);
    num5 = Number(num5Ref.value);
    num6 = Number(num6Ref.value);
    
    // Perform addition operation then assignment operation
    answer = num4 - num5 - num6; 

    // Update "answer" label DOM to show result using "innerText" property. innerText is a property of label tag.
    answerRef.innerText = answer;
    
    if (answer >= 0)
    {
        // Value of answer is positive.
        // Set the class of the answer label to "positive".
        answerRef.className = "positive";
    }
    else
    {
        // Value of answer is not positive, i.e., negative.
        // Set the class of the answer label to "negative".
        answerRef.className = "negative";
    }
    var oe = document.getElementById("OE2");
    if(answer%2==0){
        oe.innerHTML = "(even)";
        oe.className = "even";
    }
    else{
        oe.innerHTML = "(odd)";
        oe.className = "odd";
    }
}
    
    

    
