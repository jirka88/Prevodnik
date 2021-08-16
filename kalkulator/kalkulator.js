let pocet = 0;
var uloziste = [];


function generuj() {
    var vyber1 = document.getElementById("jednotky").selectedIndex;
    var vyber2 = document.getElementById("jednotky2").selectedIndex;
    var jednotka = document.getElementById("text1").value;

    if (jednotka > 0) {
        switch (pocet) {
            case 1: {
                switch (vyber1) {
                    case 0: { //mm
                        switch (vyber2) {
                            case 1: {
                                return jednotka / 10;
                            }
                            case 2: {
                                return jednotka / 100;
                            }
                            case 3: {
                                return jednotka / 1000;
                            }
                            case 4: {
                                return jednotka / 1000000;
                            }
                            default: {
                                return jednotka;
                            }
                        }
                    }
                    case 1: { //cm
                        switch (vyber2) {
                            case 0: {
                                return jednotka * 10;
                            }
                            case 2: {
                                return jednotka / 10;
                            }
                            case 3: {
                                return jednotka / 100;
                            }
                            case 4: {
                                return jednotka / 100000;
                            }
                            default: {
                                return jednotka;
                            }
                        }

                    }
                    case 2: { //dm
                        switch (vyber2) {
                            case 0: {
                                return jednotka * 100;
                            }
                            case 1: {
                                return jednotka * 10;
                            }
                            case 3: {
                                return jednotka / 10;
                            }
                            case 4: {
                                return jednotka / 10000;
                            }
                            default: {
                                return jednotka;
                            }
                        }
                    }
                    case 3: { //m
                        switch (vyber2) {
                            case 0: {
                                return jednotka * 1000;
                            }
                            case 1: {
                                return jednotka * 100;
                            }
                            case 2: {
                                return jednotka * 10;
                            }
                            case 4: {
                                return jednotka / 1000;
                            }
                            default: {
                                return jednotka;
                            }
                        }

                    }
                    case 4: { //km
                        switch (vyber2) {
                            case 0: {
                                return jednotka * 1000000;
                            }
                            case 1: {
                                return jednotka * 100000;
                            }
                            case 2: {
                                return jednotka * 10000;
                            }
                            case 3: {
                                return jednotka * 1000;
                            }
                            default: {
                                return jednotka;
                            }
                        }

                    }
                }
            }
            case 2: {
                switch (vyber1) {
                    case 0: { //mg
                        switch (vyber2) {
                            case 1: {
                                return jednotka / 1000;
                            }
                            case 2: {
                                return jednotka / 1000000;
                            }
                            case 3: {
                                return jednotka / 1000000000;
                            }
                            default: {
                                return jednotka;
                            }
                        }
                    }
                    case 1: { //g
                        switch (vyber2) {
                            case 0: {
                                return jednotka * 1000;
                            }
                            case 2: {
                                return jednotka / 1000;
                            }
                            case 3: {
                                return jednotka / 1000000;
                            }

                            default: {
                                return jednotka;
                            }
                        }

                    }
                    case 2: { //kg
                        switch (vyber2) {
                            case 0: {
                                return jednotka * 1000000;
                            }
                            case 1: {
                                return jednotka * 1000;
                            }
                            case 3: {
                                return jednotka / 1000;
                            }
                            default: {
                                return jednotka;
                            }
                        }
                    }
                    case 3: { //m
                        switch (vyber2) {
                            case 0: {
                                return jednotka * 1000000000;
                            }
                            case 1: {
                                return jednotka * 1000000;
                            }
                            case 2: {
                                return jednotka * 1000;
                            }
                            default: {
                                return jednotka;
                            }
                        }

                    }
                    case 4: { //km
                        switch (vyber2) {
                            case 0: {
                                return jednotka * 1000000;
                            }
                            case 1: {
                                return jednotka * 100000;
                            }
                            case 2: {
                                return jednotka * 10000;
                            }
                            case 3: {
                                return jednotka * 1000;
                            }
                            default: {
                                return jednotka;
                            }
                        }




                    }
                }
            }
            case 3: {
                switch (vyber1) {
                    case 0: {
                        switch (vyber2) {
                            case 1: {
                                return jednotka / 10;
                            }
                            case 2: {
                                return jednotka / 100;
                            }
                            case 3: {
                                return jednotka / 1000;
                            }
                            case 4: {
                                return jednotka / 100000;
                            }
                            default: {
                                return jednotka;
                            }
                        }
                    }
                    case 1: {
                        switch (vyber2) {
                            case 0: {
                                return jednotka * 10;
                            }
                            case 2: {
                                return jednotka / 10;
                            }
                            case 3: {
                                return jednotka / 100;
                            }
                            case 4: {
                                return jednotka / 10000;
                            }
                            default: {
                                return jednotka;
                            }
                        }
                    }
                    case 2: {
                        switch (vyber2) {
                            case 0: {
                                return jednotka * 100;
                            }
                            case 1: {
                                return jednotka * 10;
                            }
                            case 3: {
                                return jednotka / 10;
                            }
                            case 4: {
                                return jednotka / 1000;
                            }
                            default: {
                                return jednotka;
                            }
                        }
                    }
                    case 3: {
                        switch (vyber2) {
                            case 0: {
                                return jednotka * 1000;
                            }
                            case 1: {
                                return jednotka * 100;
                            }
                            case 2: {
                                return jednotka * 10;
                            }
                            case 4: {
                                return jednotka / 100;
                            }
                            default: {
                                return jednotka;
                            }
                        }
                    }
                    case 4: {
                        switch (vyber2) {
                            case 0: {
                                return jednotka * 100000;
                            }
                            case 1: {
                                return jednotka * 10000;
                            }
                            case 2: {
                                return jednotka * 1000;
                            }
                            case 3: {
                                return jednotka * 100;
                            }
                            default: {
                                return jednotka;
                            }
                        }
                    }

                }
            }
            case 4: {
                switch (vyber1) {
                    case 0: { //ms
                        switch (vyber2) {
                            case 1: {
                                return jednotka / 1000
                            }
                            case 2: {
                                return jednotka / 60000;
                            }
                            case 3: {
                                return jednotka / 3600000
                            }
                            case 4: {
                                return jednotka / 86400000;
                            }
                            case 5: {
                                return jednotka / 604800000;
                            }
                            case 6: {
                                return jednotka / 2.5488e9;
                            }
                            case 7: {
                                return jednotka / 3.1536e10;
                            }
                        }
                    }
                    case 1: { //s
                        switch (vyber2) {
                            case 0: {
                                return jednotka * 1000;
                            }
                            case 2: {
                                return Math.round((jednotka * 0.01666) * 100) / 100;
                            }
                            case 3: {
                                return jednotka / 3600;
                            }
                            case 4: {
                                return jednotka / 86400;
                            }
                            case 5: {
                                return jednotka / 604800;
                            }
                            case 6: {
                                return jednotka / 2548800;
                            }
                            case 7: {
                                return jednotka / 31536000;
                            }
                            default: {
                                return jednotka;
                            }
                        }
                    }
                    case 2: { //min
                        switch (vyber2) {
                            case 0: {
                                return jednotka * 60000;
                            }
                            case 1: {
                                return jednotka * 60;
                            }
                            case 3: {
                                return jednotka * 0.01666;
                            }
                            case 4: {
                                return jednotka * 0.0006944;
                            }
                            case 5: {
                                return jednotka * 9.92063492e-5;
                            }
                            case 6: {
                                return jednotka / 42480;
                            }
                            case 7: {
                                return jednotka / 525600;
                            }
                        }
                    }
                    case 3: { //hodiny
                        switch (vyber2) {
                            case 0: {
                                return jednotka * 3600000;
                            }
                            case 1: {
                                return jednotka * 3600;
                            }
                            case 2: {
                                return jednotka * 60;
                            }
                            case 4: {
                                return jednotka / 24;
                            }
                            case 5: {
                                return jednotka / 168;
                            }
                            case 6: {
                                return jednotka / 708;
                            }
                            case 7: {
                                return jednotka / 8766;
                            }
                            default: {
                                return jednotka;
                            }
                        }
                    }
                    case 4: { //Dny
                        switch (vyber2) {
                            case 0: {
                                return jednotka * 86400000;
                            }
                            case 1: {
                                return jednotka * 86400;
                            }
                            case 2: {
                                return jednotka * 8640;
                            }
                            case 3: {
                                return jednotka * 24;
                            }
                            case 5: {
                                return jednotka / 7;
                            }
                            case 6: {
                                return jednotka / 29.5;
                            }
                            case 7: {
                                return jednotka / 365.25;
                            }
                            default: {
                                return jednotka;
                            }
                        }
                    }
                    case 5: { //týdny
                        switch (vyber2) {
                            case 0: {
                                return jednotka * 604800000;
                            }
                            case 1: {
                                return jednotka * 604800;
                            }
                            case 2: {
                                return jednotka * 10080;
                            }
                            case 3: {
                                return jednotka * 168;
                            }
                            case 4: {
                                return jednotka * 7;
                            }
                            case 6: {
                                return jednotka / 4.214;
                            }
                            case 7: {
                                return jednotka / 52.214;
                            }
                        }
                    }
                    case 6: { //měsíce
                        switch (vyber2) {
                            case 0: {
                                return jednotka * 2.5488e9;
                            }
                            case 1: {
                                return jednotka * 2548800;
                            }
                            case 2: {
                                return jednotka * 42480;
                            }
                            case 3: {
                                return jednotka * 708;
                            }
                            case 4: {
                                return jednotka * 29.5;
                            }
                            case 5: {
                                return jednotka * 4.214;
                            }
                            case 7: {
                                return jednotka * 0.0808;
                            }
                            default: {
                                return jednotka;
                            }
                        }
                    }
                    case 7: { //roky
                        switch (vyber2) {
                            case 0: {
                                return jednotka * 3.1536e10;
                            }
                            case 1: {
                                return jednotka * 31536000;
                            }
                            case 2: {
                                return jednotka * 525600;
                            }
                            case 3: {
                                return jednotka * 52560;
                            }
                            case 4: {
                                return jednotka * 365.25;
                            }
                            case 5: {
                                return jednotka * 52.142;
                            }
                            case 6: {
                                return jednotka * 12;
                            }
                            default: {
                                return jednotka;
                            }
                        }
                    }
                }
            }
            case 5: {
                switch (vyber1) {
                    case 0: {
                        switch (vyber2) {
                            case 1: {
                                return jednotka / 100;
                            }
                            case 2: {
                                return jednotka / 10000;
                            }
                            case 3: {
                                return jednotka / 1000000;
                            }
                            case 4: {
                                return jednotka / 1000000000000;
                            }
                            case 5: {
                                return jednotka / 100000000;
                            }
                            case 6: {
                                return jednotka / 10000000000;
                            }
                            default: {
                                return jednotka;
                            }
                        }
                    }
                    case 1: {
                        switch (vyber2) {
                            case 0: {
                                return jednotka * 100;
                            }
                            case 2: {
                                return jednotka / 100;
                            }
                            case 3: {
                                return jednotka / 10000;
                            }
                            case 4: {
                                return jednotka / 10000000000;
                            }
                            case 5: {
                                return jednotka / 1000000;
                            }
                            case 6: {
                                return jednotka / 100000000;
                            }
                            default: {
                                return jednotka;
                            }
                        }
                    }
                    case 2: {
                        switch (vyber2) {
                            case 0: {
                                return jednotka * 10000;
                            }
                            case 1: {
                                return jednotka * 1000;
                            }
                            case 3: {
                                return jednotka / 100;
                            }
                            case 4: {
                                return jednotka / 100000000;
                            }
                            case 5: {
                                return jednotka / 10000;
                            }
                            case 6: {
                                return jednotka / 1000000;
                            }
                            default: {
                                return jednotka;
                            }
                        }
                    }
                    case 3: {
                        switch (vyber2) {
                            case 0: {
                                return jednotka * 1000000;
                            }
                            case 1: {
                                return jednotka * 100000;
                            }
                            case 2: {
                                return jednotka * 100;
                            }
                            case 4: {
                                return jednotka / 1000000;
                            }
                            case 5: {
                                return jednotka / 100;
                            }
                            case 6: {
                                return jednotka / 10000;
                            }
                            default: {
                                return jednotka;
                            }
                        }
                    }
                    case 4: {
                        switch (vyber2) {
                            case 0: {
                                return jednotka * 1000000000000;
                            }
                            case 1: {
                                return jednotka * 10000000000;
                            }
                            case 2: {
                                return jednotka * 100000000;
                            }
                            case 3: {
                                return jednotka * 1000000;
                            }
                            case 5: {
                                return jednotka * 100000;
                            }
                            case 6: {
                                return jednotka * 100;
                            }
                            default: {
                                return jednotka;
                            }
                        }
                    }
                    case 5: {
                        switch (vyber2) {
                            case 0: {
                                return jednotka * 100000000;
                            }
                            case 1: {
                                return jednotka * 1000000;
                            }
                            case 2: {
                                return jednotka * 10000;
                            }
                            case 3: {
                                return jednotka * 100;
                            }
                            case 4: {
                                return jednotka / 10000;
                            }
                            case 5: {
                                return jednotka / 100;
                            }
                            default: {
                                return jednotka;
                            }
                        }
                    }
                    case 6: {
                        switch (vyber2) {
                            case 0: {
                                return jednotka * 10000000000;
                            }
                            case 1: {
                                return jednotka * 100000000;
                            }
                            case 2: {
                                return jednotka * 1000000;
                            }
                            case 3: {
                                return jednotka * 10000;
                            }
                            case 4: {
                                return jednotka / 100;
                            }
                            case 5: {
                                return jednotka * 100;
                            }
                            default: {
                                return jednotka;
                            }
                        }
                    }
                }
            }
        }
    }
    else {
        window.alert("nelze počítat se zápornýma hodnotama!");
        return "";
    }
}

