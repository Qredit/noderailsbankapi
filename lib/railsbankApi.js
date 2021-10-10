/*
* A Promised NodeJS Module for connecting with the Railsbank V1 API
*/

const request = require("request");
const rp = require('request-promise');
const Big = require('big.js');

/* constant Motion API URL */

function motionApi(motionApiURL) {
    if (motioApiURL === void 0)
        this.motionApiURL = 'https://unifiedapi.qredit.cloud/';
    else
        this.motionApiURL = motionApiURL;

    return this;
}


/* constant Railbank API URL */

var railsbankApi = /** @class */ (function () {

    function railsbankApi(apiURL) {
        if (apiURL === void 0)
            this.apiURL = 'https://play.railsbank.com/v1/customer/';

        /*
        method: 'POST',
        uri: `https://play.railsbank.com/v1/customer/ledgers/${ledgerId}/`,
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': API_KEY,
          },
          json: true,
        */

        else
            this.apiURL = apiURL;

        return this;
    }

    railsbankApi.prototype.getApiUrl = function () {

        return this.apiURL;

    };


    /* other constants */
    /* doto */

    const userId = this.userIdFromMotion/* userid from qredit motion? */
    const ledgerId = this.userId
    const apiKey = this.API_KEY


    /*
     * returns a promise to create an IBAN for a specific ledger
     * @param {String} ledgerId
     * @param {String} API_KEY
     * @return {Promise}
     */

    /*********************************************************************
    
      ___    _   ___ _    ___ ___   _   _  _ _  __    _   ___ ___
     | _ \  /_\ |_ _| |  / __| _ ) /_\ | \| | |/ /   /_\ | _ \_ _|
     |   / / _ \ | || |__\__ \ _ \/ _ \| .` | ' <   / _ \|  _/| |
     |_|_\/_/ \_\___|____|___/___/_/ \_\_|\_|_|\_\ /_/ \_\_| |___|
    
    
     ********************************************************************/

    /*
    
    1. createIBAN
    2. createLedger
    3. createUser
    4. creditLedger
    5. getAllUsers
    6. getBanks
    7. getIBAN
    8. getLedger
    9. getTransaction
    10. getUser
    11. deleteUser
    
    */

    /* 1. createIBAN */

    railsbankApi.prototype.createIBAN = function (ledgerId, API_KEY) {

        return new Promise((createIBAN) => {

            request.post(this.apiURL + ledgerId + '/assign-iban', { json: true }, function (ledger, err) {

                function success(ledger) {
                    console.log("Created IBAN ----");
                    console.log("=======================");
                    res(ledger);
                }
                function error(err) {
                    console.log("!! Error Creating IBAN !!");
                    console.log("=======================");
                    rej(err);
                }

            });

        });


    };



    /* 2. createLedger */

    railsbankApi.prototype.createLedger = function (ledgerId, API_KEY) {

        return new Promise(createLedger);

        function createLedger(res, rej) {

            request.post(this.apiURL + '/ledgers', { json: true }, { API_KEY: apiKey }, function (body, err) {

                function success(body) {
                    console.log("Created Ledger ----");
                    console.log("=====================");
                    res(body);
                };

                function error(err) {
                    console.log("!! ERROR Creating Ledger !!");
                    console.log("=======================");
                    rej(err);
                }

            });
        };
    };

    /* 3. createUser */

    railsbankApi.prototype.createUser = function (ledgerId, API_KEY) {

        return new Promise(createUser);

        function createUser(res, rej) {

            request.post(this.apiURL + '/endusers', { json: true }, { API_KEY: apiKey }, function (enduser, err) {

                function success(enduser) {
                    console.log("Created USER ----");
                    console.log("=======================");
                    console.log(enduser);
                    res(enduser);
                }

                function error(err) {
                    console.log("!! Error Creating User !!");
                    console.log("=======================");
                    console.log(err);
                    rej(err);
                }

            });
        };
    };

    /* 4. creditLedger */

    railsbankApi.prototype.creditLedger = function (transaction, API_KEY) {

        return new Promise(creditLedger);

        function creditLedger(res, rej) {

            request.post(this.apiURL + '/transactions/receive', { json: true }, { API_KEY: apiKey }, function (enduser, err) {

                function success(enduser) {
                    console.log("Credited Ledger Successfully ----");
                    console.log("=======================");
                    res(enduser);
                }

                function error(err) {
                    console.log("!! Error Crediting Ledger !!");
                    console.log("=======================");
                    rej(err);
                }

            });
        };
    };

    /* 5. getAllUsers */

    railsbankApi.prototype.getAllUsers = function (API_KEY) {

        return new Promise(getAllUsers);

        function getAllUsers(res, rej) {

            request.post(this.apiURL + '/endusers/', { json: true }, { API_KEY: apiKey }, function (body, err) {

                function success(body) {
                    res(body);
                }

                function error(err) {
                    rej(err);
                }

            });
        };
    };

    /* 6. getBanks */

    railsbankApi.prototype.getBanks = function (API_KEY) {

        return new Promise(getBanks);

        function getBanks(res, rej) {

            request.post(this.apiURL + '/partners/', { json: true }, { API_KEY: apiKey }, function (body, err) {

                function success(body) {
                    res(body);
                }

                function error(err) {
                    rej(err);
                }

            });
        };
    };

    /* 7. getIBAN */

    railsbankApi.prototype.getIBAN = function (API_KEY) {

        return new Promise(getIBAN);

        function getIBAN(res, rej) {

            request.post(this.apiURL + '/ledgers/' + ledgerId, { json: true }, { API_KEY: apiKey }, function (ledgerInfo, err) {

                function success(ledgerInfo) {
                    console.log("Retreived IBAN ----");
                    console.log("=======================");
                    res(ledgerInfo);
                }

                function error(err) {
                    console.log("!! Error Retreiving IBAN !!");
                    console.log("=======================");
                    rej(err);
                }

            });
        };
    };

    /* 8. getLedger */

    railsbankApi.prototype.getLedger = function (ledgerId, API_KEY) {

        return new Promise(getLedger);

        function getLedger(res, rej) {

            request.post(this.apiURL + '/ledgers/' + ledgerId, { json: true }, { API_KEY: apiKey }, function (body, err) {

                function success(body) {
                    res(body);
                }

                function error(err) {
                    rej(err);
                }

            });
        };
    };

    /* 9. getTransaction */

    railsbankApi.prototype.getTransaction = function (transactionId, API_KEY) {

        return new Promise(getTransaction);

        function getTransaction(res, rej) {

            request.post(this.apiURL + '/transactions/' + transactionId, { json: true }, { API_KEY: apiKey }, function (body, err) {

                function success(body) {
                    res(body);
                }

                function error(err) {
                    rej(err);
                }

            });
        };
    };

    /* 10. getUser */

    railsbankApi.prototype.getUser = function (enduserId, API_KEY) {

        return new Promise(getUser);

        function getUser(res, rej) {

            request.post(this.apiURL + '/endusers/' + enduserId, { json: true }, { API_KEY: apiKey }, function (body, err) {

                function success(body) {
                    res(body);
                }

                function error(err) {
                    rej(err);
                }

            });
        };
    };

    /* 11. deleteUser */

    railsbankApi.prototype.deleteUser = function (enduserId, person, API_KEY) {

        return new Promise(deleteUser);

        function deleteUser(res, rej) {

            request.post(this.apiURL + '/endusers/' + enduserId, { json: true }, { API_KEY: apiKey }, function (enduser, err) {

                function success(enduser) {
                    console.log("Updated USER ----");
                    console.log("=======================");
                    console.log(enduser);
                    res(enduser);
                }

                function error(err) {
                    console.log("!! Error Updaing User !!");
                    console.log("=======================");
                    console.log(err);
                    rej(err);
                }

            });
        };
    };

    /* end of prototypes */

    return railsbankApi;

}());

exports.default = railsbankApi;