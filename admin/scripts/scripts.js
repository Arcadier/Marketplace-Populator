function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts
            .pop()
            .split(";")
            .shift();
    }
}

// File variables
var reader,
    csv,
    lines,
    doc,
    input;

// Functions to read csv file
function getAsText(fileToRead) {
    reader = new FileReader();
    reader.readAsText(fileToRead);
    reader.onload = loadHandler;
    reader.onerror = errorHandler;
}

function loadHandler(event) {
    csv = event.target.result;
    processData(csv);
}

function processData(csv) {
    lines = Papa.parse(csv)['data'];
    console.log(lines);
}

function errorHandler(evt) {
    if (evt.target.error.name == "NotReadableError") {
        alert("Canno't read file !");
    }
}

// Initializing Variables
var firstNames = [
    "John",
    "Will",
    "Oliver",
    "Harry",
    "George",
    "Jack",
    "Robert",
    "James",
    "Charlie",
    "Noah",
    "Olivia",
    "Emily",
    "Lily",
    "Isabella",
    "Grace",
    "Charlotte",
    "Shannon",
    "Lauren",
    "Rebecca",
    "Carol"
];
var lastNames = [
    "Smith",
    "Johnson",
    "Williams",
    "Jones",
    "Brown",
    "Davis",
    "Miller",
    "Wilson",
    "Scott",
    "Thomas",
    "Murphy",
    "Jenkins",
    "Wood",
    "Price",
    "Ross",
    "Cook",
    "Bell",
    "Nguyen",
    "Chang",
    "Lewis"
];
var alpha2 = ['AF',
    'AX',
    'AL',
    'DZ',
    'AS',
    'AD',
    'AO',
    'AI',
    'AQ',
    'AG',
    'AR',
    'AM',
    'AW',
    'AU',
    'AT',
    'AZ',
    'BS',
    'BH',
    'BD',
    'BB',
    'BY',
    'BE',
    'BZ',
    'BJ',
    'BM',
    'BT',
    'BO',
    'BA',
    'BW',
    'BV',
    'BR',
    'IO',
    'BN',
    'BG',
    'BF',
    'BI',
    'KH',
    'CM',
    'CA',
    'CV',
    'KY',
    'CF',
    'TD',
    'CL',
    'CN',
    'CX',
    'CC',
    'CO',
    'KM',
    'CG',
    'CD',
    'CK',
    'CR',
    'CI',
    'HR',
    'CU',
    'CY',
    'CZ',
    'DK',
    'DJ',
    'DM',
    'DO',
    'EC',
    'EG',
    'SV',
    'GQ',
    'ER',
    'EE',
    'ET',
    'FK',
    'FO',
    'FJ',
    'FI',
    'FR',
    'GF',
    'PF',
    'TF',
    'GA',
    'GM',
    'GE',
    'DE',
    'GH',
    'GI',
    'GR',
    'GL',
    'GD',
    'GP',
    'GU',
    'GT',
    'GG',
    'GN',
    'GW',
    'GY',
    'HT',
    'HM',
    'VA',
    'HN',
    'HK',
    'HU',
    'IS',
    'IN',
    'ID',
    'IR',
    'IQ',
    'IE',
    'IM',
    'IL',
    'IT',
    'JM',
    'JP',
    'JE',
    'JO',
    'KZ',
    'KE',
    'KI',
    'KR',
    'KW',
    'KG',
    'LA',
    'LV',
    'LB',
    'LS',
    'LR',
    'LY',
    'LI',
    'LT',
    'LU',
    'MO',
    'MK',
    'MG',
    'MW',
    'MY',
    'MV',
    'ML',
    'MT',
    'MH',
    'MQ',
    'MR',
    'MU',
    'YT',
    'MX',
    'FM',
    'MD',
    'MC',
    'MN',
    'ME',
    'MS',
    'MA',
    'MZ',
    'MM',
    'NA',
    'NR',
    'NP',
    'NL',
    'AN',
    'NC',
    'NZ',
    'NI',
    'NE',
    'NG',
    'NU',
    'NF',
    'MP',
    'NO',
    'OM',
    'PK',
    'PW',
    'PS',
    'PA',
    'PG',
    'PY',
    'PE',
    'PH',
    'PN',
    'PL',
    'PT',
    'PR',
    'QA',
    'RE',
    'RO',
    'RU',
    'RW',
    'BL',
    'SH',
    'KN',
    'LC',
    'MF',
    'PM',
    'VC',
    'WS',
    'SM',
    'ST',
    'SA',
    'SN',
    'RS',
    'SC',
    'SL',
    'SG',
    'SK',
    'SI',
    'SB',
    'SO',
    'ZA',
    'GS',
    'ES',
    'LK',
    'SD',
    'SR',
    'SJ',
    'SZ',
    'SE',
    'CH',
    'SY',
    'TW',
    'TJ',
    'TZ',
    'TH',
    'TL',
    'TG',
    'TK',
    'TO',
    'TT',
    'TN',
    'TR',
    'TM',
    'TC',
    'TV',
    'UG',
    'UA',
    'AE',
    'GB',
    'US',
    'UM',
    'UY',
    'UZ',
    'VU',
    'VE',
    'VN',
    'VG',
    'VI',
    'WF',
    'EH',
    'YE',
    'ZM',
    'ZW'
]
var alpha3 = ['AFN',
    'ALL',
    'DZD',
    'USD',
    'AOA',
    'XCD',
    'ARS',
    'AMD',
    'AWG',
    'AUD',
    'AZN',
    'BSD',
    'BHD',
    'BDT',
    'BBD',
    'BYN',
    'BZD',
    'BMD',
    'BTN',
    'INR',
    'BOB',
    'BOV',
    'BAM',
    'BWP',
    'NOK',
    'BRL',
    'BND',
    'BGN',
    'BIF',
    'CVE',
    'KHR',
    'XAF',
    'CAD',
    'KYD',
    'CLF',
    'CLP',
    'CNY',
    'COP',
    'COU',
    'KMF',
    'CDF',
    'NZD',
    'CRC',
    'HRK',
    'CUC',
    'CUP',
    'ANG',
    'CZK',
    'DKK',
    'DJF',
    'DOP',
    'EGP',
    'SVC',
    'ERN',
    'ETB',
    'FKP',
    'FJD',
    'XPF',
    'GMD',
    'GEL',
    'GHS',
    'GIP',
    'GTQ',
    'GBP',
    'GNF',
    'GYD',
    'HTG',
    'HNL',
    'HKD',
    'HUF',
    'ISK',
    'IDR',
    'XDR',
    'IRR',
    'IQD',
    'ILS',
    'JMD',
    'JPY',
    'JOD',
    'KZT',
    'KES',
    'KPW',
    'KRW',
    'KWD',
    'KGS',
    'LAK',
    'LBP',
    'LSL',
    'LRD',
    'LYD',
    'CHF',
    'MOP',
    'MGA',
    'MWK',
    'MYR',
    'MVR',
    'MRU',
    'MUR',
    'XUA',
    'MXN',
    'MXV',
    'MDL',
    'MNT',
    'MAD',
    'MZN',
    'MMK',
    'NAD',
    'NPR',
    'NIO',
    'NGN',
    'OMR',
    'PKR',
    'PAB',
    'PGK',
    'PYG',
    'PEN',
    'PHP',
    'PLN',
    'QAR',
    'MKD',
    'RON',
    'RUB',
    'RWF',
    'SHP',
    'WST',
    'STN',
    'SAR',
    'XOF',
    'RSD',
    'SCR',
    'SLL',
    'SGD',
    'XSU',
    'SBD',
    'SOS',
    'ZAR',
    'SSP',
    'LKR',
    'SDG',
    'SRD',
    'SZL',
    'SEK',
    'CHE',
    'CHW',
    'SYP',
    'TWD',
    'TJS',
    'TZS',
    'THB',
    'TOP',
    'TTD',
    'TND',
    'TRY',
    'TMT',
    'UGX',
    'UAH',
    'AED',
    'USN',
    'UYI',
    'UYU',
    'UZS',
    'VUV',
    'VEF',
    'VND',
    'YER',
    'ZMW',
    'ZWL',
    'EUR'
]
// var manImage = "https://bootstrap.arcadier.com/github/Screen%20Shot%202019-07-15%20at%2011.11.23%20AM.png";
// var womanImage = "https://bootstrap.arcadier.com/github/Screen%20Shot%202019-07-15%20at%2011.11.34%20AM.png";
var token = getCookie("webapitoken");
var baseURL = window.location.hostname;
var info,
    loading,
    button,
    userId,
    adminId,
    categoryId,
    shippingMethodId,
    pickupAddressId,
    data,
    childItems,
    variants,
    settings,
    currentUsers,
    currentCategories,
    currentItems,
    currentShippingMethods,
    currentPickupAddresses,
    records,
    firstName,
    lastName,
    index,
    phone,
    postalCode,
    numMerchants,
    numBuyers,
    numCategories,
    numSubCategories,
    numItems,
    subCategory,
    username,
    randNumber,
    category,
    shippingMethod,
    pickupAddress,
    childItemResponse,
    firstMerchant = 0,
    secondMerchant = 0,
    firstBuyer = 0,
    secondBuyer = 0,
    firstCategory = 0,
    secondCategory = 0,
    firstItem = 0,
    secondItem = 0,
    error = 0,
    outputMessage = "",
    roles,
    isMerchant,
    exitCode;

