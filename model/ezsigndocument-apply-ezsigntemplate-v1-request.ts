/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.42
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Request for the /1/object/ezsigndocument/{pkiEzsigndocumentID}/applyezsigntemplate API Request
 * @export
 * @interface EzsigndocumentApplyEzsigntemplateV1Request
 */
export interface EzsigndocumentApplyEzsigntemplateV1Request {
    /**
     * The unique ID of the Ezsigndocument
     * @type {number}
     * @memberof EzsigndocumentApplyEzsigntemplateV1Request
     */
    fkiEzsigntemplateID: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof EzsigndocumentApplyEzsigntemplateV1Request
     */
    a_sEzsigntemplatesigner: Array<string>;
    /**
     * 
     * @type {Array<number>}
     * @memberof EzsigndocumentApplyEzsigntemplateV1Request
     */
    a_pkiEzsignfoldersignerassociationID: Array<number>;
}


