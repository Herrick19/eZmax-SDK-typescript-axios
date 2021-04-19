/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.40
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Payload for the /1/object/ezsignfoldersignerassociation/getInPersonLoginUrl API Request
 * @export
 * @interface EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseMPayload
 */
export interface EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseMPayload {
    /**
     * The Url to login to the signing application.    Url will expire after 30 minutes.  
     * @type {string}
     * @memberof EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseMPayload
     */
    sLoginUrl: string;
}


