function linkDocuments() {
    const htmlHead = document.getElementsByTagName("head")[0];

    //link to css document
    var cssDocument = document.createElement("link");
    cssDocument.rel = "stylesheet";
    cssDocument.type = "text/css";
    cssDocument.href = "build-navbar.css";

    htmlHead.appendChild(cssDocument);
}

function buildNavbar() {
    const navBar = document.querySelector("#navbar");

    var navlinks = document.createElement ("ul");
    navlinks.setAttribute("id","navlinks");
    navBar.appendChild(navlinks);

    for (let i = 0; i < pages.length; i++){
        if (pages[i].header){
            var linkContainer = document.createElement("li");
            linkContainer.setAttribute("class","navlink");
            linkContainer.setAttribute("id",pages[i].title);

            var link = document.createElement("a");
            link.setAttribute("href",pages[i].url);
            link.innerHTML = pages[i].title;

            linkContainer.appendChild(link);
            navlinks.appendChild(linkContainer);
        } else {
            

                //test if header dropdown already exists or not
            if (document.querySelector(`#${pages[i].subHeader}-dropdown`)){
                    //header dropdown exists
                var headerDropDown = document.querySelector(`#${pages[i].subHeader}-dropdown`)

                var dropdownItemContainer = document.createElement("li");
                dropdownItemContainer.setAttribute("class","navlink");
                headerDropDown.appendChild(dropdownItemContainer);

                var dropdownItemLink = document.createElement("a");
                dropdownItemLink.innerHTML = pages[i].title;
                dropdownItemLink.href = pages[i].url;
                dropdownItemContainer.appendChild(dropdownItemLink);

            } else {
                    //header dropdown doesn't exist
                var headerElement = document.querySelector(`#${pages[i].subHeader}`);
                var headerTitle = document.querySelector(`#${pages[i].subHeader} a`).innerHTML.toString();
                var headerURL = document.querySelector(`#${pages[i].subHeader} a`).getAttribute("href").toString();

                    //clear header element
                headerElement.innerHTML = "";
                headerElement.id += "-container"

                    //add list to header element
                var headerDropDown = document.createElement("ul");
                headerDropDown.setAttribute("class","header-dropdown-list");
                headerDropDown.setAttribute("id",`${pages[i].subHeader}-dropdown`);
                headerElement.appendChild(headerDropDown);

                    //recreate header item
                
                var headerItemContainer = document.createElement("li");
                headerItemContainer.setAttribute("class","navlink");
                headerItemContainer.setAttribute("id",headerTitle);
                headerDropDown.appendChild(headerItemContainer);

                var headerItemLink = document.createElement("a");
                headerItemLink.innerHTML = headerTitle;
                headerItemLink.href = headerURL;
                headerItemContainer.appendChild(headerItemLink);
                console.log(headerItemLink.clientWidth);

                    //set dropdown box dimensions

                
                headerDropDown.style.height = `${document.querySelector(`#${pages[i].subHeader}`).clientHeight}px`;
                console.log(`${document.querySelector(`#${pages[i].subHeader}`).innerHTML}`);
                //headerDropDown.style.width = `${document.querySelector(`#${pages[i].subHeader}`).clientWidth}px`;

                    //add new item to dropdown

                var dropdownItemContainer = document.createElement("li");
                dropdownItemContainer.setAttribute("class","navlink");
                headerDropDown.appendChild(dropdownItemContainer);

                var dropdownItemLink = document.createElement("a");
                dropdownItemLink.innerHTML = pages[i].title;
                dropdownItemLink.href = pages[i].url;
                dropdownItemContainer.appendChild(dropdownItemLink);
            }
            
            

            
        }
    }    
}

linkDocuments();
buildNavbar();