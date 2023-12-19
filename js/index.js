var siteNameInput = document.getElementById('siteNameInput');
var siteUrlInput = document.getElementById('siteUrlInput');
var tableContent = document.getElementById('tableContent');

var siteContainer = [];
if (localStorage.getItem("siteName") != null) {
    siteContainer = JSON.parse(localStorage.getItem("siteName"))
    displaySite(siteContainer);
}
function addSite() {
    if (validateSiteName() == true && validateSiteUrl() == true) {
        var site = {
            name: siteNameInput.value,
            Url: siteUrlInput.value,
        }
        siteContainer.push(site);
        localStorage.setItem("siteName", JSON.stringify(siteContainer))
        // console.log(siteContainer);
        clearForm();
        displaySite(siteContainer);
    }
    else {
        alert("this invalid data you must need to enter at least 3 digits or characters!");
    }

}


function displaySite(siteContainer) {
    var cartona = '';
    for (var i = 0; i < siteContainer.length; i++) {
        cartona += `<tr>
        <td>${i}</td>
<td>${siteContainer[i].name} </td>
<td> <button class="btn btn-submit px-5 btn-sm btn-outline-warning "><a href="${siteContainer[i].Url}" target="_blank">visit</a></button></td>
<td> <button class="btn btn-submit px-5 btn-sm btn-outline-danger "onclick="deleteForm(${i});">delete</button></td>
<tr>`}
    document.getElementById('tableContent').innerHTML = cartona;
}
function clearForm() {
    siteNameInput.value = " ";
    siteUrlInput.value = " ";

}
function deleteForm(i) {
    siteContainer.splice(i, 1)
    localStorage.setItem("siteName", JSON.stringify(siteContainer))
    displaySite(siteContainer);

}
function validateSiteName() {
    var regex = /^\w{3,}(\s+\w+)*$/
    if (regex.test(siteNameInput.value) == true) {
        return true;
    }
    else {
        return false;
    }
}
function validateSiteUrl() {
    var regex = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;
    if (regex.test(siteUrlInput.value) == true) {
        return true;
    }
    else {
        return false;
    }
}