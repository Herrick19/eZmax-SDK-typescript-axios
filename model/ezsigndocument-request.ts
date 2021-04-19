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
 * An Ezsigndocument Object
 * @export
 * @interface EzsigndocumentRequest
 */
export interface EzsigndocumentRequest {
    /**
     * Indicates where to look for the document binary content.
     * @type {string}
     * @memberof EzsigndocumentRequest
     */
    eEzsigndocumentSource: EzsigndocumentRequestEEzsigndocumentSourceEnum;
    /**
     * Indicates the format of the document.
     * @type {string}
     * @memberof EzsigndocumentRequest
     */
    eEzsigndocumentFormat: EzsigndocumentRequestEEzsigndocumentFormatEnum;
    /**
     * The Base64 encoded binary content of the document.  This field is Required when eEzsigndocumentSource = Base64.
     * @type {string}
     * @memberof EzsigndocumentRequest
     */
    sEzsigndocumentBase64?: string;
    /**
     * A reference to a valid Ezsignfolder.  That value is returned after a successful Ezsignfolder Creation.
     * @type {number}
     * @memberof EzsigndocumentRequest
     */
    fkiEzsignfolderID: number;
    /**
     * Represent a Date Time. The timezone is the one configured in the User\'s profile.
     * @type {string}
     * @memberof EzsigndocumentRequest
     */
    dtEzsigndocumentDuedate: string;
    /**
     * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     * @type {number}
     * @memberof EzsigndocumentRequest
     */
    fkiLanguageID: number;
    /**
     * The name of the document that will be presented to Ezsignfoldersignerassociations
     * @type {string}
     * @memberof EzsigndocumentRequest
     */
    sEzsigndocumentName: string;
}

/**
    * @export
    * @enum {string}
    */
export enum EzsigndocumentRequestEEzsigndocumentSourceEnum {
    Base64 = 'Base64'
}
/**
    * @export
    * @enum {string}
    */
export enum EzsigndocumentRequestEEzsigndocumentFormatEnum {
    Pdf = 'Pdf'
}



