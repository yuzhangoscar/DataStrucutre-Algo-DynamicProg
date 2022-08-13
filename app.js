let outerReferenceToInnerFunction = null;

function outerFunction() {
    const varLocalToOuterFunction = 9.9;

    function innerFunction() {
        console.log(varLocalToOuterFunction);
    }

    outerReferenceToInnerFunction = innerFunction;
}

outerFunction();
outerReferenceToInnerFunction();
