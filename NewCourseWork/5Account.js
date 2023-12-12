function Change() {
    document.getElementById("Change").style.display = 'none';
    document.getElementById("Choice").style.display = 'block';

// Name
    var NameData = document.getElementById("name-data");
    var NameInput = document.getElementById("name-input");

    NameData.style.display = 'none';
    NameInput.style.display = 'block';

    NameInput.value = NameData.textContent;
// Inbox
    var InboxData = document.getElementById("inbox-data");
    var InboxInput = document.getElementById("inbox-input");

    InboxData.style.display = 'none';
    InboxInput.style.display = 'block';

    InboxInput.value = InboxData.textContent;
// Tel
    var TelData = document.getElementById("tel-data");
    var TelInput = document.getElementById("tel-input");

    TelData.style.display = 'none';
    TelInput.style.display = 'block';

    TelInput.value = TelData.textContent;
// Adress
    var AdressData = document.getElementById("adress-data");
    var AdressInput = document.getElementById("adress-input");

    AdressData.style.display = 'none';
    AdressInput.style.display = 'block';

    AdressInput.value = AdressData.textContent;
}

function Confirm() {
// Name
    var NameData = document.getElementById("name-data");
    var NameInput = document.getElementById("name-input");

    NameData.style.display = 'block';
    NameInput.style.display = 'none';

    NameData.textContent = NameInput.value;
// Inbox
    var InboxData = document.getElementById("inbox-data");
    var InboxInput = document.getElementById("inbox-input");

    InboxData.style.display = 'block';
    InboxInput.style.display = 'none';

    InboxData.textContent = InboxInput.value;
// Tel
    var TelData = document.getElementById("tel-data");
    var TelInput = document.getElementById("tel-input");

    TelData.style.display = 'block';
    TelInput.style.display = 'none';

    TelData.textContent = TelInput.value;
// Adress
    var AdressData = document.getElementById("adress-data");
    var AdressInput = document.getElementById("adress-input");

    AdressData.style.display = 'block';
    AdressInput.style.display = 'none';

    AdressData.textContent = AdressInput.value;

    document.getElementById("Choice").style.display = 'none';
    document.getElementById("Change").style.display = 'block';
}

function Cancel() {
// Name
    var NameData = document.getElementById("name-data");
    var NameInput = document.getElementById("name-input");

    NameData.style.display = 'block';
    NameInput.style.display = 'none';
// Inbox
    var InboxData = document.getElementById("inbox-data");
    var InboxInput = document.getElementById("inbox-input");

    InboxData.style.display = 'block';
    InboxInput.style.display = 'none';
// Tel
    var TelData = document.getElementById("tel-data");
    var TelInput = document.getElementById("tel-input");

    TelData.style.display = 'block';
    TelInput.style.display = 'none';
// Adress
    var AdressData = document.getElementById("adress-data");
    var AdressInput = document.getElementById("adress-input");

    AdressData.style.display = 'block';
    AdressInput.style.display = 'none';

    document.getElementById("Choice").style.display = 'none';
    document.getElementById("Change").style.display = 'block';
}