// Front End functions
function makeLoadingVisible() {
    loading.style.visibility = "visible";
}

function makeLoadingHidden() {
    loading.style.visibility = "hidden";
}

function makeButtonVisible() {
    button.style.visibility = "visible";
}

function makeButtonHidden() {
    button.style.visibility = "hidden";
}

// Main and Supporting functions for Generating Users
function generateUsers() {
    button = document.getElementById("generateUsers");
    makeButtonHidden();
    loading = document.getElementById("userLoad");
    makeLoadingVisible();
    adminId = document.getElementById("userGuid").value;
    setTimeout(createUsers, 100);
}

function createUsers() {
    getNumberUsers();
    numMerchants = document.getElementById("merchants").value;
    if (numMerchants > 100) {
        numMerchants = 100;
    } else if (numMerchants < 0) {
        numMerchants = 0;
    } else if (!numMerchants) {
        numMerchants = 0;
    }
    if (numMerchants > 0) {
        firstMerchant = currentUsers + 1;
    }
    for (var i = 0; i < numMerchants; i++) {
        currentUsers++;
        secondMerchant = currentUsers;
        makeMerchant();
    }
    numBuyers = document.getElementById("buyers").value;
    if (numBuyers > 100) {
        numBuyers = 100;
    } else if (numBuyers < 0) {
        numBuyers = 0;
    } else if (!numBuyers) {
        numBuyers = 0;
    }
    if (numBuyers > 0) {
        firstBuyer = currentUsers + 1;
    }
    for (var i = 0; i < numBuyers; i++) {
        currentUsers++;
        secondBuyer = currentUsers;
        makeBuyer();
    }
    userOutput();
}

// returns number of current Users
function getNumberUsers() {
    settings = {
        url: "https://" + baseURL + "/api/v2/admins/" + adminId + "/users",
        method: "GET",
        headers: {
            Authorization: "Bearer " + token
        },
        async: false
    };
    $.ajax(settings).done(function (response) {
        currentUsers = response.TotalRecords;
    });
}

// Main and Supporting functions for Generating a Merchant
function makeMerchant() {
    registerMerchant();
    getUserId();
    updateMerchantInfo();
    createMerchantShippingMethod();
    createMerchantAddress();
}

function registerMerchant() {
    info = "Merchant" + currentUsers;
    data = {
        Email: info,
        Password: info,
        ConfirmPassword: info
    };
    settings = {
        url: "https://" + baseURL + "/api/v2/accounts/register",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
        },
        data: JSON.stringify(data),
        async: false
    };
    $.ajax(settings);
}

