function NationalColors(arrayColors)
{
    this.nationalColors = arrayColors;
    this.toHtmlFlag = function () {
        let htmlFlag = "";
        let i;
        for (i = 0; i < this.nationalColors.length; i++)
        {
            let color = this.nationalColors[i];
            htmlFlag += `<span style=\"background-color:${color}\">&nbsp;&nbsp;&nbsp;</span>`;
        }
        return htmlFlag;
    }
}
function Country(countryName, officialLanguage, helloWorld, natlColors)
{
    this.countryName = countryName;
    this.officialLanguage = officialLanguage;
    this.helloWorld = helloWorld;
    this.natlColors = natlColors;
}
let countries = [
    new Country("USA", "English", "Hello World!", new NationalColors(["red","white","blue"])),
    new Country("Brazil", "Portuguese", "Olá Mundo!", new NationalColors(["green","yellow"])),
    new Country("Russia", "Russian", "Privet mir!", new NationalColors(["white","blue","red"])),
    new Country("Japan", "Japanese", "Kon'nichiwa sekai!", new NationalColors(["red","white"])),
    new Country("China", "Chinese", "Nǐ hǎo, shìjiè!", new NationalColors(["red","gold"]))
];
function showCountryDetails()
{
    let choice = document.getElementById("choice");
    let selectedCountry = choice.options[choice.selectedIndex].value;
    //alert(`you chose ${choice} [${choice.selectedIndex}] => ${choice.options.length} ${selectedCountry}`)
    let countryDetails = document.getElementById("country-details");
    let results = "";
    let countryIndex;
    for (countryIndex = 0; countryIndex < countries.length; countryIndex++)
    {
        if (selectedCountry === countries[countryIndex].countryName)
        {
            let country = countries[countryIndex];
            results = `<p><span style=\"border-style:solid;border-width:1px;border-color:black\">${country.natlColors.toHtmlFlag()}</span> Hello World in ${country.officialLanguage} is \"${country.helloWorld}\"</p>`;
            break;
        }
    }
    countryDetails.innerHTML = results;
    return false;
}
function setupForm()
{
    let inputForm = document.getElementById("input");
    let selectElem = `<form><select id="choice">`;
    let countryIndex;
    for (countryIndex = 0; countryIndex < countries.length; countryIndex++)
    {
        selectElem += `<option>${countries[countryIndex].countryName}</option>`;
    }
    inputForm.innerHTML = selectElem + `<\select> <button onclick=\"showCountryDetails();return(false);\">Show</button></form>`;
    selectElem = "";
    return(false)
}
