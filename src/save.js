let stateJSON;
let stateBlob;
let stateBlobURL;
let invisLink;

stateJSON = Calc.getState();
stateBlob=new Blob([JSON.stringify(stateJSON)], {type: "application/json"});
stateBlobURL=URL.createObjectURL(stateBlob);
invisLink = document.createElement('a');
invisLink.href = stateBlobURL;
invisLink.download="graph.json";
invisLink.style="display:none;"
invisLink.click();
window.setTimeout(function () {
    URL.revokeObjectURL(stateBlobURL)
}, 60*1000);

