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
 * A webhook object
 * @export
 * @interface WebhookResponse
 */
export interface WebhookResponse {
    /**
     * The Webhook ID. This value is visible in the admin interface.
     * @type {number}
     * @memberof WebhookResponse
     */
    pkiWebhookID: number;
    /**
     * The Module generating the Event.
     * @type {string}
     * @memberof WebhookResponse
     */
    eWebhookModule: WebhookResponseEWebhookModuleEnum;
    /**
     * This Ezsign Event. This property will be set only if the Module is \"Ezsign\".
     * @type {string}
     * @memberof WebhookResponse
     */
    eWebhookEzsignevent?: WebhookResponseEWebhookEzsigneventEnum;
    /**
     * The customer code assigned to your account
     * @type {string}
     * @memberof WebhookResponse
     */
    pksCustomerCode: string;
    /**
     * The url being called
     * @type {string}
     * @memberof WebhookResponse
     */
    sWebhookUrl: string;
    /**
     * The email that will receive the webhook in case all attempts fail.
     * @type {string}
     * @memberof WebhookResponse
     */
    sWebhookEmailfailed: string;
    /**
     * This Management Event. This property will be set only if the Module is \"Management\".
     * @type {string}
     * @memberof WebhookResponse
     */
    eWebhookManagementevent?: WebhookResponseEWebhookManagementeventEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum WebhookResponseEWebhookModuleEnum {
    Ezsign = 'Ezsign',
    Management = 'Management'
}
/**
    * @export
    * @enum {string}
    */
export enum WebhookResponseEWebhookEzsigneventEnum {
    DocumentCompleted = 'DocumentCompleted',
    FolderCompleted = 'FolderCompleted'
}
/**
    * @export
    * @enum {string}
    */
export enum WebhookResponseEWebhookManagementeventEnum {
    UserCreated = 'UserCreated'
}