function getUserId() {
    settings = {
        url:
            "https://" +
            baseURL +
            "/api/v2/admins/" +
            adminId +
            "/users?PageSize=" +
            currentUsers,
        method: "GET",
        headers: {
            Authorization: "Bearer " + token
        },
        async: false
    };
    $.ajax(settings).done(function (response) {
        records = response.Records;
        userId = "";
        records.forEach(function (element) {
            if (element.Email === info) {
                userId = element.ID;
            }
        });
    });
}

function updateMerchantInfo() {
    index = randomNumber(20);
    firstName = firstNames[index];
    index = randomNumber(20);
    lastName = lastNames[index];
    generatePhoneNumber();
    data = {
        FirstName: firstName,
        LastName: lastName,
        DisplayName: firstName + " " + lastName,
        PhoneNumber: phone,
        TimeZone: "GMT+8"
    };
    settings = {
        url: "https://" + baseURL + "/api/v2/users/" + userId,
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
        },
        data: JSON.stringify(data),
        async: false
    };
    $.ajax(settings);
    updateMerchantRole();
}

// Returns a random number between 0 and (value -1)
function randomNumber(value) {
    return Math.floor(Math.random() * value);
}

function generatePhoneNumber() {
    phone = 0;
    for (var i = 0; i < 8; i++) {
        phone = phone * 10 + randomNumber(10);
    }
}

function updateMerchantRole() {
    settings = {
        url:
            "https://" + baseURL + "/api/v2/admins/" + adminId + "/users/" + userId + "/roles/merchant",
        method: "PUT",
        headers: {
            Authorization: "Bearer " + token
        },
        async: false
    };
    $.ajax(settings);
}

function createMerchantShippingMethod() {
    data = {
        Courier: info + " Express",
        Method: "delivery",
        Price: currentUsers,
        CombinedPrice: currentUsers,
        CurrencyCode: "SGD",
        Description: info + "'s Shipping Method"
    }
    settings = {
        url:
            "https://" + baseURL + "/api/v2/merchants/" + userId + "/shipping-methods",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
        },
        data: JSON.stringify(data),
        async: false
    };
    $.ajax(settings);
}

function createMerchantAddress() {
    postalCode = phone % 1000000;
    data = {
        Name: firstName + " " + lastName,
        Line1: currentUsers + " Street",
        Line2: "#" + currentUsers + "-" + currentUsers,
        PostCode: postalCode,
        Delivery: true,
        Pickup: true,
        State: "N/A",
        City: "Singapore",
        Country: "Singapore",
        CountryCode: "SG"
    };
    settings = {
        url: "https://" + baseURL + "/api/v2/users/" + userId + "/addresses",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
        },
        data: JSON.stringify(data),
        async: false
    };
    $.ajax(settings);
}

// Main and Supporting functions for Generating a Buyer
function makeBuyer() {
    registerBuyer();
    getUserId();
    updateBuyerInfo();
    createBuyerAddress();
}

function registerBuyer() {
    info = "Buyer" + currentUsers;
    data = {
        Email: info,
        Password: info,
        ConfirmPassword: info
    };
    settings = {
        url: "https://" + baseURL + "/api/v2/accounts/register",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
        },
        data: JSON.stringify(data),
        async: false
    };
    $.ajax(settings);
}

function updateBuyerInfo() {
    index = randomNumber(20);
    firstName = firstNames[index];
    index = randomNumber(20);
    lastName = lastNames[index];
    generatePhoneNumber();
    data = {
        FirstName: firstName,
        LastName: lastName,
        DisplayName: firstName + " " + lastName,
        PhoneNumber: phone,
        TimeZone: "GMT+8"
    };
    settings = {
        url: "https://" + baseURL + "/api/v2/users/" + userId,
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
        },
        data: JSON.stringify(data),
        async: false
    };
    $.ajax(settings);
}

function createBuyerAddress() {
    postalCode = phone % 1000000;
    data = {
        Name: firstName + " " + lastName,
        Line1: currentUsers + " Street",
        Line2: "#" + currentUsers + "-" + currentUsers,
        PostCode: postalCode,
        Delivery: true,
        Pickup: false,
        State: "N/A",
        City: "Singapore",
        Country: "Singapore",
        CountryCode: "SG"
    };
    settings = {
        url: "https://" + baseURL + "/api/v2/users/" + userId + "/addresses",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
        },
        data: JSON.stringify(data),
        async: false
    };
    $.ajax(settings);
}

// User Output Result
function userOutput() {
    makeLoadingHidden();
    makeButtonVisible();
    document.getElementById("userOutput").innerHTML = "You have Successfully generated<br>" +
        numMerchants + " Merchant(s)[" + firstMerchant + "-" + secondMerchant + "] and<br>" +
        numBuyers + " Buyer(s)[" + firstBuyer + "-" + secondBuyer + "]!";
}

// Main and Supporting functions for Generating a Category
function generateCategories() {
    button = document.getElementById("generateCategories");
    makeButtonHidden();
    loading = document.getElementById("catLoad");
    makeLoadingVisible();
    adminId = document.getElementById("userGuid").value;
    setTimeout(createCategories, 100);
}

function createCategories() {
    getNumberCategories();
    numCategories = document.getElementById("categories").value;
    if (numCategories > 20) {
        numCategories = 20;
    }
    numSubCategories = document.getElementById("subCategories").value;
    if (numSubCategories > 5) {
        numSubCategories = 5;
    } else if (numSubCategories < 0) {
        numSubCategories = 0;
    } else if (!numSubCategories) {
        numSubCategories = 0;
    }
    if (numCategories < 1) {
        numCategories = 0;
        numSubCategories = 0;
    } else if (!numCategories) {
        numCategories = 0;
        numSubCategories = 0;
    } else if (numCategories > 0) {
        firstCategory = currentCategories + 1;
    }
    for (var i = 0; i < numCategories; i++) {
        currentCategories++;
        secondCategory = currentCategories;
        makeCategory();
        for (var j = 0; j < numSubCategories; j++) {
            makeSubCategory(j);
        }
    }
    catOutput();
}

