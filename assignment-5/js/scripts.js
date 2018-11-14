/* Package data and constructor objects */

// TODO: add three more packages...
// Package data array (simulated data soruce, such as JSON or database recordset)
var data = [
    {
        name: 'emmet',
        description: 'Emmet is the number one code snippet tool.',
        author: 'emmetio',
        url: 'https://atom.io/packages/emmet',
        downloads: 1662209,
        stars: 2534,
        selector: 'p1'
    },
    {
        name: 'atom-beautify',
        description: 'The atom-beautify package will clean up your code, and make it more readable.',
        author: 'Glavin001',
        url: 'https://atom.io/packages/atom-beautify',
        downloads: 4228040,
        stars: 4541,
        selector: 'p2'
    }
];

// (Atom) Package constructor function
function Package(data) {
    this.name = data.name;
    this.description = data.description;
    this.author = data.author;
    this.url = data.url;
    this.downloads = data.downloads;
    this.starts = data.stars;
    this.selector = data.selector;

    this.getFormattedDownloads = function () {
        return this.downloads.toLocaleString();
    };

    this.getFormattedStars = function () {
        return this.stars.toLocaleString();
    };
}

var writePackageInfo = function(package) {
    // Get reference to the DOM elements
    var selector = package.selector,
        nameEl = document.getElementById(selector + '-name'),
        descEl = document.getElementById(selector + '-description'),
        authorEl = document.getElementById(selector + '-author'),
        downloadEl = document.getElementById(selector + '-downloads'),
        startsEl = document.getElementById(selector + '-stars');

    // Write package data to DOM elements
    nameEl.textContent = package.name;
    descEl.textContent = package.description;
    // TODO: the rest of the properties...
}

// Write package data for all the package
var emmet = new Package(data[0]);
writePackageInfo(emmet);

// TODO: the rest of the packages...