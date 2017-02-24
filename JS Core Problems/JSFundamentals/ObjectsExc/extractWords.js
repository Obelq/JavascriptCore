function extractor(input) {
    let regex =/[a-z]+/g;
    let text=input.join(' ').toLowerCase();
    let obj=new Set();
    let match;
    while(match=regex.exec(text)){
        if(!obj.has(match[0])){
            obj.add(match[0]);
        }
    }
    console.log([...obj.values()].join(', '));
}
extractor([`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui. 
Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla. 
Vestibulum dolor diam, dignissim quis varius non, fermentum non felis. 
Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut. 
Morbi in ipsum varius, pharetra diam vel, mattis arcu. 
Integer ac turpis commodo, varius nulla sed, elementum lectus. 
Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.
`]);