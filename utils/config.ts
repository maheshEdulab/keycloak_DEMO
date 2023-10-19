export const kcConfig = {
    clientid: 'myclient',
    bearerOnly: true,
    serverUrl: 'http://localhost:8080',
    realm: 'myrealm',
    realmPublicKey: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAorMXDiYImo8u8gA8b/cv6DahGNKeW8fq9bsWy+L2H2kzAWjxBUFPAb/aj7WUoCrzHxAPSCAxpv2I+mNGpecIkUCiEyiq0Zp9m53A2gvW/irDZCf4OfBwHmlpIqTb48v2kIk4ARNmwOPWJ6vRp3AsiHPTMrnAlSI6lEvp9vquNkenQbduaKm0O2308TOmBXkTNURUp2QSy4bYRuyk+6077rJKYNb/iUj6I0PtoAupfC2sn4HXB1201mQqnI/ts1LGCxDOICO2I21jJY6kDemIbKbfI1ysz0BQ2/U4Ce0Od4c+/NpCRIN4aw1jiI0/mcGIVF78LM92ugJPPrxy3VMKFQIDAQAB',
    'confidential-port': 8080,
    'ssl-required': 'external',
    "auth-server-url": 'http://localhost:8080',
    resource: 'myclient'
};


// const api = {
//     "realm": "myrealm",
//     "auth-server-url": "http://localhost:8080/",
//     "ssl-required": "external",
//     "resource": "myclient",
//     "public-client": true,   
//     "verify-token-audience": true,
//     "use-resource-role-mappings": true,
//     "confidential-port": 0
// }