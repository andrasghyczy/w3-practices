let myFavouriteCountry = {
    "name": {
        "common": "Netherlands",
        "official": "Kingdom of the Netherlands",
        "nativeName": {
            "nld": {
                "official": "Koninkrijk der Nederlanden",
                "common": "Nederland"
            }
        }
    },
    "tld": [
        ".nl"
    ],
    "cca2": "NL",
    "ccn3": "528",
    "cca3": "NLD",
    "cioc": "NED",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
        "EUR": {
            "name": "Euro",
            "symbol": "€"
        }
    },
    "idd": {
        "root": "+3",
        "suffixes": [
            "1"
        ]
    },
    "capital": [
        "Amsterdam"
    ],
    "altSpellings": [
        "NL",
        "Holland",
        "Nederland",
        "The Netherlands"
    ],
    "region": "Europe",
    "subregion": "Western Europe",
    "languages": {
        "nld": "Dutch"
    },
    "translations": {
        "ara": {
            "official": "مملكة هولندا",
            "common": "هولندا"
        },
        "ces": {
            "official": "Nizozemské království",
            "common": "Nizozemsko"
        },
        "cym": {
            "official": "Kingdom of the Netherlands",
            "common": "Netherlands"
        },
        "deu": {
            "official": "Niederlande",
            "common": "Niederlande"
        },
        "est": {
            "official": "Madalmaade Kuningriik",
            "common": "Holland"
        },
        "fin": {
            "official": "Alankomaat",
            "common": "Alankomaat"
        },
        "fra": {
            "official": "Pays-Bas",
            "common": "Pays-Bas"
        },
        "hrv": {
            "official": "Holandija",
            "common": "Nizozemska"
        },
        "hun": {
            "official": "Holland Királyság",
            "common": "Hollandia"
        },
        "ita": {
            "official": "Paesi Bassi",
            "common": "Paesi Bassi"
        },
        "jpn": {
            "official": "オランダ",
            "common": "オランダ"
        },
        "kor": {
            "official": "네덜란드 왕국",
            "common": "네덜란드"
        },
        "nld": {
            "official": "Nederland",
            "common": "Nederland"
        },
        "per": {
            "official": "هلند",
            "common": "هلند"
        },
        "pol": {
            "official": "Królestwo Niderlandów",
            "common": "Holandia"
        },
        "por": {
            "official": "Holanda",
            "common": "Holanda"
        },
        "rus": {
            "official": "Нидерланды",
            "common": "Нидерланды"
        },
        "slk": {
            "official": "Holandské kráľovstvo",
            "common": "Holansko"
        },
        "spa": {
            "official": "Países Bajos",
            "common": "Países Bajos"
        },
        "swe": {
            "official": "Nederländerna",
            "common": "Nederländerna"
        },
        "urd": {
            "official": "مملکتِ نیدرلینڈز",
            "common": "نیدرلینڈز"
        },
        "zho": {
            "official": "荷兰",
            "common": "荷兰"
        }
    },
    "latlng": [
        52.5,
        5.75
    ],
    "landlocked": false,
    "borders": [
        "BEL",
        "DEU"
    ],
    "area": 41850,
    "demonyms": {
        "eng": {
            "f": "Dutch",
            "m": "Dutch"
        },
        "fra": {
            "f": "Néerlandaise",
            "m": "Néerlandais"
        }
    },
    "flag": "🇳🇱",
    "maps": {
        "googleMaps": "https://goo.gl/maps/Hv6zQswGhFxoVVBm6",
        "openStreetMaps": "https://www.openstreetmap.org/relation/47796"
    },
    "population": 16655799,
    "gini": {
        "2018": 28.1
    },
    "fifa": "NED",
    "car": {
        "signs": [
            "NL"
        ],
        "side": "right"
    },
    "timezones": [
        "UTC-04:00",
        "UTC+01:00"
    ],
    "continents": [
        "Europe"
    ],
    "flags": {
        "png": "https://flagcdn.com/w320/nl.png",
        "svg": "https://flagcdn.com/nl.svg"
    },
    "coatOfArms": {
        "png": "https://mainfacts.com/media/images/coats_of_arms/nl.png",
        "svg": "https://mainfacts.com/media/images/coats_of_arms/nl.svg"
    },
    "startOfWeek": "monday",
    "capitalInfo": {
        "latlng": [
            52.35,
            4.92
        ]
    },
    "postalCode": {
        "format": "#### @@",
        "regex": "^(\\d{4}[A-Z]{2})$"
    }
}

let v1 = myFavouriteCountry.tld[0]
console.log(v1)

let v2 = myFavouriteCountry.name.nativeName.nld.official
console.log(v2)

let v3 = myFavouriteCountry.demonyms.fra.f
console.log(v3)

let v4 = myFavouriteCountry.idd.suffixes[0]
console.log(v4)