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


import { CommonAudit } from './common-audit';
import { FieldEUserType } from './field-euser-type';

/**
 * 
 * @export
 * @interface UserResponseAllOf
 */
export interface UserResponseAllOf {
    /**
     * The unique ID of the User
     * @type {number}
     * @memberof UserResponseAllOf
     */
    pkiUserID: number;
    /**
     * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     * @type {number}
     * @memberof UserResponseAllOf
     */
    fkiLanguageID: number;
    /**
     * 
     * @type {FieldEUserType}
     * @memberof UserResponseAllOf
     */
    eUserType: FieldEUserType;
    /**
     * The First name of the user
     * @type {string}
     * @memberof UserResponseAllOf
     */
    sUserFirstname: string;
    /**
     * The Last name of the user
     * @type {string}
     * @memberof UserResponseAllOf
     */
    sUserLastname: string;
    /**
     * The Login name of the User.
     * @type {string}
     * @memberof UserResponseAllOf
     */
    sUserLoginname: string;
    /**
     * 
     * @type {CommonAudit}
     * @memberof UserResponseAllOf
     */
    objAudit: CommonAudit;
}


