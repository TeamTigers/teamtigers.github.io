$(function() {
    String.prototype.toProperCase = function () {
        return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };

    $.getJSON("../data/index.json", function(data) {
        let dom = '';
        
        data.forEach(d => {
            let skills = '';
            
            Object.keys(d.stack).forEach(skill => {
                skills = skills.concat(`
                    <b>${skill.toProperCase()}:</b> ${d.stack[skill]}
                    <br>
                `);
            });
    
            dom = dom.concat(`
                <li class="collection-item avatar">
                    <img src="${d.dp}" alt="" class="circle">
                    <span class="title"><b>${d.name}</b></span>
                    <br><br>
                    <p>
                        ${skills}
                    </p>
                </li>
            `);
        });
    
        $('#collection').html(dom);
    });
    
    
});