// returns number of current Categories
function getNumberCategories() {
    settings = {
        url: "https://" + baseURL + "/api/v2/admins/" + adminId + "/categories",
        method: "GET",
        async: false
    };
    $.ajax(settings).done(function (response) {
        currentCategories = response.TotalRecords;
    });
}

function makeCategory() {
    info = "Category" + currentCategories;
    data = {
        Name: info,
        Description: "This is " + info
    };
    settings = {
        url: "https://" + baseURL + "/api/v2/admins/" + adminId + "/categories",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
        },
        data: JSON.stringify(data),
        async: false
    };
    $.ajax(settings).done(function (response) {
        categoryId = response.ID;
    });
}

function makeSubCategory(index) {
    subCategory = String.fromCharCode(index + 65);
    info = "SubCategory " + currentCategories + subCategory;
    data = {
        Name: info,
        Description: "This is SubCategory " + subCategory + " of Category" + currentCategories,
        ParentCategoryID: categoryId,
        Level: 1
    };
    settings = {
        url: "https://" + baseURL + "/api/v2/admins/" + adminId + "/categories",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
        },
        data: JSON.stringify(data),
        async: false
    };
    $.ajax(settings);
}

// Category Output Result
function catOutput() {
    makeLoadingHidden();
    makeButtonVisible();
    if (numSubCategories > 0) {
        document.getElementById("catOutput").innerHTML = "You have Successfully generated<br>" +
            numCategories + " Category(ies)[" + firstCategory + "-" + secondCategory + "] with<br>" +
            numSubCategories + " SubCategory(ies)[" + String.fromCharCode(65) + "-" + String.fromCharCode(Number(numSubCategories) + 64) + "] each!";
    } else {
        document.getElementById("catOutput").innerHTML = "You have Successfully generated<br>" +
            numCategories + " Category(ies)[" + firstCategory + "-" + secondCategory + "] with<br>" +
            numSubCategories + " SubCategory(ies)[0-0] each!";
    }
}

// Main and Supporting functions for Generating an Item
function generateItems() {
    button = document.getElementById("generateItems");
    makeButtonHidden();
    loading = document.getElementById("itemLoad");
    makeLoadingVisible();
    adminId = document.getElementById("userGuid").value;
    setTimeout(createItems, 100);
}

function createItems() {
    info = document.getElementById("username").value;
    username = info;
    getNumberUsers();
    getUserId();
    getNumberItems();
    numItems = document.getElementById("items").value;
    if (numItems > 10) {
        numItems = 10;
    } else if (numItems < 0) {
        numItems = 0;
    } else if (!numItems) {
        numItems = 0;
    }
    if (numItems > 0) {
        firstItem = currentItems + 1;
    }
    if (userId != "") {
        for (var i = 0; i < numItems; i++) {
            currentItems++;
            secondItem = currentItems;
            makeItem();
        }
        itemOutput();
    } else {
        itemFailOutput();
    }
}

// returns number of current Items
function getNumberItems() {
    settings = {
        url: "https://" + baseURL + "/api/v2/items",
        method: "GET",
        async: false
    };
    $.ajax(settings).done(function (response) {
        currentItems = response.TotalRecords;
    });
}

function makeItem() {
    info = "Item" + currentItems;
    data = {
        Name: info,
        BuyerDescription: "This is " + info,
        SellerDescription: "Selling " + info,
        Price: currentItems,
        StockLimited: true,
        StockQuantity: 0,
        IsVisibleToCustomer: true,
        Active: true,
        IsAvailable: true,
        CurrencyCode: "SGD",
        Categories: [],
        Media: [
            {
                MediaUrl: "https://dogaccessories.sandbox.arcadier.io/images/c27f4fc8-305b-4c5d-b209-635b2048d1ab-3x852dzo70Item19170-636439922842419797-C7k6Mg.jpg"
            }
        ],
        ShippingMethods: [],
        PickupAddresses: [],
        Tags: [],
        ChildItems: []
    };
    updateItemCategories();
    updateItemShippingMethods();
    updateItemPickupAddresses();
    updateChildItems();
    updateItemTags();
    updateItemStock();
    settings = {
        url: "https://" + baseURL + "/api/v2/merchants/" + userId + "/items",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
        },
        data: JSON.stringify(data),
        async: false
    };
    $.ajax(settings);
}

function updateItemCategories() {
    getNumberCategories();
    if (currentCategories) {
        randNumber = ((randomNumber(currentCategories)) % 25) / 5 + 1;
        for (var i = 0; i < randNumber; i++) {
            getRandomCategoryId();
            data.Categories[i] = category;
        }
    }
}

function getRandomCategoryId() {
    settings = {
        url:
            "https://" +
            baseURL +
            "/api/v2/admins/" +
            adminId +
            "/categories?PageSize=" +
            currentCategories,
        method: "GET",
        async: false
    };
    $.ajax(settings).done(function (response) {
        records = response.Records;
        categoryId = records[randomNumber(currentCategories)].ID;
        category = { ID: categoryId };
    });
}

function updateItemShippingMethods() {
    getNumberShippingMethods();
    if (currentShippingMethods) {
        randNumber = randomNumber(currentShippingMethods) + 1;
        for (var i = 0; i < randNumber; i++) {
            getRandomShippingMethodId();
            data.ShippingMethods[i] = shippingMethod;
        }
    }
}

// returns number of current Shipping Methods
function getNumberShippingMethods() {
    settings = {
        url:
            "https://" + baseURL + "/api/v2/merchants/" + userId + "/shipping-methods",
        method: "GET",
        headers: {
            Authorization: "Bearer " + token
        },
        async: false
    };
    $.ajax(settings).done(function (response) {
        currentShippingMethods = response.length;
    });
}