function delky() {
    document.getElementById("prevod").innerHTML = "převodník/délky";
    if (pocet != 1) {
        var kontrola = document.getElementById("kontrola").checked;
        if (kontrola === false) {
            var pole = ["milimetry", "centimetry", "decimetry", "metry", "kilometry"];

        }
        else {
            var pole = ["mm", "cm", "dm", "m", "km"];

        }
        pocet = 1;
        vymaz();
        vytvor(pole);
    }
}
function hmotnost() {
    document.getElementById("prevod").innerHTML = "převodník/hmotnost";
    if (pocet != 2) {
        var kontrola = document.getElementById("kontrola").checked;

        if (kontrola === false) {
            var pole = ["miligram", "gram", "kilogram", "tuna"];
        }
        else {
            var pole = ["mg", "g", "kg", "t"];
        }
        pocet = 2;
        vymaz();
        vytvor(pole);
    }


}
function objem() {
    document.getElementById("prevod").innerHTML = "převodník/objem";
    if (pocet != 3) {
        var kontrola = document.getElementById("kontrola").checked;
        if (kontrola === false) {
            var pole = ["mililitr", "centilitr", "decilitr", "litr", "hektolitr"];
        }
        else {
            var pole = ["ml", "cl", "dl", "l", "hl"];
        }
        pocet = 3;
        vymaz();
        vytvor(pole);
    }
}
function obsah() {
    document.getElementById("prevod").innerHTML = "převodník/obsah";
    if (pocet != 5) {
        var kontrola = document.getElementById("kontrola").checked;
        if (kontrola === false) {
            var pole = ["č. milimetr", "č. centimetr", "č. decimetr", "č. metr", "č. kilometr", "ar", "hektar"];

        }
        else {
            var pole = ["mm^2", "cm^2", "dm^2", "m^2", "km^2", "a", "ha"];

        }
        pocet = 5;
        vymaz();
        vytvor(pole);

    }
}
function cas() {
    document.getElementById("prevod").innerHTML = "převodník/čas";
    if (pocet != 4) {
        var kontrola = document.getElementById("kontrola").checked;
        if (kontrola === false) {
            var pole = ["milisekund", "sekund", "minut", "hodin", "dny", "týdny", "měsíce", "roky"];

        }
        else {
            var pole = ["ms", "s", "min", "h", "d", "t", "m", "r"];

        }
        pocet = 4;
        vymaz();
        vytvor(pole);

    }
}
function vymaz() {                                                                              //vymaže při překliknutí na jiné převody jednotky na výběr
    if (document.getElementById(uloziste[0]) != null) {
        for (let index = 0; index < uloziste.length; index++) {
            var elem = document.getElementById(uloziste[index]);
            elem.parentNode.removeChild(elem);
        }
        uloziste.splice(0, uloziste.length);
    }
    var box = document.getElementById("0");
    if (box.style.height === "450px") {


        box.style.height = "600px";
    }

}
function vytvor(pole) {                                                                         //vytvoří jednotky pomocí parametru
    for (let index = 0; index < pole.length; index++) {

        const element = document.createElement("option");
        const element2 = document.createElement("option");

        popisek = document.createTextNode(pole[index]);
        popisek2 = document.createTextNode(pole[index]);

        element.id = pole[index];
        element2.id = pole[index];

        element.appendChild(popisek);
        element2.appendChild(popisek2);

        jednotky.appendChild(element);
        jednotky2.appendChild(element2);


        uloziste.push(pole[index]);
        uloziste.push(pole[index]);

    }

    const element3 = document.createElement("p");
    var box = document.getElementById("zk");
    if (pocet === 4) {
        popisek3 = document.createTextNode("1 měsíc = 29.5 dne")
        element3.appendChild(popisek3);
        element3.id = "data";
        box.appendChild(element3);

    }
    else {
        if (document.getElementById("data") != null) {
            box.removeChild(document.getElementById("data"));
        }

    }

}

