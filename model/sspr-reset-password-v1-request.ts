/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.39
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { FieldEUserTypeSSPR } from './field-euser-type-sspr';

/**
 * Request for the /1/module/sspr/resetPassword API Request
 * @export
 * @interface SsprResetPasswordV1Request
 */
export interface SsprResetPasswordV1Request {
    /**
     * The customer code assigned to your account
     * @type {string}
     * @memberof SsprResetPasswordV1Request
     */
    pksCustomerCode: string;
    /**
     * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     * @type {number}
     * @memberof SsprResetPasswordV1Request
     */
    fkiLanguageID: number;
    /**
     * 
     * @type {FieldEUserTypeSSPR}
     * @memberof SsprResetPasswordV1Request
     */
    eUserTypeSSPR: FieldEUserTypeSSPR;
    /**
     * The email address.
     * @type {string}
     * @memberof SsprResetPasswordV1Request
     */
    sEmailAddress?: string;
    /**
     * The Login name of the User.
     * @type {string}
     * @memberof SsprResetPasswordV1Request
     */
    sUserLoginname?: string;
    /**
     * Hex Encoded Secret SSPR token
     * @type {string}
     * @memberof SsprResetPasswordV1Request
     */
    binUserSSPRtoken: string;
    /**
     * A Password.  Must meet complexity requirements
     * @type {string}
     * @memberof SsprResetPasswordV1Request
     */
    sPassword: string;
}