function getRandomShippingMethodId() {
    settings = {
        url:
            "https://" + baseURL + "/api/v2/merchants/" + userId + "/shipping-methods",
        method: "GET",
        headers: {
            Authorization: "Bearer " + token
        },
        async: false
    };
    $.ajax(settings).done(function (response) {
        shippingMethodId = response[randomNumber(currentShippingMethods)].ID;
        shippingMethod = { ID: shippingMethodId };
    });
}

function updateItemPickupAddresses() {
    getNumberPickupAddresses();
    if (currentPickupAddresses) {
        randNumber = randomNumber(currentPickupAddresses) + 1;
        for (var i = 0; i < randNumber; i++) {
            getRandomPickupAddressId();
            data.PickupAddresses[i] = pickupAddress;
        }
    }
}

// returns number of current Pickup Addresses
function getNumberPickupAddresses() {
    settings = {
        url:
            "https://" + baseURL + "/api/v2/users/" + userId + "/addresses",
        method: "GET",
        headers: {
            Authorization: "Bearer " + token
        },
        async: false
    };
    $.ajax(settings).done(function (response) {
        currentPickupAddresses = response.TotalRecords;
    });
}

function getRandomPickupAddressId() {
    settings = {
        url:
            "https://" + baseURL + "/api/v2/users/" + userId + "/addresses",
        method: "GET",
        headers: {
            Authorization: "Bearer " + token
        },
        async: false
    };
    $.ajax(settings).done(function (response) {
        records = response.Records;
        pickupAddressId = records[randomNumber(currentPickupAddresses)].ID;
        pickupAddress = { ID: pickupAddressId };
    });
}

function updateChildItems() {
    if (randomNumber(2)) {
        childItems = {
            Variants: [],
            Name: info + " variant",
            Price: currentItems,
            StockLimited: true,
            StockQuantity: 0,
            Tags: []
        };
        updateItemVariants();
        data.ChildItems[0] = childItems;
    }
}

function updateItemVariants() {
    randNumber = randomNumber(3) + 1;
    for (var i = 0; i < randNumber; i++) {
        variants = {
            Name: "Variant " + currentItems + String.fromCharCode(i + 65),
            GroupName: "Variance"
        };
        childItems.Variants[i] = variants;
    }
}

function updateItemTags() {
    if (randomNumber(2)) {
        data.Tags[0] = "Test_data"
        if (data.ChildItems[0]) {
            data.ChildItems[0].Tags[0] = "Test_data";
        }
    }
}

function updateItemStock() {
    if (randomNumber(2)) {
        data.StockLimited = false;
        if (data.ChildItems[0]) {
            data.ChildItems[0].StockLimited = false;
        }
    } else {
        data.StockQuantity = 100;
        if (data.ChildItems[0]) {
            data.ChildItems[0].StockQuantity = 100;
        }
    }
}

// Item Output Result
function itemOutput() {
    makeLoadingHidden();
    makeButtonVisible();
    document.getElementById("itemOutput").innerHTML = "You have Successfully generated<br>" +
        numItems + " Item(s)[" + firstItem + "-" + secondItem + "] for " +
        username + "!";
}

// Item Output Result Fail
function itemFailOutput() {
    makeLoadingHidden();
    makeButtonVisible();
    document.getElementById("itemOutput").innerHTML = username + " does not exist on your marketplace.<br>" +
        "Failed to generate " + numItems + " Item(s) for " + username + ".";
}

// Transaction variables
var merchantIds = [],
    buyerId,
    normalItemId = [],
    variantItemId = [],
    variantId,
    cartItemIds = [],
    orderIds = [],
    invoiceNo,
    orders,
    invoices = [];

// Main and Supporting functions for Generating Four Transactions
function generateTransactions() {
    button = document.getElementById("generateTransactions");
    makeButtonHidden();
    loading = document.getElementById("transactionLoad");
    makeLoadingVisible();
    adminId = document.getElementById("userGuid").value;
    setTimeout(createTransactions, 100);
}

function createTransactions() {
    getNumberUsers();
    makeUsers();
    makeCategory();
    makeItems();
    doCheckouts();
    transactionOutput();
}

function makeUsers() {
    for (var i = 0; i < 3; i++) {
        currentUsers++;
        makeMerchant();
        merchantIds[i] = userId;
    }
    makeBuyer();
    getNumberPickupAddresses();
    getRandomPickupAddressId();
    username = info;
    buyerId = userId;
}

function makeItems() {
    getNumberItems();
    makeItemsForMerchantOne();
    makeItemsForMerchantTwo();
    makeItemsForMerchantThree();
}

function makeItemsForMerchantOne() {
    userId = merchantIds[0];
    for (var i = 0; i < 5; i++) {
        currentItems++;
        makeNormalItem();
    }
    for (var i = 0; i < 5; i++) {
        currentItems++;
        makeVariantItem();
    }
}

function makeNormalItem() {
    info = "Item" + currentItems;
    data = {
        Name: info,
        BuyerDescription: "This is " + info,
        SellerDescription: "Selling " + info,
        Price: currentItems,
        StockLimited: true,
        StockQuantity: 100,
        IsVisibleToCustomer: true,
        Active: true,
        IsAvailable: true,
        CurrencyCode: "SGD",
        Categories: [
            {
                ID: categoryId
            }
        ],
        Media: [
            {
                MediaUrl: "https://dogaccessories.sandbox.arcadier.io/images/c27f4fc8-305b-4c5d-b209-635b2048d1ab-3x852dzo70Item19170-636439922842419797-C7k6Mg.jpg"
            }
        ],
        ShippingMethods: [],
        PickupAddresses: [],
        Tags: [
            "Test_data"
        ],
    };
    updateItemShippingMethods();
    updateItemPickupAddresses();
    settings = {
        url: "https://" + baseURL + "/api/v2/merchants/" + userId + "/items",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
        },
        data: JSON.stringify(data),
        async: false
    };
    $.ajax(settings).done(function (response) {
        normalItemId.push(response.ID);
    });
}

