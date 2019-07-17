$(document).ready(function () {
    var myDiv = document.getElementById("Users")
    myDiv.style.display = "block";
});

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
    secondItem = 0;

// Tab function
function openPage(event, pageName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(pageName).style.display = "block";
    event.currentTarget.className += " active";
}

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
    makeLoadingHidden();
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

// Output User Result
function userOutput() {
    makeButtonVisible();
    document.getElementById("userOutput").innerHTML = "You have Successfully generated<br>" +
        numMerchants + " Merchant(s)[" + firstMerchant + "-" + secondMerchant + "] and " +
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
    makeLoadingHidden();
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

// Output Category Result
function catOutput() {
    makeButtonVisible();
    if (numSubCategories > 0) {
        document.getElementById("catOutput").innerHTML = "You have Successfully generated<br>" +
            numCategories + " Category(ies)[" + firstCategory + "-" + secondCategory + "] with " +
            numSubCategories + " SubCategory(ies)[" + String.fromCharCode(65) + "-" + String.fromCharCode(Number(numSubCategories) + 64) + "] each!";
    } else {
        document.getElementById("catOutput").innerHTML = "You have Successfully generated<br>" +
            numCategories + " Category(ies)[" + firstCategory + "-" + secondCategory + "] with " +
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
        makeLoadingHidden();
        itemOutput();
    } else {
        makeLoadingHidden();
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
            getCategoryId();
            category = { ID: categoryId };
            data.Categories[i] = category;
        }
    }
}

function getCategoryId() {
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
    });
}

function updateItemShippingMethods() {
    getNumberShippingMethods();
    if (currentShippingMethods) {
        randNumber = randomNumber(currentShippingMethods) + 1;
        for (var i = 0; i < randNumber; i++) {
            getShippingMethodId();
            shippingMethod = { ID: shippingMethodId };
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

function getShippingMethodId() {
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
    });
}

function updateItemPickupAddresses() {
    getNumberPickupAddresses();
    if (currentPickupAddresses) {
        randNumber = randomNumber(currentPickupAddresses) + 1;
        for (var i = 0; i < randNumber; i++) {
            getPickupAddressId();
            pickupAddress = { ID: pickupAddressId };
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

function getPickupAddressId() {
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

// Output Item Result
function itemOutput() {
    makeButtonVisible();
    document.getElementById("itemOutput").innerHTML = "You have Successfully generated<br>" +
        numItems + " Item(s)[" + firstItem + "-" + secondItem + "] for " +
        username + "!";
}

// Output Item Result Fail
function itemFailOutput() {
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
    makeLoadingHidden();
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
    getPickupAddressId();
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
        invoices.push(data);
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

function transactionOutput() {
    makeButtonVisible();
    document.getElementById("transactionOutput").innerHTML = "You have Successfully generated<br>" +
        "10 Transactions for " + username + "!";
}