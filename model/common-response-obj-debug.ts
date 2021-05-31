/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.44
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { CommonResponseObjSQLQuery } from './common-response-obj-sqlquery';

/**
 * This is a generic debug object that is returned by all API requests
 * @export
 * @interface CommonResponseObjDebug
 */
export interface CommonResponseObjDebug {
    /**
     * The peak memory allocated during the API request execution. Formatted as a human readable string
     * @type {string}
     * @memberof CommonResponseObjDebug
     */
    sMemoryUsage: string;
    /**
     * The total server execution time of the API request execution. Formatted as a human readable string
     * @type {string}
     * @memberof CommonResponseObjDebug
     */
    sRunTime: string;
    /**
     * The number of SQL SELECT queries that were sent to the database server during the API request execution
     * @type {number}
     * @memberof CommonResponseObjDebug
     */
    iSQLSelects: number;
    /**
     * The number of SQL INSERT/UPDATE/DELETE queries that were sent to the database server during the API request execution
     * @type {number}
     * @memberof CommonResponseObjDebug
     */
    iSQLQueries: number;
    /**
     * An array of the SQL Queries that were executed during the API request execution
     * @type {Array<CommonResponseObjSQLQuery>}
     * @memberof CommonResponseObjDebug
     */
    a_objSQLQuery: Array<CommonResponseObjSQLQuery>;
}