function makeVariantItem() {
    info = "Item" + currentItems;
    data = {
        Name: info,
        BuyerDescription: "This is " + info,
        SellerDescription: "Selling " + info,
        Price: currentItems,
        StockLimited: true,
        StockQuantity: 100,
        IsVisibleToCustomer: true,
        Active: true,
        IsAvailable: true,
        CurrencyCode: "SGD",
        Categories: [
            {
                ID: categoryId
            }
        ],
        ShippingMethods: [],
        PickupAddresses: [],
        Tags: [
            "Test_data"
        ],
        Media: [
            {
                MediaUrl: "https://dogaccessories.sandbox.arcadier.io/images/c27f4fc8-305b-4c5d-b209-635b2048d1ab-3x852dzo70Item19170-636439922842419797-C7k6Mg.jpg"
            }
        ],
        ChildItems: [
            {
                Variants: [
                    {
                        Name: "Variant " + currentItems + " Test",
                        GroupName: "Variance"
                    }
                ],
                Name: info + " variant",
                Price: currentItems,
                StockLimited: true,
                StockQuantity: 100,
                Tags: [
                    "Test_data"
                ]
            }
        ]
    };
    updateItemShippingMethods();
    updateItemPickupAddresses();
    settings = {
        url: "https://" + baseURL + "/api/v2/merchants/" + userId + "/items",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
        },
        data: JSON.stringify(data),
        async: false
    };
    $.ajax(settings).done(function (response) {
        childItemResponse = response.ChildItems[0];
        variantItemId.push(childItemResponse.ID);
    });
}

function makeItemsForMerchantTwo() {
    currentItems++;
    userId = merchantIds[1];
    makeNormalItem();
    currentItems++;
    makeVariantItem();
}

function makeItemsForMerchantThree() {
    currentItems++;
    userId = merchantIds[2];
    makeNormalItem();
    currentItems++;
    makeVariantItem();
}

function doCheckouts() {
    for (var i = 0; i < 7; i++) {
        preCheckout(normalItemId[i]);
        if (i == 0) {
            checkout();
            postCheckout();
        } else if (i == 3) {
            checkout();
            postCheckout();
        } else if (i == 6) {
            checkout();
            postCheckout();
        }
    }
    for (var i = 0; i < 7; i++) {
        preCheckout(variantItemId[i]);
        if (i == 0) {
            checkout();
            postCheckout();
        } else if (i == 3) {
            checkout();
            postCheckout();
        } else if (i == 6) {
            checkout();
            postCheckout();
        }
    }
}

function preCheckout(itemId) {
    data = {
        ItemDetail: {
            ID: itemId
        },
        Quantity: 1,
        CartItemType: "delivery"
    };
    settings = {
        url: "https://" + baseURL + "/api/v2/users/" + buyerId + "/carts",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
        },
        data: JSON.stringify(data),
        async: false
    };
    $.ajax(settings).done(function (response) {
        cartItemIds.push(response.ID);
    })
}

function checkout() {
    settings = {
        url: "https://" + baseURL + "/api/v2/users/" + buyerId + "/invoices/carts",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
        },
        data: JSON.stringify(cartItemIds),
        async: false
    };
    $.ajax(settings).done(function (response) {
        invoiceNo = response.InvoiceNo;
        orders = response.Orders;
        for (var i = 0; i < orders.length; i++) {
            orderIds.push(orders[i].ID);
        }
    })
}

function postCheckout() {
    for (var i = 0; i < orderIds.length; i++) {
        editOrderDetails(i);
    }
    updatePaymentDetails(orderIds.length);
    cartItemIds = [];
    orderIds = [];
}

function editOrderDetails(index) {
    data = {
        FulfilmentStatus: "Acknowledged",
        PaymentStatus: "Pending",
        Balance: 0,
        DeliveryToAddress: {
            ID: pickupAddressId
        },
        CartItemType: "delivery"
    };
    settings = {
        url: "https://" + baseURL + "/api/v2/merchants/" + merchantIds[0] + "/orders/" + orderIds[index],
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
        },
        data: JSON.stringify(data),
        async: false
    }
    $.ajax(settings);
    editPaymentStatus(index);
}

function editPaymentStatus(index) {
    data = {
        FulfilmentStatus: "Delivered",
        PaymentStatus: "Paid"
    };
    settings = {
        url: "https://" + baseURL + "/api/v2/merchants/" + merchantIds[0] + "/orders/" + orderIds[index],
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
        },
        data: JSON.stringify(data),
        async: false
    }
    $.ajax(settings);
}

function updatePaymentDetails(index) {
    for (var i = 0; i < index; i++) {
        data = {
            "InvoiceNo": invoiceNo,
            "Payer": {
                "ID": buyerId
            },
            "Payee": {
                "ID": merchantIds[i]
            },
            "Order": {
                "ID": orderIds[i]
            },
            "Total": 0,
            "Fee": 0,
            "Status": "Success",
            "Refunded": false,
            "GatewayPayKey": "Key " + orderIds[i],
            "GatewayTransactionID": "Transaction ID " + orderIds[i],
            "GatewayStatus": "Complete",
            "GatewayRef": "Gateway Reference " + orderIds[i],
            "GatewayCorrelationId": "Correlation ID " + orderIds[i],
            "GatewaySenderId": "Sender ID " + orderIds[i],
            "GatewaySenderRef": "Sender Reference " + orderIds[i],
            "GatewayReceiverId": "Receiver ID " + orderIds[i],
            "GatewayReceiverRef": "Receiver Reference " + orderIds[i],
            Gateway: {
                Code: "Payment Gateway"
            },
            DateTimeCreated: 0,
            DateTimePaid: 0,
            DateTimeSubmittedForApproval: 0,
            DateTimeRefunded: 0
        };
        invoices[i] = data;
    }
    settings = {
        url: "https://" + baseURL + "/api/v2/admins/" + adminId + "/invoices/" + invoiceNo,
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
        },
        data: JSON.stringify(invoices),
        async: false
    }
    $.ajax(settings);
}

