function Shop(name) {
    this.name = name;
    var kindsOfPeaches = [];
    var idPeach = 0;
    this.addPeach = function (peach) {
        if (peach instanceof Peach) {
            idPeach++;
            peach.addID(this, idPeach);
            kindsOfPeaches.push(peach);
        } else {
            console.log("The peach is not right.");
        }
    }
    this.showIDs = function () {
        kindsOfPeaches.forEach(peach => console.log(peach.getID()));
    }
    this.removePeach = function (id) {
        if (kindsOfPeaches.find(peach => peach.getID() == id)) {
            kindsOfPeaches.splice(kindsOfPeaches[id], 1);
        } else {
            console.log("There is not a peach with that ID.");
        }
    }
    this.displayPeaches = function () {
        document.write(
            `<div id="container">
                <h2>Kinds of Peaches</h2>`);
            kindsOfPeaches.forEach(peach => document.write(`<div>
                    <img src="${peach.getPic()}" alt="${peach.name}">
                    <p>${peach.name}</p>
                    <p>${peach.getPrice()}лв.</p></div>`));
            document.write(`</div>`);
    }
    this.filter = function (param) {
        var filteredPeaches = kindsOfPeaches.filter(peach => peach.name.indexOf(param) !== -1);
        document.write(
        `<div id="container">
            <h2>Kinds of Peaches</h2>`);
        filteredPeaches.forEach(peach => document.write(`<div>
                <img src="${peach.getPic()}" alt="${peach.name}">
                <p>${peach.name}</p>
                <p>${peach.getPrice()}лв.</p></div>`));
        document.write(`</div>`);
    }
    this.sortBy = function (param) {
        if (param === "price") {
            kindsOfPeaches.sort((peach1, peach2) => peach1.getPrice() - peach2.getPrice());
        } else {
            if (param === "id") {
                kindsOfPeaches.sort((peach1, peach2) => peach1.getID() - peach2.getID());
            } else {
                if (param === "name") {
                    kindsOfPeaches.sort((peach1, peach2) => peach1.name < peach2.name);
                }
            }
        }
    }
    this.showDetails = function(id){
        if (kindsOfPeaches.find(peach => peach.getID()===id)) {
            var peachIndex = kindsOfPeaches.findIndex(peach => peach.getID()===id);
            console.log(peachIndex);
            document.write(
                `<div id="peach-details">
                <img src="${kindsOfPeaches[peachIndex].getPic()}" alt="${kindsOfPeaches[peachIndex].name}">
                <h3>${kindsOfPeaches[peachIndex].name}</h3>
                <p>${kindsOfPeaches[peachIndex].getDescription()}</p>
                </div>`
            );
        }else{
            console.log("Not valid ID.");
        }
    }
}

