function FooterComponent(){
    return `
        <div class="container">
            <h1>Footer</h1>
        </div>
    `;
}
const footers = document.getElementsByTagName("FooterComponent");
for(var i=0;i<footers.length;i++){
    footers[i].innerHTML = FooterComponent();
}