function steuerrechner(einkommen) {
    return einkommen * 12;

}

let meinEinkommen = prompt("Wie hoch ist Ihr monatliches Einkommen?");
let steuerfuss = prompt("Wie hoch ist der Steuerfuss in Ihrem Kanton?");

let meineSteuern = steuerrechner(meinEinkommen, steuerfuss);
console.log("du zahlst pro Jahr " + meineSteuern + " CHF Steuern");

// functions

function steuerrechner(einkommen, steuerfuss) {
const freigrenze = 11000;
const steuerprozent = 6;

let jahreseinkommen = einkommen * 12;
let steuerbares_einkommen = jahreseinkommen - freigrenze;
let steuern = steuerbares_einkommen / 100 * steuerprozent;
let steuerbetrag = steuern / 100 * steuerfuss;
return steuerbetrag;

}