function Peach(name, price, pic, description) {
    if (name && typeof name === "string" && name.length !== 0) {
        this.name = name;
    } else {
        console.log("Wrong name.")
    }
    if (pic && typeof pic === "string" && pic.length !== 0 && pic.lastIndexOf(".jpg") !== -1) {
        var pic = pic;
    } else {
        console.log("Not provided a right url for the picture.");
    }
    if (description && typeof name === "string" && description.length !== 0) {
        var description = description;
    } else {
        console.log("The description is wrong.");
    }
    if (price && typeof price == "number" && price !== 0) {

    }
    var id;
    this.addID = function (shop, givenID) {
        if (shop instanceof Shop) {
            id = givenID;
        } else {
            consolo.log("You are not the owner of this peach.")
        }
    }
    this.getPrice = function () {
        return price;
    }
    this.getID = function () {
        return id;
    }
    this.getPic = function(){
        return pic;
    }
    this.getDescription = function(){
        return description;
    }
}
var praskovite = new Shop("Прасковите");
var rishMay = new Peach("Риш Мей", 5.00, "pics/rish may.jpg", `Дървото е силно и плодородно с нормален цъфтеж до средно ранен.
Плод-голям диаметър,жълта месеста част с много висока плътност,здраво закрепване за дървото.Много добро оцветяване-90% до 100% от плода.Изключително красива външност за времето на зреене,един от най-рано зреещите сортове праскови .По вкусови качества превъзхожда другите праскови зреещи през месец май.`);
var mayKrest = new Peach("MayKrest", 3.00, "pics/maykrest.jpg", `Създаден е в САЩ. У нас е внесен през 1981 г. Дървото е умеренорастящо. Цъфтежът е средно ранен, а цветовете са розовидни. Изисква прореждане на завръзите. 
Те са средно едри до едри. Кожицата е почти изцяло червено оцветена, слабо овласена, тънка, отделяща се от плодовото месо. То е жълто, сочно, умерено плътно, с много добри вкусови качества. Костилката е дребна до средно едра, светла, не се отделя от плодовото месо. Плодовете са подходящи за консумация в свежо състояние.`);
var springBelle = new Peach("Spring Belle", 3.50, "pics/spring bel.jpg", `Много добро оцветяване на плода -80-90%.Кълбовидна форма на плода.Кълбовидна корона,средно-силно растящо.Праскова с изключително високи качества.Поради оцветяването,издръжливоста на транспорт и вкусовите качества на плода и времето на зреене доста ценен на пазара.`);
var royalGlory = new Peach("Royal Glory", 2.5, "pics/royal glory.jpg", `Силно плодовито дръвче.Цъфтеж-нормален.Плодът е голям с кълбовидна форма,напълно покрит с тъмно червено оцветяване,много примамлив.Месеста част е жълта,много плътна,с приятен вкус и аромат,много траен плод.Рано встъпва в плододаване,интензивно оцветяване (100 %) на плода дори и в вътрешната част на короната.Един от най-търсените сортове праскови на пазара.`);
var simfonia = new Peach("Simphonya", 6.80, "pics/simfonia.jpg", `Плодът е голям с кълбовидна форма,напълно покрит с тъмно червено оцветяване,много примамлив.Месеста част е жълта,много плътна,с приятен вкус и аромат,много траен плод.Рано встъпва в плододаване,интензивно оцветяване (100 %).
`);
var oHenry = new Peach("O'Henry", 7.00, "pics/o henri.jpg", `Средно едри до едри.Много добър по оцветяване и форма късно зреещ сорт. Издръжлив на транспорт.`);
var redHeaven = new Peach("Redheaven", 3.20, "pics/redhaiven.jpg", `Американски сорт. Един от най-разпостранените сортове унас и в чужбина. Дървото е умерено растящо с широкоразлята корона. Цъвтейът е средноран и изобилен, а цветовете - звънчевидни и сравнитолно едри. Устойчив е на зимни студове и сравнително добре понася понижението на температурата по време на цъфтеж. Костилката се отделя от месото. Плодовете понасят на манипулация и транспорт и са пригодени за консумация в прясно състояние, преработка в компот, нектар и за замзазяване.`);
var hale = new Peach("Hale",2.80, "pics/hale.jpg", `Мъжкостерилен сорт, с умерено растящо дърво и кълбовидна корона. Цъфтежът е средно ран, а цветовете се дребни, звънчевидни. Добре се опрашва от Елберта. Има много добра родовитост. Кожицата е дебела, жилава, лимоненожълта до жълта, покрита отчасти с яркочервена окраска и керемидовочервени петна, с дребен, фин, почти неличащ мъх. Месото е финозърнесто, около костолката червено, сладко, сочно, донякъде освежаващо, с много добро качество, отделящо се от костилката. Плодовете издържат добре на манипулация и транспорт. Много добра са за консъмация в прясно състояние и преработка.
`);
var fayette = new Peach("Fayette", 2.60, "pics/fayette.jpg", `Внесен от Калифорния и се размножава на мястото на сорта Хале. Дървото е средно до силнортастящо, Цветовете са розовидни. Родовитостта е много собра. Плодовете са едри до много едри, с кръгла, симетрична форма. Кажицата е с жълт основен цвят, а по-голямата част от повърхността е покрита с размита червенина, средно овласена. Месото е интензивно жълто, червено около костилката, плътно, сочно, с добър вкус. Костилката се отделя от месото. Много добре понасят манипулиране и транспортиране. По студоустоичивост и родовитост превъзхождат сорта Хале.`);
var summerset = new Peach("Summerset", 1.95, "pics/summerset.jpg", `Един от най-късните сортове праскови.Зрее около края на септември-началото на октомври.Плодовете са много едри- 160-180 грама.
Създаден е в САЩ.Дървото е умерено до силнорастящо.Цъфтежът е средно ранен до ранен,а цветовете са розовидни. Плодовете узряват в края на септември и началото на октомври.Те са едри.Кожицата е покрита повече или по- малко с размит червен цвят,слабо овласена с фини власинки,не се отделя от плодовото месо.То е жълто,меко,влакнесто,кисело-сладко,с добър вкус.Костилката е средно едра,тъмна,отделя се от плодовото месо.Плодовете са подходящи за консумация в свежо състояние и за преработка в компоти и нектари.`);
praskovite.addPeach(rishMay);
praskovite.addPeach(mayKrest);
praskovite.addPeach(springBelle);
praskovite.addPeach(royalGlory);
praskovite.addPeach(simfonia);
praskovite.addPeach(oHenry);
praskovite.addPeach(redHeaven);
praskovite.addPeach(hale);
praskovite.addPeach(fayette);
praskovite.addPeach(summerset);
// praskovite.sortBy("price");
// praskovite.displayPeaches();
// praskovite.filter("a");
praskovite.showDetails(5);