// Transaction Output Result
function transactionOutput() {
    makeLoadingHidden();
    makeButtonVisible();
    document.getElementById("transactionOutput").innerHTML = "You have Successfully generated<br>" +
        "10 Transactions for " + username + "!";
}

// Main and Supporting functions for Mass User Upload
function downloadUserTemplate() {
    csv = "Username/Email(R)," +
        "First Name(R)," +
        "Last Name(R)," +
        "Display Name(R)," +
        "Description," +
        "Date of Birth," +
        "Phone Number(R)," +
        "Time Zone," +
        "User Role(R)," +
        "Address Line1(R)," +
        "Address Line2," +
        "Postal Code(R)," +
        "Delivery?(R)," +
        "Pickup?(R)," +
        "State," +
        "City(R)," +
        "Country(R)," +
        "Country Code(R)," +
        "Shipping Method Courier(M)," +
        "Method(M)," +
        "Price(M)," +
        "Combined Price(M)," +
        "Currency Code(M)," +
        "Shipping Method Description(M)\n";
    csv = csv + "String," +
        "String," +
        "String," +
        "String," +
        "String," +
        "DD/MM/YYYY," +
        "Number," +
        "GMT+(No.)," +
        "Merchant/Buyer," +
        "String," +
        "String," +
        "String," +
        "Yes/No," +
        "Yes/No," +
        "String," +
        "String," +
        "String," +
        "String," +
        "String," +
        "Delivery/Pickup," +
        "Number," +
        "Number," +
        "String," +
        "String";
    doc = document.createElement("a");
    doc.href = "data:text/csv;charset=utf-8," + encodeURI(csv);
    doc.target = "_blank";
    doc.download = "UserTemplate.csv";
    doc.click();
}

function uploadUsers(files) {
    if (window.FileReader) {
        getAsText(files[0]);
    } else {
        alert('FileReader are not supported in this browser.');
    }
    button = document.getElementById("uploadUsers");
    makeButtonHidden();
    loading = document.getElementById("userUploadLoad");
    makeLoadingVisible();
    adminId = document.getElementById("userGuid").value;
    setTimeout(inputUsers, 100);
}

function inputUsers() {
    for (var i = 2; i < lines.length; i++) {
        if (lines[i][0]) {
            makeUser(i);
        }
    }
    userUploadOutput();
}

function makeUser(index) {
    if (isNaN(lines[index][6])) {
        error = error + 1;
        outputMessage = outputMessage + "Error: Phone Number is invalid for User " + lines[index][0] + ".<br>";
    } else if (!(alpha2.includes(lines[index][17]))) {
        error = error + 1;
        outputMessage = outputMessage + "Error: Country Code is invalid for User " + lines[index][0] + ".<br>";
    } else {
        registerUser(index);
        if (exitCode) {
            exitCode = 0;
            return;
        }
        getNumberUsers();
        getUserId();
        updateUserInfo(index);
        updateUserAddress(index);
    }
}

function registerUser(index) {
    info = lines[index][0];
    data = {
        Email: info,
        Password: info,
        ConfirmPassword: info
    };
    settings = {
        url: "https://" + baseURL + "/api/v2/accounts/register",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
        },
        data: JSON.stringify(data),
        async: false,
        error: function () {
            exitCode = 1;
            error = error + 1;
            outputMessage = outputMessage + "Error: " + info + " already exists on your marketplace!<br>"
        }
    };
    $.ajax(settings);
}

function updateUserInfo(index) {
    data = {
        FirstName: lines[index][1],
        LastName: lines[index][2],
        DisplayName: lines[index][3],
        Description: lines[index][4],
        DOB: lines[index][5],
        PhoneNumber: lines[index][6],
        TimeZone: lines[index][7]
    };
    settings = {
        url: "https://" + baseURL + "/api/v2/users/" + userId,
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
        },
        data: JSON.stringify(data),
        async: false
    };
    $.ajax(settings);
    if (lines[index][8].toLowerCase() === "merchant") {
        updateMerchantRole();
        if (!((lines[index][19].toLowerCase() === "delivery") || (lines[index][19].toLowerCase() === "pickup"))) {
            outputMessage = outputMessage + "Error: Merchant " + lines[index][0] + " was Successfully created BUT<br>" +
                "has an Invalid Delivery Method for Shipping Method.<br>";
        } else if (!(alpha3.includes(lines[index][22]))) {
            outputMessage = outputMessage + "Error: Merchant " + lines[index][0] + " was Successfully created BUT<br>" +
                "has an Invalid Currency Code for Shipping Method.<br>";
        } else {
            updateUserShippingMethod(index);
        }
    }
}

function updateUserAddress(index) {
    data = {
        Name: lines[index][1] + " " + lines[index][2],
        Line1: lines[index][9],
        Line2: lines[index][10],
        PostCode: lines[index][11],
        Delivery: (lines[index][12] === "Yes"),
        Pickup: (lines[index][13] === "Yes"),
        State: lines[index][14],
        City: lines[index][15],
        Country: lines[index][16],
        CountryCode: lines[index][17]
    };
    settings = {
        url: "https://" + baseURL + "/api/v2/users/" + userId + "/addresses",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
        },
        data: JSON.stringify(data),
        async: false
    };
    $.ajax(settings);
}

function updateUserShippingMethod(index) {
    data = {
        Courier: lines[index][18],
        Method: lines[index][19].toLowerCase(),
        Price: lines[index][20],
        CombinedPrice: lines[index][21],
        CurrencyCode: lines[index][22],
        Description: lines[index][23]
    }
    settings = {
        url:
            "https://" + baseURL + "/api/v2/merchants/" + userId + "/shipping-methods",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
        },
        data: JSON.stringify(data),
        async: false
    };
    $.ajax(settings);
}

// User Upload Output Result
function userUploadOutput() {
    makeLoadingHidden();
    makeButtonVisible();
    document.getElementById("userUploadOutput").innerHTML = outputMessage +
        "You have Successfully generated " + (lines.length - 2 - error) + " Users!";
    outputMessage = "";
    error = 0;
}

// Item Upload Variables
var categories = [],
    categoryIds = [],
    tags = [];

// Main and Supporting functions for Mass Item Upload
function downloadItemTemplate() {
    csv = "Item Name(R)," +
        "Merchant Username/Email(R)," +
        "SKU," +
        "Buyer Description(R)," +
        "Seller Description(R)," +
        "Price(R)," +
        "Price Unit," +
        "Stock Limited?(R)," +
        "Stock Quantity," +
        "Currency Code(R)," +
        "Categories(R)," +
        "Tags\n";
    csv = csv + "String," +
        "String," +
        "String," +
        "String," +
        "String," +
        "Number," +
        "String," +
        "Yes/No," +
        "Number," +
        "String," +
        "String," +
        "String";
    doc = document.createElement("a");
    doc.href = "data:text/csv;charset=utf-8," + encodeURI(csv);
    doc.target = "_blank";
    doc.download = "ItemTemplate.csv";
    doc.click();
}

function uploadItems(files) {
    if (window.FileReader) {
        getAsText(files[0]);
    } else {
        alert('FileReader are not supported in this browser.');
    }
    button = document.getElementById("uploadItems");
    makeButtonHidden();
    loading = document.getElementById("itemUploadLoad");
    makeLoadingVisible();
    adminId = document.getElementById("userGuid").value;
    setTimeout(inputItems, 100);
}

function inputItems() {
    getNumberUsers();
    for (var i = 2; i < lines.length; i++) {
        if (lines[i][0]) {
            info = lines[i][1];
            getUserId();
            if (userId != "") {
                checkMerchant();
                if (!isMerchant) {
                    error = error + 1;
                    outputMessage = outputMessage + "Error: " + info + " is not a Merchant on your marketplace.<br>";
                } else {
                    categories = lines[i][10].split(",");
                    tags = lines[i][11].split(",");
                    if (!(Number(lines[i][5]))) {
                        error = error + 1;
                        outputMessage = outputMessage + "Error: Invalid Price (" + lines[i][0] + ").<br>";
                    } else if ((lines[i][7] === "Yes") && !(Number(lines[i][8]))) {
                        error = error + 1;
                        outputMessage = outputMessage + "Error: Stock Quantity not specified for limited Stock (" + lines[i][0] + ").<br>";
                    } else if ((lines[i][7] === "Yes") && (Number(lines[i][8]) < 0)) {
                        error = error + 1;
                        outputMessage = outputMessage + "Error: Invalid Stock Quantity for limited Stock (" + lines[i][0] + ").<br>";
                    } else if (!(alpha3.includes(lines[i][9]))) {
                        error = error + 1;
                        outputMessage = outputMessage + "Error: Invalid Currency Code (" + lines[i][0] + ").<br>"
                    } else {
                        getNumberCategories();
                        getCategoryIds();
                        if (!categoryIds.length) {
                            error = error + 1;
                            outputMessage = outputMessage + "Error: Categories not recognized (" + lines[i][0] + ").<br>";
                        } else {
                            makeCustomItem(i);
                        }
                    }
                }
            } else {
                error = error + 1;
                outputMessage = outputMessage + "Error: " + info + " is not a registered User on your marketplace.<br>";
            }
        }
    }
    itemUploadOutput();
}

function checkMerchant() {
    settings = {
        url:
            "https://" + baseURL + "/api/v2/users/" + userId,
        method: "GET",
        async: false
    };
    $.ajax(settings).done(function (response) {
        roles = response.Roles;
        for (var i = 0; i < roles.length; i++) {
            if (roles[i] === "Merchant") {
                isMerchant = true;
                return;
            }
        }
        isMerchant = false;
    })
}

function getCategoryIds() {
    settings = {
        url:
            "https://" +
            baseURL +
            "/api/v2/admins/" +
            adminId +
            "/categories?PageSize=" +
            currentCategories,
        method: "GET",
        async: false
    };
    $.ajax(settings).done(function (response) {
        categoryIds = [];
        for (var i = 0; i < categories.length; i++) {
            records = response.Records;
            records.forEach(function (element) {
                if (element.Name === categories[i]) {
                    category = { ID: element.ID };
                    categoryIds.push(category);
                }
            });
        }
    });
}

function makeCustomItem(index) {
    data = {
        SKU: lines[index][2],
        Name: lines[index][0],
        BuyerDescription: lines[index][3],
        SellerDescription: lines[index][4],
        Price: lines[index][5],
        PriceUnit: lines[index][6],
        StockLimited: (lines[index][7] === "Yes"),
        StockQuantity: lines[index][8],
        IsVisibleToCustomer: true,
        Active: true,
        IsAvailable: true,
        CurrencyCode: lines[index][9],
        Categories: categoryIds,
        Media: [
            {
                MediaUrl: "https://dogaccessories.sandbox.arcadier.io/images/c27f4fc8-305b-4c5d-b209-635b2048d1ab-3x852dzo70Item19170-636439922842419797-C7k6Mg.jpg"
            }
        ],
        ShippingMethods: [],
        PickupAddresses: [],
        Tags: tags,
    };
    updateItemShippingMethods();
    updateItemPickupAddresses();
    settings = {
        url: "https://" + baseURL + "/api/v2/merchants/" + userId + "/items",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
        },
        data: JSON.stringify(data),
        async: false
    };
    $.ajax(settings);
}

// Item Upload Output Result
function itemUploadOutput() {
    makeLoadingHidden();
    makeButtonVisible();
    document.getElementById("itemUploadOutput").innerHTML = outputMessage + "You have Successfully generated " + (lines.length - 2 - error) + " Items!";
    outputMessage = "";
    error = 0;
}